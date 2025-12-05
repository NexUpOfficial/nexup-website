// src/pages/Safety/Transparency.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiEye, FiFileText, FiActivity, 
  FiShield, FiCheckCircle
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
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
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PRINCIPLES.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="principle-card glass-panel"
                variants={fadeInUp}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="centered-text">
              We are demystifying the intelligent systems that power NeX UP. 
              Here is how our core algorithms function:
            </p>
          </motion.div>
          
          <motion.div 
            className="algo-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ALGORITHM_DATA.map((algo, idx) => (
              <motion.div 
                key={idx} 
                className="algo-card glass-panel-sm"
                variants={fadeInUp}
              >
                <div className="algo-marker" />
                <div className="algo-content">
                  <h4>{algo.title}</h4>
                  <p>{algo.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TransparencySection>

        <BreakLine />

        {/* ================= DATA FLOW VISUALIZATION ================= */}
        <TransparencySection title="Your Data Journey">
          <motion.div 
            className="data-journey"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
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
          </motion.div>
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
      <div className="transparency-section-inner">
        {title && (
          <motion.h2 
            className="gradient-title section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            // 8. Added delay to section titles
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}

function DataStep({ step, title, text }) {
  return (
    <motion.div 
      className="data-step"
      variants={fadeInUp}
    >
      <div className="step-marker">
        <span className="step-num">{step}</span>
        <div className="step-line"></div>
      </div>
      <div className="step-content glass-panel-sm">
        <div className="step-header">
          <h4>{title}</h4>
          <FiCheckCircle className="check-icon" />
        </div>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

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