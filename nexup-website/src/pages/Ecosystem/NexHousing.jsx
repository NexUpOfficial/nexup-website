// src/pages/Ecosystem/NexHousing.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Ecosystem/NexHousing.css";
import Footer from "../../components/Footer/Footer";

export default function NexHousing() {
  const navigate = useNavigate();

  return (
    <div className="nexhousing-page">
      <div className="nexhousing-wrapper">
        {/* ================= HERO ================= */}
        <section className="nexhousing-hero-section">
          <motion.div
            className="nexhousing-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title nexhousing-hero-title">
              NexHousing
            </h1>
            <p className="nexhousing-hero-sub">
              AR-powered housing, intelligent spatial layouts, and adaptive living
              systems — designed directly inside your real environment.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHAT IS NEXHOUSING ================= */}
        <NexHousingSection title="What is NexHousing?">
          <p className="nexhousing-text">
            NexHousing is NeX UP’s spatial housing system — a bridge between
            architecture, AR design, and intelligent living. It lets you map
            real rooms, simulate layouts, place virtual furniture, and visualize
            future spaces before building anything physically.
          </p>
          <p className="nexhousing-text">
            From families planning a new home to architects designing entire
            buildings, NexHousing turns spaces into intelligent, interactive,
            and adaptable environments.
          </p>
        </NexHousingSection>

        <BreakLine />

        {/* ================= CORE FEATURES ================= */}
        <NexHousingSection title="Core Features">
          <div className="nexhousing-grid">
            <FeatureCard
              title="AR Room Layout Mapping"
              text="Scan and reconstruct rooms in real time, with spatially accurate 3D layouts."
            />
            <FeatureCard
              title="Smart Furniture Placement"
              text="Test furniture and interior changes digitally — with collision-aware and space-aware suggestions."
            />
            <FeatureCard
              title="Environment Simulation"
              text="Simulate lighting, openness, and flow before any real-world changes."
            />
            <FeatureCard
              title="Spatial AI Recommendations"
              text="Get layout suggestions optimized for comfort, movement, and utility."
            />
            <FeatureCard
              title="Real-time 3D Visualization"
              text="Walk through your future spaces inside AR or VR, in life-like scale."
            />
            <FeatureCard
              title="NexNode Smart Home Integration"
              text="Connect NexHousing layouts with NexNode-based smart devices and automation."
            />
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= HOW IT WORKS ================= */}
        <NexHousingSection title="How NexHousing Works">
          <div className="workflow-grid">
            <StepCard
              step="01"
              title="Scan Your Space"
              text="Use supported devices to capture room dimensions, surfaces, and geometry."
            />
            <StepCard
              step="02"
              title="Generate a Spatial Model"
              text="NexHousing builds a digital twin of your room, apartment, or floor."
            />
            <StepCard
              step="03"
              title="Design & Experiment"
              text="Place furniture, partitions, lighting, and decor virtually — no physical shifting required."
            />
            <StepCard
              step="04"
              title="View in AR / VR"
              text="Walk through your future environment at true scale with immersive visualization."
            />
            <StepCard
              step="05"
              title="Save, Share, Deploy"
              text="Export layouts to NexWorld, share with clients, or sync with NexNode smart systems."
            />
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= SMART LIVING ================= */}
        <NexHousingSection title="Smart Living Systems">
          <p className="nexhousing-text">
            NexHousing goes beyond static design — it enables intelligent,
            adaptable living systems.
          </p>

          <ul className="nexhousing-list">
            <li>Lighting layouts optimized for mood, clarity, and energy usage.</li>
            <li>Spatial configurations that reduce clutter and friction.</li>
            <li>Flow patterns that support work, rest, and collaboration.</li>
            <li>System suggestions informed by real usage patterns over time.</li>
          </ul>
        </NexHousingSection>

        <BreakLine />

        {/* ================= CREATOR MODE ================= */}
        <NexHousingSection title="Creator Mode for Designers & Architects">
          <div className="nexhousing-grid">
            <FeatureCard
              title="Virtual Staging"
              text="Stage homes digitally for clients or listings, with fully immersive previews."
            />
            <FeatureCard
              title="3D Floor Planning"
              text="Design, adjust, and annotate floor plans in interactive 3D."
            />
            <FeatureCard
              title="Custom Asset Libraries"
              text="Use or import custom interior assets and brand-specific components."
            />
            <FeatureCard
              title="Collaboration Sessions"
              text="Review layouts together with clients or teams in shared AR/VR spaces."
            />
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= ARCHITECTURE SIM ================= */}
        <NexHousingSection title="Architecture Simulation Engine">
          <p className="nexhousing-text">
            NexHousing integrates with NexEngine to simulate architecture-level
            properties of your spaces.
          </p>

          <div className="architecture-grid">
            <ArchitectureCard
              title="Structure Modelling"
              text="Model wall placements, partitions, and room shapes with architectural awareness."
            />
            <ArchitectureCard
              title="Material & Finish Concepts"
              text="Experiment with textures, finishes, and color palettes."
            />
            <ArchitectureCard
              title="Space Usage & Flow"
              text="Visualize how people move through the space over time."
            />
          </div>
        </NexHousingSection>

        <BreakLine />

        {/* ================= NEXWORLD CONNECT ================= */}
        <NexHousingSection title="Connected to NexWorld">
          <p className="nexhousing-text">
            NexHousing designs can extend beyond the physical — into the virtual
            cities, environments, and spaces of NexWorld.
          </p>

          <ul className="nexhousing-list">
            <li>Export housing layouts as NexWorld properties.</li>
            <li>Simulate entire neighborhoods or vertical housing ecosystems.</li>
            <li>Use NexHousing spaces as part of larger digital reality projects.</li>
          </ul>
        </NexHousingSection>

        <BreakLine />

        {/* ================= BENEFITS ================= */}
        <NexHousingSection title="Who NexHousing is For">
          <ul className="nexhousing-list">
            <li>Families planning renovations or new homes.</li>
            <li>Interior designers looking for immersive staging tools.</li>
            <li>Architects designing future-first living environments.</li>
            <li>Developers building smart housing and real-estate experiences.</li>
            <li>Creators experimenting with spatial living concepts inside NexWorld.</li>
          </ul>
        </NexHousingSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="nexhousing-final-section">
          <motion.div
            className="nexhousing-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Design intelligent living spaces with NexHousing.
            </h2>
            <p className="final-text">
              Prototype, visualize, and refine housing spaces inside AR — before a single
              wall moves in the real world.
            </p>

            <div className="nexhousing-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/ecosystem")}
              >
                Back to Ecosystem →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to NeX UP →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/support/help")}
              >
                Help & Support →
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

function NexHousingSection({ title, children }) {
  return (
    <section className="nexhousing-section">
      <motion.div
        className="nexhousing-section-inner"
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

function FeatureCard({ title, text }) {
  return (
    <motion.div
      className="feature-card"
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

function ArchitectureCard({ title, text }) {
  return (
    <motion.div
      className="architecture-card"
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
