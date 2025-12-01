// src/pages/Home.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RisingSmoke from "../animations/RisingSmoke";
import "../page-styles/Home.css";
import Footer from "../components/Footer/Footer";


export default function Home() {
  /* =======================================  
     SCROLL REVEAL SYSTEM  
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
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">

      {/* Smoke Layer */}
      <div className="home-smoke">
        <RisingSmoke />
      </div>

      {/* Cinematic Background Gradient */}
      <div className="cinematic-gradient"></div>

      {/* ======================
          HERO WRAPPER
         (Allows Free Moving)
      ======================= */}
      <div className="hero-wrapper">
        <motion.div
          className="home-hero reveal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="home-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            NexUP Platform
          </motion.h1>

          <motion.p
            className="home-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The next generation of AR, VR & intelligent digital reality.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to="/ecosystem" className="home-btn fill-btn">
              Explore Ecosystem <span className="arrow">›</span>
            </Link>

            <Link to="/about" className="home-btn outline-btn">
              About <span className="arrow">›</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
                     SECTION 1 — NEXUP MISSION
      ====================================================== */}
      <section className="section mission reveal">
        <h2 className="section-title">NexUP Mission</h2>
        <p className="section-text">
          We are building a seamlessly connected digital reality — a place where
          information, intelligence and immersive environments merge into a
          single unified experience. Our mission is to empower the world with
          tools that make AR, VR and AI accessible, intuitive and life-changing.
        </p>
      </section>

      {/* =====================================================
                     SECTION 2 — AR / VR VISION
      ====================================================== */}
      <section className="section vision reveal">
        <h2 className="section-title">AR / VR Vision</h2>
        <p className="section-text">
          NexUP envisions a future where digital layers blend into the real
          world. From spatial computing to mixed-reality interfaces, our
          platform enables fluid interaction between physical and virtual
          environments — without friction, complexity or limitations.
        </p>
      </section>

      {/* =====================================================
               SECTION 3 — FUTURE OF DIGITAL REALITY
      ====================================================== */}
      <section className="section future reveal">
        <h2 className="section-title">Future of Digital Reality</h2>
        <p className="section-text">
          Digital reality is no longer just visuals — it is intelligent,
          adaptive and context-aware. The future is personalized environments
          powered by real-time data, neural-AI assistants and immersive 3D
          spaces that evolve with you.
        </p>
      </section>

      {/* =====================================================
                     SECTION 4 — NEXUP PLATFORMS
      ====================================================== */}
     <section className="section platforms reveal">
  <h2 className="section-title">NexUP Platforms</h2>

  <div className="platform-flex">

    {/* ROW 1 — 3 Products */}
    <div className="platform-row">
      <div className="platform-card">
        <h3>NexWorld</h3>
        <p>Our immersive world engine powering 3D environments, spatial AR,
        virtual cities, simulation systems and interactive digital ecosystems.</p>
      </div>

      <div className="platform-card">
        <h3>NexNode</h3>
        <p>A decentralized intelligence network connecting data, devices,
        users and environments into one synchronized digital universe.</p>
      </div>

      <div className="platform-card">
        <h3>NexSearch Engine</h3>
        <p>An intelligent reality search engine enabling world queries, spatial
        discovery, AR-based information layers, and 3D contextual lookup.</p>
      </div>
    </div>

    {/* ROW 2 — 2 Products */}
    <div className="platform-row">
      <div className="platform-card">
        <h3>Housing Systems</h3>
        <p>Advanced AR-powered housing, layout tools and smart-living systems
        for the next generation of real-estate and spatial design.</p>
      </div>

      <div className="platform-card">
        <h3>World Engine Tools</h3>
        <p>Creator tools enabling developers and designers to build, manage 
        and deploy entire virtual or mixed-reality worlds.</p>
      </div>
    </div>
            <Link to="/ecosystem" className="explore-btn mix-btn">
  Explore Platforms <span className="arrow">›</span>
</Link>

  </div>
</section>
<Footer />


    </div>
  );
}
