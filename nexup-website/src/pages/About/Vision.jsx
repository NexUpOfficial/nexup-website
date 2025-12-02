// src/pages/About/Vision.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Vision.css";
import Footer from "../../components/Footer/Footer";

export default function Vision() {
  const navigate = useNavigate();

  return (
    <div className="vision-page">
      <div className="vision-wrapper">

        {/* ================= HERO ================= */}
        <section className="full-section hero-full">
          <motion.div
            className="vision-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="gradient-title big-hero">
              Creating the bridge between reality and the intelligent digital universe.
            </h1>

            <p className="hero-text">
              Technology should extend imagination — not interrupt it.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= SECTION 1 ================= */}
        <Section
          title="A world where intelligence becomes ambient."
          text={`Our vision moves beyond screens and devices.  
We focus on presence, connection, and intuitive digital reality.

Digital information should live in your environment.  
Interactions should feel natural, fluid, and invisible.`}
        />

        <BreakLine />

        {/* ================= SECTION 2 ================= */}
        <Section
          title="Why We Are Building This"
          text={`Humans think in 3D, yet technology is trapped in 2D rectangles.

To unlock the next era of intelligence, we need new spatial frameworks,
immersive systems, and adaptive environments.

NeX UP is creating the foundation for the next human–computer era.`}
        />

        <BreakLine />

        {/* ================= PILLARS ================= */}
        <section className="full-section">
          <motion.div
            className="pillars-sec"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title section-title">
              The Architectural Pillars of Our Vision
            </h2>

            <div className="pillars-grid">
              <Card
                title="Spatial Intelligence Layer"
                text="A system that understands depth, space, movement, and context — recognizing environments the way humans do."
              />

              <Card
                title="Unified NeX UP Ecosystem"
                text="NexWorld, NexNode, NexHousing, and NexEngine work as one connected system."
              />

              <Card
                title="Trust, Safety & Transparency"
                text="Built with clarity, control, and user empowerment — always."
              />
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= ROADMAP ================= */}
        <Section
          title="The Path Ahead"
          text={`2025–2026 — Spatial foundation & NexNode connectivity.\n
2026–2027 — Early-access NexWorld & adaptive environments.\n
2027–2030 — Persistent digital worlds & full spatial computing.`}
        />

        <BreakLine />

        {/* ================= FINAL SECTION ================= */}
        <section className="full-section">
          <motion.div
            className="final-section"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
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

      {/* FOOTER — same pattern as Home */}
      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, text }) {
  return (
    <section className="full-section">
      <motion.div
        className="vision-sec"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="gradient-title section-title">{title}</h2>
        <p className="sec-text">{text}</p>
      </motion.div>
    </section>
  );
}

function Card({ title, text }) {
  return (
    <motion.div
      className="pillar-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}
