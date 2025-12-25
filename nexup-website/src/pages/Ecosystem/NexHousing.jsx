import React, { useEffect } from "react";
import "../../page-styles/Ecosystem/NexWorld.css"; // SAME CSS
import Footer from "../../components/Footer/Footer";

const NexHousing = () => {

  // Intersection Observer — SAME AS OTHER PAGES
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
        <p>ECOSYSTEM / NEXHOUSING</p>
      </header>

      <main>

        {/* HERO */}
        <section className="nexworld-hero">

          {/* LEFT PANEL */}
          <div className="hero-text">
            <h1>NexHousing</h1>

            <span className="world-signal">
              SPACES · OWNERSHIP · PRESENCE
            </span>

            <p className="hero-subtitle">
              Persistent spaces where identity, activity, and value live.
            </p>

            <div className="hero-cta">
        
        <a href="/vision/nexHousing" className="cta cta-primary">
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
              src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexHousing_Futuristic_Smart_Living_District_pwwu48.mp4"
              poster="/assets/nexhousing-poster.jpg"
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
          <h2>Spaces that belong to someone.</h2>

          <p>
            NexHousing defines how space is owned, occupied, and persisted
            inside NexWorld. It provides users, teams, and organizations
            with permanent digital environments.
          </p>

          <p>
            These spaces do not disappear when sessions end. They remain,
            evolve, and accumulate meaning over time.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <p>Presence persists.</p>
          <hr />
        </div>

        {/* EDITORIAL — OWNERSHIP */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Ownership is architectural.</h2>

          <p>
            NexHousing treats ownership as a structural concept, not a
            permission toggle. Spaces have continuity, rules, and memory.
          </p>

          <p>
            What you build remains attached to the space itself.
          </p>
        </article>

        {/* SEPARATOR */}
        <div className="editorial-separator fade-in-on-load">
          <hr />
        </div>

        {/* EDITORIAL — USE CASES */}
        <article className="nexworld-editorial editorial-identity fade-in-on-load">
          <h2>Homes, offices, institutions.</h2>

          <p>
            NexHousing supports private rooms, collaborative workspaces,
            public hubs, and institutional environments.
          </p>

          <p>
            One system. Many forms of habitation.
          </p>
        </article>

        {/* ECOSYSTEM BRIDGE */}
        <section className="nexworld-bridge fade-in-on-load">
          <span className="bridge-preamble">
            Space gives structure to life.
          </span>

          <h2>Where NexWorld becomes lived-in.</h2>

          <p>
            NexHousing connects identity, infrastructure, and creation
            into spaces people return to.
          </p>

          <a href="/ecosystem" className="bridge-link">
            Explore the ecosystem →
          </a>
        </section>

        {/* EDITORIAL — FUTURE */}
        <article className="nexworld-editorial fade-in-on-load">
          <h2>Built for permanence.</h2>

          <p>
            NexHousing is designed for long-term presence — not temporary
            experiences. It exists to support digital life that unfolds
            over years, not sessions.
          </p>
        </article>

        {/* FINAL STATEMENT */}
        <section className="nexworld-final">
          <p>NexHousing is where NexWorld is lived.</p>
        </section>

      </main>

      {/* WORLD TIME */}
      <div className="world-time-indicator">
        WORLD TIME · RUNNING
      </div>

      {/* NEXT PAGE */}
      <div className="continue-to-next-page">
        <a href="/ecosystem/nexsearch" className="continue-link">
          Continue → NexSearch
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default NexHousing;
