import React from "react";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Privacy() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Privacy</h1>
          <p className="vision-doc-meta">
            Data Protection · User Rights · System Transparency
          </p>
          <p className="vision-depth-note">
            This document explains how NexUP handles personal data and privacy.
          </p>
          <p className="lead-paragraph">
            Privacy in NexUP is not an afterthought or a legal obligation alone.
            It is a core system principle that shapes how data is collected,
            processed, stored, and protected across the platform.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This Privacy document is written to be understood by users,
            not just legal professionals.
          </p>
          <p>
            It explains what data NexUP collects, why it is collected,
            how it is used, and the rights users retain at all times.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document is intended for clarity and accountability.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#principles">Privacy Principles</a></li>
              <li><a href="#data-collected">Data We Collect</a></li>
              <li><a href="#data-use">How Data Is Used</a></li>
              <li><a href="#identity">Identity & Accounts</a></li>
              <li><a href="#persistence">Persistence & History</a></li>
              <li><a href="#sharing">Data Sharing</a></li>
              <li><a href="#security">Data Security</a></li>
              <li><a href="#rights">User Rights</a></li>
              <li><a href="#retention">Data Retention</a></li>
              <li><a href="#changes">Policy Updates</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <span className="vision-label">Foundations</span>
            <h2 id="principles">Privacy Principles</h2>
            <p className="concept-block">
              Privacy by design.  
              Minimal data collection.  
              Transparent usage.  
              User control.
            </p>
            <p>
              NexUP is designed to collect only the data
              necessary to operate persistent systems
              and provide a reliable user experience.
            </p>

            <span className="vision-label">Collection</span>
            <h2 id="data-collected">Data We Collect</h2>
            <p>
              NexUP may collect the following categories of data:
            </p>
            <ul className="vision-ecosystem-list">
              <li>Account information provided by the user</li>
              <li>System interaction and usage data</li>
              <li>Technical data required for performance and security</li>
            </ul>
            <p>
              NexUP does not collect data unrelated
              to system operation or user-requested functionality.
            </p>

            <span className="vision-label">Purpose</span>
            <h2 id="data-use">How Data Is Used</h2>
            <p>
              Collected data is used strictly to:
            </p>
            <ul className="vision-ecosystem-list">
              <li>Operate and maintain the NexUP platform</li>
              <li>Ensure system stability and security</li>
              <li>Improve performance and usability</li>
            </ul>
            <p>
              Data is never used for undisclosed purposes.
            </p>

            <span className="vision-label">Accounts</span>
            <h2 id="identity">Identity & Accounts</h2>
            <p>
              User identity in NexUP is tied to system continuity,
              not to advertising or external profiling.
            </p>
            <p>
              Account data exists to support persistence,
              access control, and long-term presence
              within NexUP environments.
            </p>

            <span className="vision-label">Continuity</span>
            <h2 id="persistence">Persistence & History</h2>
            <p>
              NexUP is a persistent platform.
              This means some data is retained over time
              to preserve continuity and history.
            </p>
            <p>
              Persistence does not imply unrestricted data use.
              Historical data is protected and access-controlled.
            </p>

            <span className="vision-label">Disclosure</span>
            <h2 id="sharing">Data Sharing</h2>
            <p>
              NexUP does not sell personal data.
            </p>
            <p>
              Data may be shared only when:
            </p>
            <ul className="vision-ecosystem-list">
              <li>Required to operate essential services</li>
              <li>Necessary for legal compliance</li>
              <li>Explicitly authorized by the user</li>
            </ul>

            <span className="vision-label">Protection</span>
            <h2 id="security">Data Security</h2>
            <p>
              NexUP employs technical and organizational safeguards
              to protect data from unauthorized access,
              loss, or misuse.
            </p>
            <p>
              Security practices evolve alongside
              system architecture and threat models.
            </p>

            <span className="vision-label">Control</span>
            <h2 id="rights">User Rights</h2>
            <p className="concept-block">
              Users can access their data.  
              Users can request correction.  
              Users can request deletion where applicable.
            </p>
            <p>
              NexUP respects applicable data protection laws
              and provides mechanisms to exercise these rights.
            </p>

            <span className="vision-label">Lifecycle</span>
            <h2 id="retention">Data Retention</h2>
            <p>
              Data is retained only as long as necessary
              to support system functionality,
              legal requirements, or user-requested persistence.
            </p>
            <p>
              Retention policies are reviewed regularly.
            </p>

            <span className="vision-label">Evolution</span>
            <h2 id="changes">Policy Updates</h2>
            <p>
              This Privacy document may evolve
              as NexUP systems, features,
              and regulatory requirements change.
            </p>
            <p>
              Significant changes will be communicated clearly
              and without retroactive effect.
            </p>

            <p className="concept-block">
              Privacy is ongoing.  
              Transparency is continuous.  
              Trust is non-negotiable.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Privacy Document — Version 1.0  
            User trust is a system responsibility.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
