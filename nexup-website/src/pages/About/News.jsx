// src/pages/About/News.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/News.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const CATEGORIES = ["All", "Product", "Company", "Events", "Press"];

const FEATURED_NEWS = {
  tag: "Major Release",
  title: "NexWorld Alpha: A New Step Toward Immersive Spatial Reality.",
  date: "Dec 10, 2025",
  desc: "NeX UP announces the NexWorld Alpha — a major milestone in building adaptive, immersive 3D environments that respond intelligently to context, behavior, and presence.",
};

const NEWS_DATA = [
  {
    id: 1,
    tag: "Product",
    title: "NexNode Developer Preview Now Open",
    date: "Nov 28, 2025",
    desc: "Developers can now begin experimenting with the NexNode intelligence network.",
    size: "wide", // Takes 2 columns
  },
  {
    id: 2,
    tag: "Company",
    title: "Series B Funding Announcement",
    date: "Nov 15, 2025",
    desc: "Accelerating the development of the spatial web.",
    size: "standard",
  },
  {
    id: 3,
    tag: "Research",
    title: "Spatial Cognition Report",
    date: "Oct 30, 2025",
    desc: "How neuroscience guides our AR/VR design.",
    size: "standard",
  },
  {
    id: 4,
    tag: "Events",
    title: "NeX UP Summit 2026",
    date: "Oct 12, 2025",
    desc: "Save the date for our annual developer conference.",
    size: "standard",
  },
  {
    id: 5,
    tag: "Partnership",
    title: "NeX UP x Hardware Partners",
    date: "Sep 20, 2025",
    desc: "Integrating NexEngine with next-gen glasses.",
    size: "standard",
  },
];

const UPDATES_LOG = [
  { version: "v0.9.2", date: "Yesterday", title: "NexWorld Performance Patch", desc: "Optimized rendering pipeline for low-latency devices." },
  { version: "v0.9.0", date: "Last Week", title: "Spatial Audio Engine", desc: "Introduced ray-traced audio occlusion for realistic soundscapes." },
  { version: "v0.8.5", date: "Nov 2025", title: "Avatar SDK Beta", desc: "New tools for creating high-fidelity digital identities." },
];

const PRESS_DATA = [
  { outlet: "TechCrunch", quote: "NeX UP is redefining the layer between reality and intelligence." },
  { outlet: "The Verge", quote: "A bold new approach to spatial computing architecture." },
  { outlet: "Wired", quote: "The most ambitious vision for the metaverse we've seen yet." },
];

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

export default function News() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="news-page">
      <div className="news-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="news-hero-section">
          <div className="news-glow" />
          <motion.div
            className="news-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">Newsroom</span>
            <h1 className="gradient-title news-hero-title">
              The Pulse of NeX UP.
            </h1>
            <p className="news-hero-sub">
              Official updates, product releases, and announcements from the ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FEATURED STORY ================= */}
        <section className="news-featured">
          <motion.div
            className="featured-card glass-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="featured-img placeholder-img">
              <span>Featured Image</span>
            </div>
            <div className="featured-content">
              <div className="news-meta">
                <span className="tag-highlight">{FEATURED_NEWS.tag}</span>
                <span className="date">{FEATURED_NEWS.date}</span>
              </div>
              <h2 className="featured-title">{FEATURED_NEWS.title}</h2>
              <p className="featured-desc">{FEATURED_NEWS.desc}</p>
              <button className="read-link">Read Announcement →</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CATEGORY FILTER ================= */}
        <section className="category-bar">
          <div className="category-scroll">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ================= NEWS GRID (BENTO) ================= */}
        <NewsSection title="Latest Updates">
          <motion.div 
            className="news-bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {NEWS_DATA.map((news) => (
              <motion.div 
                key={news.id} 
                className={`news-card glass-panel card-${news.size}`}
                variants={itemVariants}
              >
                <div className="card-top">
                  <span className="news-tag">{news.tag}</span>
                  <span className="news-date">{news.date}</span>
                </div>
                <h3>{news.title}</h3>
                <p>{news.desc}</p>
                <div className="card-hover-arrow">→</div>
              </motion.div>
            ))}
          </motion.div>
        </NewsSection>

        <BreakLine />

        {/* ================= CHANGELOG (Technical) ================= */}
        <NewsSection title="Changelog">
          <div className="changelog-container">
            {UPDATES_LOG.map((log, idx) => (
              <motion.div 
                key={idx} 
                className="changelog-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="changelog-meta">
                  <span className="version-badge">{log.version}</span>
                  <span className="log-date">{log.date}</span>
                </div>
                <div className="changelog-content">
                  <h4>{log.title}</h4>
                  <p>{log.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= PRESS & MEDIA ================= */}
        <NewsSection title="In The Media">
          <div className="press-grid">
            {PRESS_DATA.map((press, idx) => (
              <motion.div 
                key={idx} 
                className="press-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="press-logo">{press.outlet}</div>
                <p>"{press.quote}"</p>
              </motion.div>
            ))}
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="news-final-section">
          <motion.div
            className="news-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Stay ahead of the curve.
            </h2>
            <p className="final-text">
              Subscribe to get the latest developer updates, product news, and research insights.
            </p>
            <div className="newsletter-form-simple">
              <input type="email" placeholder="Enter your email" />
              <button className="white-btn">Subscribe</button>
            </div>
            
            <div className="press-contact-link">
               <span onClick={() => navigate("/contact")}>Media Inquiry? Contact Us</span>
            </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function NewsSection({ title, children }) {
  return (
    <section className="news-section">
      <motion.div
        className="news-section-inner"
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