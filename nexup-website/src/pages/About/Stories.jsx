// src/pages/About/Stories.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Stories.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA CONSTANTS --- */
const CATEGORIES = ["All", "Engineering", "Design", "Research", "Culture", "NexWorld"];

/* 13. Tag Color Mapping */
const TAG_COLORS = {
  Engineering: "#5fb6ff",
  Design: "#b8a9ff",
  Research: "#8af9ff",
  Culture: "#ffe59d",
  NexWorld: "#ff9dff",
  Announcements: "#ffffff"
};

const FEATURED_STORY = {
  id: "featured-1",
  tag: "Design",
  title: "Designing the Future of Spatial Interfaces",
  desc: "How the NeX UP design team is shaping interaction patterns that feel natural inside AR, VR, and adaptive intelligent environments.",
  readTime: "8 min read",
  date: "Oct 12, 2025",
  image: "https://res.cloudinary.com/dgzikn7nn/image/upload/v1709848523/nex-spatial-design.jpg" // Placeholder
};

const STORIES_DATA = [
  {
    id: 1,
    tag: "Engineering",
    title: "How NexNode Synchronizes Spatial Intelligence",
    desc: "Exploring the architecture behind real-time, world-scale intelligent systems.",
    readTime: "6 min read",
    size: "wide", 
  },
  {
    id: 2,
    tag: "NexWorld",
    title: "The Evolution of Digital Environments",
    desc: "From simulation-based prototypes to fully adaptive spatial worlds.",
    readTime: "5 min read",
    size: "standard",
  },
  {
    id: 3,
    tag: "Research",
    title: "Understanding Human Spatial Cognition",
    desc: "How neuroscience guides the future of AR/VR experience design.",
    readTime: "10 min read",
    size: "standard",
  },
  {
    id: 4,
    tag: "Culture",
    title: "Life at NeX UP: A Builder’s Diary",
    desc: "A behind-the-scenes look at how our builders prototype the future.",
    readTime: "4 min read",
    size: "standard",
  },
  {
    id: 5,
    tag: "Announcements",
    title: "NexWorld Alpha: What to Expect",
    desc: "Our biggest update yet for immersive spatial environments.",
    readTime: "3 min read",
    size: "wide",
  },
];

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Stories() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = useMemo(() => {
    return activeCategory === "All" 
      ? STORIES_DATA 
      : STORIES_DATA.filter(story => story.tag === activeCategory);
  }, [activeCategory]);

  return (
    <div className="stories-page">
      <div className="stories-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="stories-hero-section">
          <div className="stories-glow" />
          <motion.div
            className="stories-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">The NeX UP Journal</span>
            <h1 className="gradient-title stories-hero-title">
              Insights from the Edge of Reality.
            </h1>
            <p className="stories-hero-sub">
              Breakthroughs, designs, and ideas shaping the intelligent digital universe.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FEATURED STORY ================= */}
        <section className="featured-section">
          <motion.div
            className="featured-card glass-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/stories/${FEATURED_STORY.id}`)}
          >
            <div className="featured-image-container">
               {/* 15. Lazy Loading */}
               <div className="featured-img placeholder-img">Featured Visual</div>
            </div>

            <div className="featured-content">
              <div className="meta-row">
                <span 
                  className="story-tag tag-highlight"
                  style={{ color: TAG_COLORS[FEATURED_STORY.tag] || '#b8a9ff' }}
                >
                  {FEATURED_STORY.tag}
                </span>
                <span className="story-date">{FEATURED_STORY.date} • {FEATURED_STORY.readTime}</span>
              </div>

              <h2 className="featured-title">{FEATURED_STORY.title}</h2>
              <p className="featured-text">{FEATURED_STORY.desc}</p>

              <button className="read-more-btn">Read Full Story</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CATEGORY FILTER ================= */}
        <section className="category-section">
          <div className="category-scroll-container"> {/* Container for mobile scroll */}
            <div className="category-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {/* 4. Active Underline */}
                  {activeCategory === cat && (
                    <motion.div 
                      className="active-line" 
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STORIES GRID (BENTO STYLE) ================= */}
        <section className="stories-list-section">
          <AnimatePresence mode="wait">
            {/* 5. Fade Transition on Category Change */}
            <motion.div 
              className="bento-grid"
              key={activeCategory} 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredStories.map((story) => (
                <motion.div 
                  key={story.id} 
                  className={`story-card glass-panel card-${story.size}`}
                  variants={cardVariants}
                  // 14. Click Navigation
                  onClick={() => navigate(`/stories/${story.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-image-wrapper">
                    <div className="card-img placeholder-img">Image</div>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      {/* 13. Dynamic Tag Color */}
                      <span 
                        className="story-tag"
                        style={{ color: TAG_COLORS[story.tag] || '#fff' }}
                      >
                        {story.tag}
                      </span>
                      <span className="read-time">{story.readTime}</span>
                    </div>
                    <h3>{story.title}</h3>
                    <p>{story.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        <BreakLine />

        {/* ================= NEWSLETTER ================= */}
        <section className="newsletter-section">
          <motion.div
            className="newsletter-box glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="newsletter-content">
              <h2 className="gradient-title">Stay in the loop.</h2>
              <p>Get the latest engineering deep dives and design insights delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="white-btn">Subscribe</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="stories-final-section">
          <motion.div
            className="stories-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Build the future with us.
            </h2>
            <p className="final-text">
              Join NeX UP and help define the next era of immersive technology.
            </p>
            <div className="stories-final-actions">
              <button className="white-btn" onClick={() => navigate("/about/career")}>
                Explore Careers →
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Contact Us →
              </button>
            </div>
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