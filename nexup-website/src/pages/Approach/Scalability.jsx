import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Scalability() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Scalability</h1>
          <p className="vision-doc-meta">
            System Growth · Load Expansion · Long-Term Continuity
          </p>
          <p className="vision-depth-note">
            This document explains how NexUP scales without breaking persistence.
          </p>
          <p className="lead-paragraph">
            Scalability in NexUP is not defined by handling more users alone.
            It is defined by the system’s ability to grow in complexity,
            worlds, and activity without fragmenting identity,
            history, or continuity.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            Many platforms scale by duplicating systems and isolating users.
            NexUP scales by preserving shared structure and state.
          </p>
          <p>
            This document describes how NexUP expands
            while remaining a single coherent world.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document focuses on growth over time, not short-term performance tuning.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#definition">What Scalability Means</a></li>
              <li><a href="#why">Why Scalability Fails</a></li>
              <li><a href="#dimensions">Dimensions of Scale</a></li>
              <li><a href="#world-scale">Scaling Worlds</a></li>
              <li><a href="#infra-scale">Scaling Infrastructure</a></li>
              <li><a href="#execution-scale">Scaling Execution</a></li>
              <li><a href="#constraints">Scalability Constraints</a></li>
              <li><a href="#time">Scaling Over Time</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="definition">What Scalability Means</h2>
            <p>
              In NexUP, scalability refers to the system’s ability
              to support growth without losing coherence.
            </p>
            <p>
              Growth may occur in users, worlds, data,
              computation, or interaction density —
              but the system must remain unified.
            </p>

            <h2 id="why">Why Scalability Fails</h2>
            <p>
              Traditional platforms scale by partitioning users,
              resetting sessions, or duplicating environments.
            </p>
            <p>
              These approaches reduce load
              but destroy shared history and continuity.
            </p>

            <span className="vision-label">Core Principle</span>
            <p className="concept-block">
              Scale must preserve persistence.  
              Load must not erase memory.  
              Growth must not fragment identity.
            </p>

            <span className="vision-label">System Dimensions</span>
            <h2 id="dimensions">Dimensions of Scale</h2>
            <p>
              NexUP scales across multiple dimensions simultaneously.
            </p>
            <ul className="vision-ecosystem-list">
              <li>Number of active users</li>
              <li>Number of persistent worlds</li>
              <li>Volume of historical state</li>
              <li>Density of real-time interaction</li>
            </ul>

            <h2 id="world-scale">Scaling Worlds</h2>
            <p>
              World scalability is governed by
              <Link to="/vision/nexworld"> NexWorld</Link>.
            </p>
            <p>
              Worlds expand through spatial subdivision,
              region-based coordination, and persistence-aware boundaries.
            </p>

            <h2 id="infra-scale">Scaling Infrastructure</h2>
            <p>
              Infrastructure scaling is handled by
              <Link to="/vision/nexnodes"> NexNodes</Link>.
            </p>
            <p>
              Nodes distribute computation and storage
              while maintaining consistent system state.
            </p>

            <h2 id="execution-scale">Scaling Execution</h2>
            <p>
              Execution scalability is managed through
              <Link to="/vision/nexengine"> NexEngine</Link>.
            </p>
            <p>
              System logic adapts to load
              without breaking determinism or persistence.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Scalability Constraints</h2>
            <ul className="vision-constraints-list">
              <li>No sharding that breaks world continuity</li>
              <li>No scaling strategy that resets identity</li>
              <li>No optimization that sacrifices long-term coherence</li>
            </ul>

            <span className="vision-label">Temporal Growth</span>
            <h2 id="time">Scaling Over Time</h2>
            <p className="concept-block">
              Capacity increases.  
              Structure remains.  
              History persists.
            </p>
            <p>
              NexUP is designed to scale gradually,
              absorbing growth without forcing disruptive transitions.
            </p>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                How scalable systems are introduced safely:
              </p>
              <Link to="/approach/rollout" className="vision-cta-button">
                Read Rollout
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Scalability Document — Version 1.0  
            Growth continues. Continuity remains.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
