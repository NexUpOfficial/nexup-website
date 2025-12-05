// src/pages/Support/Trust.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiShield, FiLock, FiUserCheck, FiEye, 
  FiGlobe, FiCheckSquare, FiAlertCircle 
} from "react-icons/fi";
import "../../page-styles/Safety/Trust.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const PRINCIPLES = [
  {
    icon: <FiEye />,
    title: "Radical Transparency",
    text: "We open-source our safety policies and clearly explain how every algorithm works."
  },
  {
    icon: <FiUserCheck />,
    title: "User Sovereignty",
    text: "You own your data, your identity, and your digital assets. We are just the custodians."
  },
  {
    icon: <FiShield />,
    title: "Proactive Safety",
    text: "We don't wait for harm to happen. Our systems predict and prevent abuse before it scales."
  },
  {
    icon: <FiGlobe />,
    title: "Global Compliance",
    text: "We adhere to the strictest international standards for digital rights and data protection."
  }
];

const COMPLIANCE_BADGES = [
  { label: "GDPR Compliant", color: "#4ade80" },
  { label: "SOC2 Type II", color: "#60a5fa" },
  { label: "ISO 27001", color: "#f472b6" },
  { label: "CCPA Ready", color: "#fbbf24" }
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

export default function Trust() {
  const navigate = useNavigate();

  return (
    <div className="trust-page">
      <div className="trust-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="trust-hero-section">
          <div className="trust-glow" />
          <motion.div
            className="trust-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">Trust & Safety Center</span>
            <h1 className="gradient-title trust-hero-title">
              Built on Integrity.
            </h1>
            <p className="trust-hero-sub">
              Trust isn't a feature—it's our operating system. 
              We prioritize user rights, data ethics, and system reliability above all else.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= TRUST MANIFESTO ================= */}
        <TrustSection>
          <motion.div 
            className="manifesto-card glass-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="manifesto-icon"><FiLock /></div>
            <h2>The NeX UP Promise</h2>
            <p>
              In an era of digital uncertainty, we promise to be a stable foundation. 
              We will never sell your personal data. We will never manipulate your reality 
              for profit. We will always prioritize your safety over engagement metrics.
            </p>
          </motion.div>
        </TrustSection>

        {/* ================= CORE PRINCIPLES ================= */}
        <TrustSection title="The Pillars of Trust">
          <motion.div 
            className="trust-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PRINCIPLES.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="trust-card glass-panel"
                variants={itemVariants}
              >
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </TrustSection>

        <BreakLine />

        {/* ================= COMPLIANCE & STANDARDS ================= */}
        <TrustSection title="Standards & Compliance">
          <p className="centered-intro">
            We adhere to rigorous global standards to ensure your data and experience remain secure.
          </p>
          <div className="compliance-row">
            {COMPLIANCE_BADGES.map((badge, idx) => (
              <motion.div 
                key={idx} 
                className="compliance-badge"
                whileHover={{ scale: 1.05 }}
              >
                <div className="badge-dot" style={{ background: badge.color }} />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </TrustSection>

        <BreakLine />

        {/* ================= AI ETHICS ================= */}
        <TrustSection title="Ethical Intelligence">
          <div className="ethics-layout">
            <div className="ethics-content">
              <p className="trust-text-lead">
                NeX UP uses AI to enhance reality, not replace it. Our intelligence models 
                are designed to be tools for human creativity, not black boxes of manipulation.
              </p>
              <ul className="ethics-list">
                <li><FiCheckSquare /> No hidden behavioral nudging.</li>
                <li><FiCheckSquare /> Transparent algorithmic ranking.</li>
                <li><FiCheckSquare /> User control over AI assistance levels.</li>
              </ul>
            </div>
            <div className="ethics-visual glass-panel-sm">
              {/* Abstract Visual Placeholder */}
              <div className="visual-circle" />
              <div className="visual-bar" />
              <div className="visual-bar short" />
            </div>
          </div>
        </TrustSection>

        <BreakLine />

        {/* ================= REPORTING ================= */}
        <TrustSection>
          <motion.div 
            className="reporting-banner glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="reporting-icon">
              <FiAlertCircle />
            </div>
            <div className="reporting-content">
              <h3>See something wrong?</h3>
              <p>
                Trust is a community effort. If you encounter unsafe behavior, 
                bugs, or ethical violations, report them immediately.
              </p>
            </div>
            <button className="report-btn" onClick={() => navigate("/report")}>File a Report</button>
          </motion.div>
        </TrustSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="trust-final-section">
          <motion.div
            className="trust-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Verification is key.
            </h2>
            <p className="final-text">
              Dive deeper into our policies or contact our Data Protection Officer directly.
            </p>
            <div className="trust-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Contact DPO
              </button>
              <button className="ghost-btn" onClick={() => navigate("/safety/transparency")}>
                Transparency Report
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

function TrustSection({ title, children }) {
  return (
    <section className="trust-section">
      <motion.div
        className="trust-section-inner"
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