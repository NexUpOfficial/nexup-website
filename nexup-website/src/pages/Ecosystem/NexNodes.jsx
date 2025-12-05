// src/pages/Ecosystem/NexNodes.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexNodes.css";
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
const NETWORK_STATS = [
  { label: "Global Nodes", value: "8,420" },
  { label: "Avg Latency", value: "< 12ms" },
  { label: "Uptime", value: "99.99%" },
  { label: "Status", value: "Operational", status: "green" },
];

export default function NexNodes() {
  const navigate = useNavigate();

  return (
    <div className="nexnodes-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="nexnodes-hero-section">
        <div className="nexnodes-glow" />
        
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

        {/* Network Status Strip */}
        <motion.div 
          className="network-status-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {NETWORK_STATS.map((stat, index) => (
            <div key={index} className="status-item">
              <span className="status-label">{stat.label}</span>
              <span className={`status-value ${stat.status ? 'status-live' : ''}`}>
                {stat.value}
              </span>
            </div>
          ))}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            {/* Wide Card */}
            <motion.div className="bento-card card-wide" variants={fadeInUp}>
              <div className="card-header">
                <span className="card-id">SYS_01</span>
                <span className="card-tag">Core</span>
              </div>
              <h3>Real-time Synchronization</h3>
              <p>State-locking technology that keeps world physics, user positions, and environment updates aligned across thousands of concurrent sessions.</p>
            </motion.div>

            {/* Tall Card */}
            <motion.div className="bento-card card-tall" variants={fadeInUp}>
              <div className="card-header">
                <span className="card-id">SYS_02</span>
              </div>
              <h3>Decentralized Intelligence</h3>
              <p>Distributes AI workloads between local devices (Edge) and cloud clusters to maximize performance and privacy.</p>
            </motion.div>

            {/* Standard Cards */}
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><span className="card-id">SYS_03</span></div>
              <h3>Edge Spatial Processing</h3>
              <p>Lidar and camera inputs are processed locally for near-zero latency interaction.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-header"><span className="card-id">SYS_04</span></div>
              <h3>Secure Mesh Linking</h3>
              <p>End-to-end encrypted tunnels connect headsets, phones, and displays.</p>
            </motion.div>
          </motion.div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= ARCHITECTURE STACK ================= */}
        <NexNodesSection title="Network Architecture">
          <div className="architecture-stack">
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
          </div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= MODES OF OPERATION ================= */}
        <NexNodesSection title="Node Configurations">
          <div className="modes-list">
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
          </div>
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
  return <div className="break-line" />;
}

function NexNodesSection({ title, children }) {
  return (
    <section className="nexnodes-section">
      <div className="nexnodes-section-inner">
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function StackLayer({ level, name, desc }) {
  return (
    <motion.div 
      className="stack-layer"
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
    <div className="mode-row">
      <div className="mode-header">
        <h3>{title}</h3>
        <span className="mode-badge">{type}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
}