// src/pages/Account/DNS.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiShield, FiSmartphone, FiMonitor, FiCpu, 
  FiActivity, FiLock, FiTerminal, FiKey, FiGlobe 
} from "react-icons/fi";
import "../../page-styles/Account/DNS.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const IDENTITY_NODES = [
  { 
    icon: <FiKey />, 
    title: "Primary Anchor", 
    status: "Active", 
    desc: "Root identity verified via biometric hash." 
  },
  { 
    icon: <FiShield />, 
    title: "Backup Protocol", 
    status: "Standby", 
    desc: "Recovery phrase stored in cold storage." 
  },
  { 
    icon: <FiGlobe />, 
    title: "Spatial ID", 
    status: "Beta", 
    desc: "Location-based trust signal (San Francisco)." 
  }
];

const TRUSTED_DEVICES = [
  {
    id: 1,
    name: "NeX Vision Pro",
    type: "Headset",
    icon: <FiCpu />,
    lastActive: "Now",
    location: "Hyderabad, IN",
    status: "Trusted"
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    type: "Workstation",
    icon: <FiMonitor />,
    lastActive: "2 hours ago",
    location: "Hyderabad, IN",
    status: "Trusted"
  },
  {
    id: 3,
    name: "iPhone 16",
    type: "Mobile",
    icon: <FiSmartphone />,
    lastActive: "1 day ago",
    location: "Mumbai, IN",
    status: "Expiring Soon"
  }
];

const SECURITY_LOGS = [
  { time: "10:42 AM", event: "Login Attempt", status: "Success", ip: "192.168.1.1" },
  { time: "09:15 AM", event: "Key Rotation", status: "Completed", ip: "System" },
  { time: "Yesterday", event: "New Device Added", status: "Verified", ip: "10.0.0.42" },
];

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DNS() {
  const navigate = useNavigate();

  return (
    <div className="dns-page">
      <div className="dns-wrapper">
        
        {/* ================= HERO DASHBOARD ================= */}
        <section className="dns-hero-section">
          <div className="dns-glow" />
          <motion.div
            className="dns-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="security-badge">
              <span className="dot pulse"></span> System Secure
            </div>
            <h1 className="gradient-title dns-title">
              Distributed NeX Security.
            </h1>
            <p className="dns-sub">
              Manage your decentralized identity anchors, trusted devices, and spatial verification keys.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= IDENTITY NODES ================= */}
        <DNSSection title="Identity Anchors">
          [Image of distributed identity network architecture]
          <motion.div 
            className="node-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {IDENTITY_NODES.map((node, idx) => (
              <motion.div 
                key={idx} 
                className="node-card glass-panel"
                variants={itemVariants}
              >
                <div className="node-header">
                  <div className="node-icon">{node.icon}</div>
                  <span className={`node-status ${node.status.toLowerCase()}`}>{node.status}</span>
                </div>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </DNSSection>

        <BreakLine />

        {/* ================= DEVICE MANAGER ================= */}
        <DNSSection title="Active Sessions & Devices">
          <div className="device-list">
            {TRUSTED_DEVICES.map((device, idx) => (
              <motion.div 
                key={device.id} 
                className="device-row glass-panel-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="device-left">
                  <div className="device-icon-box">{device.icon}</div>
                  <div className="device-info">
                    <h4>{device.name}</h4>
                    <span className="device-meta">{device.type} • {device.location}</span>
                  </div>
                </div>
                <div className="device-right">
                  <span className="last-active">{device.lastActive}</span>
                  <button className="revoke-btn">Revoke</button>
                </div>
              </motion.div>
            ))}
          </div>
        </DNSSection>

        <BreakLine />

        {/* ================= SECURITY LOGS & DEVELOPER ================= */}
        <div className="split-section">
          
          {/* Security Logs */}
          <div className="split-col">
            <h2 className="gradient-title section-title-sm">Security Log</h2>
            <div className="log-terminal glass-panel">
              {SECURITY_LOGS.map((log, i) => (
                <div key={i} className="log-entry">
                  <span className="log-time">[{log.time}]</span>
                  <span className="log-event">{log.event}</span>
                  <span className="log-status success">{log.status}</span>
                </div>
              ))}
              <div className="log-cursor">_</div>
            </div>
          </div>

          {/* Developer API */}
          <div className="split-col">
            <h2 className="gradient-title section-title-sm">Developer API</h2>
            <div className="api-card glass-panel">
              <div className="api-header">
                <FiTerminal /> <span>DNS Endpoint</span>
              </div>
              <p className="api-desc">
                Programmatic access to identity verification and session management.
              </p>
              <div className="code-block">
                <code>GET /api/v2/dns/anchors</code>
              </div>
              <button className="ghost-btn-sm">View Documentation</button>
            </div>
          </div>

        </div>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="dns-final-section">
          <motion.div
            className="dns-final glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="final-icon"><FiLock /></div>
            <h2>Secure your digital reality.</h2>
            <p>
              Enable 2-Factor Authentication and spatial verification to maximize your security score.
            </p>
            <div className="final-actions">
              <button className="white-btn" onClick={() => navigate("/settings/security")}>
                Configure 2FA
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Report Breach
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

function DNSSection({ title, children }) {
  return (
    <section className="dns-section">
      <motion.div
        className="dns-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}