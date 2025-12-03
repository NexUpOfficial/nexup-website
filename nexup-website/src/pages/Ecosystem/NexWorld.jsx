// src/pages/Ecosystem/NexWorld.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexWorld.css";
import Footer from "../../components/Footer/Footer";

export default function NexWorld({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className="nexworld-page">
      <div className="nexworld-wrapper">
        {/* ================= HERO ================= */}
        <section className="nexworld-hero-section">
          <motion.div
            className="nexworld-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title nexworld-hero-title">NexWorld</h1>
            <p className="nexworld-hero-sub">
              A unified immersive universe where AR, VR, AI, and intelligent
              environments converge into a single living world.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHAT IS NEXWORLD ================= */}
        <NexWorldSection title="What is NexWorld?">
          <p className="nexworld-text">
            NexWorld is the world engine of NeX UP — a layered digital reality
            where cities, rooms, objects, and intelligent agents coexist across
            AR, VR, and spatial interfaces.
          </p>
          <p className="nexworld-text">
            It connects NexEngine, NexNodes, NexHousing, and future NeX UP
            systems into one cohesive universe where environments can be created,
            evolved, and experienced from any device.
          </p>
        </NexWorldSection>

        <BreakLine />

        {/* ================= CORE SYSTEMS ================= */}
        <NexWorldSection title="Core Systems of NexWorld">
          <div className="nexworld-grid">
            <CoreCard
              title="World Generation Engine"
              text="Defines, instantiates, and updates 3D worlds and mixed-reality spaces in real time."
            />
            <CoreCard
              title="Spatial Rendering Pipeline"
              text="Optimizes visuals, lighting, and composition across AR headsets, VR devices, and displays."
            />
            <CoreCard
              title="AI World Behavior System"
              text="Drives environment logic, agents, and dynamic responses to user behavior."
            />
            <CoreCard
              title="Multi-User Shared Reality"
              text="Keeps multiple users in sync inside the same world, no matter where they are."
            />
            <CoreCard
              title="Dynamic Object System"
              text="Manages interactive objects, states, and transformations across sessions."
            />
            <CoreCard
              title="Real-World Integration Layer"
              text="Blends physical context and spatial mapping into every NexWorld environment."
            />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= WORLD TYPES ================= */}
        <NexWorldSection title="Types of Worlds You Can Build">
          <div className="worldtype-grid">
            <WorldTypeCard
              title="Mixed Reality Spaces"
              text="Layer digital structures inside real rooms, venues, and public spaces."
            />
            <WorldTypeCard
              title="Full Virtual Worlds"
              text="Fully simulated environments independent from physical reality."
            />
            <WorldTypeCard
              title="Digital Cities"
              text="Large-scale environments for exploration, simulation, and social presence."
            />
            <WorldTypeCard
              title="Immersive Rooms"
              text="Focused, high-resolution spaces for meetings, labs, or creative work."
            />
            <WorldTypeCard
              title="Prototype Labs"
              text="Experimental sandboxes for testing new mechanics and concepts."
            />
            <WorldTypeCard
              title="Simulated Ecosystems"
              text="Living environments that evolve over time with rules and behaviors."
            />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= CONNECTIONS ================= */}
        <NexWorldSection title="How NexWorld Connects the Ecosystem">
          <p className="nexworld-text">
            NexWorld is not an isolated product — it is the canvas where all
            NeX UP systems meet.
          </p>

          <ul className="nexworld-list">
            <li>NexEngine powers the logic, rendering, and interaction layers.</li>
            <li>NexNodes synchronize world state across devices and locations.</li>
            <li>NexHousing injects intelligent housing and spatial living spaces.</li>
            <li>Future components like search, analytics, and tools plug directly into NexWorld.</li>
          </ul>
        </NexWorldSection>

        <BreakLine />

        {/* ================= WORLD BUILDING PIPELINE ================= */}
        <NexWorldSection title="World Building Pipeline">
          <div className="pipeline-grid">
            <StepCard
              step="01"
              title="Create a World"
              text="Define the scope, scale, and purpose of your environment."
            />
            <StepCard
              step="02"
              title="Shape Spaces & Objects"
              text="Design structures, terrain, rooms, and interactive elements."
            />
            <StepCard
              step="03"
              title="Add Logic & Intelligence"
              text="Connect NexEngine behaviors, AI systems, and NexNodes intelligence."
            />
            <StepCard
              step="04"
              title="Test in AR / VR"
              text="Experience the world from inside mixed or fully virtual reality."
            />
            <StepCard
              step="05"
              title="Publish to NexWorld"
              text="Share with users, teams, or communities inside the NeX UP ecosystem."
            />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= AI & BEHAVIOR ================= */}
        <NexWorldSection title="AI-Driven World Behavior">
          <p className="nexworld-text">
            NexWorld environments are not static — they can react, adapt, and
            respond over time.
          </p>

          <ul className="nexworld-list">
            <li>Environments that respond to presence, time, and interaction.</li>
            <li>Agent-based systems for characters, guides, or utilities.</li>
            <li>Adaptive scenes that change based on context or goals.</li>
            <li>Simulation loops for training, research, or experimentation.</li>
          </ul>
        </NexWorldSection>

        <BreakLine />

        {/* ================= DIGITAL SPACES ================= */}
        <NexWorldSection title="Digital Spaces & Experiences">
          <div className="spaces-grid">
            <SpaceCard
              title="Virtual Workspaces"
              text="Persistent rooms for collaboration, engineering, or design."
            />
            <SpaceCard
              title="Events & Gatherings"
              text="Immersive venues for launches, meetups, and performances."
            />
            <SpaceCard
              title="Learning Environments"
              text="Interactive classrooms and training simulations."
            />
            <SpaceCard
              title="Concept Cities"
              text="Explorable prototypes of future neighborhoods and infrastructure."
            />
          </div>
        </NexWorldSection>

        <BreakLine />

        {/* ================= FUTURE ================= */}
        <NexWorldSection title="The Future of NexWorld">
          <p className="nexworld-text">
            NexWorld evolves as NeX UP grows. Over time, it will become a
            network of interconnected intelligent realities.
          </p>

          <ul className="nexworld-list">
            <li>Neural and natural input for shaping worlds in real time.</li>
            <li>Cloud-streamed spaces accessible from lightweight devices.</li>
            <li>Autonomous AI-run worlds with emergent behavior.</li>
            <li>Interconnected environments that form entire digital civilizations.</li>
          </ul>
        </NexWorldSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexworld-final-section">
          <motion.div
            className="nexworld-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Build your world inside NexWorld.
            </h2>
            <p className="final-text">
              From a single room to an entire digital city, NexWorld gives you
              the engine to design living, intelligent environments.
            </p>

            <div className="nexworld-final-actions">
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

function NexWorldSection({ title, children }) {
  return (
    <section className="nexworld-section">
      <motion.div
        className="nexworld-section-inner"
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

function CoreCard({ title, text }) {
  return (
    <motion.div
      className="core-card"
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

function WorldTypeCard({ title, text }) {
  return (
    <motion.div
      className="worldtype-card"
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

function SpaceCard({ title, text }) {
  return (
    <motion.div
      className="space-card"
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
