// src/pages/Ecosystem/NexSearch.jsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexSearch.css";
import Footer from "../../components/Footer/Footer";

/* --- ANIMATION VARIANTS --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function NexSearch() {
  const navigate = useNavigate();

  // ⭐ 5. Parallax Logic
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "40%"]);

  return (
    <div className="nexsearch-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="nexsearch-hero-section">
        
        {/* VIDEO BACKGROUND */}
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765029785/NexSearch_AI_Cinematic_Showcase_fl7dwk.mp4" type="video/mp4" />
          </video>
          {/* ⭐ 1. Live Scanning Grid Overlay */}
          <div className="hero-scan-grid" />
          <div className="hero-overlay" />
        </div>
        
        <motion.div
          className="nexsearch-hero-content"
          style={{ y: heroY }} // ⭐ 5. Parallax applied here
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-badge">Spatial Intelligence v1.0</div>
          <h1 className="nexsearch-hero-title">Search Reality.</h1>
          <p className="nexsearch-hero-sub">
            Query the world around you. From digital artifacts to physical objects, 
            NexSearch indexes the entire NeX UP ecosystem.
          </p>

          {/* Search Bar Visual */}
          <div className="hero-search-simulation">
            <span className="search-prompt">{">"}</span>
            <span className="search-placeholder">Find "quiet workspaces" in NexWorld...</span>
            <span className="search-cursor">_</span>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="nexsearch-wrapper">
        
        {/* ================= DEFINITION ================= */}
        <section className="nexsearch-section intro-section">
          <motion.div 
            className="intro-text-block glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">Beyond Keywords</h2>
            <p className="nexsearch-text large-text">
              NexSearch is not a web crawler. It is a spatial indexer. 
              It understands geometry, context, and intent. Whether you are looking for 
              a specific room in a virtual city or an AR note left on a physical wall, 
              NexSearch finds it.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE CAPABILITIES (Bento Grid) ================= */}
        <NexSearchSection title="Core Capabilities">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ⭐ 6. Spotlight Cards */}
            <SpotlightCard className="card-wide" label="01 // Spatial Query" title="Geometry Aware">
              Understands queries about locations, rooms, layouts, and proximity. "Show me coffee spots within 50 meters."
            </SpotlightCard>

            <SpotlightCard className="" label="02 // Vision" title="Object Recognition">
              Indexes 3D assets and physical objects identified by AR sensors.
            </SpotlightCard>

            <SpotlightCard className="" label="03 // Semantics" title="Contextual Intent">
              Understands abstract requests like "a place to focus" based on environment data.
            </SpotlightCard>

            <SpotlightCard className="" label="04 // Discovery" title="AR Layer Detection">
              Finds hidden digital overlays, notes, and holograms anchored in reality.
            </SpotlightCard>

            <SpotlightCard className="" label="05 // Knowledge" title="Deep Graph">
              Connects entities (people, places, things) into a navigable web of relations.
            </SpotlightCard>
          </motion.div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= HOW IT WORKS (Process Flow) ================= */}
        <NexSearchSection title="Query Pipeline">
          <motion.div 
            className="pipeline-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PipelineStep 
              num="01" 
              title="Input" 
              text="Voice, text, or gaze-based query initiation." 
            />
            <PipelineStep 
              num="02" 
              title="Parse" 
              text="NLP engine extracts intent and spatial context." 
            />
            <PipelineStep 
              num="03" 
              title="Scan" 
              text="NexNodes query local and cloud spatial indexes." 
            />
            <PipelineStep 
              num="04" 
              title="Render" 
              text="Results appear as AR overlays or navigation paths." 
            />
          </motion.div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= USE CASES ================= */}
        <NexSearchSection title="Applications">
          <motion.div 
            className="usecase-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <UseCaseRow 
              title="Navigation" 
              desc="Find specific rooms, exits, or assets inside complex digital twins." 
            />
            <UseCaseRow 
              title="Asset Management" 
              desc="Locate digital tools or files left in specific spatial coordinates." 
            />
            <UseCaseRow 
              title="Social Discovery" 
              desc="Find where your team is gathering within NexWorld environments." 
            />
            <UseCaseRow 
              title="Safety Checks" 
              desc="Identify hazardous zones or restricted areas in simulation." 
            />
          </motion.div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= FUTURE ROADMAP ================= */}
        <NexSearchSection title="Future Intelligence">
          <motion.div 
            className="roadmap-box glass-panel"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="roadmap-text">
              NexSearch is evolving into a predictive engine. Future versions will anticipate 
              your needs based on your trajectory, schedule, and past interactions, 
              surfacing relevant world-data before you even ask.
            </p>
            <div className="roadmap-tags">
              <span>Predictive caching</span>
              <span>Neural search</span>
              <span>Cross-reality indexing</span>
            </div>
          </motion.div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexsearch-final-section">
          <motion.div
            className="nexsearch-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Find anything, anywhere.
            </h2>
            <p className="final-text">
              NexSearch makes the invisible visible. Start exploring the indexed universe.
            </p>

            <div className="nexsearch-final-actions">
              <button className="white-btn" onClick={() => navigate("/ecosystem")}>
                Back to Ecosystem
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Request API Access
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BreakLine() {
  return (
    <motion.div 
      className="break-line" 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  );
}

function NexSearchSection({ title, children }) {
  return (
    <section className="nexsearch-section">
      <div className="nexsearch-section-inner">
        <motion.h2 
          className="gradient-title section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

// ⭐ 6. Spotlight Card Logic
function SpotlightCard({ className, label, title, children }) {
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - top}px`);
  };

  return (
    <motion.div 
      className={`bento-card ${className || ""}`}
      onMouseMove={handleMouseMove}
      variants={fadeInUp}
    >
      <div className="card-label">{label}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}

function PipelineStep({ num, title, text }) {
  return (
    <motion.div 
      className="pipeline-step glass-panel-sm"
      variants={fadeInUp}
    >
      <div className="step-number">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

function UseCaseRow({ title, desc }) {
  return (
    <motion.div 
      className="usecase-row"
      variants={fadeInUp}
      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)", transition: { duration: 0.2 } }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}