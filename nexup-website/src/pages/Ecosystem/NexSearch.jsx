import React, { useEffect } from "react";
import "../../page-styles/Ecosystem/NexWorld.css"; // SAME CSS
import Footer from "../../components/Footer/Footer";

const NexSearch = () => {

  // Intersection Observer — SAME AS OTHER ECOSYSTEM PAGES
  useEffect(() => {
    const container = document.querySelector('.nexworld-page');
    const sections = container ? container.querySelectorAll('.fade-in-on-load') : [];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nexworld-page">

      {/* CONTEXT HEADER */}
      <header className="nexworld-context">
        <p>ECOSYSTEM / NEXSEARCH</p>
      </header>

      <main>

        {/* HERO */}
        <section className="nexworld-hero">

          {/* LEFT PANEL */}
          <div className="hero-text">
            <h1>NexSearch</h1>

            <span className="world-signal">
              DISCOVERY · NAVIGATION · INTELLIGENCE
            </span>

            <p className="hero-subtitle">
              The intelligence layer for navigating NexWorld.
            </p>

            <div className="hero-cta">
              <a href="/vision/nexSearch" className="cta cta-primary">
  Learn more
</a>
              <a href="/ecosystem" className="cta cta-secondary">
                Explore ecosystem
              </a>
            </div>
          </div>

          {/* RIGHT PANEL — VIDEO */}
          <div className="hero-media">
            <video
              src= "https://res.cloudinary.com/dgzikn7nn/video/upload/v1765029785/NexSearch_AI_Cinematic_Showcase_fl7dwk.mp4"
              poster="/assets/nexsearch-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>

        </section>

        {/* EDITORIAL — DEFINITION */}
        <article
          id="definition"
          className="nexworld-editorial fade-in-on-load"
        >
          <h2>Search beyond pages.</h2>

          <p>
            NexSearch is not a traditional search engine. It is a spatial
            discovery system designed to navigate worlds, spaces, entities,
            and intelligence inside NexWorld.
          </p>

          <p>
            You don’t search links — you locate places, people, systems,
            and live activity.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <p>Knowledge is spatial.</p>
          <hr />
        </div>

        {/* EDITORIAL — DISCOVERY */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Discovery is contextual.</h2>

          <p>
            NexSearch understands proximity, relevance, activity, and
            intent. Results change based on where you are and what
            you are doing.
          </p>

          <p>
            Search adapts to the state of the world.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <hr />
        </div>

        {/* EDITORIAL — INTELLIGENCE */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Intelligence guides navigation.</h2>

          <p>
            NexSearch integrates AI to surface meaningful paths through
            complex systems — not just ranked results.
          </p>

          <p>
            It helps users find where they need to be, not just what
            exists.
          </p>
        </article>

        {/* ECOSYSTEM BRIDGE */}
        <section className="nexworld-bridge fade-in-on-load">
          <span className="bridge-preamble">
            Discovery connects everything.
          </span>

          <h2>The navigation layer of NexUP.</h2>

          <p>
            NexSearch connects identity, infrastructure, spaces, and
            worlds into a coherent, explorable system.
          </p>

          <a href="/ecosystem" className="bridge-link">
            Explore the ecosystem →
          </a>
        </section>

        {/* EDITORIAL — FUTURE */}
        <article className="nexworld-editorial fade-in-on-load">
          <h2>Built for worlds in motion.</h2>

          <p>
            NexSearch evolves as NexWorld grows. As new systems emerge,
            discovery adapts without manual indexing.
          </p>
        </article>

        {/* FINAL STATEMENT */}
        <section className="nexworld-final">
          <p>NexSearch is how NexWorld is understood.</p>
        </section>

      </main>

      {/* WORLD TIME */}
      <div className="world-time-indicator">
        WORLD TIME · RUNNING
      </div>

      {/* NEXT PAGE — END OF CHAIN */}
      <div className="continue-to-next-page">
        <a href="/ecosystem" className="continue-link">
          Back to Ecosystem
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default NexSearch;
