// src/pages/About/News.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiActivity, FiTag, FiCalendar } from "react-icons/fi"; // Added Icons
import "../../page-styles/About/News.css";
import Footer from "../../components/Footer/Footer";

/* --- 22. DATA CONSTANTS (Ideally moved to /data/news.js, kept here for single-file context) --- */
const CATEGORIES = ["All", "Product", "Company", "Events", "Research", "Partnership"];

const FEATURED_NEWS = {
  id: "alpha-release",
  tag: "Major Release",
  title: "NexWorld Alpha: A New Step Toward Immersive Spatial Reality.",
  date: "Dec 10, 2025",
  desc: "NeX UP announces the NexWorld Alpha — a major milestone in building adaptive, immersive 3D environments that respond intelligently to context, behavior, and presence.",
  image: "https://res.cloudinary.com/dgzikn7nn/image/upload/v1709848523/nexworld-alpha-thumb.jpg" // Placeholder URL
};

const NEWS_DATA = [
  {
    id: 1,
    tag: "Product",
    title: "NexNode Developer Preview Now Open",
    date: "Nov 28, 2025",
    desc: "Developers can now begin experimenting with the NexNode intelligence network.",
    size: "wide",
    color: "purple" // 17. Brand Colors
  },
  {
    id: 2,
    tag: "Company",
    title: "Series B Funding Announcement",
    date: "Nov 15, 2025",
    desc: "Accelerating the development of the spatial web.",
    size: "standard",
    color: "gold"
  },
  {
    id: 3,
    tag: "Research",
    title: "Spatial Cognition Report",
    date: "Oct 30, 2025",
    desc: "How neuroscience guides our AR/VR design.",
    size: "standard",
    color: "teal"
  },
  {
    id: 4,
    tag: "Events",
    title: "NeX UP Summit 2026",
    date: "Oct 12, 2025",
    desc: "Save the date for our annual developer conference.",
    size: "standard",
    color: "orange"
  },
  {
    id: 5,
    tag: "Partnership",
    title: "NeX UP x Hardware Partners",
    date: "Sep 20, 2025",
    desc: "Integrating NexEngine with next-gen glasses.",
    size: "standard",
    color: "blue"
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

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // 21. Optimized Stagger
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }, 
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* --- 23. REUSABLE GLASS CARD COMPONENT --- */
const GlassCard = ({ className = "", children, onClick, style }) => (
  <motion.div 
    className={`glass-panel ${className}`}
    onClick={onClick}
    variants={itemVariants}
    // 20. Will-change
    style={{ willChange: 'transform, opacity', ...style }}
    whileHover={{ y: -6 }} // 5. Card Lift handled in Framer or CSS (using CSS for performance, this is fallback)
  >
    {children}
  </motion.div>
);

export default function News() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  // 15. Filter Logic
  const filteredNews = useMemo(() => {
    return activeCategory === "All" 
      ? NEWS_DATA 
      : NEWS_DATA.filter(n => n.tag === activeCategory);
  }, [activeCategory]);

  return (
    <div className="news-page">
      {/* 11. Performance Hint Global Style */}
      <style global jsx>{`
        .news-page * { backface-visibility: hidden; }
      `}</style>

      <div className="news-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="news-hero-section">
          {/* 2. Floating Glow Animation */}
          <div className="news-glow" /> 
          
          <motion.div
            className="news-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">Newsroom</span>
            {/* 1. Animated Gradient Title */}
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
            // 16. Navigate on click
            onClick={() => navigate(`/news/${FEATURED_NEWS.id}`)}
          >
            <div className="featured-img">
              {/* 3. Improved Featured Image Container */}
              <div className="img-overlay-gradient" />
              <span className="placeholder-text">Featured Visual</span>
            </div>
            <div className="featured-content">
              <div className="news-meta">
                <span className="tag-highlight">{FEATURED_NEWS.tag}</span>
                <span className="date">{FEATURED_NEWS.date}</span>
              </div>
              <h2 className="featured-title">{FEATURED_NEWS.title}</h2>
              <p className="featured-desc">{FEATURED_NEWS.desc}</p>
              <button className="read-link">Read Announcement <FiArrowRight /></button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CATEGORY FILTER ================= */}
        <section className="category-bar">
          <div className="category-scroll-mask"> {/* 12. Scroll Mask Container */}
            <div className="category-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {/* 7. Active Line Indicator */}
                  {activeCategory === cat && (
                    <motion.div 
                      className="active-line" 
                      layoutId="cat-line" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEWS GRID (BENTO) ================= */}
        <NewsSection title="Latest Updates">
          <AnimatePresence mode="wait">
            {/* 6. Animate Grid Reflow */}
            <motion.div 
              key={activeCategory}
              className="news-bento-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredNews.map((news) => (
                <GlassCard 
                  key={news.id} 
                  className={`news-card card-${news.size}`}
                  // 14. Click Navigation
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  <div className="card-top">
                    {/* 17. Brand Color Tags */}
                    <span className={`news-tag tag-${news.color || 'purple'}`}>
                      <FiTag className="tag-icon"/> {news.tag}
                    </span>
                    <span className="news-date"><FiCalendar /> {news.date}</span>
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.desc}</p>
                  
                  {/* 8. Image Support Placeholder (Gradient) */}
                  <div className="card-mini-visual" /> 
                  
                  <div className="card-hover-arrow">
                    <FiArrowRight />
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </NewsSection>

        <BreakLine />

        {/* ================= CHANGELOG ================= */}
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

        {/* ================= PRESS ================= */}
        <NewsSection title="In The Media">
          <div className="press-grid">
            {PRESS_DATA.map((press, idx) => (
              <GlassCard 
                key={idx} 
                className="press-card"
              >
                {/* 18. Micro Icons / Logos */}
                <div className="press-logo">
                  <FiActivity className="press-icon"/> {press.outlet}
                </div>
                {/* 10. Quote Marks */}
                <div className="quote-mark">“</div>
                <p>"{press.quote}"</p>
              </GlassCard>
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