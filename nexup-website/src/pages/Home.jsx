// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import "../page-styles/Home.css";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for hero text
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  /* =======================================  
     SCROLL REVEAL OBSERVER
  ======================================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container" ref={scrollRef}>
      
      {/* =====================================================
           1. CINEMATIC HERO SECTION
      ====================================================== */}
      <section className="hero-fullscreen-wrapper">
        <div className="video-background">
          <video
            src="https://res.cloudinary.com/dgzikn7nn/video/upload/Futuristic_City_AR_VR_Fly_Through_wxzn65.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="bg-video"
          />
          <div className="video-overlay" />
          <div className="video-vignette" />
        </div>

        <motion.div 
          className="hero-content-layer"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <div className="hero-badge">v2.0 // Spatial Era</div>
          <h1 className="home-title">
            Reality, <br />
            <span className="gradient-text">Redefined.</span>
          </h1>

          <p className="home-subtitle">
            The unified operating system for AR, VR, and intelligent environments. 
            Build, explore, and live in the digital future.
          </p>

          <div className="home-buttons">
            <Link to="/ecosystem" className="primary-btn">
              Enter Ecosystem
            </Link>
            <Link to="/about/vision" className="secondary-btn">
              Our Vision
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
           2. THE MANIFESTO (Big Type)
      ====================================================== */}
      <div className="content-flow">
        
        <section className="section manifesto-section">
          <h2 className="manifesto-text reveal">
            We are building a world where <span className="highlight">intelligence</span> and <span className="highlight">immersion</span> merge.
          </h2>
          <p className="manifesto-sub reveal">
            No longer just screens. NexUP enables a fluid interaction between physical 
            and virtual environments—without friction, complexity, or boundaries.
          </p>
        </section>

        {/* =====================================================
             3. ECOSYSTEM BENTO GRID
        ====================================================== */}
        <section className="section bento-section">
          <div className="section-header reveal">
            <h3 className="small-label">The Platform</h3>
            <h2>The NeX UP Ecosystem</h2>
          </div>

          <div className="bento-grid">
            
            {/* ITEM 1: NEXWORLD (Large) */}
            <Link to="/ecosystem/nexworld" className="bento-card card-large reveal">
              <div className="card-bg world-bg" />
              <div className="card-content">
                <h3>NexWorld</h3>
                <p>The immersive engine powering digital cities and shared 3D realities.</p>
                <span className="card-arrow">Explore &rarr;</span>
              </div>
            </Link>

            {/* ITEM 2: NEXNODES */}
            <Link to="/ecosystem/nexnodes" className="bento-card card-tall reveal">
              <div className="card-content">
                <h3>NexNodes</h3>
                <p>Decentralized intelligence network synchronizing the spatial web.</p>
              </div>
              <div className="tech-lines" />
            </Link>

            {/* ITEM 3: NEXENGINE */}
            <Link to="/ecosystem/nexengine" className="bento-card card-wide reveal">
              <div className="card-content">
                <h3>NexEngine</h3>
                <p>Real-time physics and AI computation layer.</p>
              </div>
            </Link>

            {/* ITEM 4: NEXHOUSING */}
            <Link to="/ecosystem/nexhousing" className="bento-card reveal">
              <div className="card-content">
                <h3>NexHousing</h3>
                <p>AR-powered living spaces.</p>
              </div>
            </Link>

            {/* ITEM 5: SEARCH */}
            <Link to="/ecosystem/search" className="bento-card reveal">
              <div className="card-content">
                <h3>Search</h3>
                <p>Query the physical world.</p>
              </div>
            </Link>

          </div>
        </section>

        {/* =====================================================
             4. FUTURE STATEMENT
        ====================================================== */}
        <section className="section future-section reveal">
          <div className="future-box">
            <h2>The Future is Adaptive.</h2>
            <p>
              Digital reality is no longer static. It learns, reacts, and evolves with you. 
              Powered by real-time data and neural-AI assistants.
            </p>
            <Link to="/about/company" className="text-link">
              Read our full roadmap &rarr;
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}