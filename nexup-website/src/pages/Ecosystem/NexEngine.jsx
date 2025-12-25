import React, { useEffect } from "react";
import "../../page-styles/Ecosystem/NexWorld.css"; // SAME CSS
import Footer from "../../components/Footer/Footer";

const NexEngine = () => {

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
        <p>ECOSYSTEM / NEXENGINE</p>
      </header>

      <main>

        {/* HERO */}
        <section className="nexworld-hero">

          <div className="hero-text">
            <h1>NexEngine</h1>

            <span className="world-signal">
              CREATION · SIMULATION · INTELLIGENCE
            </span>

            <p className="hero-subtitle">
              The engine where worlds are designed, simulated, and evolved.
            </p>

            <div className="hero-cta">
           <a href="/vision/nexEngine" className="cta cta-primary">
  Learn more
</a>

              <a href="/ecosystem" className="cta cta-secondary">
                Explore ecosystem
              </a>
            </div>
          </div>

          <div className="hero-media">
            <video
              src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765124047/NexEngine_Activation_Powering_NexWorld_afukbv.mp4"
              poster="/assets/nexengine-poster.jpg"
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
          <h2>Creation before consumption.</h2>

          <p>
            NexEngine is the system used to create worlds inside NexWorld.
            It combines simulation, AI, physics, and spatial logic into
            a unified creation environment.
          </p>

          <p>
            Worlds built in NexEngine are not static scenes — they are
            living systems.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <p>Systems are authored.</p>
          <hr />
        </div>

        {/* EDITORIAL — SIMULATION */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Simulation as a first-class primitive.</h2>

          <p>
            NexEngine simulates time, physics, behavior, and intelligence
            continuously. Nothing is faked for presentation.
          </p>

          <p>
            Worlds respond, evolve, and adapt — even when no creator is present.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <hr />
        </div>

        {/* EDITORIAL — AI & INTELLIGENCE */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Intelligence is embedded.</h2>

          <p>
            AI systems in NexEngine are not assistants — they are structural
            components of the world.
          </p>

          <p>
            Intelligence governs agents, environments, and emergent behavior.
          </p>
        </article>

        {/* ECOSYSTEM BRIDGE */}
        <section className="nexworld-bridge fade-in-on-load">
          <span className="bridge-preamble">
            Worlds begin here.
          </span>

          <h2>The creative core of NexUP.</h2>

          <p>
            NexEngine connects creators to NexNodes infrastructure and
            publishes directly into NexWorld.
          </p>

          <a href="/ecosystem" className="bridge-link">
            Explore the ecosystem →
          </a>
        </section>

        {/* EDITORIAL — FUTURE */}
        <article className="nexworld-editorial fade-in-on-load">
          <h2>Built for worlds not yet imagined.</h2>

          <p>
            NexEngine is intentionally open-ended. It exists to support
            creative systems that do not exist yet.
          </p>
        </article>

        {/* FINAL STATEMENT */}
        <section className="nexworld-final">
          <p>NexEngine turns ideas into worlds.</p>
        </section>

      </main>

      {/* WORLD TIME */}
      <div className="world-time-indicator">
        WORLD TIME · RUNNING
      </div>

      {/* NEXT PAGE */}
      <div className="continue-to-next-page">
        <a href="/ecosystem/nexhousing" className="continue-link">
          Continue → NexHousing
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default NexEngine;
