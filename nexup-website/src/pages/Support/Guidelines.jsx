// src/pages/Support/Guidelines.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiShield, FiUsers, FiEye, FiCpu, FiCheck, FiX, FiAlertTriangle, FiFileText } from "react-icons/fi";
import "../../page-styles/Support/Guidelines.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const META_DATA = {
  lastUpdated: "December 05, 2025",
  version: "v2.4.0",
};

const PRINCIPLES = [
  {
    icon: <FiShield />,
    title: "Safety First",
    text: "Experiences should never cause physical, emotional, or psychological harm. Design with user wellbeing as the first priority.",
  },
  {
    icon: <FiEye />,
    title: "Transparency",
    text: "Be clear about what your experiences do, what data they use, and how they behave in different environments.",
  },
  {
    icon: <FiUsers />,
    title: "Respect & Integrity",
    text: "Treat all users with respect. No harassment, discrimination, or abuse. Be honest about what you build.",
  },
  {
    icon: <FiCpu />,
    title: "Responsible Innovation",
    text: "Experiment boldly — but not recklessly. Avoid creating systems that can be misused in harmful ways.",
  },
];

const BEHAVIOR_GUIDELINES = {
  allowed: [
    "Educational & training experiences",
    "Immersive storytelling & art",
    "Productivity & collaboration tools",
    "Experimental prototypes",
  ],
  prohibited: [
    "Hate speech or extremist content",
    "Graphic violence or gore",
    "Sexually explicit content",
    "Deceptive deepfakes",
  ],
};

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Guidelines() {
  const navigate = useNavigate();

  return (
    <div className="guidelines-page">
      <div className="guidelines-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="guidelines-hero-section">
          <div className="guidelines-glow" />
          <motion.div
            className="guidelines-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="doc-meta-badge">
              <span>Community Standards</span>
              <span className="meta-divider">•</span>
              <span>Updated {META_DATA.lastUpdated}</span>
            </div>
            <h1 className="gradient-title guidelines-hero-title">
              The NeX UP Constitution.
            </h1>
            <p className="guidelines-hero-sub">
              Our shared commitment to building a safe, intelligent, and immersive digital future.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= PREAMBLE (The Why) ================= */}
        <GuidelinesSection>
          <motion.div 
            className="preamble-card glass-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="preamble-title">Why this matters</h2>
            <p className="preamble-text">
              NeX UP is designed to power a new kind of digital reality — immersive, 
              intelligent, and deeply interconnected. These guidelines help ensure that 
              the ecosystem remains safe, respectful, and sustainable for everyone: 
              creators, developers, organizations, and everyday users.
            </p>
          </motion.div>
        </GuidelinesSection>

        {/* ================= CORE PRINCIPLES ================= */}
        <GuidelinesSection title="Core Principles">
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
        </GuidelinesSection>

        <BreakLine />

        {/* ================= BEHAVIOR MATRIX (DO/DONT) ================= */}
        <GuidelinesSection title="Content & Behavior Standards">
          <div className="matrix-grid">
            {/* ALLOWED */}
            <motion.div 
              className="matrix-col allowed-col glass-panel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="matrix-header">
                <FiCheck className="icon-check" />
                <h3>Encouraged</h3>
              </div>
              <ul className="matrix-list">
                {BEHAVIOR_GUIDELINES.allowed.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
                <li>Constructive community feedback</li>
                <li>Respectful collaboration</li>
              </ul>
            </motion.div>

            {/* PROHIBITED */}
            <motion.div 
              className="matrix-col prohibited-col glass-panel"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="matrix-header">
                <FiX className="icon-x" />
                <h3>Strictly Prohibited</h3>
              </div>
              <ul className="matrix-list">
                {BEHAVIOR_GUIDELINES.prohibited.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
                <li>Harassment or bullying</li>
                <li>Exploiting system vulnerabilities</li>
              </ul>
            </motion.div>
          </div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= DEVELOPER & SPATIAL GUIDELINES ================= */}
        <GuidelinesSection title="Spatial & Developer Protocol">
          <div className="protocol-container">
            <ProtocolItem 
              title="Avoid Dangerous Simulations"
              text="Do not create worlds that encourage unsafe physical actions (e.g., running blindly) or disorientation."
            />
            <ProtocolItem 
              title="Data Minimalism"
              text="Do not collect biometric or spatial data without explicit consent. Store only what is necessary."
            />
            <ProtocolItem 
              title="Transparency"
              text="Clearly disclose when environments are simulated, AI-generated, or experimental."
            />
          </div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= ENFORCEMENT ================= */}
        <GuidelinesSection>
          <motion.div 
            className="enforcement-banner glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="enforcement-icon">
              <FiAlertTriangle />
            </div>
            <div className="enforcement-content">
              <h3>Enforcement & Reporting</h3>
              <p>
                Violations result in immediate content removal and potential account suspension. 
                NeX UP reserves the right to restrict access to the ecosystem to ensure safety.
              </p>
            </div>
            <button className="report-btn">Report a Violation</button>
          </motion.div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="guidelines-final-section">
          <motion.div
            className="guidelines-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Questions about compliance?
            </h2>
            <p className="final-text">
              Our safety team is available to help clarify these policies.
            </p>
            <div className="guidelines-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Contact Safety Team
              </button>
              <button className="ghost-btn" onClick={() => navigate("/privacy")}>
                <FiFileText style={{ marginRight: "8px" }}/> Privacy Policy
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

function GuidelinesSection({ title, children }) {
  return (
    <section className="guidelines-section">
      <motion.div
        className="guidelines-section-inner"
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

function ProtocolItem({ title, text }) {
  return (
    <motion.div 
      className="protocol-item glass-panel"
      whileHover={{ x: 10, borderColor: "#b8a9ff" }}
    >
      <div className="protocol-marker" />
      <div className="protocol-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}