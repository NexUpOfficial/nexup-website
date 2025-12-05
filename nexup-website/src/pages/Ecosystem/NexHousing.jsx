// src/pages/Ecosystem/NexHousing.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiLayout, FiBox, FiLayers, FiSun, 
  FiMaximize, FiHome, FiGrid 
} from "react-icons/fi";
import "../../page-styles/Ecosystem/NexHousing.css";
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

export default function NexHousing() {
  const navigate = useNavigate();

  return (
    <div className="nexhousing-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="nexhousing-hero-section">
        
        {/* VIDEO BACKGROUND */}
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexHousing_Futuristic_Smart_Living_District_pwwu48.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>
        
        <motion.div
          className="nexhousing-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-badge"><FiHome /> Spatial Architecture v1.0</div>
          <h1 className="nexhousing-hero-title">
            Your World. <br /> <span className="outline-text">Redesigned.</span>
          </h1>
          <p className="nexhousing-hero-sub">
            The bridge between physical shelter and digital intelligence. 
            Scan, simulate, and optimize your living space in real-time.
          </p>
        </motion.div>
      </section>

      <div className="nexhousing-wrapper">
        
        {/* ================= INTRO ================= */}
        <section className="nexhousing-section intro-section">
          <motion.div 
            className="intro-text-block glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">Spatial Living System</h2>
            <p className="nexhousing-text large-text">
              NexHousing is not just a design tool; it is an operating system for your home. 
              It combines AR spatial mapping with NexEngine physics to create a digital twin 
              of your environment—allowing you to test furniture, lighting, and automation 
              before making physical changes.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE MODULES (Bento Grid) ================= */}
        <NexHousingSection title="Structural Modules">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ⭐ 2. Spotlight Cards */}
            <SpotlightCard className="card-wide" label="01 // Scan" icon={<FiMaximize />}>
              <h3>LiDAR Room Mapping</h3>
              <p>Instantly reconstruct your physical room into a 3D editable canvas using your device's sensors.</p>
            </SpotlightCard>

            <SpotlightCard className="" icon={<FiBox />}>
              <h3>Asset Projection</h3>
              <p>Place 1:1 scale virtual furniture with collision detection.</p>
            </SpotlightCard>

            <SpotlightCard className="" icon={<FiSun />}>
              <h3>Light Simulation</h3>
              <p>Ray-traced lighting previews based on time of day.</p>
            </SpotlightCard>

            <SpotlightCard className="" icon={<FiLayout />}>
              <h3>AI Layouts</h3>
              <p>Generative suggestions for flow and ergonomics.</p>
            </SpotlightCard>
          </motion.div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= WORKFLOW VISUALIZATION ================= */}
        <NexHousingSection title="Design Workflow">
          <motion.div 
            className="workflow-steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <StepNode 
              num="01" 
              title="Capture" 
              desc="Scan boundaries, windows, and existing furniture." 
            />
            {/* ⭐ 3. Animated Connector */}
            <div className="step-connector" />
            <StepNode 
              num="02" 
              title="Process" 
              desc="NexEngine converts point clouds to mesh geometry." 
            />
            <div className="step-connector" />
            <StepNode 
              num="03" 
              title="Edit" 
              desc="Modify the digital twin. Add/remove walls or decor." 
            />
            <div className="step-connector" />
            <StepNode 
              num="04" 
              title="Deploy" 
              desc="Sync changes to smart devices via NexNode." 
            />
          </motion.div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= SMART INTEGRATION ================= */}
        <NexHousingSection title="Ambient Intelligence">
          <motion.div 
            className="smart-split"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="smart-content" variants={fadeInUp}>
              <p className="nexhousing-text">
                Your home shouldn't just be smart; it should be aware. NexHousing connects 
                spatial layouts with IoT systems.
              </p>
              <ul className="tech-list">
                <li><FiLayers /> <span>Proximity-based lighting automation</span></li>
                <li><FiGrid /> <span>Spatial audio zones linked to room geometry</span></li>
                <li><FiBox /> <span>Asset tracking for physical inventory</span></li>
              </ul>
            </motion.div>
            
            {/* ⭐ 4. Animated Grid Visual */}
            <motion.div className="smart-visual glass-panel" variants={fadeInUp}>
              <div className="visual-placeholder">
                <span>IoT Mesh Visualization</span>
              </div>
            </motion.div>
          </motion.div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= CREATOR MODE ================= */}
        <NexHousingSection title="Architect Studio">
          <motion.div 
            className="architecture-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SimCard 
              title="Structure" 
              meta="Physics Layer"
              desc="Model load-bearing walls and material constraints." 
            />
            <SimCard 
              title="Textures" 
              meta="Render Layer"
              desc="Apply photorealistic finishes from the NexAsset library." 
            />
            <SimCard 
              title="Circulation" 
              meta="Data Layer"
              desc="Heatmap analysis of foot traffic and usage flow." 
            />
          </motion.div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexhousing-final-section">
          <motion.div
            className="nexhousing-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Live in the future.
            </h2>
            <p className="final-text">
              Prototype, visualize, and refine your environment before a single 
              physical object moves.
            </p>

            <div className="nexhousing-final-actions">
              <button className="white-btn" onClick={() => navigate("/ecosystem")}>
                Back to Ecosystem
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Start Designing
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

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

function NexHousingSection({ title, children }) {
  return (
    <section className="nexhousing-section">
      <div className="nexhousing-section-inner">
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

// ⭐ 2. Spotlight Card Logic
function SpotlightCard({ className, label, icon, children }) {
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
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        {label && <span className="card-label">{label}</span>}
      </div>
      {children}
    </motion.div>
  );
}

function StepNode({ num, title, desc }) {
  return (
    <motion.div 
      className="step-node glass-panel-sm"
      variants={fadeInUp} 
    >
      <span className="step-num">{num}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </motion.div>
  );
}

function SimCard({ title, meta, desc }) {
  return (
    <motion.div 
      className="sim-card glass-panel"
      variants={fadeInUp}
      whileHover={{ y: -5, borderColor: "#b8a9ff", transition: { duration: 0.2 } }}
    >
      <span className="sim-meta">{meta}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}