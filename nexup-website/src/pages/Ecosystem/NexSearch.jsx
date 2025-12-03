// src/pages/Ecosystem/NexSearch.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexSearch.css";
import Footer from "../../components/Footer/Footer";

export default function Search() {
  const navigate = useNavigate();

  return (
    <div className="nexsearch-page">
      <div className="nexsearch-wrapper">
        {/* ================= HERO ================= */}
        <section className="nexsearch-hero-section">
          <motion.div
            className="nexsearch-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title nexsearch-hero-title">
              NexSearch Engine
            </h1>
            <p className="nexsearch-hero-sub">
              A spatial intelligence search engine that understands the world —
              digital, physical, and everything in between.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHAT IS NEXSEARCH ================= */}
        <NexSearchSection title="What is NexSearch?">
          <p className="nexsearch-text">
            NexSearch is not just a web search bar — it is a reality engine.
            It can search across worlds, rooms, objects, overlays, and
            intelligent systems inside the NeX UP ecosystem.
          </p>
          <p className="nexsearch-text">
            Whether you're inside NexWorld, exploring AR layers in your room,
            or working across devices, NexSearch lets you ask:{" "}
            <strong>“Where is it?”</strong>, <strong>“What is this?”</strong>, or{" "}
            <strong>“Show me...”</strong> — and get spatially aware answers.
          </p>
        </NexSearchSection>

        <BreakLine />

        {/* ================= CORE CAPABILITIES ================= */}
        <NexSearchSection title="Core Capabilities">
          <div className="nexsearch-grid">
            <CapabilityCard
              title="Spatial Query Engine"
              text="Understands queries about locations, rooms, layouts, and environments — not just text."
            />
            <CapabilityCard
              title="Object Understanding"
              text="Recognizes and indexes objects, tools, and digital elements inside AR/VR scenes."
            />
            <CapabilityCard
              title="Semantic World Search"
              text="Lets you search by meaning: 'quiet space', 'bright room', or 'collaboration area'."
            />
            <CapabilityCard
              title="AR Layer Detection"
              text="Finds overlays, annotations, and virtual content anchored in the real world."
            />
            <CapabilityCard
              title="Knowledge Graph Integration"
              text="Connects environments with structured knowledge about people, places, and systems."
            />
            <CapabilityCard
              title="Real-time Context Search"
              text="Considers where you are, what you’re doing, and what’s active in your environment."
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= HOW IT WORKS ================= */}
        <NexSearchSection title="How NexSearch Works">
          <div className="pipeline-grid">
            <StepCard
              step="01"
              title="You Ask a Question"
              text="Text, voice, or future natural input — about a place, object, world, or task."
            />
            <StepCard
              step="02"
              title="Intent Understanding"
              text="The engine interprets whether you’re asking about space, data, people, or systems."
            />
            <StepCard
              step="03"
              title="Spatial & System Lookup"
              text="NexSearch queries NexEngine, NexNodes, NexWorld, and relevant data sources."
            />
            <StepCard
              step="04"
              title="Contextual Reasoning"
              text="It layers context — your location, world, preferences — on top of raw results."
            />
            <StepCard
              step="05"
              title="Response in Reality"
              text="You see results as overlays, highlights, lists, or guided navigation."
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= SEARCHING REALITY ================= */}
        <NexSearchSection title="Search Across Reality">
          <p className="nexsearch-text">
            NexSearch can search both the <strong>world around you</strong> and
            the <strong>worlds inside NexWorld</strong>.
          </p>

          <ul className="nexsearch-list">
            <li>“Show me all exits in this room.”</li>
            <li>“Find my last saved workspace in NexWorld.”</li>
            <li>“Locate an AR overlay I left near the entrance.”</li>
            <li>“Search for a calm, low-noise environment to focus.”</li>
            <li>“Highlight all interactive objects in this scene.”</li>
          </ul>
        </NexSearchSection>

        <BreakLine />

        {/* ================= INDEXING SYSTEM ================= */}
        <NexSearchSection title="Indexing Worlds, Objects & Layers">
          <p className="nexsearch-text">
            To make reality searchable, NexSearch builds structured indexes of
            the environments it interacts with.
          </p>

          <div className="index-grid">
            <IndexCard
              title="World Index"
              text="Keeps track of NexWorld spaces, rooms, and environments by type and purpose."
            />
            <IndexCard
              title="Object Graph"
              text="Links objects to locations, owners, interactions, and states."
            />
            <IndexCard
              title="Spatial Maps"
              text="Understands geometry, boundaries, paths, and points of interest."
            />
            <IndexCard
              title="Behavioral Metadata"
              text="Captures how spaces are used — quiet, crowded, collaborative, experimental."
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= AI UNDERSTANDING ================= */}
        <NexSearchSection title="AI Understanding & Intent">
          <p className="nexsearch-text">
            NexSearch uses multi-level semantics to understand what you{" "}
            <em>actually</em> mean — beyond just the words you say.
          </p>

          <ul className="nexsearch-list">
            <li>Understands queries about feelings: “calm”, “bright”, “spacious”.</li>
            <li>Understands relationships: “where we last met”, “team space”.</li>
            <li>Understands tasks: “a place to present”, “a testing lab”.</li>
            <li>Adapts results based on context, history, and environment.</li>
          </ul>
        </NexSearchSection>

        <BreakLine />

        {/* ================= USE CASES ================= */}
        <NexSearchSection title="Use Cases for NexSearch">
          <div className="usecase-grid">
            <UseCaseCard
              title="Navigation"
              text="Find rooms, spaces, or digital locations inside AR/VR worlds."
            />
            <UseCaseCard
              title="Object Lookup"
              text="Locate tools, devices, notes, or digital artifacts across environments."
            />
            <UseCaseCard
              title="Learning & Discovery"
              text="Search for explanations, references, or overlays tied to your surroundings."
            />
            <UseCaseCard
              title="Safety & Awareness"
              text="Ask about exits, safe zones, or critical infrastructure inside a world."
            />
            <UseCaseCard
              title="Creative Search"
              text="Find templates, worlds, or building blocks for new experiences."
            />
            <UseCaseCard
              title="Spatial Analytics"
              text="Query how spaces are used, which rooms are active, or where attention flows."
            />
          </div>
        </NexSearchSection>

        <BreakLine />

        {/* ================= FUTURE ================= */}
        <NexSearchSection title="The Future of NexSearch Engine">
          <p className="nexsearch-text">
            NexSearch will evolve into a continuously aware, predictive engine
            for digital and physical reality.
          </p>

          <ul className="nexsearch-list">
            <li>Predictive suggestions based on where you’re going next.</li>
            <li>Neural and natural interaction models for querying reality.</li>
            <li>Deep integration with ambient intelligence systems.</li>
            <li>Cross-world search across multiple realities and layers.</li>
          </ul>
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
              Search your world with NexSearch Engine.
            </h2>
            <p className="final-text">
              From AR overlays to entire NexWorld cities, NexSearch makes reality
              queryable, discoverable, and understandable.
            </p>

            <div className="nexsearch-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/ecosystem")}
              >
                Back to Ecosystem →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/ecosystem/nexengine")}
              >
                Learn about NexEngine →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to NeX UP →
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
      <motion.div
        className="nexsearch-section-inner"
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

function CapabilityCard({ title, text }) {
  return (
    <motion.div
      className="capability-card"
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

function StepCard({ step, title, text }) {
  return (
    <motion.div
      className="step-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <span className="step-badge">{step}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function IndexCard({ title, text }) {
  return (
    <motion.div
      className="index-card"
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

function UseCaseCard({ title, text }) {
  return (
    <motion.div
      className="usecase-card"
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
