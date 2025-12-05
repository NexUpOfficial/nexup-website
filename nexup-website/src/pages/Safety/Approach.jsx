// src/pages/Safety/Approach.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiShield, FiEye, FiCpu, FiActivity, FiLayers, 
  FiAlertTriangle, FiCheckCircle, FiCode 
} from "react-icons/fi";
import "../../page-styles/Safety/Approach.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const FRAMEWORK_DATA = [
  {
    icon: <FiActivity />,
    title: "User Wellbeing",
    text: "Every feature is rigorously evaluated for physical comfort, motion sickness, and cognitive load."
  },
  {
    icon: <FiEye />,
    title: "Spatial Awareness",
    text: "Systems that respect real-world boundaries, ensuring users remain grounded in their physical environment."
  },
  {
    icon: <FiCpu />,
    title: "Ethical AI",
    text: "Intelligence that is predictable, transparent, and aligned with non-manipulative standards."
  },
  {
    icon: <FiShield />,
    title: "Proactive Defense",
    text: "Real-time detection of abuse, harassment, and unsafe world simulations before they scale."
  }
];

const RISK_STEPS = [
  { title: "Detection", desc: "Automated scanning of world assets & scripts." },
  { title: "Analysis", desc: "Context-aware AI evaluation of risk levels." },
  { title: "Mitigation", desc: "Instant containment of harmful instances." },
  { title: "Review", desc: "Human oversight for complex edge cases." }
];

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SafetyApproach() {
  const navigate = useNavigate();

  return (
    <div className="safety-approach-page">
      {/* 10. Global Fade In & Soft Grid via CSS */}
      
      <div className="safety-approach-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="safety-hero-section">
          {/* 1. Floating Glow Animation */}
          <div className="safety-glow" />
          
          <motion.div
            className="safety-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* 2. Micro Pulse Badge */}
            <span className="hero-badge">Safety Architecture</span>
            <h1 className="gradient-title safety-hero-title">
              Safety by Design.
            </h1>
            <p className="safety-hero-sub">
              We don't just build worlds; we protect the people inside them. 
              Our multi-layered approach ensures stability, trust, and wellbeing.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= PHILOSOPHY ================= */}
        <SafetySection>
          <div className="philosophy-grid">
            <motion.div 
              className="philosophy-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="gradient-title section-title">The Foundation</h2>
              <p className="safety-text-lead">
                AR and VR systems influence perception, emotion, and movement. 
                Because NeX UP blends digital and physical realities, safety cannot be an afterthought—it must be the foundation.
              </p>
            </motion.div>
            
            <motion.div 
              className="philosophy-stat glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 4. Radial Highlight */}
              <div className="stat-number">100%</div>
              <div className="stat-label">Human-Centric Standards</div>
              <p>All interactions prioritize physical safety and psychological comfort.</p>
            </motion.div>
          </div>
        </SafetySection>

        {/* ================= FRAMEWORK GRID ================= */}
        <SafetySection title="Core Safety Framework">
          <motion.div 
            className="framework-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {FRAMEWORK_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="framework-card glass-panel"
                variants={itemVariants}
                // 3. Hover Animation handled in CSS
              >
                <div className="framework-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </SafetySection>

        <BreakLine />

        {/* ================= DOMAIN PROTOCOLS ================= */}
        <SafetySection title="Domain Protocols">
          <div className="protocols-container">
            
            {/* Immersive Safety */}
            <motion.div 
              className="protocol-row glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 5. Left Accent Bar (CSS) */}
              <div className="protocol-header">
                <FiLayers className="p-icon" />
                <h3>Immersive Reality (AR/VR)</h3>
              </div>
              <ul className="protocol-list">
                <li><FiCheckCircle/> Prevention of harmful visual illusions or strobe effects.</li>
                <li><FiCheckCircle/> Motion guidelines to eliminate nausea and disorientation.</li>
                <li><FiCheckCircle/> Passthrough priority to ensure physical obstacle awareness.</li>
              </ul>
            </motion.div>

            {/* AI Safety */}
            <motion.div 
              className="protocol-row glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="protocol-header">
                <FiCpu className="p-icon" />
                <h3>Responsible Intelligence</h3>
              </div>
              <ul className="protocol-list">
                <li><FiCheckCircle/> Strict constraints on generative AI for world-building.</li>
                <li><FiCheckCircle/> Transparency markers for AI-driven entities vs. humans.</li>
                <li><FiCheckCircle/> Anti-manipulation guardrails for adaptive algorithms.</li>
              </ul>
            </motion.div>

            {/* Developer Safety */}
            <motion.div 
              className="protocol-row glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="protocol-header">
                <FiCode className="p-icon" />
                <h3>Developer Ecosystem</h3>
              </div>
              <ul className="protocol-list">
                <li><FiCheckCircle/> Sandboxed environments for testing experimental physics.</li>
                <li><FiCheckCircle/> Mandatory safety metadata for all published worlds.</li>
                <li><FiCheckCircle/> User-controlled privacy layers for third-party experiences.</li>
              </ul>
            </motion.div>

          </div>
        </SafetySection>

        <BreakLine />

        {/* ================= RISK MITIGATION LOOP ================= */}
        <SafetySection title="Active Risk Mitigation">
          <motion.p 
            className="centered-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Safety at NeX UP is active, not passive. We continuously evaluate risk across the system loop.
          </motion.p>
          
          <div className="risk-loop-container">
            {/* 6. Animated Connecting Line */}
            <div className="risk-line"></div>
            
            <motion.div 
              className="risk-steps"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {RISK_STEPS.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="risk-step glass-panel-sm"
                  variants={itemVariants}
                >
                  {/* 7. Step Number Glow */}
                  <div className="step-number">0{idx + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SafetySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="safety-final-section">
          <motion.div
            className="safety-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="final-icon-wrapper">
              {/* 8. Alert Glow Pulse */}
              <FiAlertTriangle />
            </div>
            <h2 className="gradient-title final-big">
              See something unsafe?
            </h2>
            <p className="final-text">
              Your reports help train our safety systems and protect the community.
            </p>
            <div className="safety-final-actions">
              <button className="white-btn" onClick={() => navigate("/report")}>
                Report an Issue
              </button>
              <button className="ghost-btn" onClick={() => navigate("/support/guidelines")}>
                Read Guidelines
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

function SafetySection({ title, children }) {
  return (
    <section className="safety-section">
      <motion.div
        className="safety-section-inner"
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

function BreakLine() {
  return <div className="break-line" />;
}