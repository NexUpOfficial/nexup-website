// src/pages/Support/Guidelines.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Support/Guidelines.css";
import Footer from "../../components/Footer/Footer";

export default function Guidelines() {
  const navigate = useNavigate();

  return (
    <div className="guidelines-page">
      <div className="guidelines-wrapper">
        {/* ================= HERO ================= */}
        <section className="guidelines-hero-section">
          <motion.div
            className="guidelines-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title guidelines-hero-title">
              NeX UP Guidelines
            </h1>
            <p className="guidelines-hero-sub">
              Principles, policies, and best practices for using NeX UP
              responsibly, safely, and creatively.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHY GUIDELINES ================= */}
        <GuidelinesSection title="Why These Guidelines Exist">
          <p className="guidelines-text">
            NeX UP is designed to power a new kind of digital reality — immersive,
            intelligent, and deeply interconnected. These guidelines help ensure
            that the ecosystem remains safe, respectful, and sustainable for
            everyone using it: creators, developers, organizations, and everyday
            users.
          </p>
          <p className="guidelines-text">
            By following these principles, you help build a future where
            technology enhances human potential without causing harm or misuse.
          </p>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= CORE PRINCIPLES ================= */}
        <GuidelinesSection title="Core Principles">
          <div className="principles-grid">
            <PrincipleCard
              title="Safety First"
              text="Experiences should never cause physical, emotional, or psychological harm. Design with user wellbeing as the first priority."
            />
            <PrincipleCard
              title="Transparency"
              text="Be clear about what your experiences do, what data they use, and how they behave in different environments."
            />
            <PrincipleCard
              title="Respect & Integrity"
              text="Treat all users with respect. No harassment, discrimination, or abuse. Be honest about what you build."
            />
            <PrincipleCard
              title="Responsible Innovation"
              text="Experiment boldly — but not recklessly. Avoid creating systems that can be misused in harmful ways."
            />
          </div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= USER BEHAVIOR ================= */}
        <GuidelinesSection title="User Behavior Guidelines">
          <ul className="guidelines-list">
            <li>Do not engage in harassment, hate, or abusive behavior.</li>
            <li>Do not share or promote harmful, violent, or illegal content.</li>
            <li>Do not impersonate others or misrepresent your identity.</li>
            <li>Do not attempt to exploit vulnerabilities in NeX UP systems.</li>
            <li>Respect personal boundaries in collaborative or shared worlds.</li>
          </ul>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= CREATOR & DEVELOPER ================= */}
        <GuidelinesSection title="Creator & Developer Guidelines">
          <p className="guidelines-text">
            Creators and developers play a central role in shaping the NeX UP
            ecosystem. With that power comes responsibility.
          </p>

          <ul className="guidelines-list">
            <li>
              Use APIs, tools, and SDKs in accordance with NeX UP policies and
              applicable laws.
            </li>
            <li>
              Do not build experiences designed to deceive, manipulate, or harm
              users.
            </li>
            <li>
              Avoid creating simulations that encourage real-world risky or
              dangerous behavior.
            </li>
            <li>
              Do not collect or store data beyond what is necessary for your
              experience.
            </li>
            <li>
              Clearly disclose when environments are simulated, experimental, or
              subject to change.
            </li>
          </ul>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= CONTENT GUIDELINES ================= */}
        <GuidelinesSection title="Content Guidelines">
          <div className="content-grid">
            <div className="content-block">
              <h3>Allowed Content</h3>
              <ul className="guidelines-list">
                <li>Educational and training experiences.</li>
                <li>Immersive storytelling, art, and creative worlds.</li>
                <li>Productivity, collaboration, and simulation tools.</li>
                <li>Research environments and experimental prototypes.</li>
                <li>Non-harmful entertainment and exploratory content.</li>
              </ul>
            </div>

            <div className="content-block restricted">
              <h3>Restricted / Not Allowed</h3>
              <ul className="guidelines-list">
                <li>Hate speech or extremist content.</li>
                <li>Graphic violence or incitement to harm.</li>
                <li>Sexually explicit or exploitative content.</li>
                <li>Illegal activities or instructions to cause damage.</li>
                <li>Deceptive deepfakes or identity manipulation.</li>
              </ul>
            </div>
          </div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= SPATIAL ENVIRONMENT ================= */}
        <GuidelinesSection title="Spatial & Immersive Environment Guidelines">
          <p className="guidelines-text">
            Spatial environments can feel real — which means they must be designed
            with care.
          </p>

          <div className="spatial-grid">
            <SpatialCard
              title="Avoid Dangerous Simulations"
              text="Do not create worlds that encourage unsafe physical actions, disorientation, or harmful real-world mimicry."
            />
            <SpatialCard
              title="Respect Physical Boundaries"
              text="Recognize that users move in real spaces. Avoid sudden motion, extreme visuals, or disorienting transitions."
            />
            <SpatialCard
              title="Design for Comfort"
              text="Use pacing, motion, and environment design that minimizes discomfort, motion sickness, or stress."
            />
          </div>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= DATA & PRIVACY ================= */}
        <GuidelinesSection title="Data & Privacy Practices">
          <ul className="guidelines-list">
            <li>
              Do not collect personal data without clear consent and a valid
              reason.
            </li>
            <li>
              Do not sell or share user data in ways that violate privacy or
              regional regulations.
            </li>
            <li>
              Avoid using biometric, facial, or sensitive data unless absolutely
              necessary and legally compliant.
            </li>
            <li>
              Store only what you need, for as long as you need it — and protect
              it properly.
            </li>
          </ul>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= REPORTING & ENFORCEMENT ================= */}
        <GuidelinesSection title="Reporting & Enforcement">
          <p className="guidelines-text">
            If you see something that violates these guidelines or feels unsafe,
            we encourage you to report it.
          </p>

          <ul className="guidelines-list">
            <li>Users can report content, experiences, or behavior they find harmful.</li>
            <li>
              NeX UP may investigate, restrict, or remove content or access based
              on severity and impact.
            </li>
            <li>
              Repeat or severe violations can result in account suspension,
              removal of access, or legal escalation when required.
            </li>
          </ul>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= POSITIVE BEST PRACTICES ================= */}
        <GuidelinesSection title="Best Practices for Positive Impact">
          <p className="guidelines-text">
            NeX UP is for builders, explorers, and creators who want to make
            something meaningful.
          </p>

          <ul className="guidelines-list">
            <li>Design experiences that help people learn, connect, or create.</li>
            <li>Make environments accessible and inclusive wherever possible.</li>
            <li>Test your experiences with real users and listen to feedback.</li>
            <li>Think long-term: build things you’ll be proud of years from now.</li>
          </ul>
        </GuidelinesSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="guidelines-final-section">
          <motion.div
            className="guidelines-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Need clarification or want to report something?
            </h2>
            <p className="final-text">
              Our team is here to help you use NeX UP safely and responsibly.
              Reach out if you have questions, concerns, or feedback.
            </p>

            <div className="guidelines-final-actions">
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
                Visit Safety Center →
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

function GuidelinesSection({ title, children }) {
  return (
    <section className="guidelines-section">
      <motion.div
        className="guidelines-section-inner"
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

function PrincipleCard({ title, text }) {
  return (
    <motion.div
      className="principle-card"
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

function SpatialCard({ title, text }) {
  return (
    <motion.div
      className="spatial-card"
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
