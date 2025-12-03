// src/pages/Ecosystem/NexNodes.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexNodes.css";
import Footer from "../../components/Footer/Footer";

export default function NexNodes() {
  const navigate = useNavigate();

  return (
    <div className="nexnodes-page">
      <div className="nexnodes-wrapper">
        {/* ================= HERO ================= */}
        <section className="nexnodes-hero-section">
          <motion.div
            className="nexnodes-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title nexnodes-hero-title">
              NexNodes
            </h1>
            <p className="nexnodes-hero-sub">
              A distributed intelligence network powering real-time synchronization,
              adaptive computation, and spatial awareness across the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHAT ARE NEXNODES ================= */}
        <NexNodesSection title="What are NexNodes?">
          <p className="nexnodes-text">
            NexNodes are the distributed intelligence layer of NeX UP — a network of
            compute points that connect devices, environments, and services into one
            synchronized system.
          </p>
          <p className="nexnodes-text">
            They route intelligence, manage world states, and keep NexWorld, NexEngine,
            NexHousing, and other systems aligned in real time — whether across a single
            room or an entire virtual city.
          </p>
        </NexNodesSection>

        <BreakLine />

        {/* ================= CORE CAPABILITIES ================= */}
        <NexNodesSection title="Core Capabilities">
          <div className="nexnodes-grid">
            <CapabilityCard
              title="Real-time Synchronization"
              text="Keeps world states, user positions, and environment updates synchronized across devices."
            />
            <CapabilityCard
              title="Decentralized Intelligence"
              text="Distributes computation across local and remote nodes for resilience and efficiency."
            />
            <CapabilityCard
              title="Edge-Level Spatial Processing"
              text="Processes spatial signals closer to the user for faster, lower-latency responses."
            />
            <CapabilityCard
              title="Secure Multi-Device Linking"
              text="Connects headsets, phones, displays, and systems into a cohesive, secure network."
            />
            <CapabilityCard
              title="World State Broadcasting"
              text="Shares updates about environments, interactions, and changes across NexWorld spaces."
            />
            <CapabilityCard
              title="Adaptive Task Allocation"
              text="Intelligently routes tasks to the best node based on load, location, and capability."
            />
          </div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= ARCHITECTURE LAYERS ================= */}
        <NexNodesSection title="Network Architecture Layers">
          <div className="layers-grid">
            <LayerCard
              title="Signal & Input Layer"
              text="Captures events, sensor data, and spatial inputs from devices and environments."
            />
            <LayerCard
              title="Processing Layer"
              text="Runs computations for logic, predictions, and environment reasoning."
            />
            <LayerCard
              title="World Sync Layer"
              text="Keeps shared worlds aligned across users and experiences."
            />
            <LayerCard
              title="Intelligence Distribution Layer"
              text="Allocates AI, simulation, and decision workloads across NexNodes."
            />
            <LayerCard
              title="Security Layer"
              text="Protects communication, enforces access rules, and defends against misuse."
            />
          </div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= HOW IT POWERS NEX UP ================= */}
        <NexNodesSection title="How NexNodes Power NeX UP">
          <p className="nexnodes-text">
            NexNodes act as the connective tissue between core platforms inside the
            NeX UP ecosystem.
          </p>

          <ul className="nexnodes-list">
            <li>Syncs NexWorld environments for multiple users and sessions.</li>
            <li>Provides NexEngine with distributed compute for world logic and simulation.</li>
            <li>Links NexHousing layouts with live devices and smart systems.</li>
            <li>Connects future modules like search, analytics, and external data feeds.</li>
          </ul>
        </NexNodesSection>

        <BreakLine />

        {/* ================= MODES OF OPERATION ================= */}
        <NexNodesSection title="Modes of Operation">
          <div className="modes-grid">
            <ModeCard
              title="Local Node"
              text="Runs directly on the user’s device or local hub for ultra-low-latency tasks."
            />
            <ModeCard
              title="Cloud Node"
              text="Handles heavier computation, long-running tasks, or multi-region worlds."
            />
            <ModeCard
              title="Hybrid Node"
              text="Splits responsibilities between local and cloud for balanced performance."
            />
            <ModeCard
              title="Simulation Node"
              text="Dedicated to running tests, experiments, or non-live environment simulations."
            />
          </div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= BENEFITS ================= */}
        <NexNodesSection title="Why NexNodes Matter">
          <ul className="nexnodes-list">
            <li>Reduces latency by processing intelligence closer to the user.</li>
            <li>Improves reliability through distributed, redundant nodes.</li>
            <li>Scales from single-room setups to global spatial networks.</li>
            <li>Enables multi-user, multi-device, multi-location experiences.</li>
            <li>Supports complex simulations without overloading a single system.</li>
          </ul>
        </NexNodesSection>

        <BreakLine />

        {/* ================= USE CASES ================= */}
        <NexNodesSection title="Use Cases for NexNodes">
          <div className="usecase-grid">
            <UseCaseCard
              title="Smart Homes & Living Spaces"
              text="Coordinate lighting, environment, and spatial automation across rooms and devices."
            />
            <UseCaseCard
              title="AR City Networks"
              text="Power city-scale AR overlays and live mixed-reality navigation."
            />
            <UseCaseCard
              title="Digital Twins"
              text="Mirror real structures and infrastructure into accurate virtual representations."
            />
            <UseCaseCard
              title="Collaborative VR Spaces"
              text="Keep multi-user environments synchronized with minimal delay."
            />
            <UseCaseCard
              title="Sensor Fusion"
              text="Combine data from cameras, depth sensors, and IoT devices into coherent world models."
            />
            <UseCaseCard
              title="Simulation & Training"
              text="Run large-scale training or simulation environments across distributed nodes."
            />
          </div>
        </NexNodesSection>

        <BreakLine />

        {/* ================= FUTURE ================= */}
        <NexNodesSection title="The Future of NexNodes">
          <p className="nexnodes-text">
            As NeX UP grows, NexNodes will evolve into an increasingly intelligent,
            self-optimizing network.
          </p>

          <ul className="nexnodes-list">
            <li>More autonomous routing and self-balancing workloads.</li>
            <li>Deeper integration with neural and ambient interfaces.</li>
            <li>Context-aware intelligence that understands whole environments, not just devices.</li>
            <li>Support for new types of spatial, sensory, and cognitive computing.</li>
          </ul>
        </NexNodesSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexnodes-final-section">
          <motion.div
            className="nexnodes-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Build intelligent, connected systems with NexNodes.
            </h2>
            <p className="final-text">
              Design networks of devices, experiences, and worlds that move and
              think together — powered by the NexNodes intelligence layer.
            </p>

            <div className="nexnodes-final-actions">
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
                Explore NexEngine →
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

function NexNodesSection({ title, children }) {
  return (
    <section className="nexnodes-section">
      <motion.div
        className="nexnodes-section-inner"
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

function ModeCard({ title, text }) {
  return (
    <motion.div
      className="mode-card"
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
