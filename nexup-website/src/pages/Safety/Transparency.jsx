// src/pages/Safety/Transparency.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Safety/Transparency.css";
import Footer from "../../components/Footer/Footer";

export default function Transparency() {
  const navigate = useNavigate();

  return (
    <div className="transparency-page">
      <div className="transparency-wrapper">

        {/* ================= HERO ================= */}
        <section className="transparency-hero-section">
          <motion.div
            className="transparency-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title transparency-hero-title">
              Trust & Transparency
            </h1>
            <p className="transparency-hero-sub">
              Clear communication and responsible technology — the pillars of trust at NeX UP.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= PRINCIPLES ================= */}
        <TransparencySection title="Our Transparency Principles">
          <div className="transparency-grid">
            <TransparencyCard
              title="Clarity"
              text="We communicate how systems work, why certain behaviors occur, and what users can expect."
            />
            <TransparencyCard
              title="Honesty"
              text="No dark patterns, no hidden tracking, no misleading interactions — ever."
            />
            <TransparencyCard
              title="Predictability"
              text="NeX UP systems behave consistently and responsibly, without unexpected or deceptive actions."
            />
            <TransparencyCard
              title="Open Design"
              text="We build with transparency in mind — from UI behavior to backend intelligence."
            />
          </div>
        </TransparencySection>

        <BreakLine />

        {/* ================= SYSTEM BEHAVIOR ================= */}
        <TransparencySection title="System Behavior Transparency">
          <p className="transparency-text">
            NeX UP uses spatial computing, AR, VR, and intelligent systems to power immersive experiences.
            We explain how they behave so users are always informed.
          </p>

          <ul className="transparency-list">
            <li>Clear explanations for AI-driven interactions.</li>
            <li>Transparency about how spatial environments adapt.</li>
            <li>Disclosure of what sensors or device features are used.</li>
            <li>Predictable outcomes with no deceptive patterns.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= DATA FLOW ================= */}
        <TransparencySection title="Data Flow & Information Pathways">
          <p className="transparency-text">
            Understanding how your data moves through NeX UP is essential.  
            Here’s what we commit to explaining clearly:
          </p>

          <ul className="transparency-list">
            <li>What data is collected and why.</li>
            <li>Where data travels inside the system.</li>
            <li>How long certain data is stored.</li>
            <li>How processed spatial signals are used safely.</li>
            <li>No hidden data sharing or unauthorized use.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= AI TRANSPARENCY ================= */}
        <TransparencySection title="AI Transparency & Intelligent Systems">
          <p className="transparency-text">
            NeX UP’s intelligent systems are designed to be understandable, predictable,
            and aligned with strong ethical standards.
          </p>

          <ul className="transparency-list">
            <li>Clear explanations for AI decisions when relevant.</li>
            <li>Defined limitations to avoid harmful autonomy.</li>
            <li>No opaque “black box” behavior without documentation.</li>
            <li>Predictable spatial modeling and adaptive behavior.</li>
            <li>Strong safeguards around world modification by AI.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= MODERATION ================= */}
        <TransparencySection title="Safety, Moderation & Enforcement Transparency">
          <p className="transparency-text">
            Trust grows when users understand how safety systems operate.
            NeX UP communicates clearly about:
          </p>

          <ul className="transparency-list">
            <li>What triggers safety checks or moderation actions.</li>
            <li>How user reports are reviewed and assessed.</li>
            <li>How we detect misuse or harmful behavior.</li>
            <li>How enforcement decisions are made.</li>
            <li>How incidents or major issues are communicated.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= COMMITMENTS ================= */}
        <TransparencySection title="Our Commitments to You">
          <ul className="transparency-list">
            <li>No hidden algorithms or manipulative design.</li>
            <li>No unexpected changes without communication.</li>
            <li>No misuse of user data for harmful or exploitative purposes.</li>
            <li>Always clear about risks, limitations, and behavior patterns.</li>
            <li>Ongoing work to improve system clarity and trust.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= USER RIGHTS ================= */}
        <TransparencySection title="User Transparency Rights">
          <p className="transparency-text">
            Every user has the right to understand how NeX UP works.
          </p>

          <ul className="transparency-list">
            <li>The right to transparency and clear explanations.</li>
            <li>The right to know what data is used and why.</li>
            <li>The right to clarity behind AI decisions.</li>
            <li>The right to report issues or request more information.</li>
            <li>The right to request corrections where appropriate.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= UPDATES ================= */}
        <TransparencySection title="Platform Updates & Transparency Reports">
          <p className="transparency-text">
            We share updates when systems change, when safety rules evolve,
            or when new features require additional transparency.
          </p>

          <ul className="transparency-list">
            <li>Release notes and update logs.</li>
            <li>Transparency reports on safety and enforcement actions.</li>
            <li>Guidance changes for developers and creators.</li>
            <li>Evolving documentation as NeX UP grows.</li>
          </ul>
        </TransparencySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="transparency-final-section">
          <motion.div
            className="transparency-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Have questions about transparency at NeX UP?
            </h2>
            <p className="final-text">
              We're committed to responsible and open communication.  
              Reach out anytime for clarity or support.
            </p>

            <div className="transparency-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Support →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/safety/approach")}
              >
                Safety Approach →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/safety/privacy")}
              >
                Privacy Policy →
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

function TransparencySection({ title, children }) {
  return (
    <section className="transparency-section">
      <motion.div
        className="transparency-section-inner"
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

function TransparencyCard({ title, text }) {
  return (
    <motion.div
      className="transparency-card"
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
