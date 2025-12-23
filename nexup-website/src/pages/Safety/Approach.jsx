// src/pages/Safety/Approach.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/Safety/Approach.css";
import Footer from "../../components/Footer/Footer";

const Section = ({ id, title, children }) => (
  <section className="policy-section" id={id}>
    <h3>{title}</h3>
    {children}
  </section>
);

const Approach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="approach-page">
      <main className="approach-container">

        {/* Top Bar */}
        <div className="approach-topbar">
          <Link to={-1} className="back-link">← Back</Link>
          <span className="page-label">Approach</span>
        </div>

        {/* Document */}
        <article className="approach-document">
          <header className="document-header">
            <h1>How We Build at NexUP</h1>
            <p className="subtitle">
              Operating Framework for Responsible Spatial Computing
            </p>
          </header>

          <p className="intro">
            NexUP is building a long-term spatial computing platform combining AI,
            immersive environments, and digital infrastructure. This approach
            defines how we design, decide, and grow responsibly.
          </p>

          <Section id="long-term" title="Build for the Long Term">
            <ul>
              <li>Systems evolve, not restart.</li>
              <li>Architecture favors durability.</li>
              <li>Trust beats shortcuts.</li>
            </ul>
          </Section>

          <Section id="responsibility" title="Responsibility First">
            <ul>
              <li>Ethics are designed-in.</li>
              <li>Risk is evaluated early.</li>
              <li>Users are never exploited.</li>
            </ul>
          </Section>

          <Section id="human" title="Human-Centered Design">
            <ul>
              <li>Clarity over complexity.</li>
              <li>AI assists, not replaces.</li>
              <li>Consent is fundamental.</li>
            </ul>
          </Section>

          <Section id="systems" title="Systems Thinking">
            <ul>
              <li>Ecosystem-first decisions.</li>
              <li>Backend and experience aligned.</li>
              <li>No isolated features.</li>
            </ul>
          </Section>

          <Section id="growth" title="Thoughtful Growth">
            <ul>
              <li>Quality over scale.</li>
              <li>Healthy expansion.</li>
              <li>Long-term stability.</li>
            </ul>
          </Section>

          <section className="final-note">
            <h3>Looking Forward</h3>
            <p>
              NexUP is building a future that is immersive, intelligent,
              and human-first — without compromise.
            </p>
          </section>
        </article>
      </main>

      <Footer>
        Our Approach — How NexUP builds responsibly for the future.
      </Footer>
    </div>
  );
};

export default Approach;
