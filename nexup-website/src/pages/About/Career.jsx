// src/pages/About/Career.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Career.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const BENEFITS_DATA = [
  { title: "Remote-First", desc: "Work from anywhere. We value output over presence." },
  { title: "Frontier Tech", desc: "Access to the latest AR/VR hardware and AI compute clusters." },
  { title: "Creative Freedom", desc: "A culture of experimentation. Fail fast, learn faster." },
  { title: "Ownership", desc: "Significant equity packages. You build it, you own a piece of it." },
  { title: "Deep Work", desc: "Meeting-light days to ensure flow state for complex problem solving." },
  { title: "Growth", desc: "Stipends for courses, conferences, and continuous learning." },
];

const TEAMS_DATA = [
  { title: "Engineering", desc: "High-performance spatial computation & NexNode architecture." },
  { title: "Design", desc: "Immersive UI/UX and 3D world-building." },
  { title: "Research", desc: "Cognitive science, AI behavior, and spatial interaction." },
  { title: "Operations", desc: "Scaling the ecosystem and product execution." },
];

const OPEN_ROLES = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "AR Interaction Designer", dept: "Design", location: "Hybrid / SF", type: "Full-time" },
  { title: "3D Environment Artist", dept: "Art", location: "Remote", type: "Contract" },
  { title: "AI Systems Researcher", dept: "Research", location: "London", type: "Full-time" },
  { title: "Product Strategist", dept: "Product", location: "Remote", type: "Full-time" },
];

const CULTURE_IMGS = [
  { id: 1, label: "Hackathon" },
  { id: 2, label: "Design Sprint" },
  { id: 3, label: "VR Demo Day" },
  { id: 4, label: "Team Offsite" },
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

export default function Career() {
  const navigate = useNavigate();

  return (
    <div className="career-page">
      <div className="career-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="career-hero-section">
          <div className="career-glow" />
          <motion.div
            className="career-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">We Are Hiring</span>
            <h1 className="gradient-title career-big-title">
              Build the Interface of the Future.
            </h1>
            <p className="career-sub">
              Join the architects, engineers, and dreamers defining the next era of intelligent digital reality.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= MANIFESTO / CULTURE ================= */}
        <CareerSection title="Why NeX UP?">
          <div className="manifesto-grid">
            <motion.div 
              className="manifesto-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>More than code. Mission.</h3>
              <p>
                NeX UP isn't just a tech company. It's a laboratory for the future. 
                We are bridging the gap between physical reality and digital intelligence.
              </p>
              <p>
                We don't do "busy work." We solve hard problems in spatial computing, 
                neural interfaces, and decentralized networks. If you want to do the best work of your life, you belong here.
              </p>
            </motion.div>
            <motion.div 
              className="manifesto-visual glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              
            </motion.div>
          </div>
        </CareerSection>

        <BreakLine />

        {/* ================= BENEFITS GRID ================= */}
        <CareerSection title="Perks & Benefits">
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {BENEFITS_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="benefit-card glass-panel"
                variants={itemVariants}
              >
                <div className="benefit-icon-line" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </CareerSection>

        <BreakLine />

        {/* ================= TEAMS ================= */}
        <CareerSection title="Find Your Team">
          <motion.div 
            className="teams-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TEAMS_DATA.map((team, idx) => (
              <motion.div 
                key={idx} 
                className="team-card glass-panel"
                variants={itemVariants}
              >
                <h3>{team.title}</h3>
                <p>{team.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </CareerSection>

        <BreakLine />

        {/* ================= OPEN ROLES (JOB TICKETS) ================= */}
        <section className="career-section">
          <div className="career-section-inner">
            <h2 className="gradient-title section-title centered-title">Open Positions</h2>
            
            <motion.div 
              className="roles-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {OPEN_ROLES.map((role, idx) => (
                <motion.div 
                  key={idx} 
                  className="role-ticket glass-panel"
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div className="role-info">
                    <h3>{role.title}</h3>
                    <div className="role-meta">
                      <span className="pill">{role.dept}</span>
                      <span className="pill">{role.location}</span>
                      <span className="pill">{role.type}</span>
                    </div>
                  </div>
                  <div className="role-action">
                    <span>Apply Now</span>
                    <span className="arrow">→</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <BreakLine />

        {/* ================= LIFE AT NEX UP ================= */}
        <CareerSection title="Life at NeX UP">
          <motion.div 
            className="life-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {CULTURE_IMGS.map((img) => (
              <div key={img.id} className="life-card">
                 <div className="life-placeholder">{img.label}</div>
              </div>
            ))}
          </motion.div>
        </CareerSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="career-final-section">
          <motion.div
            className="career-final"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Don't see your role?
            </h2>
            <p className="final-text">
              We are always looking for exceptional talent. Send us your portfolio 
              and tell us how you can help build the future.
            </p>
            <button className="white-btn" onClick={() => navigate("/contact")}>
              Get in Touch →
            </button>
          </motion.div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function CareerSection({ title, children }) {
  return (
    <section className="career-section">
      <motion.div
        className="career-section-inner"
        initial={{ opacity: 0, y: 40 }}
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