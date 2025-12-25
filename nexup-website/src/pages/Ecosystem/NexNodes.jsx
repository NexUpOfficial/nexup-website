import React, { useEffect } from "react";
import "../../page-styles/Ecosystem/NexWorld.css"; // REUSE SAME CSS
import Footer from "../../components/Footer/Footer";

const NexNodes = () => {

  // Intersection Observer (SAME AS NEXWORLD)
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
        <p>ECOSYSTEM / NEXNODES</p>
      </header>

      <main>

        {/* HERO */}
        <section className="nexworld-hero">

          {/* LEFT PANEL */}
          <div className="hero-text">
            <h1>NexNodes</h1>
            <span className="world-signal">
              INFRASTRUCTURE · STATE · SCALE
            </span>

            <p className="hero-subtitle">
              The distributed backbone that powers NexWorld.
            </p>

            <div className="hero-cta">
            <a href="/vision/nexNodes" className="cta cta-primary">
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
              src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1764942791/NexNodes_Energy_Network_Animation_ufdjqs.mp4"
              poster="/assets/nexnodes-poster.jpg"
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
          <h2>Infrastructure before interfaces.</h2>

          <p>
            NexNodes is the foundational infrastructure layer of the NexUP
            ecosystem. It is responsible for computation, persistence,
            synchronization, and state across all worlds.
          </p>

          <p>
            Every space, identity, object, and system in NexWorld is
            anchored to NexNodes.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <p>Systems remain.</p>
          <hr />
        </div>

        {/* EDITORIAL — PERSISTENCE */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>A network that never sleeps.</h2>

          <p>
            NexNodes operate continuously. They process events, resolve
            state, and maintain world continuity even when no users are
            present.
          </p>

          <p>
            Persistence is enforced at the infrastructure level, not
            simulated at the interface.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <hr />
        </div>

        {/* EDITORIAL — ARCHITECTURE */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Distributed by design.</h2>

          <p>
            NexNodes scale horizontally across regions, workloads, and
            worlds. No single node defines the system.
          </p>

          <p>
            Authority is shared, fault tolerance is native, and growth
            is continuous.
          </p>
        </article>

        {/* ECOSYSTEM BRIDGE */}
        <section className="nexworld-bridge fade-in-on-load">
          <span className="bridge-preamble">
            Infrastructure enables everything.
          </span>

          <h2>The backbone of the NexUP ecosystem.</h2>

          <p>
            NexNodes connect NexWorld, NexEngine, NexSearch, and future
            systems into a unified computational fabric.
          </p>

          <a href="/ecosystem" className="bridge-link">
            Explore the ecosystem →
          </a>
        </section>

        {/* EDITORIAL — FUTURE */}
        <article className="nexworld-editorial fade-in-on-load">
          <h2>Built to outlive interfaces.</h2>

          <p>
            Interfaces will change. Devices will evolve. NexNodes are
            designed to persist beneath them all.
          </p>
        </article>

        {/* FINAL STATEMENT */}
        <section className="nexworld-final">
          <p>NexNodes are the foundation of NexUP.</p>
        </section>

      </main>

      {/* WORLD TIME */}
      <div className="world-time-indicator">
        WORLD TIME · RUNNING
      </div>

      {/* NEXT PAGE */}
      <div className="continue-to-next-page">
        <a href="/ecosystem/nexengine" className="continue-link">
          Continue → NexEngine
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default NexNodes;
