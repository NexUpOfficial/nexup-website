// src/pages/About/Team.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Team.css";
import Footer from "../../components/Footer/Footer";

export default function Team() {
  const navigate = useNavigate();

  return (
    <div className="team-page">
      <div className="team-wrapper">

        {/* ================= HERO ================= */}
        <section className="team-hero-section">
          <motion.div
            className="team-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title team-hero-title">
              Meet the Minds Behind NeX UP.
            </h1>

            <p className="team-hero-sub">
              NeX UP is shaped by engineers, designers, researchers, and creators
              who are building the future of intelligent digital reality.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= LEADERSHIP ================= */}
        <TeamSection title="Leadership">
          <div className="leaders-grid">
            <LeaderCard
              name="Jothish Gandham"
              role="Vision Architect & Founder"
              bio="Leading the creation of the NeX UP spatial ecosystem, connecting physical and digital intelligence through adaptive, immersive systems."
            />

            <LeaderCard
              name="Placeholder Name"
              role="Co-Founder / CTO"
              bio="Building the intelligence infrastructure powering NexWorld, NexNode, and spatial computing frameworks."
            />

            <LeaderCard
              name="Placeholder Name"
              role="Operations Lead"
              bio="Ensuring seamless execution across engineering, design, research, and multi-layer ecosystem development."
            />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= ENGINEERING ================= */}
        <TeamSection title="Engineering Team">
          <p className="team-text">
            Engineering powers the foundation of NeX UP — real-time spatial 
            computation, AR/VR systems, and intelligent networks.
          </p>

          <div className="teams-grid">
            <TeamGroupCard
              title="Spatial Computing Engineers"
              text="Build immersive processing pipelines, enabling real-time spatial understanding."
            />

            <TeamGroupCard
              title="Platform & Systems Engineers"
              text="Architect scalable computation for NexNode and cross-ecosystem intelligence."
            />

            <TeamGroupCard
              title="Experience Engineers"
              text="Craft performance-optimized interfaces that merge with immersive worlds."
            />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= DESIGN ================= */}
        <TeamSection title="Design Team">
          <p className="team-text">
            Designers at NeX UP build how the future feels — fluid, intuitive, 
            beautiful, and human-centered.
          </p>

          <div className="teams-grid">
            <TeamGroupCard
              title="Spatial UI/UX Designers"
              text="Define interaction models that feel natural in digital + physical worlds."
            />

            <TeamGroupCard
              title="3D & Experience Designers"
              text="Shape dynamic scenes, world interfaces, and immersive visual systems."
            />

            <TeamGroupCard
              title="Motion and Interaction Designers"
              text="Craft motion languages that blend with real-world physics and presence."
            />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= RESEARCH ================= */}
        <TeamSection title="Research Team">
          <p className="team-text">
            Our researchers explore human cognition, adaptive intelligence, 
            and next-generation interaction models.
          </p>

          <div className="teams-grid">
            <TeamGroupCard
              title="AI & Cognitive Systems"
              text="Develop agents that understand spatial context, intent, and behavior."
            />

            <TeamGroupCard
              title="Spatial Cognition Research"
              text="Study how humans perceive environments to build intuitive systems."
            />

            <TeamGroupCard
              title="Human–Computer Interaction"
              text="Experiment with future interaction paradigms and spatial interfaces."
            />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= VALUES ================= */}
        <TeamSection title="How We Work">
          <div className="values-grid">
            <ValueCard
              title="Collaboration Without Walls"
              text="Design, research, and engineering operate as one unified creative engine."
            />

            <ValueCard
              title="Curiosity Fuels Innovation"
              text="We explore bold ideas, prototype rapidly, and build fearlessly."
            />

            <ValueCard
              title="Impact Above Everything"
              text="We aim to redefine how humans interact with technology — forever."
            />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= LIFE AT NEX UP ================= */}
        <TeamSection title="Life at NeX UP">
          <p className="team-text">
            A culture built for builders — experimentation, deep work, 
            creativity, and breakthroughs.
          </p>

          <div className="life-grid">
            <ImageCard label="Image 1" />
            <ImageCard label="Image 2" />
            <ImageCard label="Image 3" />
            <ImageCard label="Image 4" />
          </div>
        </TeamSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="team-final-section">
          <motion.div
            className="team-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Want to join NeX UP today?
            </h2>

            <p className="final-text">
        
              <br />
              Start building the future with a team pushing the boundaries 
              of immersive and intelligent technology.
            </p>

            <button
              className="white-btn"
              onClick={() => navigate("/career")}   // Proper routing
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

/* ================= COMPONENTS ================= */

function TeamSection({ title, children }) {
  return (
    <section className="team-section">
      <motion.div
        className="team-section-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
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

function LeaderCard({ name, role, bio }) {
  return (
    <motion.div
      className="leader-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="leader-image placeholder-img">Photo</div>
      <h3>{name}</h3>
      <p className="leader-role">{role}</p>
      <p className="leader-bio">{bio}</p>
    </motion.div>
  );
}

function TeamGroupCard({ title, text }) {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function ValueCard({ title, text }) {
  return (
    <motion.div
      className="value-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function ImageCard({ label }) {
  return (
    <motion.div
      className="team-life-img placeholder-img"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {label}
    </motion.div>
  );
}
