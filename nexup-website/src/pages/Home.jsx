// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import "../page-styles/Home.css";
import { useNavigate } from "react-router-dom";

/* ============================
   THREE.JS BACKGROUND
============================ */
function NexUpThreeBackground() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef(null);
  const animationIdRef = useRef(null);

  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(10, 20, 30);
    scene.add(dirLight);

    const ringGeometry = new THREE.TorusGeometry(14, 0.7, 32, 120);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(0x33d1ff),
      emissiveIntensity: 0.6,
      metalness: 0.4,
      roughness: 0.3,
    });

    const energyRing = new THREE.Mesh(ringGeometry, ringMaterial);
    energyRing.rotation.x = Math.PI / 3;
    energyRing.position.set(8, 2, -10);
    scene.add(energyRing);
    ringRef.current = energyRing;

    const particlesCount = 750;
    const pGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 140;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 60;
    }

    pGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pMaterial = new THREE.PointsMaterial({
      color: 0x050505,
      size: 1.5,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (ringRef.current) {
        ringRef.current.rotation.z = elapsedTime * 0.25;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0006;
        particlesRef.current.rotation.x += 0.0003;

        particlesRef.current.rotation.y +=
          (targetRotation.current.y - particlesRef.current.rotation.y) * 0.02;
        particlesRef.current.rotation.x +=
          (targetRotation.current.x - particlesRef.current.rotation.x) * 0.02;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const xNorm = (e.clientY / window.innerHeight - 0.5) * 0.5;
      const yNorm = (e.clientX / window.innerWidth - 0.5) * 0.7;
      targetRotation.current = { x: xNorm, y: yNorm };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (rendererRef.current) {
        mount.removeChild(renderer.domElement);
        renderer.dispose();
      }

      pGeometry.dispose();
      pMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="home-three-canvas" />;
}

/* ============================
   MAGNETIC BUTTON
============================ */
function MagneticButton({ className = "", children, onClick }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = btnRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    const moveX = Math.max(Math.min(relX * 0.2, 12), -12);
    const moveY = Math.max(Math.min(relY * 0.2, 12), -12);

    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      ref={btnRef}
      className={`${className} magnetic-btn`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/* ============================
   MAIN HOME COMPONENT
============================ */
function Home({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`home-root ${isOpen ? "home-root--sidebar-open" : ""}`}>
      <NexUpThreeBackground />
      <div className="home-overlay" />

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="home-hero">
          <div className="home-hero-glow" />

          <motion.div
            className="home-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title-main">
              NeX <span className="hero-symbol">≡</span> UP
            </h1>

            <p className="hero-subtitle">
              The future of spatial computing and immersive worlds.
            </p>

            <p className="hero-description">
              NexWorld, NexNodes, NexHousing Systems – together, they reimagine
              how we live, work, and connect inside digital spaces woven into
              reality.
            </p>

            <div className="hero-cta-row">
              <MagneticButton
                className="btn-primary"
                onClick={() => navigate("/Ecosystem")}
              >
                Explore Ecosystem
              </MagneticButton>

              <MagneticButton
                className="btn-ghost"
                onClick={() => navigate("/About")}
              >
                About Us
              </MagneticButton>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}

export default Home;
