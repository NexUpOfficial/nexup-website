// src/pages/Support/Trust.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Safety/Trust.css";
import Footer from "../../components/Footer/Footer";

export default function Trust() {
  const navigate = useNavigate();

  return (
    <div className="trust-page">
      <div className="trust-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="trust-hero-section">
          <motion.div
            className="trust-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title trust-hero-title">
              Trust at NeX UP
            </h1>
            <p className="trust-hero-sub">
              Transparency, accountability, and integrity guide every layer of the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= PRINCIPLES ================= */}
        <TrustSection title="Our Trust Principles">
          <div className="trust-grid">
            <TrustCard
              title="Transparency"
              text="We communicate clearly how systems behave, how data flows, and how intelligence operates."
            />
            <TrustCard
              title="Accountability"
              text="We take responsibility for how NeX UP works—from reliability to ethical design."
            />
            <TrustCard
              title="Safety & Responsibility"
              text="Safety isn’t an afterthought; it’s built into the core architecture of our spatial ecosystem."
            />
            <TrustCard
              title="User Control"
              text="You stay in control of your experiences, your environment, and your information."
            />
          </div>
        </TrustSection>

        <BreakLine />

        {/* ================= HOW WE BUILD TRUST ================= */}
        <TrustSection title="How NeX UP Builds Trust">
          <ul className="trust-list">
            <li>Clear explanations of spatial and AI-driven interactions.</li>
            <li>Predictable and consistent system behavior.</li>
            <li>No dark patterns or manipulative interfaces.</li>
            <li>Ethical design decisions across the platform.</li>
            <li>Strong privacy-by-default philosophy.</li>
            <li>Strict internal reviews for new features before release.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= AI & INTELLIGENCE ================= */}
        <TrustSection title="AI Transparency & Spatial Intelligence">
          <p className="trust-text">
            NeX UP uses intelligent systems to build adaptive environments,
            understand context, and create intuitive interactions.  
            Here's how we keep that transparent:
          </p>

          <ul className="trust-list">
            <li>We explain how certain AI-driven actions or suggestions work.</li>
            <li>No hidden or deceptive intelligence behavior.</li>
            <li>Spatial models adapt based on context — not personal profiling.</li>
            <li>We avoid “black-box” decision-making wherever possible.</li>
            <li>Developers receive clear documentation on how AI systems function.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= SPATIAL SAFETY ================= */}
        <TrustSection title="Spatial Environment Safety">
          <div className="trust-grid">
            <TrustCard
              title="No Harmful Illusions"
              text="We avoid experiences that mislead users into unsafe or dangerous real-world actions."
            />
            <TrustCard
              title="Clear Physical Boundaries"
              text="NeX UP reinforces awareness of surroundings when AR/VR interactions could obscure reality."
            />
            <TrustCard
              title="Comfort-Focused Design"
              text="We recommend motion and interaction guidelines that minimize discomfort and disorientation."
            />
          </div>
        </TrustSection>

        <BreakLine />

        {/* ================= ACCOUNTABILITY ================= */}
        <TrustSection title="System Accountability">
          <ul className="trust-list">
            <li>We monitor for system failures, unusual behavior, or misuse patterns.</li>
            <li>We maintain logs to ensure operations behave as expected.</li>
            <li>When incidents occur, we take corrective action quickly.</li>
            <li>Developers and teams follow internal responsibility standards.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= USER RIGHTS ================= */}
        <TrustSection title="Your Rights & Control">
          <ul className="trust-list">
            <li>The right to understand how systems work.</li>
            <li>The right to control your data & experiences.</li>
            <li>The right to request clarification or explanation.</li>
            <li>The right to report concerns or violations.</li>
            <li>The right to opt out of non-essential data use.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= TRUST THROUGH DESIGN ================= */}
        <TrustSection title="Trust Through Design">
          <p className="trust-text">
            Great design builds trust. Every NeX UP interface follows principles
            of clarity, simplicity, and honesty.
          </p>

          <ul className="trust-list">
            <li>Clear feedback when actions occur.</li>
            <li>Predictable interaction patterns.</li>
            <li>No misleading or manipulative prompts.</li>
            <li>Accessibility and inclusiveness built into UI/UX standards.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= REPORTING ================= */}
        <TrustSection title="Reporting Issues or Concerns">
          <p className="trust-text">
            If you ever feel something in NeX UP behaves unexpectedly, unsafely,
            or violates these trust principles, we encourage you to report it.
          </p>

          <ul className="trust-list">
            <li>Report spatial concerns or dangerous behavior.</li>
            <li>Report unethical developer experiences.</li>
            <li>Report transparency or privacy issues.</li>
            <li>Escalate through contact or help center channels.</li>
          </ul>
        </TrustSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="trust-final-section">
          <motion.div
            className="trust-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Have questions about trust at NeX UP?
            </h2>
            <p className="final-text">
              We're committed to building transparent and responsible technology.
              Reach out anytime.
            </p>

            <div className="trust-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Support →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/safety/privacy")}
              >
                Read Privacy →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/support/guidelines")}
              >
                View Guidelines →
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function TrustSection({ title, children }) {
  return (
    <section className="trust-section">
      <motion.div
        className="trust-section-inner"
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

function TrustCard({ title, text }) {
  return (
    <motion.div
      className="trust-card"
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
