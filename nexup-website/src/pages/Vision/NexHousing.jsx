import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

/*
  IMPORTANT:
  NexHousing reuses the SAME document layout system as all NexUP
  vision and ecosystem pages.
*/
import "../../page-styles/vision/Vision.css";

export default function NexHousing() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>NexHousing</h1>
          <p className="vision-doc-meta">
            Spatial Ownership · Residency · Long-Term Presence
          </p>
          <p className="vision-depth-note">
            NexHousing defines ownership, residency, and permanence inside NexUP.
          </p>
          <p className="lead-paragraph">
            NexHousing introduces the concept of spatial ownership
            within persistent digital worlds.
            It defines how environments can be claimed, inhabited,
            transferred, and maintained over time.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This document explains how NexHousing enables
            long-term presence and ownership inside NexUP.
          </p>
          <p>
            NexHousing is not real estate speculation.
            It is a system for continuity, responsibility,
            and sustained digital habitation.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID (TOC + CONTENT)
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TABLE OF CONTENTS */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document describes how ownership and residency
              are defined within persistent worlds.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-is">What is NexHousing</a></li>
              <li><a href="#residency">Residency & Presence</a></li>
              <li><a href="#ownership">Ownership Model</a></li>
              <li><a href="#permanence">Spatial Permanence</a></li>
              <li><a href="#transfer">Transfer & Stewardship</a></li>
              <li><a href="#constraints">Housing Constraints</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-is">What is NexHousing</h2>
            <p>
              NexHousing is the system that governs how space
              can be owned, inhabited, and maintained inside NexUP.
            </p>
            <p>
              It enables users and organizations to establish
              long-term presence within persistent environments,
              rather than operating from temporary or disposable spaces.
            </p>

            <span className="vision-label">Presence Model</span>
            <h2 id="residency">Residency & Presence</h2>
            <p>
              Residency defines where and how an entity
              exists within NexWorld.
            </p>
            <p className="concept-block">
              Presence is continuous.
              Residency is intentional.
              Space carries memory.
            </p>
            <p>
              Residency creates accountability, identity,
              and continuity across interactions.
            </p>

            <span className="vision-label">Ownership Framework</span>
            <h2 id="ownership">Ownership Model</h2>
            <p>
              Ownership in NexHousing is spatial and contextual.
              It grants stewardship over environments rather than
              absolute control.
            </p>
            <p>
              Ownership is recorded and maintained through
              <Link to="/vision/nexnodes"> NexNodes</Link>,
              ensuring historical continuity and verifiability.
            </p>

            <span className="vision-label">Persistence Layer</span>
            <h2 id="permanence">Spatial Permanence</h2>
            <p>
              Spaces governed by NexHousing do not disappear
              when users disconnect.
            </p>
            <p className="concept-block">
              Structures remain.
              Modifications persist.
              History accumulates.
            </p>
            <p>
              This permanence allows digital spaces to develop
              meaning, culture, and long-term value.
            </p>

            <span className="vision-label">Stewardship</span>
            <h2 id="transfer">Transfer & Stewardship</h2>
            <p>
              NexHousing supports controlled transfer of ownership
              and responsibility.
            </p>
            <p>
              Transfers preserve spatial history and context,
              ensuring continuity rather than erasure.
            </p>

            <span className="vision-label">Safeguards</span>
            <h2 id="constraints">Housing Constraints</h2>
            <p>
              NexHousing operates within defined constraints
              to prevent exploitation and instability.
            </p>
            <ul className="vision-constraints-list">
              <li>Spaces cannot be arbitrarily deleted</li>
              <li>Ownership implies responsibility</li>
              <li>Historical context is preserved</li>
            </ul>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                Housing exists within persistent environments:
              </p>
              <Link to="/vision/nexworld" className="vision-cta-button">
                Explore NexWorld
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            NexHousing Document — Version 1.0  
            Spaces persist. Stewardship endures.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
