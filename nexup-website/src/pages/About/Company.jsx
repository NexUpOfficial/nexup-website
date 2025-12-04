// src/pages/About/Company.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Company.css";
import Footer from "../../components/Footer/Footer";
// Assuming these small components are now imported from a dedicated file
// import { CompanySection, BreakLine, EcosystemCard, ValueCard, RoadmapItem } from "../../components/About/CompanyComponents";

// If you prefer to keep the components in this file (as in the original prompt), 
// keep them at the bottom. For this example, I will keep them at the bottom 
// and incorporate the new RoadmapItem component.

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="company-page">
      <div className="company-wrapper">
        {/* ================= HERO ================= */}
        <section className="company-hero-section">
          <motion.div
            className="company-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
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

        {/* ================= CEO SECTION - Added className for CSS inversion ================= */}
        <CompanySection title="From Our Founder & CEO" className="ceo-section-alt"> 
          <div className="company-ceo-layout">
            <motion.div
              className="company-ceo-image placeholder-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              CEO Photo
            </motion.div>

            <motion.div
              className="company-ceo-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="company-ceo-name">Jothish Gandham</h3>
              <p className="company-ceo-role">Founder & CEO, NeX UP</p>

              <p className="company-ceo-quote">
                “NeX UP exists to push the boundaries of what digital reality can be.
                We’re not just building products — we’re building the foundation
                for how people will live, work, and create inside intelligent environments.”
              </p>
            </motion.div>
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= OUR STORY ================= */}
        <CompanySection title="Our Story">
          <p className="company-text">
            NeX UP was created with a single belief: that the future of technology
            won’t live inside flat screens, but inside intelligent environments that
            understand space, context, and human intention.
          </p>
          <p className="company-text">
            From early experiments with immersive AR/VR worlds to the design of
            spatial intelligence systems, NeX UP evolved into a platform that connects
            people, spaces, and information in one unified ecosystem.
          </p>
          <p className="company-text">
            Today, NeX UP is focused on building the underlying architecture for
            NexWorld, NexNode, NexEngine, NexHousing, and NexSearch — the core
            pillars of a new kind of digital reality.
          </p>
        </CompanySection>

        <BreakLine />

        {/* ================= MISSION & VISION ================= */}
        <section className="company-section">
          <motion.div
            className="company-section-inner company-mission-vision"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="company-mission-block">
              <h2 className="gradient-title section-title">Our Mission</h2>
              <p className="company-text">
                To bridge the gap between physical and digital worlds by building
                intelligent systems that understand context, space, and human behavior —
                enabling experiences that feel as real as the world around us.
              </p>
            </div>

            <div className="company-vision-block">
              <h2 className="gradient-title section-title">Our Vision</h2>
              <p className="company-text">
                A world where intelligence becomes ambient, environments adapt to us
                seamlessly, and people move through digital spaces as naturally as they
                move through the physical world.
              </p>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= ECOSYSTEM ================= */}
        <CompanySection title="The NeX UP Ecosystem">
          <p className="company-text">
            NeX UP is not a single product — it is a connected ecosystem designed to
            power the next era of spatial computing, immersive systems, and intelligent
            environments.
          </p>

          <div className="ecosystem-grid">
            <EcosystemCard
              title="NexWorld"
              text="An immersive world engine that powers 3D environments, spatial AR, and interactive digital ecosystems."
            />
            <EcosystemCard
              title="NexNode"
              text="A network of intelligent nodes connecting data, users, and environments into one coherent digital universe."
            />
            <EcosystemCard
              title="NexEngine"
              text="The computation and intelligence core that processes context, behavior, and environmental signals in real time."
            />
            <EcosystemCard
              title="NexHousing"
              text="Spatial tools and systems for next-generation living, architecture, and digital property experiences."
            />
            <EcosystemCard
              title="NexSearch"
              text="A search layer for spatial and immersive contexts — enabling discovery inside 3D worlds and AR overlays."
            />
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= VALUES ================= */}
        <CompanySection title="What We Stand For">
          <div className="values-grid">
            <ValueCard
              title="Integrity"
              text="We design technology with transparency, respect, and responsibility — putting people and trust at the center."
            />
            <ValueCard
              title="Innovation"
              text="We experiment relentlessly, embracing new ideas, technologies, and models that push beyond what exists today."
            />
            <ValueCard
              title="Humanity"
              text="Every system we build is meant to amplify human capability, not replace it — making creativity and exploration easier."
            />
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= TRUST & SAFETY ================= */}
        <CompanySection title="Trust, Safety & Responsibility">
          <p className="company-text">
            NeX UP is committed to building technology that people can trust. We believe
            that immersive and intelligent systems must be built with clear boundaries,
            strong safeguards, and user control at the core.
          </p>
          <p className="company-text">
            From data minimization and transparency to clear consent and privacy-first
            design, our approach to safety is integrated from the earliest stages of
            development — not added as an afterthought.
          </p>
        </CompanySection>

        <BreakLine />

        {/* ================= ROADMAP - Using new RoadmapItem component ================= */}
        <CompanySection title="Our Roadmap">
          <div className="roadmap-list">
            <RoadmapItem
              yearRange="2025 – 2026"
              description="Foundation of NexNode, early spatial frameworks, and ecosystem architecture."
            />
            <RoadmapItem
              yearRange="2026 – 2027"
              description="Early-access NexWorld environments, NexHousing pilots, and developer tooling."
            />
            <RoadmapItem
              yearRange="2027 – 2030"
              description="Persistent digital worlds, global-scale spatial experiences, and fully realized NeX UP ecosystem."
            />
          </div>
        </CompanySection>

        <BreakLine />

        {/* ================= CULTURE - Content emphasis added ================= */}
        <CompanySection title="How We Work">
          <p className="company-text">
            NeX UP is built for people who want to explore, invent, and build systems
            that last. We combine deep focus with experimentation, structure with
            creativity, and high standards with long-term patience.
          </p>

          <ul className="company-culture-list">
            <li>We prototype ideas **quickly**, test them **deeply**, and scale what works.</li>
            <li>We work across disciplines — **engineering, design, and research** move together.</li>
            <li>We value **clarity, honesty, and ownership** in everything we build.</li>
          </ul>
        </CompanySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="company-final-section">
          <motion.div
            className="company-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Want to collaborate with NeX UP?
            </h2>

            <p className="final-text">
              Whether you’re a creator, company, or builder of future systems, we’d love
              to connect and explore what we can build together.
            </p>

            <div className="company-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/about/career")}
              >
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

/* ================= REUSABLE COMPONENTS ================= */

function CompanySection({ title, children, className = "" }) {
  return (
    <section className={`company-section ${className}`}> {/* Added className prop */}
      <motion.div
        className="company-section-inner"
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

// NEW COMPONENT FOR ROADMAP
function RoadmapItem({ yearRange, description }) {
  return (
    <div className="roadmap-item">
      <span>{yearRange}</span>
      <p>{description}</p>
    </div>
  );
}

function EcosystemCard({ title, text }) {
  return (
    <motion.div
      className="ecosystem-card"
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