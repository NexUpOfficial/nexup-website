import React from "react";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Cookies() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Cookies</h1>
          <p className="vision-doc-meta">
            System Transparency · Data Usage · User Control
          </p>
          <p className="vision-depth-note">
            This document explains how cookies and similar technologies are used in NexUP.
          </p>
          <p className="lead-paragraph">
            NexUP uses cookies and related technologies to operate
            essential system functions, maintain continuity,
            and improve user experience — never to obscure behavior
            or exploit user data.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            Cookies are often misunderstood.
            This document explains what cookies are,
            why NexUP uses them,
            and how users can control their behavior.
          </p>
          <p>
            Transparency is a core system principle.
            Nothing described here operates invisibly or deceptively.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document is intended for users who want clarity and control.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#what-are">What Are Cookies</a></li>
              <li><a href="#why-used">Why NexUP Uses Cookies</a></li>
              <li><a href="#types">Types of Cookies Used</a></li>
              <li><a href="#essential">Essential Cookies</a></li>
              <li><a href="#preferences">Preference Cookies</a></li>
              <li><a href="#analytics">Analytics & Performance</a></li>
              <li><a href="#third-party">Third-Party Cookies</a></li>
              <li><a href="#control">User Control & Choices</a></li>
              <li><a href="#retention">Retention & Expiry</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="what-are">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on a user’s device
              by a website or application.
            </p>
            <p>
              They allow systems to remember information such as
              session state, preferences, and system integrity signals
              across interactions.
            </p>

            <h2 id="why-used">Why NexUP Uses Cookies</h2>
            <p>
              NexUP uses cookies to support core system functionality
              and ensure consistent behavior across sessions.
            </p>
            <p className="concept-block">
              Cookies enable continuity.  
              They do not define identity.  
              They do not replace consent.
            </p>

            <span className="vision-label">Categories</span>
            <h2 id="types">Types of Cookies Used</h2>
            <p>
              Cookies used by NexUP fall into a limited number of categories,
              each serving a clearly defined purpose.
            </p>

            <h2 id="essential">Essential Cookies</h2>
            <p>
              Essential cookies are required for NexUP to function.
            </p>
            <ul className="vision-ecosystem-list">
              <li>Session continuity</li>
              <li>Security and authentication integrity</li>
              <li>Load balancing and system stability</li>
            </ul>
            <p>
              These cookies cannot be disabled without impairing
              core platform functionality.
            </p>

            <h2 id="preferences">Preference Cookies</h2>
            <p>
              Preference cookies store user-selected settings
              such as interface preferences or language choices.
            </p>
            <p>
              These cookies do not track activity across sites
              and are limited strictly to NexUP environments.
            </p>

            <h2 id="analytics">Analytics & Performance</h2>
            <p>
              NexUP may use limited analytics cookies to understand
              system performance and usage patterns.
            </p>
            <p>
              These analytics focus on:
            </p>
            <ul className="vision-ecosystem-list">
              <li>System reliability</li>
              <li>Error detection</li>
              <li>Performance optimization</li>
            </ul>
            <p>
              They are not used for advertising profiles
              or cross-platform tracking.
            </p>

            <h2 id="third-party">Third-Party Cookies</h2>
            <p>
              NexUP minimizes reliance on third-party cookies.
            </p>
            <p>
              When third-party services are used,
              they are evaluated for privacy impact
              and limited to essential functionality only.
            </p>

            <span className="vision-label">User Rights</span>
            <h2 id="control">User Control & Choices</h2>
            <p>
              Users retain control over cookie behavior
              through browser settings and, where applicable,
              NexUP preference controls.
            </p>
            <p className="concept-block">
              Users can inspect.  
              Users can restrict.  
              Users can clear stored data.
            </p>

            <h2 id="retention">Retention & Expiry</h2>
            <p>
              Cookies used by NexUP have defined lifetimes.
            </p>
            <p>
              Session cookies expire automatically.
              Persistent cookies are retained only
              for as long as necessary to fulfill their purpose.
            </p>

            <span className="vision-label">Policy Evolution</span>
            <h2 id="changes">Changes to This Policy</h2>
            <p>
              This Cookies document may evolve
              as NexUP systems and regulations change.
            </p>
            <p>
              Any significant updates will be communicated
              clearly and without retroactive application.
            </p>

            <p className="concept-block">
              Transparency is continuous.  
              Control is preserved.  
              Trust is foundational.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Cookies Document — Version 1.0  
            Transparency is a system requirement.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
