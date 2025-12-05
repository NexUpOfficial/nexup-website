// src/pages/Ecosystem/NexSearch.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexSearch.css";
import Footer from "../../components/Footer/Footer";

/* --- ANIMATION VARIANTS --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function NexSearch() {
  const navigate = useNavigate();

  return (
    <div className="nexsearch-page">
      
      {/* ================= HERO SECTION (Search Simulation) ================= */}
      <section className="nexsearch-hero-section">
        <div className="nexsearch-glow" />
        
        <motion.div
          className="nexsearch-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-badge">Spatial Intelligence v1.0</div>
          <h1 className="nexsearch-hero-title">Search Reality.</h1>
          <p className="nexsearch-hero-sub">
            Query the world around you. From digital artifacts to physical objects, 
            NexSearch indexes the entire NeX UP ecosystem.
          </p>

          {/* Search Bar Visual */}
          <div className="hero-search-simulation">
            <span className="search-prompt">{">"}</span>
            <span className="search-placeholder">Find "quiet workspaces" in NexWorld...</span>
            <span className="search-cursor">_</span>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="nexsearch-wrapper">
        
        {/* ================= DEFINITION ================= */}
        <section className="nexsearch-section intro-section">
          <motion.div 
            className="intro-text-block glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="gradient-title section-title">Beyond Keywords</h2>
            <p className="nexsearch-text large-text">
              NexSearch is not a web crawler. It is a spatial indexer. 
              It understands geometry, context, and intent. Whether you are looking for 
              a specific room in a virtual city or an AR note left on a physical wall, 
              NexSearch finds it.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CORE CAPABILITIES (Bento Grid) ================= */}
        <NexSearchSection title="Core Capabilities">
          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Wide Card */}
            <motion.div className="bento-card card-wide" variants={fadeInUp}>
              <div className="card-label">01 // Spatial Query</div>
              <h3>Geometry Aware</h3>
              <p>Understands queries about locations, rooms, layouts, and proximity. "Show me coffee spots within 50 meters."</p>
            </motion.div>

            {/* Standard Cards */}
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">02 // Vision</div>
              <h3>Object Recognition</h3>
              <p>Indexes 3D assets and physical objects identified by AR sensors.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">03 // Semantics</div>
              <h3>Contextual Intent</h3>
              <p>Understands abstract requests like "a place to focus" based on environment data.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">04 // Discovery</div>
              <h3>AR Layer Detection</h3>
              <p>Finds hidden digital overlays, notes, and holograms anchored in reality.</p>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="card-label">05 // Knowledge</div>
              <h3>Deep Graph</h3>
              <p>Connects entities (people, places, things) into a navigable web of relations.</p>
            </motion.div>
          </motion.div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= HOW IT WORKS (Process Flow) ================= */}
        <NexSearchSection title="Query Pipeline">
          <div className="pipeline-container">
            <PipelineStep 
              num="01" 
              title="Input" 
              text="Voice, text, or gaze-based query initiation." 
            />
            <PipelineStep 
              num="02" 
              title="Parse" 
              text="NLP engine extracts intent and spatial context." 
            />
            <PipelineStep 
              num="03" 
              title="Scan" 
              text="NexNodes query local and cloud spatial indexes." 
            />
            <PipelineStep 
              num="04" 
              title="Render" 
              text="Results appear as AR overlays or navigation paths." 
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= USE CASES ================= */}
        <NexSearchSection title="Applications">
          <div className="usecase-list">
            <UseCaseRow 
              title="Navigation" 
              desc="Find specific rooms, exits, or assets inside complex digital twins." 
            />
            <UseCaseRow 
              title="Asset Management" 
              desc="Locate digital tools or files left in specific spatial coordinates." 
            />
            <UseCaseRow 
              title="Social Discovery" 
              desc="Find where your team is gathering within NexWorld environments." 
            />
            <UseCaseRow 
              title="Safety Checks" 
              desc="Identify hazardous zones or restricted areas in simulation." 
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= FUTURE ROADMAP ================= */}
        <NexSearchSection title="Future Intelligence">
          <div className="roadmap-box glass-panel">
            <p className="roadmap-text">
              NexSearch is evolving into a predictive engine. Future versions will anticipate 
              your needs based on your trajectory, schedule, and past interactions, 
              surfacing relevant world-data before you even ask.
            </p>
            <div className="roadmap-tags">
              <span>Predictive caching</span>
              <span>Neural search</span>
              <span>Cross-reality indexing</span>
            </div>
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexsearch-final-section">
          <motion.div
            className="nexsearch-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Find anything, anywhere.
            </h2>
            <p className="final-text">
              NexSearch makes the invisible visible. Start exploring the indexed universe.
            </p>

            <div className="nexsearch-final-actions">
              <button className="white-btn" onClick={() => navigate("/ecosystem")}>
                Back to Ecosystem
              </button>
              <button className="ghost-btn" onClick={() => navigate("/contact")}>
                Request API Access
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function NexSearchSection({ title, children }) {
  return (
    <section className="nexsearch-section">
      <div className="nexsearch-section-inner">
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function PipelineStep({ num, title, text }) {
  return (
    <div className="pipeline-step glass-panel-sm">
      <div className="step-number">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function UseCaseRow({ title, desc }) {
  return (
    <motion.div 
      className="usecase-row"
      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}