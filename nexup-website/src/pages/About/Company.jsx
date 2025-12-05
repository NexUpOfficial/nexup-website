// src/pages/About/Company.jsx

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiGlobe, FiCode, FiCpu, FiHome, FiSearch, FiCheck } from "react-icons/fi";
import "../../page-styles/About/Company.css";
import Footer from "../../components/Footer/Footer";

/* --- ANIMATION VARIANTS (Existing) --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// 20. Reusable GlassCard Component (Kept for context, unchanged)
function GlassCard({ title, text, icon, className = "", children }) {
  return (
    <motion.div 
      className={`glass-card-hover ${className}`}
      variants={itemVariants}
      style={{ willChange: 'transform, opacity' }} 
    >
      <div className="card-header-icon-wrapper">
        {icon && <span className="card-icon">{icon}</span>}
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
      {children}
    </motion.div>
  );
}

// 6. Stats Bar Animation Logic (Kept for context, unchanged)
function AnimatedStat({ label, value, index }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    const targetValue = parseFloat(value);
    const isInfinity = value === "∞";
    const duration = 1200;
    let startTimestamp;

    const animateCount = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const step = progress / duration;
      
      if (step < 1) {
        setCurrentValue(Math.min(Math.floor(step * targetValue), targetValue));
        requestAnimationFrame(animateCount);
      } else {
        setCurrentValue(targetValue);
      }
    };
    
    if (!isInfinity) {
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);

  const displayValue = value === "∞" ? "∞" : (label === "Founded" ? value : currentValue + (label === "Global Nodes" ? '+' : ''));

  return (
    <motion.div 
      ref={ref}
      key={index} 
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <span className="stat-value">{displayValue}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

// --- DATA CONSTANTS (Kept for context) ---
const ECOSYSTEM_DATA = [
  { title: "NexWorld", text: "An immersive world engine that powers 3D environments, spatial AR, and interactive digital ecosystems.", icon: <FiGlobe /> },
  { title: "NexNode", text: "A network of intelligent nodes connecting data, users, and environments into one coherent digital universe.", icon: <FiCpu /> },
  { title: "NexEngine", text: "The computation and intelligence core that processes context, behavior, and environmental signals in real time.", icon: <FiCode /> },
  { title: "NexHousing", text: "Spatial tools and systems for next-generation living, architecture, and digital property experiences.", icon: <FiHome /> },
  { title: "NexSearch", text: "A search layer for spatial and immersive contexts — enabling discovery inside 3D worlds and AR overlays.", icon: <FiSearch /> },
];
const VALUES_DATA = [
  { title: "Integrity", text: "We design technology with transparency, respect, and responsibility — putting people and trust at the center.", icon: <FiCheck /> },
  { title: "Innovation", text: "We experiment relentlessly, embracing new ideas and models that push beyond what exists today.", icon: <FiCheck /> },
  { title: "Humanity", text: "Every system we build is meant to amplify human capability, making creativity and exploration easier.", icon: <FiCheck /> },
];
const ROADMAP_DATA = [
  { year: "2025 – 2026", desc: "Foundation of NexNode, early spatial frameworks, and ecosystem architecture." },
  { year: "2026 – 2027", desc: "Early-access NexWorld environments, NexHousing pilots, and developer tooling." },
  { year: "2027 – 2030", desc: "Persistent digital worlds, global-scale spatial experiences, and fully realized NeX UP ecosystem." },
];
const STATS_DATA = [
  { label: "Founded", value: "2025" },
  { label: "Core Platforms", value: "5" },
  { label: "Global Nodes", value: "12+" },
  { label: "Vision", value: "∞" },
];
// --- END DATA CONSTANTS ---


export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="company-page">
      {/* 11. Performance Optimization - Add global transform style */}
      <style global jsx>{`
        * {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
      
      <div className="company-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="company-hero-section">
          <motion.div
            className="company-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <h1 className="gradient-title company-hero-title">
              NeX UP — Building the Future of Intelligent Digital Reality.
            </h1>
            <p className="company-hero-sub">
              A company dedicated to creating immersive, intelligent environments
              where digital systems feel natural, intuitive, and deeply human.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= STATS BAR (NEW) ================= */}
        <div className="stats-container">
          {/* ⭐ 6. Animated Stats Bar */}
          {STATS_DATA.map((stat, index) => (
            <AnimatedStat key={index} {...stat} index={index} />
          ))}
        </div>

        {/* ================= CEO SECTION ================= */}
        <CompanySection title="From Our Founder & CEO" className="ceo-section-alt">
          <div className="company-ceo-layout">
            <motion.div
              className="company-ceo-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="company-ceo-image placeholder-img">
                <span className="placeholder-text">Jothish Gandham, CEO</span>
                <div className="ceo-ambient-glow" />
              </div>
            </motion.div>

            <motion.div
              className="company-ceo-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="company-ceo-name">Jothish Gandham</h3>
              <p className="company-ceo-role">Founder</p>
              <div className="company-ceo-quote">
                “NeX UP exists to push the boundaries of what digital reality
                can be. We’re not just building products — we’re building the
                foundation for how people will live, work, and create inside
                intelligent environments.”
              </div>
            </motion.div>
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= OUR STORY ================= */}
        <CompanySection title="Our Story">
          <div className="text-block-centered">
            <p className="company-text">
              NeX UP was created with a single belief: that the future of
              technology won’t live inside flat screens, but inside intelligent
              environments that understand space, context, and human intention.
            </p>
            <p className="company-text">
              From early experiments with immersive AR/VR worlds to the design
              of spatial intelligence systems, NeX UP evolved into a platform
              that connects people, spaces, and information in one unified
              ecosystem.
            </p>
          </div>
        </CompanySection>

        {/* ================= MISSION & VISION ================= */}
        <section className="company-section">
          <div className="company-section-inner company-mission-vision">
            <motion.div 
              className="mission-card glass-panel"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h2 className="gradient-title section-title-small">Our Mission</h2>
              <p className="company-text-small">
                To bridge the gap between physical and digital worlds by
                building intelligent systems that understand context, space, and
                human behavior.
              </p>
            </motion.div>

            <motion.div 
              className="vision-card glass-panel"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h2 className="gradient-title section-title-small">Our Vision</h2>
              <p className="company-text-small">
                A world where intelligence becomes ambient, environments adapt
                to us seamlessly, and people move through digital spaces
                naturally.
              </p>
            </motion.div>
          </div>
        </section>

        <BreakLine />

        {/* ================= ECOSYSTEM (Staggered Grid) ================= */}
        <CompanySection title="The NeX UP Ecosystem">
          <p className="company-text centered-intro">
            NeX UP is a connected ecosystem designed to power the next era of
            spatial computing and intelligent environments.
          </p>
          
          <motion.div
            className="ecosystem-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {ECOSYSTEM_DATA.map((item, idx) => (
              <GlassCard 
                key={idx} 
                title={item.title} 
                text={item.text} 
                icon={item.icon}
                index={idx}
              />
            ))}
          </motion.div>
        </CompanySection>

        <BreakLine />

        {/* ================= VALUES ================= */}
        <CompanySection title="What We Stand For">
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {VALUES_DATA.map((val, idx) => (
              <GlassCard 
                key={idx} 
                title={val.title} 
                text={val.text} 
                icon={val.icon || <FiCheck />}
                index={idx}
              />
            ))}
          </motion.div>
        </CompanySection>

        <BreakLine />

        {/* ================= ROADMAP ================= */}
        <CompanySection title="Our Roadmap">
          <div className="roadmap-container">
            {ROADMAP_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="roadmap-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="roadmap-marker"></div>
                <div className="roadmap-content">
                  <span className="roadmap-year">{item.year}</span>
                  <p className="roadmap-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="company-final-section">
          <motion.div
            className="company-final"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="gradient-title final-big">
              Collaborate with NeX UP
            </h2>
            <p className="final-text">
              Whether you’re a creator, company, or builder of future systems,
              we’d love to connect and explore what we can build together.
            </p>
            <div className="company-final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>
                Contact Us →
              </button>
              <button className="ghost-btn" onClick={() => navigate("/about/career")}>
                Explore Careers →
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* --- SUB-COMPONENTS --- */
function CompanySection({ title, children, className = "" }) {
  return (
    <section className={`company-section ${className}`}>
      <motion.div
        className="company-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ willChange: 'transform, opacity' }} 
      >
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

// ⭐ 5. Horizontal Expanding BreakLine Component
function BreakLine() {
  return (
    <motion.div 
      className="break-line" 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ transformOrigin: 'center' }}
    />
  );
}