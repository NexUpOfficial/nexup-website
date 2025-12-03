// src/pages/Login.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../page-styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* ================= HERO ================= */}
        <section className="login-hero-section">
          <motion.div
            className="login-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title login-hero-title">
              Login System (DNS)
            </h1>

            <p className="login-hero-sub">
              Your secure identity layer inside the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        {/* ================= LOGIN CARD ================= */}
        <section className="login-card-section">
          <motion.div
            className="login-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="login-card-title">Welcome Back</h2>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="login-button">Login</button>

            <button className="forgot-btn">
              Forgot Password?
            </button>

            <div className="login-meta">
              <p>
                First time logging in? Your account will be created automatically.
              </p>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FEATURES ================= */}
        <LoginSection title="Why DNS Login?">
          <div className="login-grid">
            <FeatureCard
              title="Distributed Identity"
              text="Your identity is protected across devices using DNS cryptographic layers."
            />
            <FeatureCard
              title="Secure World Access"
              text="Login unlocks access to NexWorld, NexEngine, and intelligent AR/VR systems."
            />
            <FeatureCard
              title="Adaptive Authentication"
              text="Automatically strengthens security based on context and device trust."
            />
            <FeatureCard
              title="Encrypted Sessions"
              text="Every action is protected with world-level encryption and session integrity."
            />
            <FeatureCard
              title="Instant Device Linking"
              text="Login once, stay verified across your entire NeX UP ecosystem."
            />
            <FeatureCard
              title="Zero-Knowledge Protection"
              text="Your credentials are never exposed — even during authentication."
            />
          </div>
        </LoginSection>

        <BreakLine />

        {/* ================= ACCOUNT PROTECTION ================= */}
        <LoginSection title="Account Protection">
          <ul className="login-list">
            <li>2-step authentication for sensitive ecosystem actions</li>
            <li>Device-based trust scoring</li>
            <li>Backup login codes for emergencies</li>
            <li>Continuous identity monitoring</li>
          </ul>
        </LoginSection>

        <BreakLine />

        {/* ================= FUTURE ================= */}
        <LoginSection title="The Future of DNS Login">
          <ul className="login-list">
            <li>Biometric login across AR headsets & devices</li>
            <li>Environment-based authentication (presence, voice, motion)</li>
            <li>Neural intent verification for secure world access</li>
          </ul>
        </LoginSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="login-final-section">
          <motion.div
            className="login-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Need help with your account?
            </h2>
            <p className="final-text">
              Our support team is here to assist you with login issues,
              authentication problems, or security questions.
            </p>

            <button
              className="white-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Support →
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function LoginSection({ title, children }) {
  return (
    <section className="login-section">
      <motion.div
        className="login-section-inner"
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
