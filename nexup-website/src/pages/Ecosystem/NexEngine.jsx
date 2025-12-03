// src/pages/Ecosystem/NexEngine.jsx

import { motion } from "framer-motion";
import "../../page-styles/Ecosystem/NexEngine.css";
import Footer from "../../components/Footer/Footer";

export default function NexEngine() {
  return (
    <div className="nexengine-page">
      <div className="nexengine-wrapper">
        {/* ================= HERO ================= */}
        <section className="nexengine-hero-section">
          <motion.div
            className="nexengine-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title nexengine-hero-title">NexEngine</h1>
            <p className="nexengine-hero-sub">
              The intelligent core that powers spatial computing, immersive worlds,
              and adaptive experiences across the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHAT IS NEXENGINE ================= */}
        <NexEngineSection title="What is NexEngine?">
          <p className="nexengine-text">
            NexEngine is the real-time computation and intelligence layer of NeX UP.  
            It processes spatial data, orchestrates world behavior, optimizes AR/VR
            rendering, and connects NexWorld, NexNode, NexHousing, and other systems
            into one cohesive engine.
          </p>
          <p className="nexengine-text">
            Think of it as the brain that understands space, context, and interaction —
            running behind every immersive experience built on NeX UP.
          </p>
        </NexEngineSection>

        <BreakLine />

        {/* ================= CAPABILITIES ================= */}
        <NexEngineSection title="Key Capabilities">
          <div className="nexengine-grid">
            <CapabilityCard
              title="Spatial Intelligence Core"
              text="Understands environments, surfaces, depth, and context to power adaptive digital reality."
            />
            <CapabilityCard
              title="Real-time World Engine"
              text="Drives live 3D scenes, physics, environment states, and interactive elements."
            />
            <CapabilityCard
              title="Adaptive Interaction Layer"
              text="Connects user actions, gaze, gestures, and movement with responsive world behavior."
            />
            <CapabilityCard
              title="NexNode Integration"
              text="Works with NexNode to synchronize intelligence across devices, systems, and locations."
            />
            <CapabilityCard
              title="AI-Driven Optimization"
              text="Continuously optimizes performance, latency, and quality based on context."
            />
            <CapabilityCard
              title="Simulation & Testing"
              text="Runs scenario simulations for environments before deployment into live experiences."
            />
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= POWERS NEXWORLD ================= */}
        <NexEngineSection title="How NexEngine Powers NexWorld">
          <p className="nexengine-text">
            NexWorld is built on top of NexEngine. Every city, room, environment,
            and interactive scene is computed, rendered, and updated through NexEngine’s
            layered architecture.
          </p>

          <div className="nexengine-grid small-grid">
            <CapabilityCard
              title="Scene Generation"
              text="Renders immersive 3D spaces and mixed reality overlays at runtime."
            />
            <CapabilityCard
              title="Physics & Behavior"
              text="Controls motion, interactions, and cause–effect relationships in the world."
            />
            <CapabilityCard
              title="Context Awareness"
              text="Uses spatial and usage signals to adapt worlds in real-time."
            />
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= ENGINE LAYERS ================= */}
        <NexEngineSection title="Engine Architecture Layers">
          <div className="layers-grid">
            <LayerCard
              title="Rendering Layer"
              text="Drives visuals, lighting, shaders, and spatial composition across AR/VR devices."
            />
            <LayerCard
              title="AI & Behavior Layer"
              text="Controls non-linear interactions, responses, and environment logic."
            />
            <LayerCard
              title="Spatial Mapping Layer"
              text="Understands geometry, depth, and the relationship between physical and virtual spaces."
            />
            <LayerCard
              title="Simulation Layer"
              text="Runs experiments, world states, and test conditions safely."
            />
            <LayerCard
              title="Interaction Layer"
              text="Bridges inputs like gaze, gestures, controllers, and touch into consistent responses."
            />
            <LayerCard
              title="Security & Safety Layer"
              text="Enforces boundaries, safety constraints, and environment-level protections."
            />
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= TOOLS & SDKS ================= */}
        <NexEngineSection title="Tools & SDKs">
          <div className="tools-grid">
            <ToolCard
              title="NexEngine SDK"
              text="Core engine integration for developers building immersive applications."
            />
            <ToolCard
              title="World Editor Tools"
              text="Create, configure, and test environments before deployment."
            />
            <ToolCard
              title="Simulation Console"
              text="Run controlled scenarios, stress tests, and behavior checks."
            />
            <ToolCard
              title="Diagnostics & Telemetry"
              text="Monitor performance, latency, and world state in real time."
            />
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= PERFORMANCE ================= */}
        <NexEngineSection title="Performance & Optimization">
          <p className="nexengine-text">
            NexEngine is engineered for low-latency, high-fidelity experiences that scale from
            a single room to entire virtual cities.
          </p>

          <ul className="nexengine-list">
            <li>Multi-threaded spatial computation for high responsiveness.</li>
            <li>Adaptive quality scaling based on device and network.</li>
            <li>Efficient world streaming and asset management.</li>
            <li>Real-time optimization for AR/VR motion and rendering.</li>
          </ul>
        </NexEngineSection>

        <BreakLine />

        {/* ================= DEVELOPER WORKFLOW ================= */}
        <NexEngineSection title="Developer Workflow with NexEngine">
          <div className="workflow-grid">
            <StepCard
              step="01"
              title="Define the World"
              text="Start with spatial layouts, environments, and core world parameters."
            />
            <StepCard
              step="02"
              title="Add Interactions"
              text="Design inputs, triggers, and responses for users inside the world."
            />
            <StepCard
              step="03"
              title="Embed Intelligence"
              text="Use NexEngine logic & NexNode intelligence to make environments adaptive."
            />
            <StepCard
              step="04"
              title="Test & Simulate"
              text="Run through AR/VR simulations, stress tests, and safety checks."
            />
            <StepCard
              step="05"
              title="Deploy with NexUP"
              text="Publish to NexWorld or integrated platforms via the NeX UP ecosystem."
            />
          </div>
        </NexEngineSection>

        <BreakLine />

        {/* ================= FUTURE ================= */}
        <NexEngineSection title="The Future of NexEngine">
          <p className="nexengine-text">
            NexEngine will continue evolving into a more intelligent, context-aware,
            and neural-integrated engine — enabling:
          </p>

          <ul className="nexengine-list">
            <li>Neural interfaces and more natural input methods.</li>
            <li>Deeper integration with real-world data streams.</li>
            <li>Richer simulations for architecture, cities, and digital twins.</li>
            <li>Creator tools that feel like sketching reality itself.</li>
          </ul>
        </NexEngineSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexengine-final-section">
          <motion.div
            className="nexengine-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Build your next world on NexEngine.
            </h2>
            <p className="final-text">
              From prototype experiments to full-scale immersive platforms,
              NexEngine is the foundation for intelligent, spatial experiences.
            </p>

            <div className="nexengine-final-actions">
              <button
                className="white-btn"
                onClick={() => window.location.assign("/nexworld")}
              >
                Explore NexWorld →
              </button>
              <button
                className="ghost-btn"
                onClick={() => window.location.assign("/support/help")}
              >
                Developer Help →
              </button>
              <button
                className="ghost-btn"
                onClick={() => window.location.assign("/contact")}
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

function NexEngineSection({ title, children }) {
  return (
    <section className="nexengine-section">
      <motion.div
        className="nexengine-section-inner"
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

function LayerCard({ title, text }) {
  return (
    <motion.div
      className="layer-card"
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

function ToolCard({ title, text }) {
  return (
    <motion.div
      className="tool-card"
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
