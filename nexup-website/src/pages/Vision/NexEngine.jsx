import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

/*
  IMPORTANT:
  NexEngine uses the SAME document layout system as Vision, NexWorld, NexNodes.
  No new layout CSS is introduced.
*/
import "../../page-styles/Vision/Vision.css";

export default function NexEngine() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>NexEngine</h1>
          <p className="vision-doc-meta">
            Creation Engine · Simulation Layer · System Orchestration
          </p>
          <p className="vision-depth-note">
            NexEngine enables the creation, simulation, and operation of systems inside NexUP.
          </p>
          <p className="lead-paragraph">
            NexEngine is the creation and execution layer of NexUP.
            It provides the tools, rules, and runtime logic that allow
            worlds, systems, and interactions to be designed,
            simulated, and deployed within persistent environments.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document describes the role of NexEngine as the system
            that powers creation and behavior across NexUP.
          </p>
          <p>
            NexEngine does not exist as a single tool.
            It is a coordinated layer that governs how systems operate,
            evolve, and interact over time.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID (TOC + CONTENT)
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TABLE OF CONTENTS */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document explains how systems are created,
              executed, and evolved inside NexUP.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-is">What is NexEngine</a></li>
              <li><a href="#creation">Creation Systems</a></li>
              <li><a href="#simulation">Simulation & Testing</a></li>
              <li><a href="#runtime">Runtime Execution</a></li>
              <li><a href="#integration">System Integration</a></li>
              <li><a href="#constraints">Engine Constraints</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-is">What is NexEngine</h2>
            <p>
              NexEngine is the system responsible for defining
              how environments, logic, and interactions behave
              inside NexUP.
            </p>
            <p>
              It provides a structured way to create systems
              that can operate continuously within persistent worlds,
              rather than executing as isolated or temporary processes.
            </p>

            <span className="vision-label">Core Capability</span>
            <h2 id="creation">Creation Systems</h2>
            <p>
              NexEngine enables the creation of environments,
              behaviors, simulations, and rules that govern
              how worlds function.
            </p>
            <p>
              Creators can define spatial logic, interaction rules,
              and system behaviors without breaking persistence
              or continuity.
            </p>

            <span className="vision-label">Validation Layer</span>
            <h2 id="simulation">Simulation & Testing</h2>
            <p>
              Before systems are deployed into live environments,
              NexEngine allows them to be simulated and evaluated.
            </p>
            <p className="concept-block">
              Systems can be tested.
              Behaviors can be observed.
              Outcomes can be validated.
            </p>
            <p>
              This ensures stability and predictability
              without slowing innovation.
            </p>

            <span className="vision-label">Execution Model</span>
            <h2 id="runtime">Runtime Execution</h2>
            <p>
              NexEngine manages the execution of systems
              once they are active inside NexUP.
            </p>
            <p>
              It coordinates with
              <Link to="/vision/nexnodes"> NexNodes</Link>
              to ensure that logic executes consistently
              across distributed infrastructure.
            </p>

            <span className="vision-label">Interoperability</span>
            <h2 id="integration">System Integration</h2>
            <p>
              Systems created with NexEngine are designed
              to interoperate across worlds and services.
            </p>
            <p>
              This allows environments in
              <Link to="/vision/nexworld"> NexWorld</Link>
              to share logic, behaviors, and capabilities
              without fragmentation.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Engine Constraints</h2>
            <p>
              NexEngine enforces architectural boundaries
              to preserve stability and trust.
            </p>
            <ul className="vision-constraints-list">
              <li>Live systems cannot bypass persistence rules</li>
              <li>Simulations cannot overwrite historical state</li>
              <li>Execution is deterministic and auditable</li>
            </ul>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                Systems created with NexEngine operate inside persistent worlds:
              </p>
              <Link to="/vision/nexworld" className="vision-cta-button">
                Explore NexWorld
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            NexEngine Document — Version 1.0  
            Systems evolve. Execution remains consistent.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
