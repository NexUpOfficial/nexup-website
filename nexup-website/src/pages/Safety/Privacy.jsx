// src/pages/Support/Privacy.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Safety/Privacy.css";
import Footer from "../../components/Footer/Footer";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      <div className="privacy-wrapper">
        {/* ============== HERO ============== */}
        <section className="privacy-hero-section">
          <motion.div
            className="privacy-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title privacy-hero-title">
              Security & Privacy at NeX UP
            </h1>
            <p className="privacy-hero-sub">
              How we think about protecting your data, your environments, and your
              trust across the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ============== OVERVIEW ============== */}
        <PrivacySection title="Our Approach">
          <p className="privacy-text">
            NeX UP is built on systems that connect people, spaces, and intelligent
            environments. Security and privacy are not optional layers — they are
            part of the core architecture.
          </p>
          <p className="privacy-text">
            This page provides a high-level overview of how we handle data, protect
            your environments, and give you control over your information.
          </p>
        </PrivacySection>

        <BreakLine />

        {/* ============== WHAT WE COLLECT ============== */}
        <PrivacySection title="What We May Collect">
          <div className="privacy-grid">
            <PrivacyCard
              title="Account Information"
              text="Basic details like your name, email, and authentication data required to create and secure your account."
            />
            <PrivacyCard
              title="Usage Data"
              text="High-level information about how you use NeX UP features, so we can improve reliability and experience."
            />
            <PrivacyCard
              title="Device & Technical Data"
              text="Non-sensitive device, performance, and diagnostic details that help us maintain compatibility and stability."
            />
            <PrivacyCard
              title="Spatial & Environment Signals"
              text="In some experiences, anonymized or processed spatial data may be used to enable AR/VR features — not to track you personally."
            />
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ============== HOW WE USE DATA ============== */}
        <PrivacySection title="How We Use Your Data">
          <ul className="privacy-list">
            <li>To provide and maintain NeX UP services and features.</li>
            <li>To secure accounts, detect abuse, and prevent misuse.</li>
            <li>To improve performance, reliability, and user experience.</li>
            <li>To test and roll out new features in a safe manner.</li>
            <li>To comply with legal, safety, or regulatory requirements where applicable.</li>
          </ul>
        </PrivacySection>

        <BreakLine />

        {/* ============== SECURITY PRACTICES ============== */}
        <PrivacySection title="Security Practices">
          <div className="privacy-grid">
            <PrivacyCard
              title="Layered Protection"
              text="We use multiple layers of defense — from infrastructure-level safeguards to application checks."
            />
            <PrivacyCard
              title="Access Control"
              text="Only authorized systems and roles can access sensitive operations, following the principle of least privilege."
            />
            <PrivacyCard
              title="Monitoring & Detection"
              text="We monitor for unusual activity, potential abuse patterns, and system-level anomalies."
            />
            <PrivacyCard
              title="Ongoing Improvements"
              text="Security is never ‘done’ — we iterate, review, and evolve practices as the platform grows."
            />
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ============== YOUR CONTROLS ============== */}
        <PrivacySection title="Your Controls & Choices">
          <p className="privacy-text">
            Where possible, you stay in control of what is stored, how it’s used,
            and how long it’s kept.
          </p>
          <ul className="privacy-list">
            <li>Update or correct account information from your profile.</li>
            <li>Adjust certain settings related to notifications or experiences.</li>
            <li>Request deletion or export of certain data where supported.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>
        </PrivacySection>

        <BreakLine />

        {/* ============== COOKIES & ANALYTICS ============== */}
        <PrivacySection title="Cookies & Analytics">
          <p className="privacy-text">
            NeX UP may use cookies or similar technologies to remember preferences,
            keep you signed in, and understand basic usage patterns.
          </p>
          <p className="privacy-text">
            Where analytics are used, they are focused on improving performance,
            stability, and overall product experience — not on tracking you across
            unrelated services.
          </p>
        </PrivacySection>

        <BreakLine />

        {/* ============== THIRD-PARTY SERVICES ============== */}
        <PrivacySection title="Third-Party Services">
          <p className="privacy-text">
            In some cases, NeX UP may integrate with third-party tools (for
            example, for infrastructure, analytics, or authentication).  
            These services are selected with care and are expected to follow strong
            security and privacy standards.
          </p>
          <p className="privacy-text">
            Where relevant, additional terms or disclosures may apply when you use
            those integrations.
          </p>
        </PrivacySection>

        <BreakLine />

        {/* ============== CHILDREN & SENSITIVE USES ============== */}
        <PrivacySection title="Sensitive Uses & Younger Users">
          <p className="privacy-text">
            NeX UP is primarily designed for professional, creative, and technical
            use. It is not intended for unsupervised use by young children.
          </p>
          <p className="privacy-text">
            Experiences should not be designed to target vulnerable groups with
            manipulative, harmful, or deceptive systems.
          </p>
        </PrivacySection>

        <BreakLine />

        {/* ============== CHANGES ============== */}
        <PrivacySection title="Changes to This Page">
          <p className="privacy-text">
            As NeX UP evolves, this Security & Privacy page may be updated to
            reflect new features, safeguards, or requirements.
          </p>
          <p className="privacy-text">
            When we make meaningful changes, we aim to communicate them through
            product updates, notices, or other clear channels.
          </p>
        </PrivacySection>

        <BreakLine />

        {/* ============== FINAL CTA ============== */}
        <section className="privacy-final-section">
          <motion.div
            className="privacy-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Questions, concerns, or feedback?
            </h2>
            <p className="final-text">
              If you’d like to understand more about how NeX UP handles security
              and privacy, or if you believe something isn’t working as expected,
              please reach out.
            </p>

            <div className="privacy-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact NeX UP →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/support/guidelines")}
              >
                View Guidelines →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/support/help")}
              >
                Go to Help Center →
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ============== REUSABLE COMPONENTS ============== */

function BreakLine() {
  return <div className="break-line" />;
}

function PrivacySection({ title, children }) {
  return (
    <section className="privacy-section">
      <motion.div
        className="privacy-section-inner"
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

function PrivacyCard({ title, text }) {
  return (
    <motion.div
      className="privacy-card"
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
