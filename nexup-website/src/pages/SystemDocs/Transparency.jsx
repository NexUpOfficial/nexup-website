import React from "react";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Transparency() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Transparency</h1>
          <p className="vision-doc-meta">
            System Clarity · Operational Honesty · User Trust
          </p>
          <p className="vision-depth-note">
            This document explains how NexUP maintains transparency across systems and decisions.
          </p>
          <p className="lead-paragraph">
            Transparency in NexUP is not a promise made in policy text.
            It is an architectural commitment embedded into how systems
            are designed, operated, and evolved over time.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            Users should not have to guess how a system works,
            what data it uses, or why decisions are made.
          </p>
          <p>
            This document describes the principles and mechanisms
            NexUP uses to remain understandable, inspectable,
            and accountable.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document focuses on openness without compromising security.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#meaning">What Transparency Means</a></li>
              <li><a href="#why">Why Transparency Matters</a></li>
              <li><a href="#system-design">Transparency by Design</a></li>
              <li><a href="#data">Data Transparency</a></li>
              <li><a href="#decisions">Decision-Making Transparency</a></li>
              <li><a href="#algorithms">Algorithmic Transparency</a></li>
              <li><a href="#limits">Limits of Transparency</a></li>
              <li><a href="#evolution">Transparency Over Time</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <span className="vision-label">Definition</span>
            <h2 id="meaning">What Transparency Means</h2>
            <p>
              Transparency in NexUP means that users can understand
              how the platform operates at a system level
              without requiring insider knowledge.
            </p>
            <p>
              It does not mean exposing sensitive infrastructure
              or compromising security.
            </p>

            <h2 id="why">Why Transparency Matters</h2>
            <p>
              Systems that are opaque inevitably erode trust.
              When users cannot see or understand system behavior,
              confidence is replaced by speculation.
            </p>
            <p>
              NexUP treats transparency as a prerequisite
              for long-term adoption and legitimacy.
            </p>

            <span className="vision-label">Architecture</span>
            <h2 id="system-design">Transparency by Design</h2>
            <p>
              Transparency is embedded into NexUP’s architecture,
              not added later through documentation alone.
            </p>
            <p className="concept-block">
              Clear system boundaries.  
              Explicit responsibilities.  
              Observable behavior.
            </p>
            <p>
              Each major system publishes its purpose,
              constraints, and operational role.
            </p>

            <span className="vision-label">Data</span>
            <h2 id="data">Data Transparency</h2>
            <p>
              Users are informed about what data is collected,
              why it is collected,
              and how long it is retained.
            </p>
            <p>
              Data usage is documented in plain language
              through the Privacy and Cookies documents.
            </p>

            <span className="vision-label">Governance</span>
            <h2 id="decisions">Decision-Making Transparency</h2>
            <p>
              Major system decisions are guided by
              published architectural and operational principles.
            </p>
            <p>
              Changes that materially affect users
              are communicated clearly and ahead of time.
            </p>

            <span className="vision-label">Systems</span>
            <h2 id="algorithms">Algorithmic Transparency</h2>
            <p>
              NexUP avoids opaque ranking or manipulation systems.
            </p>
            <p>
              Where automated decision-making exists,
              its purpose and impact are described
              without exposing exploitable internals.
            </p>

            <span className="vision-label">Boundaries</span>
            <h2 id="limits">Limits of Transparency</h2>
            <p>
              Transparency does not require exposing
              sensitive security mechanisms
              or private user data.
            </p>
            <p>
              NexUP balances openness with protection
              to ensure system safety and integrity.
            </p>

            <span className="vision-label">Continuity</span>
            <h2 id="evolution">Transparency Over Time</h2>
            <p className="concept-block">
              Systems evolve.  
              Documentation updates.  
              Accountability remains.
            </p>
            <p>
              Transparency practices evolve alongside NexUP
              as systems grow in complexity and scope.
            </p>

            <p>
              This document will be updated as new systems,
              features, and governance models are introduced.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Transparency Document — Version 1.0  
            Trust is built through clarity.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
