import React from "react";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Terms() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Terms</h1>
          <p className="vision-doc-meta">
            Terms & Conditions · Platform Rules · User Responsibilities
          </p>
          <p className="vision-depth-note">
            This document defines the conditions for using NexUP.
          </p>
          <p className="lead-paragraph">
            These Terms establish the rules, responsibilities,
            and limitations that apply when accessing or using NexUP.
            They exist to protect users, safeguard the platform,
            and ensure long-term system integrity.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            These Terms are written to be clear and understandable.
            They are not intended to obscure obligations
            or hide critical information.
          </p>
          <p>
            By using NexUP, users agree to comply
            with the conditions described below.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document defines usage rules and system boundaries.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#accounts">Accounts & Access</a></li>
              <li><a href="#use">Acceptable Use</a></li>
              <li><a href="#content">User Content</a></li>
              <li><a href="#integrity">Platform Integrity</a></li>
              <li><a href="#termination">Suspension & Termination</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#changes">Changes to These Terms</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="acceptance">Acceptance of Terms</h2>
            <p>
              By accessing, registering for,
              or using NexUP,
              you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree,
              you must not use the platform.
            </p>

            <h2 id="eligibility">Eligibility</h2>
            <p>
              Users must have the legal capacity
              to enter into binding agreements
              under applicable law.
            </p>
            <p>
              Certain features may have
              additional eligibility requirements.
            </p>

            <span className="vision-label">Access</span>
            <h2 id="accounts">Accounts & Access</h2>
            <p>
              Some NexUP features require an account.
            </p>
            <p>
              Users are responsible for maintaining
              the security of their credentials
              and all activity associated with their account.
            </p>

            <span className="vision-label">Usage</span>
            <h2 id="use">Acceptable Use</h2>
            <p>
              NexUP must be used in a manner
              that respects other users,
              system stability,
              and applicable laws.
            </p>
            <ul className="vision-ecosystem-list">
              <li>No abuse of system resources</li>
              <li>No attempts to bypass security controls</li>
              <li>No actions that disrupt platform operation</li>
            </ul>

            <span className="vision-label">Ownership</span>
            <h2 id="content">User Content</h2>
            <p>
              Users retain ownership of content
              they create within NexUP.
            </p>
            <p>
              By submitting content,
              users grant NexUP the limited rights
              necessary to host, process,
              and display that content
              as part of the platform.
            </p>

            <span className="vision-label">Protection</span>
            <h2 id="integrity">Platform Integrity</h2>
            <p>
              NexUP may enforce technical
              and administrative measures
              to protect system integrity.
            </p>
            <p className="concept-block">
              Stability is preserved.  
              Abuse is restricted.  
              Continuity is protected.
            </p>

            <span className="vision-label">Enforcement</span>
            <h2 id="termination">Suspension & Termination</h2>
            <p>
              NexUP may suspend or terminate access
              if these Terms are violated
              or if necessary to protect the platform.
            </p>
            <p>
              Enforcement actions are taken
              with proportionality and system impact in mind.
            </p>

            <span className="vision-label">Liability</span>
            <h2 id="liability">Limitation of Liability</h2>
            <p>
              NexUP is provided on an “as is” basis,
              except where warranties are required by law.
            </p>
            <p>
              To the extent permitted by law,
              NexUP is not liable for indirect
              or consequential damages
              arising from platform use.
            </p>

            <span className="vision-label">Evolution</span>
            <h2 id="changes">Changes to These Terms</h2>
            <p>
              These Terms may be updated
              as NexUP systems and features evolve.
            </p>
            <p>
              Material changes will be communicated clearly,
              and continued use of NexUP
              constitutes acceptance of the updated Terms.
            </p>

            <p className="concept-block">
              Rules define boundaries.  
              Boundaries protect trust.  
              Trust sustains the platform.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Terms Document — Version 1.0  
            Clear rules support long-term systems.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
