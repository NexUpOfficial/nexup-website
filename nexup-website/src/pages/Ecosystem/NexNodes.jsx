// src/pages/Ecosystem/NexNodes.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexNodes.css";
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

// ⭐ 2. Floating Node Component
const FloatingNodes = () => {
  const nodes = Array.from({ length: 15 });
  return (
    <div className="hero-floating-nodes">
      {nodes.map((_, i) => (
        <motion.div
          key={i}
          className="floating-node"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0.3,
            scale: 0.5
          }}
          animate={{
            y: [null, Math.random() * -50],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default function NexNodes() {
  const navigate = useNavigate();

  return (
    <div className="nexnodes-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="nexnodes-hero-section">
        
        {/* VIDEO BACKGROUND */}
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1764942791/NexNodes_Energy_Network_Animation_ufdjqs.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          {/* ⭐ 2. Floating Nodes Overlay */}
          <FloatingNodes />
        </div>
        
        <motion.div
          className="nexnodes-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-badge">Distributed Intelligence Layer</div>
          <h1 className="nexnodes-hero-title">The Nervous System.</h1>
          <p className="nexnodes-hero-sub">
            NexNodes connect devices, environments, and services into a single 
            synchronized reality. Real-time computation at the edge.
          </p>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="nexnodes-wrapper">
        
        {/* ================= DEFINITION ================= */}
        <section className="nexnodes-section intro-section">
          <motion.div 
            className="intro-text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">Synchronization Engine</h2>
            <p className="nexnodes-text large-text">
              NexNodes are the invisible compute points that route intelligence. 
              They ensure that when a user moves an object in an AR room in Tokyo, 
              a user in New York sees it move instantly.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE CAPABILITIES (Bento Grid) ================= */}
        <NexNodesSection title="System Capabilities">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ⭐ 4. Spotlight Bento Cards */}
            <SpotlightCard className="card-wide" id="SYS_01" tag="Core" title="Real-time Synchronization">
              State-locking technology that keeps world physics, user positions, and environment updates aligned across thousands of concurrent sessions.
            </SpotlightCard>

            <SpotlightCard className="card-tall" id="SYS_02" title="Decentralized Intelligence">
              Distributes AI workloads between local devices (Edge) and cloud clusters to maximize performance and privacy.
            </SpotlightCard>

            <SpotlightCard className="" id="SYS_03" title="Edge Spatial Processing">
              Lidar and camera inputs are processed locally for near-zero latency interaction.
            </SpotlightCard>

            <SpotlightCard className="" id="SYS_04" title="Secure Mesh Linking">
              End-to-end encrypted tunnels connect headsets, phones, and displays.
            </SpotlightCard>
          </motion.div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= ARCHITECTURE STACK ================= */}
        <NexNodesSection title="Network Architecture">
          <motion.div 
            className="architecture-stack"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <StackLayer 
              level="L1" 
              name="Signal & Input" 
              desc="Ingests sensor data, gestures, and voice commands." 
            />
            <StackLayer 
              level="L2" 
              name="Processing Core" 
              desc="Runs physics engines, AI logic, and spatial reasoning." 
            />
            <StackLayer 
              level="L3" 
              name="Sync Protocol" 
              desc="Broadcasting state changes to the global NexWorld grid." 
            />
            <StackLayer 
              level="L4" 
              name="Security Mesh" 
              desc="Identity verification and data integrity enforcement." 
            />
          </motion.div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= MODES OF OPERATION ================= */}
        <NexNodesSection title="Node Configurations">
          <motion.div 
            className="modes-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ModeRow 
              title="Local Node" 
              type="Client-Side" 
              desc="Runs on user hardware. Ultra-low latency. Privacy focused." 
            />
            <ModeRow 
              title="Cloud Node" 
              type="Server-Side" 
              desc="Heavy computation for massive worlds and complex AI agents." 
            />
            <ModeRow 
              title="Hybrid Node" 
              type="Adaptive" 
              desc="Dynamically offloads tasks based on bandwidth and battery life." 
            />
          </motion.div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexnodes-final-section">
          <motion.div
            className="nexnodes-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Deploy your intelligence.
            </h2>
            <p className="final-text">
              Design networks of devices, experiences, and worlds that move and
              think together.
            </p>

            <div className="nexnodes-final-actions">
              <button className="white-btn" onClick={() => navigate("/ecosystem")}>
                Back to Ecosystem
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Developer Access
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

function NexNodesSection({ title, children }) {
  return (
    <section className="nexnodes-section">
      <div className="nexnodes-section-inner">
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

// ⭐ 4. Spotlight Card Component
function SpotlightCard({ className, id, tag, title, children }) {
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
        <span className="card-id">{id}</span>
        {tag && <span className="card-tag">{tag}</span>}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}

function StackLayer({ level, name, desc }) {
  return (
    <motion.div 
      className="stack-layer"
      variants={fadeInUp}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      <div className="stack-level">{level}</div>
      <div className="stack-info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="stack-line"></div>
    </motion.div>
  );
}

function ModeRow({ title, type, desc }) {
  return (
    <motion.div 
      className="mode-row"
      variants={fadeInUp}
    >
      <div className="mode-header">
        <h3>{title}</h3>
        <span className="mode-badge">{type}</span>
      </div>
      <p>{desc}</p>
    </motion.div>
  );
}