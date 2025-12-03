// src/pages/Account/DNS.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Account/DNS.css";
import Footer from "../../components/Footer/Footer";

export default function DNS() {
  const navigate = useNavigate();

  return (
    <div className="dns-page">
      <div className="dns-wrapper">
        {/* ================= HERO ================= */}
        <section className="dns-hero-section">
          <motion.div
            className="dns-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title dns-hero-title">
              DNS Settings
            </h1>
            <p className="dns-hero-sub">
              Distributed NeX Security — identity anchors, trusted devices, and
              future security notes for the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= IDENTITY OVERVIEW ================= */}
        <DNSSection title="Identity Overview">
          <p className="dns-text">
            DNS (Distributed NeX Security) is the identity and security backbone
            of NeX UP. It defines how users, devices, and environments are
            authenticated and trusted across NexWorld, NexEngine, NexNodes, and
            other systems.
          </p>
          <p className="dns-text">
            Each identity is represented by a set of anchors, trust scores,
            device links, and security rules that evolve over time as the
            ecosystem grows.
          </p>
        </DNSSection>

        <BreakLine />

        {/* ================= IDENTITY ANCHORS ================= */}
        <DNSSection title="Identity Anchors">
          <div className="dns-grid">
            <AnchorCard
              title="Primary Anchor"
              text="The core identity root used to verify the user across NeX UP systems."
            />
            <AnchorCard
              title="Backup Anchor"
              text="Secondary identity path used for recovery or long-term verification."
            />
            <AnchorCard
              title="Device-bound Anchor"
              text="Identity components tied to specific trusted devices."
            />
            <AnchorCard
              title="Recovery Anchor"
              text="Emergency route for account restoration and security resets."
            />
            <AnchorCard
              title="Temporal Anchor"
              text="(Future) Time-bound keys that rotate based on session age and risk."
            />
          </div>
        </DNSSection>

        <BreakLine />

        {/* ================= TRUSTED DEVICES ================= */}
        <DNSSection title="Trusted Devices (Concept Notes)">
          <p className="dns-text">
            DNS maintains a conceptual list of trusted devices. In future
            versions, this section will link to live device management.
          </p>

          <div className="devices-table">
            <div className="devices-header">
              <span>Device</span>
              <span>Type</span>
              <span>Trust Level</span>
              <span>Last Verified</span>
            </div>

            <div className="devices-row">
              <span>Primary AR Headset</span>
              <span>Wearable</span>
              <span>High</span>
              <span>— planned</span>
            </div>
            <div className="devices-row">
              <span>NeX UP Desktop</span>
              <span>Workstation</span>
              <span>Medium</span>
              <span>— planned</span>
            </div>
            <div className="devices-row">
              <span>Mobile Companion</span>
              <span>Phone</span>
              <span>Contextual</span>
              <span>— planned</span>
            </div>
          </div>
        </DNSSection>

        <BreakLine />

        {/* ================= SECURITY LAYERS ================= */}
        <DNSSection title="Security Layers">
          <div className="dns-grid">
            <SecurityCard
              title="Encryption Layer"
              text="Protects communication between clients, worlds, and NeX UP services."
            />
            <SecurityCard
              title="Authentication Layer"
              text="Verifies identity using DNS anchors, device trust, and credentials."
            />
            <SecurityCard
              title="Spatial Verification"
              text="(Future) Uses spatial position, environment, and movement as part of identity."
            />
            <SecurityCard
              title="Behavior Signature"
              text="(Future) Recognizes familiar interaction patterns to enhance trust signals."
            />
            <SecurityCard
              title="Cross-World Sync"
              text="Keeps identity consistent across NexWorld environments and sessions."
            />
            <SecurityCard
              title="Emergency Recovery"
              text="Supports escape hatches, lockouts, and safe account recovery protocols."
            />
          </div>
        </DNSSection>

        <BreakLine />

        {/* ================= SESSION INTELLIGENCE ================= */}
        <DNSSection title="Session Intelligence Notes">
          <p className="dns-text">
            Future DNS implementations will include adaptive session handling:
          </p>
          <ul className="dns-list">
            <li>Session length based on device type and sensitivity.</li>
            <li>Context-aware re-authentication for critical actions.</li>
            <li>Multi-factor checks triggered by unusual behavior.</li>
            <li>World-level session boundaries for NexWorld experiences.</li>
          </ul>
        </DNSSection>

        <BreakLine />

        {/* ================= DEVELOPER NOTES ================= */}
        <DNSSection title="Developer Notes (Internal)">
          <div className="developer-notes">
            <p>
              • Future API: <code>/api/dns/anchors</code> — list and manage identity anchors.
            </p>
            <p>
              • Future API: <code>/api/dns/devices</code> — inspect and update trusted devices.
            </p>
            <p>
              • Key rotation policy: time-based + risk-based, integrated with NexNodes.
            </p>
            <p>
              • Long-term goal: unify DNS with environment-aware authentication from Safety & Trust layers.
            </p>
          </div>
        </DNSSection>

        <BreakLine />

        {/* ================= ROADMAP ================= */}
        <DNSSection title="Future DNS Roadmap">
          <ul className="dns-list">
            <li>Biometric and neural-linked DNS identity.</li>
            <li>Spatial presence as part of authentication.</li>
            <li>Identity shards distributed across NexNodes for resilience.</li>
            <li>Deep integration with Trust, Safety, and Transparency systems.</li>
          </ul>
        </DNSSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="dns-final-section">
          <motion.div
            className="dns-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Need help with DNS or identity?
            </h2>
            <p className="final-text">
              Use this space as a living document for how DNS will evolve.
              For user-facing issues, route everything through support.
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

      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function DNSSection({ title, children }) {
  return (
    <section className="dns-section">
      <motion.div
        className="dns-section-inner"
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

function AnchorCard({ title, text }) {
  return (
    <motion.div
      className="anchor-card"
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

function SecurityCard({ title, text }) {
  return (
    <motion.div
      className="security-card"
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
