// src/pages/Safety/Approach.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Safety/Approach.css";
import Footer from "../../components/Footer/Footer";

export default function SafetyApproach() {
  const navigate = useNavigate();

  return (
    <div className="safety-approach-page">
      <div className="safety-approach-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="safety-hero-section">
          <motion.div
            className="safety-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title safety-hero-title">
              Safety Approach at NeX UP
            </h1>
            <p className="safety-hero-sub">
              Building immersive and intelligent environments responsibly — with user wellbeing as the foundation.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHY SAFETY ================= */}
        <SafetySection title="Why Safety Matters">
          <p className="safety-text">
            AR and VR systems can deeply influence user perception, movement,
            emotions, and decision-making.  
            Because NeX UP blends digital and physical spaces, safety is built
            directly into our design philosophy.
          </p>
          <p className="safety-text">
            Our approach prioritizes physical comfort, psychological wellbeing,
            environmental awareness, and responsible AI behavior.
          </p>
        </SafetySection>

        <BreakLine />

        {/* ================= FRAMEWORK ================= */}
        <SafetySection title="Our Safety Framework">
          <div className="safety-grid">
            <SafetyCard
              title="User Wellbeing First"
              text="Every feature is evaluated for potential discomfort, confusion, or emotional stress."
            />
            <SafetyCard
              title="Environment Awareness"
              text="We design systems that respect real-world boundaries and reinforce physical awareness."
            />
            <SafetyCard
              title="Ethical Intelligence"
              text="AI behaviors are predictable, non-manipulative, and aligned with transparent standards."
            />
            <SafetyCard
              title="Continuous Monitoring"
              text="We detect abnormal behavior, misuse patterns, or high-risk interactions in real time."
            />
          </div>
        </SafetySection>

        <BreakLine />

        {/* ================= IMMERSIVE SAFETY ================= */}
        <SafetySection title="Safety in Immersive Environments (AR & VR)">
          <ul className="safety-list">
            <li>We avoid harmful illusions or risky world simulations.</li>
            <li>Motion design guidelines reduce dizziness and disorientation.</li>
            <li>Environmental mapping avoids obscuring real-world obstacles.</li>
            <li>Clear visual cues ensure users stay aware of surroundings.</li>
            <li>Mixed-reality transitions are designed to feel smooth and natural.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= AI SAFETY ================= */}
        <SafetySection title="AI Safety & Responsible Intelligence">
          <p className="safety-text">
            NeX UP’s intelligent systems amplify creativity — but always with
            guardrails that ensure user trust and stability.
          </p>

          <ul className="safety-list">
            <li>No unpredictable or unsafe AI actions.</li>
            <li>No manipulation, coercion, or harmful intent modeling.</li>
            <li>Transparent explanation of AI-driven behaviors where relevant.</li>
            <li>Ethical constraints on generative or adaptive systems.</li>
            <li>Strict controls around environment modification by AI.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= DEVELOPER SAFETY ================= */}
        <SafetySection title="Developer Safety Guidelines">
          <ul className="safety-list">
            <li>Avoid building simulations that mimic dangerous real-world actions.</li>
            <li>Provide appropriate warnings for intense or fast-paced scenes.</li>
            <li>Respect user physical safety — no sudden forced motion.</li>
            <li>Protect input data and spatial interactions at all times.</li>
            <li>Test environments thoroughly before public release.</li>
            <li>Follow UI/UX patterns that support comfort and clarity.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= RISK MITIGATION ================= */}
        <SafetySection title="Risk Mitigation & Response">
          <p className="safety-text">
            Safety at NeX UP is active — not passive.  
            We continuously evaluate risk across the system.
          </p>

          <ul className="safety-list">
            <li>Automated detection of harmful or unsafe environment behavior.</li>
            <li>Real-time monitoring for device-level or user-level risk.</li>
            <li>Investigation and mitigation of reported concerns.</li>
            <li>Transparent communication about major safety events.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= REPORTING ================= */}
        <SafetySection title="Reporting Unsafe Behavior or Content">
          <p className="safety-text">
            If something feels unsafe, unexpected, or concerning, we encourage
            users and developers to report it immediately.
          </p>

          <ul className="safety-list">
            <li>Unsafe world interactions.</li>
            <li>Harmful or deceptive content.</li>
            <li>AI behavior that feels unpredictable or risky.</li>
            <li>Motion or environmental issues causing discomfort.</li>
            <li>Developer misuse of NeX UP systems.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= CONTINUOUS IMPROVEMENT ================= */}
        <SafetySection title="Continuous Improvement">
          <p className="safety-text">
            Safety evolves with technology.  
            As NeX UP expands, we continually update systems, evaluate new
            risks, and improve user protections across the platform.
          </p>

          <ul className="safety-list">
            <li>Internal safety reviews for every major feature.</li>
            <li>Real-world testing of immersive interactions.</li>
            <li>Updated guidelines for developers and creators.</li>
            <li>Long-term research into AR/VR behavioral impacts.</li>
          </ul>
        </SafetySection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="safety-final-section">
          <motion.div
            className="safety-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Need to report a safety concern?
            </h2>
            <p className="final-text">
              Help us make NeX UP safer for everyone.  
              Your feedback improves our systems and protects the community.
            </p>

            <div className="safety-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Support →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/support/help")}
              >
                Help Center →
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

function SafetySection({ title, children }) {
  return (
    <section className="safety-section">
      <motion.div
        className="safety-section-inner"
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

function SafetyCard({ title, text }) {
  return (
    <motion.div
      className="safety-card"
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
