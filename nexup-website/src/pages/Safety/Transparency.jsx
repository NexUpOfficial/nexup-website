// src/pages/Safety/Transparency.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiEye, FiFileText, FiServer, FiActivity, 
  FiCpu, FiShield, FiTrendingUp, FiDownload 
} from "react-icons/fi";
import "../../page-styles/Safety/Transparency.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const PRINCIPLES = [
  {
    icon: <FiEye />,
    title: "Radical Visibility",
    text: "We don't hide how our systems work. From AI weighting to data storage, we default to disclosure."
  },
  {
    icon: <FiFileText />,
    title: "Plain Language",
    text: "No legalese. We explain complex technical systems in language everyone can understand."
  },
  {
    icon: <FiActivity />,
    title: "Predictability",
    text: "Our systems are designed to be consistent. You should never be surprised by how NeX UP behaves."
  }
];

const ALGORITHM_DATA = [
  { title: "Recommendation Engine", desc: "Prioritizes content based on your explicit interests and spatial engagement, not rage-bait." },
  { title: "Safety Classifiers", desc: "AI scans 100% of public assets for harmful patterns before they render in NexWorld." },
  { title: "Moderation Queue", desc: "Flagged content is reviewed by human experts, not just automated bots." }
];

const REPORT_STATS = [
  { label: "Content Takedowns", value: "14.2k", trend: "+2% vs last Q" },
  { label: "Govt. Requests", value: "12", trend: "0 rejected" },
  { label: "Uptime Reliability", value: "99.99%", trend: "Stable" },
  { label: "User Appeals", value: "98%", trend: "Resolved < 24h" }
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

export default function Transparency() {
  const navigate = useNavigate();

  return (
    <div className="transparency-page">
      <div className="transparency-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="transparency-hero-section">
          <div className="transparency-glow" />
          <motion.div
            className="transparency-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">Open Ledger Initiative</span>
            <h1 className="gradient-title transparency-hero-title">
              Trust Through Visibility.
            </h1>
            <p className="transparency-hero-sub">
              We believe you have the right to know exactly how NeX UP works, 
              how decisions are made, and how your data is handled.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE PRINCIPLES ================= */}
        <TransparencySection>
          <motion.div 
            className="principles-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PRINCIPLES.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="principle-card glass-panel"
                variants={itemVariants}
              >
                <div className="principle-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </TransparencySection>

        <BreakLine />

        {/* ================= ALGORITHM EXPLAINER ================= */}
        <TransparencySection title="Inside the Black Box">
          <p className="centered-text">
            We are demystifying the intelligent systems that power NeX UP. 
            Here is how our core algorithms function:
          </p>
          <div className="algo-container">
            {ALGORITHM_DATA.map((algo, idx) => (
              <motion.div 
                key={idx} 
                className="algo-card glass-panel-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="algo-marker" />
                <div className="algo-content">
                  <h4>{algo.title}</h4>
                  <p>{algo.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TransparencySection>

        <BreakLine />

        {/* ================= TRANSPARENCY REPORT DASHBOARD ================= */}
        <TransparencySection title="Transparency Report (Q4 2025)">
          <motion.div 
            className="report-dashboard glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="report-header">
              <h3>Enforcement & Requests</h3>
              <button className="download-btn"><FiDownload /> PDF Report</button>
            </div>
            
            <div className="stats-grid">
              {REPORT_STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-trend"><FiTrendingUp /> {stat.trend}</span>
                </div>
              ))}
            </div>
            
            <div className="report-footer">
              <p>Next report scheduled for: <strong>April 15, 2026</strong></p>
            </div>
          </motion.div>
        </TransparencySection>

        <BreakLine />

        {/* ================= DATA FLOW VISUALIZATION ================= */}
        <TransparencySection title="Your Data Journey">
          <div className="data-journey">
            <DataStep 
              step="01" 
              title="Collection" 
              text="You interact with NexWorld. Inputs (gesture, voice) are processed locally on-device whenever possible." 
            />
            <DataStep 
              step="02" 
              title="Encryption" 
              text="Data leaving your device is encrypted (AES-256). We cannot see your raw camera feed." 
            />
            <DataStep 
              step="03" 
              title="Processing" 
              text="Server-side processing is used only for multiplayer sync and persistence. No permanent storage of biometric data." 
            />
            <DataStep 
              step="04" 
              title="Deletion" 
              text="Session data is wiped after use. You can request a full account wipe at any time." 
            />
          </div>
        </TransparencySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="transparency-final-section">
          <motion.div
            className="transparency-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="final-icon">
              <FiShield />
            </div>
            <h2 className="gradient-title final-big">
              Trust is earned, not claimed.
            </h2>
            <p className="final-text">
              We invite you to audit our policies, ask questions, and hold us accountable.
            </p>
            <div className="transparency-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Ask a Question
              </button>
              <button className="ghost-btn" onClick={() => navigate("/support/guidelines")}>
                Community Guidelines
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

function TransparencySection({ title, children }) {
  return (
    <section className="transparency-section">
      <motion.div
        className="transparency-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {title && <h2 className="gradient-title section-title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}

function DataStep({ step, title, text }) {
  return (
    <div className="data-step">
      <div className="step-marker">
        <span className="step-num">{step}</span>
        <div className="step-line"></div>
      </div>
      <div className="step-content glass-panel-sm">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}