// src/pages/About/Team.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Team.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA CONSTANTS --- */
const LEADERSHIP_DATA = [
  {
    name: "Jothish Gandham",
    role: "Vision Architect & Founder",
    bio: "Leading the creation of the NeX UP spatial ecosystem, connecting physical and digital intelligence through adaptive systems.",
  },
  {
    name: "Alex V.",
    role: "Co-Founder / CTO",
    bio: "Building the intelligence infrastructure powering NexWorld, NexNode, and spatial computing frameworks.",
  },
  {
    name: "Sarah L.",
    role: "Head of Operations",
    bio: "Ensuring seamless execution across engineering, design, research, and multi-layer ecosystem development.",
  },
];

const TEAMS_DATA = {
  engineering: [
    { title: "Spatial Computing", text: "Build immersive processing pipelines enabling real-time spatial understanding." },
    { title: "Platform & Systems", text: "Architect scalable computation for NexNode and cross-ecosystem intelligence." },
    { title: "Experience Eng.", text: "Craft performance-optimized interfaces that merge with immersive worlds." },
  ],
  design: [
    { title: "Spatial UI/UX", text: "Define interaction models that feel natural in digital + physical worlds." },
    { title: "3D & World Building", text: "Shape dynamic scenes, world interfaces, and immersive visual systems." },
    { title: "Motion Design", text: "Craft motion languages that blend with real-world physics and presence." },
  ],
  research: [
    { title: "AI & Cognition", text: "Develop agents that understand spatial context, intent, and behavior." },
    { title: "Spatial Research", text: "Study how humans perceive environments to build intuitive systems." },
    { title: "HCI Labs", text: "Experiment with future interaction paradigms and spatial interfaces." },
  ],
};

const CULTURE_IMAGES = [
  { id: 1, size: "large", label: "Collab Space" },
  { id: 2, size: "small", label: "VR Testing" },
  { id: 3, size: "small", label: "Team Retreat" },
  { id: 4, size: "wide", label: "Hackathon" },
];

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Team() {
  const navigate = useNavigate();

  return (
    <div className="team-page">
      <div className="team-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="team-hero-section">
          <div className="team-glow" /> {/* Background Glow */}
          <motion.div
            className="team-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <h1 className="gradient-title team-hero-title">
              Meet the Minds Behind NeX UP.
            </h1>
            <p className="team-hero-sub">
              NeX UP is shaped by engineers, designers, researchers, and creators
              building the future of intelligent digital reality.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= LEADERSHIP ================= */}
        <TeamSection title="Leadership">
          <motion.div 
            className="leaders-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {LEADERSHIP_DATA.map((leader, idx) => (
              <motion.div 
                key={idx} 
                className="leader-card glass-panel"
                variants={cardVariants}
              >
                <div className="leader-avatar-wrapper">
                  <div className="leader-avatar placeholder-img">Photo</div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TeamSection>

        <BreakLine />

        {/* ================= DEPARTMENTS (Engineering) ================= */}
        <TeamSection title="Engineering">
          <p className="team-text centered-intro">
            Powering the foundation of real-time spatial computation and intelligent networks.
          </p>
          <GridSection data={TEAMS_DATA.engineering} />
        </TeamSection>

        <BreakLine />

        {/* ================= DEPARTMENTS (Design) ================= */}
        <TeamSection title="Design">
          <p className="team-text centered-intro">
            Building how the future feels — fluid, intuitive, beautiful, and human-centered.
          </p>
          <GridSection data={TEAMS_DATA.design} />
        </TeamSection>

        <BreakLine />

        {/* ================= DEPARTMENTS (Research) ================= */}
        <TeamSection title="Research">
          <p className="team-text centered-intro">
            Exploring human cognition, adaptive intelligence, and next-gen interaction models.
          </p>
          <GridSection data={TEAMS_DATA.research} />
        </TeamSection>

        <BreakLine />

        {/* ================= LIFE AT NEX UP (Masonry) ================= */}
        <TeamSection title="Life at NeX UP">
          <p className="team-text centered-intro">
            A culture built for builders — experimentation, deep work, and breakthroughs.
          </p>
          [Image of modern open office collaboration space with futuristic lighting]
          <motion.div 
            className="life-masonry-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {CULTURE_IMAGES.map((img) => (
              <div key={img.id} className={`life-item item-${img.size}`}>
                <div className="life-img-placeholder">{img.label}</div>
              </div>
            ))}
          </motion.div>
        </TeamSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="team-final-section">
          <motion.div
            className="team-final"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Join the future.
            </h2>
            <p className="final-text">
              Start building with a team pushing the boundaries of immersive technology.
            </p>
            <button
              className="white-btn"
              onClick={() => navigate("/about/career")}
            >
              Explore Careers →
            </button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function TeamSection({ title, children }) {
  return (
    <section className="team-section">
      <motion.div
        className="team-section-inner"
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

function GridSection({ data }) {
  return (
    <motion.div 
      className="teams-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {data.map((item, idx) => (
        <motion.div 
          key={idx} 
          className="team-card glass-panel"
          variants={cardVariants}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}