// src/pages/Support/Privacy.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiShield, FiLock, FiEye, FiDatabase, FiServer, 
  FiUserCheck, FiGlobe, FiFileText 
} from "react-icons/fi";
import "../../page-styles/Safety/Privacy.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const LAST_UPDATED = "December 10, 2025";

const DATA_COLLECTION = [
  {
    icon: <FiUserCheck />,
    title: "Identity Data",
    text: "Name, email, and authentication tokens needed to secure your account."
  },
  {
    icon: <FiGlobe />,
    title: "Spatial Telemetry",
    text: "Anonymized movement and interaction data to render AR/VR environments."
  },
  {
    icon: <FiDatabase />,
    title: "Usage Metrics",
    text: "Performance logs and error reports to improve system stability."
  },
  {
    icon: <FiServer />,
    title: "Device Info",
    text: "Hardware model, OS version, and network status for compatibility."
  }
];

const USER_RIGHTS = [
  { title: "Right to Access", desc: "Request a copy of all data linked to your profile." },
  { title: "Right to Delete", desc: "Permanently remove your account and associated data." },
  { title: "Right to Rectify", desc: "Correct inaccurate or incomplete personal information." },
  { title: "Opt-Out", desc: "Withdraw consent for non-essential data processing." }
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

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      <div className="privacy-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="privacy-hero-section">
          <div className="privacy-glow" />
          <motion.div
            className="privacy-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="status-badge">
              <span className="status-dot"></span> Effective: {LAST_UPDATED}
            </div>
            <h1 className="gradient-title privacy-hero-title">
              Your Privacy, Secured.
            </h1>
            <p className="privacy-hero-sub">
              NeX UP is built on a foundation of trust. We believe transparency is the new standard for the spatial web.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= PREAMBLE ================= */}
        <PrivacySection>
          <div className="privacy-intro glass-panel">
            <FiShield className="intro-icon" />
            <div className="intro-text">
              <h3>Our Core Promise</h3>
              <p>
                We do not sell your personal data. We only collect what is necessary to build immersive, 
                intelligent experiences. Security is not a feature; it is our architecture.
              </p>
            </div>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= DATA COLLECTION GRID ================= */}
        <PrivacySection title="Data We Collect">
          <motion.div 
            className="data-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {DATA_COLLECTION.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="data-card glass-panel"
                variants={itemVariants}
              >
                <div className="card-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </PrivacySection>

        <BreakLine />

        {/* ================= SECURITY PRACTICES ================= */}
        <PrivacySection title="Defense-in-Depth">
          <div className="security-layout">
            <motion.div 
              className="security-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="shield-graphic">
                <FiLock />
              </div>
            </motion.div>
            <motion.div 
              className="security-list"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="security-item">
                <h4>End-to-End Encryption</h4>
                <p>Data in transit and at rest is encrypted using industry-standard protocols (AES-256).</p>
              </div>
              <div className="security-item">
                <h4>Access Control</h4>
                <p>Strict role-based access ensures only authorized systems can process sensitive data.</p>
              </div>
              <div className="security-item">
                <h4>Anomaly Detection</h4>
                <p>AI-driven monitoring detects and blocks suspicious activity in real-time.</p>
              </div>
            </motion.div>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= USER RIGHTS ================= */}
        <PrivacySection title="Your Rights & Controls">
          <motion.div 
            className="rights-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {USER_RIGHTS.map((right, idx) => (
              <motion.div 
                key={idx} 
                className="right-card glass-panel-sm"
                variants={itemVariants}
              >
                <h4>{right.title}</h4>
                <p>{right.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </PrivacySection>

        <BreakLine />

        {/* ================= LEGAL & THIRD PARTIES ================= */}
        <PrivacySection title="Legal & Compliance">
          <div className="legal-text-block">
            <p>
              NeX UP complies with major data protection regulations including GDPR and CCPA. 
              We may share data with trusted third-party infrastructure providers (e.g., cloud hosting, payment processors) 
              solely for the purpose of delivering our service.
            </p>
            <p>
              For a full list of sub-processors or to read the detailed legal text, please download the full PDF.
            </p>
            <button className="download-btn">
              <FiFileText /> Download Full Policy (PDF)
            </button>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="privacy-final-section">
          <motion.div
            className="privacy-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Data Protection Officer
            </h2>
            <p className="final-text">
              Have a specific concern regarding your data? Contact our DPO directly.
            </p>
            <div className="privacy-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Contact DPO
              </button>
              <button className="ghost-btn" onClick={() => navigate("/support/help")}>
                Help Center
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

function PrivacySection({ title, children }) {
  return (
    <section className="privacy-section">
      <motion.div
        className="privacy-section-inner"
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