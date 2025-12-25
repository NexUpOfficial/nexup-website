import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/Approach/Approach.css";


export default function Architecture() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Architecture</h1>
          <p className="vision-doc-meta">
            System Architecture · Layered Design · Long-Term Stability
          </p>
          <p className="vision-depth-note">
            This document defines architectural systems, not implementation shortcuts.
          </p>
          <p className="lead-paragraph">
            NexUP architecture defines how persistent worlds,
            infrastructure, and execution systems are structured
            to remain stable, scalable, and evolvable over time.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            Architecture exists to protect long-term systems
            from short-term decision making.
          </p>
          <p>
            This document describes how NexUP is organized
            as a system of interoperable layers,
            each with clear responsibilities and constraints.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document should be read as a unified architectural system.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#foundations">Architectural Foundations</a></li>
              <li><a href="#why">Why Architecture Matters</a></li>
              <li><a href="#principles">Core Architectural Principles</a></li>
              <li><a href="#layers">Layered System Design</a></li>
              <li><a href="#world-layer">World Layer</a></li>
              <li><a href="#node-layer">Infrastructure Layer</a></li>
              <li><a href="#engine-layer">Execution Layer</a></li>
              <li><a href="#integration">System Integration</a></li>
              <li><a href="#constraints">Architectural Constraints</a></li>
              <li><a href="#time">Architecture Over Time</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="foundations">Architectural Foundations</h2>
            <p>
              NexUP is not designed as a collection of independent applications.
              It is architected as a persistent digital system.
            </p>
            <p>
              Architecture provides the structure that allows
              worlds, identities, and systems to coexist
              without fragmentation.
            </p>

            <h2 id="why">Why Architecture Matters</h2>
            <p>
              Without strong architecture, platforms degrade as they scale.
              Complexity accumulates faster than understanding.
            </p>
            <p>
              NexUP architecture exists to enforce clarity,
              separation of concerns, and long-term continuity.
            </p>

            <span className="vision-label">Foundational Principles</span>
            <h2 id="principles">Core Architectural Principles</h2>
            <p className="concept-block">
              Persistence before convenience.  
              Separation before coupling.  
              Evolution before replacement.
            </p>
            <p>
              These principles guide all architectural decisions
              across the NexUP platform.
            </p>

            <span className="vision-label">System Structure</span>
            <h2 id="layers">Layered System Design</h2>
            <p>
              NexUP is structured as a set of clearly defined layers,
              each responsible for a specific concern.
            </p>
            <p>
              No layer assumes control over another.
              Coordination replaces centralization.
            </p>

            <h2 id="world-layer">World Layer</h2>
            <p>
              The world layer is defined by
              <Link to="/vision/nexworld"> NexWorld</Link>.
            </p>
            <p>
              It provides persistent environments
              where interaction, memory, and spatial continuity exist.
            </p>

            <h2 id="node-layer">Infrastructure Layer</h2>
            <p>
              The infrastructure layer is implemented through
              <Link to="/vision/nexnodes"> NexNodes</Link>.
            </p>
            <p>
              This layer maintains computation, synchronization,
              and long-term system state.
            </p>

            <h2 id="engine-layer">Execution Layer</h2>
            <p>
              The execution layer is governed by
              <Link to="/vision/nexengine"> NexEngine</Link>.
            </p>
            <p>
              It orchestrates system behavior
              without violating persistence guarantees.
            </p>

            <span className="vision-label">Interoperability</span>
            <h2 id="integration">System Integration</h2>
            <p>
              Integration between layers occurs through
              explicit contracts and stable interfaces.
            </p>
            <p>
              This allows systems to evolve independently
              without destabilizing the whole.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Architectural Constraints</h2>
            <ul className="vision-constraints-list">
              <li>No single layer can override system persistence</li>
              <li>No component can assume global authority</li>
              <li>No shortcuts that sacrifice long-term stability</li>
            </ul>

            <span className="vision-label">Temporal Perspective</span>
            <h2 id="time">Architecture Over Time</h2>
            <p className="concept-block">
              Interfaces evolve.  
              Layers adapt.  
              Foundations remain.
            </p>
            <p>
              NexUP architecture is designed to absorb technological change
              without forcing systemic resets.
            </p>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                How this architecture scales as NexUP grows:
              </p>
              <Link to="/approach/scalability" className="vision-cta-button">
                Read Scalability
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Architecture Document — Version 1.0  
            Structure evolves. Foundations remain.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
