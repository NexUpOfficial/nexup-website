// src/pages/Ecosystem/NexEngine.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiCpu, FiActivity, FiLayers, FiCode, 
  FiSettings, FiZap, FiBox, FiTerminal 
} from "react-icons/fi";
import "../../page-styles/Ecosystem/NexEngine.css";
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

export default function NexEngine() {
  const navigate = useNavigate();

  return (
    <div className="nexengine-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="nexengine-hero-section">
        
        {/* VIDEO BACKGROUND */}
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765123906/NexEngine_Powering_the_NexWorld_bnc8hm.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>
        
        <motion.div
          className="nexengine-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-badge"><FiCpu /> Runtime Core v4.2</div>
          <h1 className="nexengine-hero-title">
            The Reality Engine.
          </h1>
          <p className="nexengine-hero-sub">
            The intelligent kernel powering spatial computing, physics, 
            and adaptive AI across the NeX UP ecosystem.
          </p>
        </motion.div>
      </section>

      <div className="nexengine-wrapper">
        
        {/* ================= INTRO ================= */}
        <section className="nexengine-section intro-section">
          <motion.div 
            className="intro-text-block glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">Computation Layer</h2>
            <p className="nexengine-text large-text">
              NexEngine is the brain behind the pixels. It processes spatial data, 
              orchestrates world behavior, and optimizes AR/VR rendering in real-time. 
              It transforms raw sensor input into living, breathing digital reality.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CAPABILITIES (Bento Grid) ================= */}
        <NexEngineSection title="System Modules">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ⭐ 3. Spotlight Cards */}
            <SpotlightCard className="card-wide" icon={<FiZap />} id="MOD_01" title="Spatial Intelligence Core">
              Real-time depth estimation, surface reconstruction, and semantic understanding of physical environments.
            </SpotlightCard>

            <SpotlightCard className="card-tall" icon={<FiActivity />} title="Adaptive Physics">
              Simulates mass, friction, and collision for millions of interactive objects concurrently.
            </SpotlightCard>

            <SpotlightCard className="" icon={<FiBox />} title="Volumetric Rendering">
              High-fidelity light field rendering for holographic displays.
            </SpotlightCard>

            <SpotlightCard className="" icon={<FiSettings />} title="Neural Optimization">
              AI-driven LOD (Level of Detail) scaling based on gaze and attention.
            </SpotlightCard>
          </motion.div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= ARCHITECTURE STACK ================= */}
        <NexEngineSection title="Engine Stack">
          <motion.div 
            className="engine-stack"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <StackLayer 
              level="L4" 
              title="Interaction Layer" 
              desc="Gestures, Gaze, Voice, Neural Input" 
            />
            <StackLayer 
              level="L3" 
              title="Simulation Layer" 
              desc="Physics, AI Agents, Weather, Time" 
            />
            <StackLayer 
              level="L2" 
              title="Spatial Layer" 
              desc="Mapping, Anchoring, Persistence" 
            />
            <StackLayer 
              level="L1" 
              title="Kernel" 
              desc="Thread Management, Memory, Hardware Abstraction" 
            />
          </motion.div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= CODE / DEVELOPER EXPERIENCE ================= */}
        <NexEngineSection title="Developer Experience">
          <motion.div 
            className="dev-split"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="dev-text" variants={fadeInUp}>
              <p className="nexengine-text">
                Build faster with the NexEngine SDK. Access low-level primitives 
                or high-level prefabs.
              </p>
              <ul className="tech-list">
                <li><FiTerminal /> <span>Direct C++ / Rust Bindings</span></li>
                <li><FiCode /> <span>Visual Scripting for Designers</span></li>
                <li><FiBox /> <span>Hot-reload Asset Pipeline</span></li>
              </ul>
            </motion.div>
            
            <motion.div className="code-window glass-panel" variants={fadeInUp}>
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="filename">world_init.rs</span>
              </div>
              <pre className="code-content">
{`use nex_engine::prelude::*;

fn main() {
    let mut world = World::new();
    
    // Initialize Spatial Physics
    world.add_plugin(PhysicsPlugin::default());
    
    // Spawn Intelligent Agent
    world.spawn((
        SpatialBundle::default(),
        AIBehavior::Autonomous,
        RigidBody::Dynamic,
    ));

    world.run();
}`}
              </pre>
            </motion.div>
          </motion.div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= PERFORMANCE METRICS ================= */}
        <NexEngineSection title="Performance Targets">
          <motion.div 
            className="metrics-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <MetricCard value="< 8ms" label="Motion-to-Photon Latency" />
            <MetricCard value="1M+" label="Active Entities / Scene" />
            <MetricCard value="120Hz" label="Target Refresh Rate" />
            <MetricCard value="8K" label="Texture Resolution Support" />
          </motion.div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexengine-final-section">
          <motion.div
            className="nexengine-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Power your imagination.
            </h2>
            <p className="final-text">
              Start building high-fidelity spatial experiences with the engine 
              designed for the next era of computing.
            </p>

            <div className="nexengine-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Get SDK Access
              </button>
              <button className="ghost-btn" onClick={() => navigate("/support/help")}>
                Read Docs
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

function NexEngineSection({ title, children }) {
  return (
    <section className="nexengine-section">
      <div className="nexengine-section-inner">
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

// ⭐ 3. Spotlight Card Component
function SpotlightCard({ className, icon, id, title, children }) {
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
        {icon}
        {id && <span className="card-label">{id}</span>}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}

function StackLayer({ level, title, desc }) {
  return (
    <motion.div 
      className="stack-layer"
      variants={fadeInUp}
      whileHover={{ scale: 1.01, borderLeftColor: "#b8a9ff", transition: { duration: 0.2 } }}
    >
      <div className="stack-id">{level}</div>
      <div className="stack-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="stack-lines" />
    </motion.div>
  );
}

function MetricCard({ value, label }) {
  return (
    <motion.div 
      className="metric-card glass-panel-sm"
      variants={fadeInUp}
    >
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </motion.div>
  );
}