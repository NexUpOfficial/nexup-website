import React from 'react';
import "../../page-styles/sections/Roadmap.css";
// Updated Footer import path as requested
import Footer from "../../components/Footer/Footer"; 

const Roadmap = () => {
  return (
    <div className="roadmap-page">
      <div className="roadmap-container">
        
        {/* 5. Page Metadata (Using the new header structure) */}
        <header className="roadmap-header">
          <span className="indicator">Direction · Roadmap</span>
        </header>

        {/* 5. Main Title - Placed outside the header grid for centering */}
        <h1 className="roadmap-title">NEXUP ROADMAP</h1>

        {/* 5. Intro & Critical Messaging (Aligned with .approach-intro) */}
        <p className="roadmap-intro">
          This roadmap outlines the **directional evolution** of NexUP systems.
          It is **not a delivery schedule**.
        </p>

        {/* 4. Roadmap Philosophy (Aligned with a standard text block) */}
        <p className="roadmap-philosophy">
          NexUP does not publish delivery timelines for foundational systems.
          Progress is guided by **architectural readiness**, not deadlines.
        </p>

        {/* 8. Core Sections Wrapper */}
        <div className="roadmap-sections-stack">

          {/* Section 01 — How to Read This Roadmap */}
          <section className="roadmap-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">01</span>
                    <h2>How to Read This Roadmap</h2>
                </div>
              <p>
                This document is a technical brief intended to set expectations immediately.
              </p>
              <ul>
                <li>This roadmap communicates system direction, **not delivery commitments**.</li>
                <li>Items listed represent areas of active or planned architectural focus.</li>
                <li>The stated order indicates architectural **dependency**, not priority or proximity to launch.</li>
                <li>It is an honest view of uncertainty and constraint-aware development.</li>
              </ul>
          </section>

          {/* Section 02 — Foundation (Current Phase) */}
          <section className="roadmap-section phase-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">02</span>
                    <h2>Foundation</h2>
                </div>
              <p>
                The **Foundation** phase focuses on establishing core system primitives. Stability, correctness, and long-term maintainability take precedence over public exposure. This is where NexUP is now.
              </p>
              <ul>
                <li>Core spatial runtime and physics stability.</li>
                <li>Identity & access systems (Authentication, Authorization).</li>
                <li>Internal validation and testing infrastructure hardening.</li>
                <li>Security auditing and foundational trust systems.</li>
              </ul>
          </section>

          {/* Section 03 — Expansion */}
          <section className="roadmap-section phase-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">03</span>
                    <h2>Expansion</h2>
                </div>
              <p>
                The **Expansion** phase prepares for broader system adoption. Work in this phase is **intended** to unlock capabilities for external parties once Foundation systems achieve reliability thresholds.
              </p>
              <ul>
                <li>Public environment access mechanisms (e.g., initial read/write APIs).</li>
                <li>Exposure of Creator Tooling for early architectural partners.</li>
                <li>Engine interoperability exploration (**prepared for** Unreal / Unity).</li>
                <li>Expanded device support exploration (e.g., dedicated AR / VR / MR rendering pipelines).</li>
              </ul>
          </section>

          {/* Section 04 — Integration */}
          <section className="roadmap-section phase-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">04</span>
                    <h2>Integration</h2>
                </div>
              <p>
                The **Integration** phase describes how NexUP systems connect internally and with the external ecosystem. This work is deliberately complex and deliberate, aimed at creating compounding network effects.
              </p>
              <ul>
                <li>Cross-world continuity (seamless transfer of identity and state).</li>
                <li>External platform interoperability frameworks (data exchange protocols).</li>
                <li>Search & discovery layers, prioritizing integrity and relevance.</li>
                <li>Data and state persistence across disparate environments.</li>
              </ul>
          </section>

          {/* Section 05 — Maturity */}
          <section className="roadmap-section phase-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">05</span>
                    <h2>Maturity</h2>
                </div>
              <p>
                The **Maturity** phase signals the long-term, multi-year direction for NexUP. The focus shifts to systemic resilience, governance, and institutional-grade reliability.
              </p>
              <ul>
                <li>Governance systems architecture (e.g., DAO or decentralized decision frameworks).</li>
                <li>Advanced, proactive trust & safety mechanisms.</li>
                <li>Decentralized infrastructure considerations and research.</li>
                <li>High-availability and institutional-grade reliability targets.</li>
              </ul>
          </section>

          {/* Section 06 — What Is Intentionally Not Listed */}
          <section className="roadmap-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">06</span>
                    <h2>What Is Intentionally Not Listed</h2>
                </div>
              <p>
                This section is critical for maintaining directional focus and managing expectations.
              </p>
              <ul>
                <li>Specific features (e.g., 'avatar clothes shop' or 'new map type').</li>
                <li>Delivery dates or version numbers.</li>
                <li>Commercial details, pricing, or growth strategies.</li>
              </ul>
              <p>
                Their inclusion would misrepresent the nature of system-level work. **This document is not a feature checklist.**
              </p>
          </section>

          {/* Section 07 — Change & Adaptation */}
          <section className="roadmap-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">07</span>
                    <h2>Change & Adaptation</h2>
                </div>
              <p>
                The roadmap adapts as system constraints, architectural discoveries, and global technological shifts emerge.
              </p>
              <ul>
                <li>Direction remains consistent even when implementation paths change.</li>
                <li>Flexibility is a core system design principle.</li>
              </ul>
          </section>

          {/* Section 08 — Relationship to Other Pages */}
          <section className="roadmap-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">08</span>
                    <h2>Relationship to Other Pages</h2>
                </div>
              <p>
                Clarifying the separation of concerns across our documentation:
              </p>
              <ul>
                <li>The **Vision** document defines why the system exists.</li>
                <li>This **Roadmap** describes how the foundational system evolves.</li>
                <li>The **News** page records what has successfully occurred and shipped.</li>
              </ul>
          </section>
        
          {/* Section 09 — External Expectations */}
          <section className="roadmap-section">
                <div className="roadmap-section-header">
                    <span className="roadmap-section-number">09</span>
                    <h2>External Expectations</h2>
                </div>
              <p>
                For user trust and clarity:
              </p>
              <ul>
                <li>Presence on this roadmap does not imply immediate availability, access, or timing.</li>
                <li>Public access is introduced only when systems meet high reliability thresholds.</li>
                <li>We avoid "coming soon" and similar language to maintain honesty.</li>
              </ul>
          </section>

        </div> {/* End of roadmap-sections-stack */}


        {/* Section 10 — Closing System Signal (Local Footer Structure) */}
        <footer className="roadmap-footer">
            <p className="roadmap-footer-closing-signal">
              This document reflects directional intent, not delivery commitment.
            </p>

            {/* Silent Structural Signal - Placeholder if needed */}
            <div className="silent-signal-container">
                <p className="silent-signal">ARCHITECTURAL VIEW</p>
                <p className="silent-signal">SYSTEM INTEGRITY</p>
            </div>
            
            <p className="version-meta">
              Version: 0.1
              <br />
              Status: Directional
            </p>
        </footer>

      </div> {/* End of roadmap-container (Max-width content) */}

      {/* Adding the external Footer component, which will now stack below the container */}
      <Footer /> 
      
    </div>
  );
};

export default Roadmap;