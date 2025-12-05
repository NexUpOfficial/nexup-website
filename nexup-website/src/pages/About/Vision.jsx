// src/pages/About/Vision.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Vision.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const PILLARS_DATA = [
  {
    title: "Spatial Intelligence",
    text: "A system that understands depth, space, movement, and context — recognizing environments the way humans do.",
  },
  {
    title: "Unified Ecosystem",
    text: "NexWorld, NexNode, NexHousing, and NexEngine work as one connected system, removing friction between platforms.",
  },
  {
    title: "Trust & Transparency",
    text: "Built with clarity, control, and user empowerment. We believe the future must be open and safe.",
  },
];

const TIMELINE_DATA = [
  {
    year: "2025 – 2026",
    title: "Foundation",
    desc: "Spatial frameworks, NexNode connectivity, and core architectural build.",
  },
  {
    year: "2026 – 2027",
    title: "Expansion",
    desc: "Early-access NexWorld, adaptive environments, and developer ecosystem launch.",
  },
  {
    year: "2027 – 2030",
    title: "Ubiquity",
    desc: "Persistent digital worlds, global-scale spatial computing, and full integration.",
  },
];

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Vision() {
  const navigate = useNavigate();

  return (
    <div className="vision-page">
      <div className="vision-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="vision-hero-section">
          {/* Ambient Glow Background */}
          <div className="vision-glow" /> 

          <motion.div
            className="vision-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <h1 className="gradient-title big-hero-title">
              Bridging Reality & The Intelligent Universe.
            </h1>
            <p className="hero-subtitle">
              Technology should extend imagination — not interrupt it.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CONCEPT: AMBIENT INTELLIGENCE ================= */}
        <section className="vision-section">
          <motion.div
            className="concept-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title section-title">Ambient Intelligence</h2>
            <div className="concept-text-group">
              <p>
                Our vision moves beyond screens and devices. We focus on
                presence, connection, and intuitive digital reality.
              </p>
              <p className="highlight-text">
                Digital information should live in your environment.
                Interactions should feel natural, fluid, and invisible.
              </p>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= THE 'WHY' (Split Layout) ================= */}
        <section className="vision-section">
          <div className="why-grid">
            <motion.div 
              className="why-header"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="gradient-title section-title">Why Build This?</h2>
            </motion.div>
            
            <motion.div 
              className="why-content"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p>
                Humans think in 3D, yet technology is trapped in 2D rectangles.
                To unlock the next era of intelligence, we need new spatial
                frameworks.
              </p>
              <p>
                <strong>NeX UP is creating the foundation for the next human–computer era.</strong>
              </p>
            </motion.div>
          </div>
        </section>

        <BreakLine />

        {/* ================= PILLARS ================= */}
        <section className="vision-section column-layout">
          <motion.h2 
            className="gradient-title section-title center-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Architectural Pillars
          </motion.h2>

          <motion.div
            className="pillars-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PILLARS_DATA.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="pillar-card glass-panel"
                variants={itemVariants}
              >
                <div className="pillar-icon-line"></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= VISUAL TIMELINE ================= */}
        <section className="vision-section column-layout">
          <h2 className="gradient-title section-title center-text">The Path Ahead</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {TIMELINE_DATA.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="vision-final-section">
          <motion.div
            className="final-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              This is just the beginning.
            </h2>
            <p className="final-text">
              We are shaping a future where people live inside their ideas
              and collaborate across realities.
            </p>
            <button
              className="white-btn"
              onClick={() => navigate("/ecosystem")}
            >
              Explore Ecosystem →
            </button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}