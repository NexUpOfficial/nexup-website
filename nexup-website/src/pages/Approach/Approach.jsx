import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/Vision/Vision.css";

export default function Approach() {
  return (
    <>
      <main className="page-container vision-page">

        {/* ==============================================
            HEADER & METADATA
        ============================================== */}
        <header className="vision-header">
          <h1>Approach</h1>
          <p className="vision-doc-meta">
            System Execution · Architecture · Scalability · Rollout
          </p>
          <p className="vision-depth-note">
            This document explains how the NexUP vision is executed in practice.
          </p>
          <p className="lead-paragraph">
            While the Vision defines what NexUP is and why it must exist,
            the Approach defines how that vision is translated into
            real systems, infrastructure, and long-term execution.
          </p>
        </header>

        {/* ==============================================
            ORIENTATION
        ============================================== */}
        <section className="vision-orientation">
          <p>
            NexUP is not built through rapid iteration or short-term optimization.
            It is executed through deliberate architectural decisions,
            controlled scaling, and phased rollout.
          </p>
          <p>
            The documents linked below describe these execution layers
            and how they remain aligned with the core vision.
          </p>
        </section>

        {/* ==============================================
            MAIN LAYOUT GRID
        ============================================== */}
        <div className="vision-layout-grid">

          {/* LEFT COLUMN: TOC */}
          <nav className="vision-toc">
            <p className="vision-reading-tip">
              This page serves as an entry point to NexUP’s execution strategy.
            </p>
            <h3>In this section</h3>
            <ul>
              <li><a href="#execution-model">Execution Model</a></li>
              <li><a href="#approach-docs">Approach Documents</a></li>
              <li><a href="#relationship">Relationship to Vision</a></li>
              <li><a href="#reading-order">Recommended Reading Order</a></li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="vision-content-area">

            <h2 id="execution-model">Execution Model</h2>
            <p>
              NexUP is executed as a long-term system rather than
              a sequence of isolated releases.
            </p>
            <p>
              Architectural stability, controlled scalability,
              and disciplined rollout ensure that the platform
              evolves without compromising persistence or continuity.
            </p>

            <span className="vision-label">Approach Documents</span>
            <h2 id="approach-docs">Approach Documents</h2>

            <p>
              The NexUP approach is documented across the following pages.
              Each focuses on a specific execution concern,
              while remaining grounded in the same system architecture.
            </p>

            <ul className="vision-ecosystem-list">
              <li>
                <strong>
                  <Link to="/approach/architecture">Architecture</Link>
                </strong>{" "}
                — How NexUP systems are structured, layered,
                and constrained for long-term stability.
              </li>

              <li>
                <strong>
                  <Link to="/approach/scalability">Scalability</Link>
                </strong>{" "}
                — How NexUP grows in users, worlds,
                and infrastructure without fragmentation.
              </li>

              <li>
                <strong>
                  <Link to="/approach/rollout">Rollout</Link>
                </strong>{" "}
                — How NexUP is introduced, expanded,
                and stabilized through deliberate phases.
              </li>
            </ul>

            <span className="vision-label">Context</span>
            <h2 id="relationship">Relationship to Vision</h2>
            <p>
              The Approach does not redefine NexUP.
              It exists to ensure that the Vision
              can be implemented without erosion.
            </p>
            <p>
              Architectural, scalability, and rollout decisions
              are all constrained by the principles
              defined in the Vision and system documents.
            </p>

            <span className="vision-label">Reading Guidance</span>
            <h2 id="reading-order">Recommended Reading Order</h2>

            <p className="concept-block">
              Vision defines intent.  
              Architecture defines structure.  
              Scalability defines growth.  
              Rollout defines progression.
            </p>

            <p>
              Readers new to NexUP may begin with the Vision,
              then proceed through Architecture, Scalability,
              and Rollout to understand how the system is executed.
            </p>

            {/* CTA */}
            <div className="vision-cta-container">
              <p className="cta-context">
                To understand the foundational intent behind this approach:
              </p>
              <Link to="/vision" className="vision-cta-button">
                Read the Vision
              </Link>
            </div>

          </div>
        </div>

        <footer className="vision-version">
          <p>
            Approach Document — Version 1.0  
            Execution evolves. Intent remains.
          </p>
        </footer>

      </main>

      <Footer />
    </>
  );
}
