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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function NexHousing() {
  const navigate = useNavigate();

  return (
    <div className="nexhousing-page">
      
      {/* ================= HERO SECTION (Blueprint Theme) ================= */}
      <section className="nexhousing-hero-section">
        <div className="blueprint-grid-bg" />
        <div className="nexhousing-glow" />
        
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            {/* Wide Card: Mapping */}
            <motion.div className="bento-card card-wide" variants={fadeInUp}>
              <div className="card-header">
                <FiMaximize className="card-icon" />
                <span className="card-label">01 // Scan</span>
              </div>
              <h3>LiDAR Room Mapping</h3>
              <p>Instantly reconstruct your physical room into a 3D editable canvas using your device's sensors.</p>
            </motion.div>

            {/* Standard Cards */}
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><FiBox className="card-icon" /></div>
              <h3>Asset Projection</h3>
              <p>Place 1:1 scale virtual furniture with collision detection.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><FiSun className="card-icon" /></div>
              <h3>Light Simulation</h3>
              <p>Ray-traced lighting previews based on time of day.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><FiLayout className="card-icon" /></div>
              <h3>AI Layouts</h3>
              <p>Generative suggestions for flow and ergonomics.</p>
            </motion.div>
          </motion.div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= WORKFLOW VISUALIZATION ================= */}
        <NexHousingSection title="Design Workflow">
          
          <div className="workflow-steps">
            <StepNode 
              num="01" 
              title="Capture" 
              desc="Scan boundaries, windows, and existing furniture." 
            />
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
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= SMART INTEGRATION ================= */}
        <NexHousingSection title="Ambient Intelligence">
          <div className="smart-split">
            <div className="smart-content">
              <p className="nexhousing-text">
                Your home shouldn't just be smart; it should be aware. NexHousing connects 
                spatial layouts with IoT systems.
              </p>
              <ul className="tech-list">
                <li><FiLayers /> <span>Proximity-based lighting automation</span></li>
                <li><FiGrid /> <span>Spatial audio zones linked to room geometry</span></li>
                <li><FiBox /> <span>Asset tracking for physical inventory</span></li>
              </ul>
            </div>
            <div className="smart-visual glass-panel">
              

[Image of smart home IoT network architecture]

              <div className="visual-placeholder">
                <span>IoT Mesh Visualization</span>
              </div>
            </div>
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= CREATOR MODE ================= */}
        <NexHousingSection title="Architect Studio">
          <div className="architecture-grid">
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
          </div>
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
  return <div className="break-line" />;
}

function NexHousingSection({ title, children }) {
  return (
    <section className="nexhousing-section">
      <div className="nexhousing-section-inner">
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function StepNode({ num, title, desc }) {
  return (
    <div className="step-node glass-panel-sm">
      <span className="step-num">{num}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function SimCard({ title, meta, desc }) {
  return (
    <motion.div 
      className="sim-card glass-panel"
      whileHover={{ y: -5, borderColor: "#b8a9ff" }}
    >
      <span className="sim-meta">{meta}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}