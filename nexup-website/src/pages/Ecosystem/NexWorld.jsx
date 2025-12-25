import React, { useEffect } from "react";
import "../../page-styles/Ecosystem/NexWorld.css";
import Footer from "../../components/Footer/Footer"; // Assuming this path is correct

const NexWorld = () => {
  // Intersection Observer for scroll-reveal effect
  useEffect(() => {
    // 🔹 A. querySelectorAll Scope: Scoping to the main container
    const container = document.querySelector('.nexworld-page');
    const sections = container ? container.querySelectorAll('.fade-in-on-load') : [];

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup function
    return () => observer.disconnect();
  }, []);
  // --------------------------------------------------------------------------

  return (
    <div className="nexworld-page">

      {/* CONTEXT HEADER */}
      <header className="nexworld-context">
        <p>ECOSYSTEM / NEXWORLD</p>
      </header>

    {/* 4. Semantic HTML Upgrade: Using <main> for the primary content */}
    <main>
      {/* HERO — WORLD ENTRY */}
      <section className="nexworld-hero">
        {/* LEFT PANEL — CONTENT */}
        <div className="hero-text">

          <h1>NexWorld</h1>
          <span className="world-signal">LIVE · PERSISTENT · SHARED</span>

          <p className="hero-subtitle">
            A persistent spatial world where digital life exists,
            evolves, and connects.
          </p>

          <div className="hero-cta">
           <a href="/vision/nexworld" className="cta cta-primary">
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
            /* 3. Hero Video: Added poster fallback */
            poster="/assets/nexworld-poster.jpg"
            src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexWorld_Futuristic_Drone_Flythrough_f4pwmj.mp4"
            autoPlay
            loop
            muted
            playsInline
            /* 🔹 B. Video aria-hidden: Added for decorative video */
            aria-hidden="true" 
          />
        </div>
      </section>

      {/* EDITORIAL — DEFINITION (Section 1: Center Aligned, Large Margin Top) */}
      {/* 4. Semantic HTML Upgrade: Using <article> */}
      <article id="definition" className="nexworld-editorial fade-in-on-load">
        <h2>Not an app. Not a platform. A world.</h2>

        <p>
          NexWorld is a persistent digital environment designed to host
          human activity beyond screens. It is a shared spatial layer
          where work, learning, social presence, commerce, and
          intelligence coexist.
        </p>

        <p>
          Unlike traditional applications, NexWorld does not reset when
          you leave. It continues to exist, evolve, and respond.
        </p>
      </article>

      {/* Breathing Separator */}
      <div className="editorial-separator fade-in-on-load">
        <p>Time continues.</p>
        <hr />
      </div>

      {/* EDITORIAL — PERSISTENCE (Section 2: Right-Biased Asymmetry) */}
      {/* 4. Semantic HTML Upgrade: Using <article> */}
       <article className="nexworld-editorial editorial-identity fade-in-on-load">
        <h2>A world that doesn’t pause.</h2>

        <p>
          Persistence means time continues, spaces remain, and actions
          leave traces. Systems evolve even when no one is watching.
        </p>

        <p>
          NexWorld scales naturally — from individual rooms to shared
          districts to entire digital civilizations.
        </p>
      </article>

      {/* Breathing Separator */}
      <div className="editorial-separator fade-in-on-load">
        <hr />
      </div>

      {/* EDITORIAL — IDENTITY & GOVERNANCE (Section 3: Center Aligned, Metaphor) */}
      {/* 4. Semantic HTML Upgrade: Using <article> */}
      <article className="nexworld-editorial editorial-identity fade-in-on-load">
        <h2>Identity before interfaces.</h2>

        <p>
          Users are not accounts. They are persistent entities with
          continuity, context, and presence inside the world.
        </p>

        <p>
          Governance is architectural. What persists is foundational —
          identity, ownership, and space. What disappears is temporary
          by design.
        </p>
      </article>

      {/* ECOSYSTEM BRIDGE — SINGLE LINK ONLY */}
      <section className="nexworld-bridge fade-in-on-load">
        <span className="bridge-preamble">NexWorld cannot exist alone.</span>
        <h2>Built on the NexUP ecosystem.</h2>

        <p>
          NexWorld is the surface layer where infrastructure,
          intelligence, identity, and creation converge.
        </p>

        <a href="/ecosystem" className="bridge-link">
          Explore the ecosystem →
        </a>
      </section>

      {/* EDITORIAL — FUTURE */}
      {/* 4. Semantic HTML Upgrade: Using <article> */}
      <article className="nexworld-editorial fade-in-on-load">
        <h2>Designed for what doesn’t exist yet.</h2>

        <p>
          NexWorld is intentionally incomplete. Its architecture supports
          continuous expansion — new worlds, new systems, and new forms
          of intelligence.
        </p>
      </article>

      {/* FINAL STATEMENT — NO CTA */}
      <section className="nexworld-final">
        <p>NexWorld is where NexUP becomes real.</p>
      </section>

    </main>

      {/* C. World Time Illusion (Fixed Footer) */}
      <div className="world-time-indicator">
        WORLD TIME · RUNNING
      </div>
      
      {/* Footer Navigation CTA (Simplified CTA Text Link) */}
      <div className="continue-to-next-page">
        {/* 2. Make "Continue -> NexNodes" a Real Navigation */}
         <a href="/ecosystem/nexnodes" className="continue-link"> Continue → NexNodes </a>
      </div>

      {/* Footer Component */}
      <Footer/>
    </div>
  );
};

export default NexWorld;