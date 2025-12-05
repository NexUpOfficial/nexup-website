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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

/* --- MOCK DATA --- */
const ENGINE_STATS = [
  { label: "Physics Thread", value: "0.4ms" },
  { label: "Render Time", value: "8ms (120fps)" },
  { label: "AI Agents", value: "Active" },
  { label: "Spatial Map", value: "Synced" },
];

export default function NexEngine() {
  const navigate = useNavigate();

  return (
    <div className="nexengine-page">
      
      {/* ================= HERO SECTION (Engine Dashboard) ================= */}
      <section className="nexengine-hero-section">
        <div className="nexengine-grid-bg" />
        <div className="nexengine-glow" />
        
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

          {/* Engine Status Strip */}
          <div className="engine-status-strip">
            {ENGINE_STATS.map((stat, i) => (
              <div key={i} className="stat-block">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-val">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="nexengine-wrapper">
        
        {/* ================= INTRO ================= */}
        <section className="nexengine-section intro-section">
          <motion.div 
            className="intro-text-block glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            {/* Wide Card */}
            <motion.div className="bento-card card-wide" variants={fadeInUp}>
              <div className="card-header">
                <FiZap className="card-icon" />
                <span className="card-label">MOD_01</span>
              </div>
              <h3>Spatial Intelligence Core</h3>
              <p>Real-time depth estimation, surface reconstruction, and semantic understanding of physical environments.</p>
            </motion.div>

            {/* Tall Card */}
            <motion.div className="bento-card card-tall" variants={fadeInUp}>
              <div className="card-header"><FiActivity className="card-icon" /></div>
              <h3>Adaptive Physics</h3>
              <p>Simulates mass, friction, and collision for millions of interactive objects concurrently.</p>
            </motion.div>

            {/* Standard Cards */}
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><FiBox className="card-icon" /></div>
              <h3>Volumetric Rendering</h3>
              <p>High-fidelity light field rendering for holographic displays.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><FiSettings className="card-icon" /></div>
              <h3>Neural Optimization</h3>
              <p>AI-driven LOD (Level of Detail) scaling based on gaze and attention.</p>
            </motion.div>
          </motion.div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= ARCHITECTURE STACK ================= */}
        <NexEngineSection title="Engine Stack">
          <div className="engine-stack">
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
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= CODE / DEVELOPER EXPERIENCE ================= */}
        <NexEngineSection title="Developer Experience">
          <div className="dev-split">
            <div className="dev-text">
              <p className="nexengine-text">
                Build faster with the NexEngine SDK. Access low-level primitives 
                or high-level prefabs.
              </p>
              <ul className="tech-list">
                <li><FiTerminal /> <span>Direct C++ / Rust Bindings</span></li>
                <li><FiCode /> <span>Visual Scripting for Designers</span></li>
                <li><FiBox /> <span>Hot-reload Asset Pipeline</span></li>
              </ul>
            </div>
            <div className="code-window glass-panel">
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
            </div>
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= PERFORMANCE METRICS ================= */}
        <NexEngineSection title="Performance Targets">
          <div className="metrics-grid">
            <MetricCard value="< 8ms" label="Motion-to-Photon Latency" />
            <MetricCard value="1M+" label="Active Entities / Scene" />
            <MetricCard value="120Hz" label="Target Refresh Rate" />
            <MetricCard value="8K" label="Texture Resolution Support" />
          </div>
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
  return <div className="break-line" />;
}

function NexEngineSection({ title, children }) {
  return (
    <section className="nexengine-section">
      <div className="nexengine-section-inner">
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function StackLayer({ level, title, desc }) {
  return (
    <motion.div 
      className="stack-layer"
      whileHover={{ scale: 1.01, borderLeftColor: "#b8a9ff" }}
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
    <div className="metric-card glass-panel-sm">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}