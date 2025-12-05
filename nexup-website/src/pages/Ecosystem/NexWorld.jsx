// src/pages/Ecosystem/NexWorld.jsx

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiVolume2, FiVolumeX } from "react-icons/fi"; // Icons for Sound Toggle
import "../../page-styles/Ecosystem/NexWorld.css";
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
    transition: { staggerChildren: 0.1 }
  }
};

export default function NexWorld() {
  const navigate = useNavigate();
  
  // ⭐ 2. Parallax Fade Logic
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <div className="nexworld-page">
      
      {/* ================= HERO SECTION (Cinematic Video) ================= */}
      <section className="nexworld-hero-section">
        <motion.div 
          className="nexworld-video-background"
          style={{ opacity: heroOpacity, scale: heroScale }} // Parallax effect
        >
          <video
            src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexWorld_Futuristic_Drone_Flythrough_f4pwmj.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-element"
          />
          <div className="video-overlay" />
        </motion.div>

        {/* ⭐ 8. Ambient Sound Toggle UI (Visual Only) */}
        <div className="sound-toggle-ui">
          <FiVolumeX /> <span>Sound Off</span>
        </div>

        <div className="nexworld-hero-content">
          <motion.div
            className="nexworld-hero-text-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="nexworld-hero-title">NexWorld</h1>
            <p className="nexworld-hero-sub">
              The engine of digital reality. A unified spatial universe where 
              intelligence, physics, and imagination converge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="nexworld-wrapper">
        
        {/* ================= INTRO ================= */}
        <section className="nexworld-section intro-section">
          <motion.div 
            className="intro-text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">The World Engine</h2>
            <p className="nexworld-text large-text">
              NexWorld is not just a platform; it is a living digital layer. 
              It connects cities, rooms, and intelligent agents into one cohesive 
              universe accessible via AR, VR, and standard displays.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE SYSTEMS (Bento Grid) ================= */}
        <NexWorldSection title="Core Architecture">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Large Card with ⭐ 4. Mini Video Background */}
            <motion.div className="bento-card large-card" variants={fadeInUp}>
              <div className="bento-video-bg">
                <video 
                  autoPlay muted loop playsInline 
                  src="https://cdn.pixabay.com/video/2020/06/18/42456-432230303_large.mp4" // Abstract Tech Texture
                />
                <div className="bento-video-overlay" />
              </div>
              <div className="card-content-layer">
                <div className="card-label">01 // Engine</div>
                <h3>World Generation Engine</h3>
                <p>Procedurally instantiates 3D worlds and mixed-reality spaces in real-time, adapting to device capabilities.</p>
              </div>
            </motion.div>

            {/* Medium Cards */}
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">02 // Render</div>
              <h3>Spatial Pipeline</h3>
              <p>Optimizes visuals, lighting, and physics for low-latency AR/VR pass-through.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">03 // Brain</div>
              <h3>AI Behavior</h3>
              <p>Drives environment logic, NPCs, and dynamic responses to user presence.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">04 // Sync</div>
              <h3>Multi-User Reality</h3>
              <p>Keeps thousands of users in sync within the same persistent coordinate system.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">05 // Physics</div>
              <h3>Dynamic Objects</h3>
              <p>Manages interactive states, mass, and collision across shared sessions.</p>
            </motion.div>
          </motion.div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= WORLD TYPES (Minimalist List) ================= */}
        <NexWorldSection title="Environment Types">
          <div className="world-types-list">
            <WorldTypeRow 
              title="Mixed Reality Layers" 
              desc="Digital structures anchored to physical rooms and venues." 
            />
            <WorldTypeRow 
              title="Virtual Cities" 
              desc="Large-scale, persistent environments for exploration and social presence." 
            />
            <WorldTypeRow 
              title="Immersive Pods" 
              desc="High-fidelity, isolated spaces for focused meetings or deep work." 
            />
            <WorldTypeRow 
              title="Simulation Labs" 
              desc="Sandboxes with custom physics for prototyping and research." 
            />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= PIPELINE (Numeric Steps) ================= */}
        <NexWorldSection title="Creation Pipeline">
          <div className="pipeline-container">
            <PipelineStep num="01" title="Define" text="Set scope, scale, and rules." />
            <PipelineStep num="02" title="Shape" text="Sculpt terrain and architecture." />
            <PipelineStep num="03" title="Logic" text="Inject AI behaviors and scripts." />
            <PipelineStep num="04" title="Deploy" text="Publish to the live NexWorld grid." />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= ECOSYSTEM CONNECTION ================= */}
        <section className="nexworld-section">
          <motion.div 
            className="connection-box glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gradient-title">The Unified Canvas</h2>
            <p className="nexworld-text centered-text">
              NexWorld is where the ecosystem comes alive. NexEngine powers the visuals, 
              NexNodes handle the data, and NexHousing provides the shelter. 
              It is the convergence point for all NeX UP technologies.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexworld-final-section">
          <motion.div
            className="nexworld-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Start building your reality.
            </h2>
            <p className="final-text">
              From a single room to an entire digital city, NexWorld gives you
              the engine to design living, intelligent environments.
            </p>

            <div className="nexworld-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Request Access
              </button>
              <button className="ghost-btn" onClick={() => navigate("/ecosystem")}>
                View Ecosystem
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
  return <div className="break-line" />;
}

// ⭐ 7. Micro Scroll Animation for Section Titles
function NexWorldSection({ title, children }) {
  return (
    <section className="nexworld-section">
      <div className="nexworld-section-inner">
        <motion.h2 
          className="gradient-title section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

function WorldTypeRow({ title, desc }) {
  return (
    <motion.div 
      className="world-type-row"
      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function PipelineStep({ num, title, text }) {
  return (
    <div className="pipeline-step">
      <div className="step-number">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}