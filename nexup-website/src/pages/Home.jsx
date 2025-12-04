// src/pages/Home.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../page-styles/Home.css";
import Footer from "../components/Footer/Footer";

export default function Home() {
  /* =======================================  
      SCROLL REVEAL SYSTEM  
      (Uses heavy transition defined in Home.css)
  ======================================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add delay based on element index for staggered effect
          const index = Array.from(elements).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 } // Reduced threshold for earlier trigger
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="home-container">
      
      {/* =====================================================
           HERO SECTION WITH BACKGROUND VIDEO
      ====================================================== */}
      <div className="hero-fullscreen-wrapper">
        
        {/* 1. BACKGROUND VIDEO */}
        <div className="video-background">
          <video
            src="https://res.cloudinary.com/dgzikn7nn/video/upload/Futuristic_City_AR_VR_Fly_Through_wxzn65.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="bg-video"
          />
          {/* Dark overlay to make text readable */}
          <div className="video-overlay"></div>
        </div>

        {/* 2. HERO CONTENT (Text + Buttons) */}
        <div className="hero-content-layer">
          <motion.div
            className="home-hero"
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
      </div>

      {/* =====================================================
                      CONTENT SECTIONS (HEAVY REVEAL)
      ====================================================== */}
      <div className="content-flow">
        
        {/* SECTION 1 — NEXUP MISSION */}
        <section className="section mission reveal">
          <h2 className="section-title">NexUP Mission</h2>
          <p className="section-text">
            We are building a seamlessly connected digital reality — a place where
            information, intelligence and immersive environments merge into a
            single unified experience. Our mission is to empower the world with
            tools that make AR, VR and AI accessible, intuitive and life-changing.
          </p>
        </section>

        {/* SECTION 2 — AR / VR VISION */}
        <section className="section vision reveal">
          <h2 className="section-title">AR / VR Vision</h2>
          <p className="section-text">
            NexUP envisions a future where digital layers blend into the real
            world. From spatial computing to mixed-reality interfaces, our
            platform enables fluid interaction between physical and virtual
            environments — without friction, complexity or limitations.
          </p>
        </section>

        {/* SECTION 3 — FUTURE OF DIGITAL REALITY */}
        <section className="section future reveal">
          <h2 className="section-title">Future of Digital Reality</h2>
          <p className="section-text">
            Digital reality is no longer just visuals — it is intelligent,
            adaptive and context-aware. The future is personalized environments
            powered by real-time data, neural-AI assistants and immersive 3D
            spaces that evolve with you.
          </p>
        </section>

        {/* SECTION 4 — NEXUP PLATFORMS (Note: Cards also use the reveal class) */}
        <section className="section platforms">
          <h2 className="section-title reveal">NexUP Platforms</h2>

          <div className="platform-flex">
            {/* ROW 1 */}
            <div className="platform-row">
              <div className="platform-card reveal">
                <h3>NexWorld</h3>
                <p>
                  Our immersive world engine powering 3D environments, spatial AR,
                  virtual cities, simulation systems and interactive digital
                  ecosystems.
                </p>
              </div>

              <div className="platform-card reveal">
                <h3>NexNode</h3>
                <p>
                  A decentralized intelligence network connecting data, devices,
                  users and environments into one synchronized digital universe.
                </p>
              </div>

              <div className="platform-card reveal">
                <h3>NexSearch Engine</h3>
                <p>
                  An intelligent reality search engine enabling world queries,
                  spatial discovery, AR-based information layers and 3D contextual
                  lookup.
                </p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="platform-row">
              <div className="platform-card reveal">
                <h3>Housing Systems</h3>
                <p>
                  Advanced AR-powered housing, layout tools and smart-living
                  systems for the next generation of real-estate and spatial
                  design.
                </p>
              </div>

              <div className="platform-card reveal">
                <h3>World Engine Tools</h3>
                <p>
                  Creator tools enabling developers and designers to build, manage
                  and deploy entire virtual or mixed-reality worlds.
                </p>
              </div>
            </div>

            <Link to="/ecosystem" className="explore-btn reveal">
              Explore Platforms <span className="arrow">›</span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}