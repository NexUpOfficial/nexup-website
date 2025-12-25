import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Rollout() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Rollout</h1>
          <p className="vision-doc-meta">
            Phased Introduction · Controlled Expansion · System Stability
          </p>
          <p className="vision-depth-note">
            This document explains how NexUP is introduced and expanded safely.
          </p>
          <p className="lead-paragraph">
            NexUP is not launched as a complete system in a single moment.
            It is introduced through deliberate phases that allow
            architecture, scalability, and persistence to mature
            without destabilizing the platform.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            Rollout is not marketing.
            It is a systems discipline.
          </p>
          <p>
            This document describes how NexUP evolves
            from controlled environments into a fully
            persistent, large-scale platform.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document focuses on safe progression, not speed.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#definition">What Rollout Means</a></li>
              <li><a href="#why">Why Phased Rollout Matters</a></li>
              <li><a href="#principles">Rollout Principles</a></li>
              <li><a href="#phases">Phased Rollout Model</a></li>
              <li><a href="#validation">Validation & Feedback</a></li>
              <li><a href="#stability">Stability Guarantees</a></li>
              <li><a href="#constraints">Rollout Constraints</a></li>
              <li><a href="#time">Rollout Over Time</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="definition">What Rollout Means</h2>
            <p>
              In NexUP, rollout refers to the controlled introduction
              of systems, worlds, and capabilities into a persistent platform.
            </p>
            <p>
              Each rollout phase expands functionality
              without compromising continuity or trust.
            </p>

            <h2 id="why">Why Phased Rollout Matters</h2>
            <p>
              Large systems fail when change is introduced
              faster than stability can be verified.
            </p>
            <p>
              NexUP avoids this by ensuring that
              every expansion is observed, validated,
              and stabilized before progressing.
            </p>

            <span className="vision-label">Core Discipline</span>
            <p className="concept-block">
              Introduce slowly.  
              Observe continuously.  
              Stabilize before expanding.
            </p>

            <span className="vision-label">Rollout Model</span>
            <h2 id="principles">Rollout Principles</h2>
            <p>
              NexUP rollout follows a strict set of principles
              designed to protect long-term system health.
            </p>
            <ul className="vision-ecosystem-list">
              <li>Persistence is never reset between phases</li>
              <li>New capabilities are additive, not disruptive</li>
              <li>Rollback paths always exist</li>
            </ul>

            <h2 id="phases">Phased Rollout Model</h2>
            <p>
              NexUP is introduced through progressive phases,
              each with a clearly defined scope.
            </p>

            <p className="concept-block">
              Phase 1 — Core world stability  
              Phase 2 — Controlled user presence  
              Phase 3 — System expansion  
              Phase 4 — Ecosystem growth
            </p>

            <h2 id="validation">Validation & Feedback</h2>
            <p>
              Each rollout phase is monitored for
              stability, performance, and user behavior.
            </p>
            <p>
              Feedback loops inform adjustments
              before the next phase is initiated.
            </p>

            <span className="vision-label">System Health</span>
            <h2 id="stability">Stability Guarantees</h2>
            <p>
              Rollout does not compromise
              the guarantees defined by
              <Link to="/approach/architecture"> Architecture</Link>
              and
              <Link to="/approach/scalability"> Scalability</Link>.
            </p>
            <p>
              Persistence, identity continuity,
              and historical state are preserved at all times.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Rollout Constraints</h2>
            <ul className="vision-constraints-list">
              <li>No phase resets world state</li>
              <li>No rollout bypasses architectural constraints</li>
              <li>No expansion without validation</li>
            </ul>

            <span className="vision-label">Temporal Discipline</span>
            <h2 id="time">Rollout Over Time</h2>
            <p className="concept-block">
              Progress is deliberate.  
              Stability is cumulative.  
              Trust compounds over time.
            </p>
            <p>
              NexUP rollout is measured in years,
              not launch cycles.
            </p>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                To understand the structure guiding rollout:
              </p>
              <Link to="/approach/architecture" className="vision-cta-button">
                Read Architecture
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Rollout Document — Version 1.0  
            Expansion is controlled. Continuity is preserved.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
