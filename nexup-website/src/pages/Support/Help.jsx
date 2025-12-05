// src/pages/Support/Help.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiSearch, FiBook, FiCpu, FiUser, FiCreditCard, 
  FiActivity, FiArrowRight, FiClock, FiFileText, FiHelpCircle 
} from "react-icons/fi";
import "../../page-styles/Support/Help.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const POPULAR_SEARCHES = ["Reset Password", "NexNode API Key", "VR Headset Setup", "Billing"];

const SYSTEM_STATUS = {
  status: "Operational",
  color: "#4ade80", // Green
  message: "All NeX UP systems are running normally."
};

const CATEGORIES = [
  { icon: <FiUser />, title: "Account & Security", desc: "Login, 2FA, Profile Settings" },
  { icon: <FiCpu />, title: "NexNode & Technical", desc: "API, SDK, Network Status" },
  { icon: <FiActivity />, title: "NexWorld Environment", desc: "World Building, Physics, Assets" },
  { icon: <FiCreditCard />, title: "Billing & Plans", desc: "Invoices, Subscriptions, Credits" },
];

const RECENT_ARTICLES = [
  { 
    title: "Setting up your first NexWorld Environment", 
    category: "Getting Started",
    updated: "2 days ago", 
    readTime: "5 min read" 
  },
  { 
    title: "Troubleshooting Low Latency in NexNode", 
    category: "Technical",
    updated: "1 week ago", 
    readTime: "8 min read" 
  },
  { 
    title: "Understanding Spatial Audio Zones", 
    category: "Design",
    updated: "Oct 24, 2025", 
    readTime: "4 min read" 
  },
  { 
    title: "Managing Team Permissions", 
    category: "Account",
    updated: "Sep 12, 2025", 
    readTime: "3 min read" 
  },
];

const FAQS = [
  { q: "Is NeX UP free to use?", a: "The core platform is free for individuals. Enterprise features require a subscription." },
  { q: "How do I report a bug?", a: "Use the 'Report Issue' button in your dashboard or contact support below." },
  { q: "Can I monetize my NexWorld?", a: "Yes, creators can sell assets and experiences via the NeX Marketplace." },
];

/* --- ANIMATIONS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Help() {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      <div className="help-wrapper">

        {/* ================= HERO SEARCH ================= */}
        <section className="help-hero-section">
          <div className="help-glow" />
          <motion.div 
            className="help-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="gradient-title help-title">How can we help?</h1>
            
            {/* 2. Search Input Animation (CSS handles focus scale) */}
            <div className="search-container glass-panel">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for articles, guides, or troubleshooting..." 
                className="search-input"
              />
            </div>

            {/* 5. Popular Chips Animation */}
            <div className="popular-searches">
              <span>Popular:</span>
              {POPULAR_SEARCHES.map((term, i) => (
                <button key={i} className="search-chip">{term}</button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ================= SYSTEM STATUS BAR ================= */}
        {/* 9. Hover Status Bar */}
        <div className="system-status-bar" onClick={() => navigate("/status")}>
          <div className="status-indicator">
            <span className="status-dot" style={{ background: SYSTEM_STATUS.color }}></span>
            <span className="status-text">{SYSTEM_STATUS.status}: {SYSTEM_STATUS.message}</span>
          </div>
          <span className="status-link">View Status Page →</span>
        </div>

        <BreakLine />

        {/* ================= BROWSE BY CATEGORY ================= */}
        <HelpSection title="Browse Knowledge Base">
          <motion.div 
            className="category-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={idx} 
                className="category-card glass-panel"
                variants={itemVariants}
                // 3. & 4. Hover Glow & Border handled in CSS
              >
                <div className="cat-icon-wrapper">{cat.icon}</div>
                <div className="cat-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
                <FiArrowRight className="cat-arrow" />
              </motion.div>
            ))}
          </motion.div>
        </HelpSection>

        <BreakLine />

        {/* ================= RECENTLY UPDATED ARTICLES ================= */}
        <HelpSection title="Recently Updated Articles">
          <motion.div 
            className="articles-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {RECENT_ARTICLES.map((article, idx) => (
              <motion.div 
                key={idx} 
                className="article-row glass-panel-sm"
                variants={itemVariants}
              >
                {/* 6. Icon Scale on Hover (CSS) */}
                <div className="article-icon">
                  <FiFileText />
                </div>
                <div className="article-main">
                  <h4>{article.title}</h4>
                  <div className="article-meta">
                    <span className="meta-badge">{article.category}</span>
                    <span className="meta-divider">•</span>
                    <span>Updated {article.updated}</span>
                  </div>
                </div>
                <div className="article-read-time">
                  <FiClock /> {article.readTime}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </HelpSection>

        <BreakLine />

        {/* ================= FAQ ACCORDION ================= */}
        <HelpSection title="Frequently Asked Questions">
          <div className="faq-container">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="help-final-section">
          <motion.div 
            className="help-final glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // 10. Hover Animation (CSS)
          >
            <div className="final-icon">
              <FiHelpCircle />
            </div>
            <div className="final-content">
              <h2>Still can't find what you're looking for?</h2>
              <p>Our support team is available 24/7 to assist you with complex issues.</p>
            </div>
            <div className="final-actions">
              <button className="white-btn" onClick={() => navigate("/contact")}>Contact Support</button>
              <button className="ghost-btn">Join Community Discord</button>
            </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function HelpSection({ title, children }) {
  return (
    <section className="help-section">
      <motion.div 
        className="help-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Bonus: Motion Title */}
        <motion.h2 
          className="gradient-title section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </motion.div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={`faq-item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="faq-header">
        <h4>{question}</h4>
        {/* 8. Rotation Animation */}
        <span className="faq-toggle">{isOpen ? "−" : "+"}</span> 
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}