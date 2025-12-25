import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

/*
  IMPORTANT:
  NexSearch reuses the SAME document layout system as all NexUP
  vision and ecosystem pages.
*/
import "../../page-styles/Vision/Vision.css";

export default function NexSearch() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>NexSearch</h1>
          <p className="vision-doc-meta">
            Discovery Layer · Spatial Navigation · System Understanding
          </p>
          <p className="vision-depth-note">
            NexSearch enables discovery, navigation, and understanding across NexUP.
          </p>
          <p className="lead-paragraph">
            NexSearch is the discovery and navigation layer of NexUP.
            It allows users to find worlds, systems, knowledge,
            and activity across a persistent spatial ecosystem.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document explains how NexSearch functions as a system
            for discovery and understanding inside NexUP.
          </p>
          <p>
            NexSearch is not a traditional search engine.
            It is a spatial and contextual discovery layer
            embedded directly into persistent worlds.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID (TOC + CONTENT)
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TABLE OF CONTENTS */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document describes how information and environments
              are discovered and navigated inside NexUP.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-is">What is NexSearch</a></li>
              <li><a href="#discovery">Discovery Model</a></li>
              <li><a href="#navigation">Spatial Navigation</a></li>
              <li><a href="#context">Contextual Understanding</a></li>
              <li><a href="#signals">Relevance Signals</a></li>
              <li><a href="#constraints">Search Constraints</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-is">What is NexSearch</h2>
            <p>
              NexSearch is the system that enables users to discover
              environments, systems, and activity across NexUP.
            </p>
            <p>
              It operates across persistent worlds rather than isolated
              documents, allowing discovery to reflect spatial
              structure and historical context.
            </p>

            <span className="vision-label">Discovery Philosophy</span>
            <h2 id="discovery">Discovery Model</h2>
            <p>
              Discovery inside NexUP is based on presence,
              activity, and relevance — not just keywords.
            </p>
            <p className="concept-block">
              Places are discovered.
              Systems are explored.
              Knowledge is navigated.
            </p>
            <p>
              NexSearch reflects how users move through worlds,
              not how they scroll through pages.
            </p>

            <span className="vision-label">Navigation Layer</span>
            <h2 id="navigation">Spatial Navigation</h2>
            <p>
              NexSearch enables navigation through spatial structures
              rather than flat result lists.
            </p>
            <p>
              Users can traverse from one environment to another,
              explore related systems, and understand proximity
              between concepts and spaces.
            </p>

            <span className="vision-label">Context Awareness</span>
            <h2 id="context">Contextual Understanding</h2>
            <p>
              NexSearch incorporates context from
              <Link to="/vision/nexworld"> NexWorld</Link>,
              <Link to="/vision/nexnodes"> NexNodes</Link>,
              and system activity to refine results.
            </p>
            <p>
              Search results adapt based on location, history,
              and the evolving state of the world.
            </p>

            <span className="vision-label">Signal Processing</span>
            <h2 id="signals">Relevance Signals</h2>
            <p>
              Relevance inside NexSearch is derived from
              multiple signals rather than popularity alone.
            </p>
            <ul className="vision-constraints-list">
              <li>Spatial proximity and world relevance</li>
              <li>Historical activity and persistence</li>
              <li>System trust and continuity</li>
            </ul>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Search Constraints</h2>
            <p>
              NexSearch operates within defined boundaries
              to preserve trust and transparency.
            </p>
            <ul className="vision-constraints-list">
              <li>No opaque ranking manipulation</li>
              <li>No forced amplification of content</li>
              <li>Discovery logic remains auditable</li>
            </ul>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                Discovery inside NexUP happens within persistent environments:
              </p>
              <Link to="/vision/nexworld" className="vision-cta-button">
                Explore NexWorld
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            NexSearch Document — Version 1.0  
            Discovery evolves. Understanding persists.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}


