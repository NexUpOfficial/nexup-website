import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

/* IMPORTANT:
   We intentionally reuse the SAME CSS file as Vision.
   This keeps the document system consistent across NexUP.
*/

import "../../page-styles/Vision/Vision.css";

export default function NexWorld() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>NexWorld</h1>
          <p className="vision-doc-meta">
            Persistent Worlds · Spatial Environments · Core Layer
          </p>
          <p className="vision-depth-note">
            NexWorld defines where digital presence exists and persists.
          </p>
          <p className="lead-paragraph">
            NexWorld is the persistent spatial layer of NexUP.
            It defines how environments exist, retain history,
            and evolve independently of user sessions or interfaces.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document describes the structure, behavior, and purpose
            of NexWorld within the NexUP ecosystem.
          </p>
          <p>
            NexWorld is not content. It is not a scene.
            It is the world itself — continuous, shared, and evolving.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID (TOC + CONTENT)
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document explains how persistent worlds are structured
              and maintained inside NexUP.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-is">What is NexWorld</a></li>
              <li><a href="#persistence">Persistence Rules</a></li>
              <li><a href="#spaces">Types of Spaces</a></li>
              <li><a href="#presence">Presence & Identity</a></li>
              <li><a href="#evolution">World Evolution</a></li>
              <li><a href="#boundaries">World Boundaries</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-is">What is NexWorld</h2>
            <p>
              NexWorld is the persistent environment layer of NexUP.
              It is where users exist, interact, build, and leave traces
              that remain over time.
            </p>
            <p>
              Unlike traditional digital spaces, NexWorld does not reset
              when users disconnect. Environments retain structure,
              state, and history.
            </p>

            <span className="vision-label">Foundational Rule</span>
            <h2 id="persistence">Persistence Rules</h2>
            <p>
              Persistence governs all behavior inside NexWorld.
              Once a space is created, it continues to exist
              unless intentionally altered or removed.
            </p>
            <p className="concept-block">
              Worlds do not reload.
              Spaces do not expire.
              History does not vanish.
            </p>
            <p>
              This allows environments to accumulate meaning,
              usage patterns, and cultural context over time.
            </p>

            <h2 id="spaces">Types of Spaces</h2>
            <p>
              NexWorld supports multiple types of spatial environments,
              each serving a different role within the ecosystem.
            </p>
            <ul className="vision-ecosystem-list">
              <li>Personal spaces for individual presence and creation</li>
              <li>Shared spaces for collaboration and community</li>
              <li>Institutional spaces for education and organizations</li>
              <li>Public spaces for discovery and interaction</li>
            </ul>

            <h2 id="presence">Presence & Identity</h2>
            <p>
              Identity in NexWorld is spatial.
              Presence is defined by where you exist
              and how you interact with environments.
            </p>
            <p>
              Identity continuity across NexWorld is supported by
              <Link to="/vision/nexnodes">NexNodes</Link>,
              which retain state, memory, and historical context.
            </p>

            <span className="vision-label">Temporal Behavior</span>
            <h2 id="evolution">World Evolution</h2>
            <p>
              NexWorld environments are not static.
              They evolve through interaction, usage,
              and system-driven processes.
            </p>
            <p className="concept-block">
              Structures age.
              Spaces adapt.
              Worlds mature.
            </p>
            <p>
              This allows long-term projects, cultures,
              and digital ecosystems to emerge organically.
            </p>

            <span className="vision-label">Constraints</span>
            <h2 id="boundaries">World Boundaries</h2>
            <p>
              While NexWorld is persistent, it is not uncontrolled.
              Boundaries exist to protect continuity, trust,
              and system stability.
            </p>
            <ul className="vision-constraints-list">
              <li>Worlds cannot be arbitrarily reset</li>
              <li>Spatial history is preserved by default</li>
              <li>Ownership and access are explicit</li>
            </ul>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                NexWorld operates on infrastructure that enables persistence:
              </p>
              <Link to="/vision/nexnodes" className="vision-cta-button">
                Explore NexNodes
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            NexWorld Document — Version 1.0  
            This world evolves. The principles remain.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
