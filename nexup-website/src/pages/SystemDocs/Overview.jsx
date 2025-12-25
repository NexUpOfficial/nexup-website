import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/SystemDocs/SystemDocs.css";


export default function Overview() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Overview</h1>
          <p className="vision-doc-meta">
            Platform Foundations · Trust Framework · System Rules
          </p>
          <p className="vision-depth-note">
            This document is intended to be read as a continuous system,
            not as isolated sections.
          </p>
          <p className="lead-paragraph">
            NexUP operates as a long-lived platform.
            The documents described here define how the platform
            protects users, governs systems, enforces rules,
            and maintains trust over time.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            This Overview explains why system-level documents exist
            and how they work together as a unified framework.
          </p>
          <p>
            These documents are not marketing material
            and not legal fine print alone.
            They define non-negotiable platform guarantees.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This document provides orientation for all system documents.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#purpose">Why System Documents Exist</a></li>
              <li><a href="#scope">Scope of These Documents</a></li>
              <li><a href="#privacy">Privacy & Data Boundaries</a></li>
              <li><a href="#security">Security & Protection</a></li>
              <li><a href="#transparency">Transparency & Accountability</a></li>
              <li><a href="#governance">Governance & Authority</a></li>
              <li><a href="#terms">Terms & Responsibilities</a></li>
              <li><a href="#integration">How These Documents Work Together</a></li>
              <li><a href="#vision">Relationship to Vision</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="purpose">Why System Documents Exist</h2>
            <p>
              NexUP is designed to persist over long periods of time.
              To remain stable, fair, and trustworthy,
              clear system rules must exist.
            </p>
            <p>
              These documents define those rules explicitly.
              They prevent ambiguity as the platform grows.
            </p>

            <h2 id="scope">Scope of These Documents</h2>
            <p>
              System documents apply across all NexUP environments,
              interfaces, and access methods.
            </p>
            <p>
              They are enforced consistently
              regardless of product surface or user role.
            </p>

            <span className="vision-label">Data</span>
            <h2 id="privacy">Privacy & Data Boundaries</h2>
            <p>
              Privacy defines what data is collected,
              how it is used,
              and what rights users retain.
            </p>
            <p>
              <Link to="/system-docs/privacy">Privacy</Link> establishes
              clear limits on data usage and retention.
            </p>

            <span className="vision-label">Protection</span>
            <h2 id="security">Security & Protection</h2>
            <p>
              Security protects users, data,
              and system infrastructure from misuse and threats.
            </p>
            <p>
              <Link to="/system-docs/security">Security</Link> explains
              how protection is enforced at a system level.
            </p>

            <span className="vision-label">Clarity</span>
            <h2 id="transparency">Transparency & Accountability</h2>
            <p>
              Transparency ensures users can understand
              how NexUP systems operate.
            </p>
            <p>
              <Link to="/system-docs/transparency">Transparency</Link> describes
              how openness is balanced with safety.
            </p>

            <span className="vision-label">Authority</span>
            <h2 id="governance">Governance & Authority</h2>
            <p>
              Governance defines how rules are created,
              enforced, and evolved.
            </p>
            <p>
              <Link to="/system-docs/governance">Governance</Link> establishes
              accountability and decision boundaries.
            </p>

            <span className="vision-label">Rules</span>
            <h2 id="terms">Terms & Responsibilities</h2>
            <p>
              Terms define acceptable use,
              user responsibilities,
              and platform limitations.
            </p>
            <p>
              <Link to="/system-docs/terms">Terms of Service</Link> apply
              to all users of NexUP.
            </p>

            <span className="vision-label">System Integrity</span>
            <h2 id="integration">How These Documents Work Together</h2>
            <p className="concept-block">
              Privacy defines boundaries.  
              Security enforces protection.  
              Governance defines authority.  
              Transparency builds trust.
            </p>
            <p>
              No single document stands alone.
              Together, they form a coherent system framework.
            </p>

            <span className="vision-label">Context</span>
            <h2 id="vision">Relationship to Vision</h2>
            <p>
              The Vision defines what NexUP is
              and why it exists.
            </p>
            <p>
              These system documents ensure
              that the vision can operate responsibly
              over long periods of time.
            </p>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Overview Document — Version 1.0  
            Clear foundations support long-term trust.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
