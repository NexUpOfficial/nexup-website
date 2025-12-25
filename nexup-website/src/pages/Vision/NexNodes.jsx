import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

/*
  IMPORTANT:
  NexNodes reuses the SAME document layout system as Vision & NexWorld.
  No new layout CSS is introduced here.
*/

import "../../page-styles/Vision/Vision.css";

export default function NexNodes() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>NexNodes</h1>
          <p className="vision-doc-meta">
            Distributed Infrastructure · State & Continuity · System Backbone
          </p>
          <p className="vision-depth-note">
            NexNodes provide the persistent infrastructure that allows NexUP to exist over time.
          </p>
          <p className="lead-paragraph">
            NexNodes form the distributed infrastructure layer of NexUP.
            They are responsible for computation, data continuity,
            synchronization, and the long-term persistence of worlds,
            identities, and systems.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document explains the role of NexNodes within the NexUP ecosystem
            and how they enable persistence, reliability, and scalability.
          </p>
          <p>
            NexNodes are not servers in the traditional sense.
            They are long-lived system participants that maintain state
            across time and space.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID (TOC + CONTENT)
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TABLE OF CONTENTS */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document describes how NexUP maintains continuity,
              computation, and trust across its systems.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-are">What Are NexNodes</a></li>
              <li><a href="#role">Role in the Ecosystem</a></li>
              <li><a href="#persistence">State & Persistence</a></li>
              <li><a href="#distribution">Distributed Architecture</a></li>
              <li><a href="#reliability">Reliability & Resilience</a></li>
              <li><a href="#boundaries">Infrastructure Constraints</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-are">What Are NexNodes</h2>
            <p>
              NexNodes are the foundational infrastructure units of NexUP.
              They store, process, and synchronize the state of worlds,
              identities, and systems across the platform.
            </p>
            <p>
              Unlike short-lived cloud instances, NexNodes are designed
              for continuity. They persist, evolve, and retain historical
              context as part of the system.
            </p>

            <h2 id="role">Role in the Ecosystem</h2>
            <p>
              Every major system inside NexUP depends on NexNodes.
              They act as the connective tissue between environments,
              users, and higher-level services.
            </p>
            <p>
              Systems such as
              <Link to="/vision/nexworld"> NexWorld</Link>,
              identity layers, and discovery mechanisms
              rely on NexNodes to maintain consistent state
              across space and time.
            </p>

            <span className="vision-label">Foundational Capability</span>
            <h2 id="persistence">State & Persistence</h2>
            <p>
              NexNodes are responsible for preserving system state.
              This includes spatial data, identity attributes,
              interaction history, and system evolution.
            </p>
            <p className="concept-block">
              State is never assumed.
              History is never discarded.
              Continuity is always preserved.
            </p>
            <p>
              This persistent state enables NexUP to function
              as a continuous world rather than a collection
              of temporary sessions.
            </p>

            <span className="vision-label">System Architecture</span>
            <h2 id="distribution">Distributed Architecture</h2>
            <p>
              NexNodes operate as a distributed network rather than
              a centralized control system.
            </p>
            <p>
              This distribution allows NexUP to scale organically,
              avoid single points of failure, and support global
              participation without relying on a single authority.
            </p>

            <span className="vision-label">Operational Integrity</span>
            <h2 id="reliability">Reliability & Resilience</h2>
            <p>
              NexNodes are designed to tolerate failure,
              degradation, and change without disrupting
              the continuity of the platform.
            </p>
            <p>
              Redundancy, verification, and synchronization
              mechanisms ensure that worlds and identities
              remain stable even under adverse conditions.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="boundaries">Infrastructure Constraints</h2>
            <p>
              NexNodes operate within strict architectural constraints
              to preserve trust and system integrity.
            </p>
            <ul className="vision-constraints-list">
              <li>No single node can unilaterally control system state</li>
              <li>Historical data is preserved by default</li>
              <li>Infrastructure changes are additive, not destructive</li>
            </ul>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                NexNodes enable the creation and simulation of systems:
              </p>
              <Link to="/vision/nexengine" className="vision-cta-button">
                Explore NexEngine
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            NexNodes Document — Version 1.0  
            Infrastructure evolves. Continuity remains.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
