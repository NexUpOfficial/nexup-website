import React from "react";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/SystemDocs/SystemDocs.css";


export default function Security() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Security</h1>
          <p className="vision-doc-meta">
            System Protection · Threat Mitigation · Operational Resilience
          </p>
          <p className="vision-depth-note">
            This document explains how NexUP protects systems, data, and users.
          </p>
          <p className="lead-paragraph">
            Security in NexUP is a foundational system requirement.
            It is built into architecture, infrastructure, and operations
            to protect persistent worlds, identities, and data over time.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document describes security practices at a system level.
            It explains what NexUP protects, how protection is implemented,
            and where explicit boundaries exist.
          </p>
          <p>
            Security details that could weaken system integrity
            are intentionally not disclosed.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document focuses on protection without obscurity.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#principles">Security Principles</a></li>
              <li><a href="#threats">Threat Model</a></li>
              <li><a href="#architecture">Security by Architecture</a></li>
              <li><a href="#data">Data Protection</a></li>
              <li><a href="#access">Access Control</a></li>
              <li><a href="#infrastructure">Infrastructure Security</a></li>
              <li><a href="#monitoring">Monitoring & Response</a></li>
              <li><a href="#user-role">User Responsibility</a></li>
              <li><a href="#limitations">Security Limitations</a></li>
              <li><a href="#evolution">Security Over Time</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <span className="vision-label">Foundations</span>
            <h2 id="principles">Security Principles</h2>
            <p className="concept-block">
              Defense in depth.  
              Least privilege.  
              Secure by default.  
              Continuous evaluation.
            </p>
            <p>
              Security decisions in NexUP are guided by these principles,
              ensuring protection without unnecessary complexity.
            </p>

            <span className="vision-label">Risk Awareness</span>
            <h2 id="threats">Threat Model</h2>
            <p>
              NexUP security is designed to mitigate risks such as:
            </p>
            <ul className="vision-ecosystem-list">
              <li>Unauthorized access to accounts or systems</li>
              <li>Data leakage or corruption</li>
              <li>Service disruption and abuse</li>
            </ul>
            <p>
              Threat models are reviewed and updated
              as system capabilities and exposure evolve.
            </p>

            <span className="vision-label">Design</span>
            <h2 id="architecture">Security by Architecture</h2>
            <p>
              Security is enforced through architectural separation
              of concerns across systems.
            </p>
            <p>
              Persistent world logic, infrastructure control,
              and execution behavior are isolated to reduce blast radius.
            </p>

            <span className="vision-label">Protection</span>
            <h2 id="data">Data Protection</h2>
            <p>
              NexUP protects data through encryption,
              access controls, and controlled retention.
            </p>
            <p>
              Sensitive data is never exposed
              beyond what is required for system operation.
            </p>

            <span className="vision-label">Authorization</span>
            <h2 id="access">Access Control</h2>
            <p>
              Access to systems and data is governed
              by role-based and context-aware controls.
            </p>
            <p className="concept-block">
              Identity is verified.  
              Permissions are explicit.  
              Actions are auditable.
            </p>

            <span className="vision-label">Operations</span>
            <h2 id="infrastructure">Infrastructure Security</h2>
            <p>
              Infrastructure components are secured
              through isolation, redundancy,
              and continuous configuration management.
            </p>
            <p>
              No single component is trusted by default.
            </p>

            <span className="vision-label">Awareness</span>
            <h2 id="monitoring">Monitoring & Response</h2>
            <p>
              NexUP continuously monitors system behavior
              for anomalies and potential threats.
            </p>
            <p>
              Incident response procedures
              prioritize containment, analysis,
              and long-term prevention.
            </p>

            <span className="vision-label">Shared Responsibility</span>
            <h2 id="user-role">User Responsibility</h2>
            <p>
              Users play an important role
              in maintaining system security.
            </p>
            <ul className="vision-ecosystem-list">
              <li>Protect account credentials</li>
              <li>Report suspicious activity</li>
              <li>Use features as intended</li>
            </ul>

            <span className="vision-label">Boundaries</span>
            <h2 id="limitations">Security Limitations</h2>
            <p>
              No system can guarantee absolute security.
            </p>
            <p>
              NexUP balances protection, usability,
              and transparency while acknowledging
              that risk can be reduced but not eliminated.
            </p>

            <span className="vision-label">Continuity</span>
            <h2 id="evolution">Security Over Time</h2>
            <p className="concept-block">
              Threats evolve.  
              Defenses adapt.  
              Vigilance remains constant.
            </p>
            <p>
              Security practices evolve alongside NexUP
              as new features, environments,
              and usage patterns emerge.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Security Document — Version 1.0  
            Protection is a continuous system responsibility.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
