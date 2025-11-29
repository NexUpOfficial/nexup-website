import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../page-styles/Home.css";
import { useNavigate } from "react-router-dom";


/* ============================================================
    MAGNETIC BUTTON
============================================================ */
function MagneticButton({ className, children, onClick }) {
  const ref = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * 0.15}px, ${dy * 0.15}px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = `translate(0, 0)`;
  };

  return (
    <motion.button
      ref={ref}
      className={`${className} magnetic-btn`}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

/* ============================================================
    SCROLL TO TOP BUTTON
============================================================ */
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <span style={{ fontSize: "1.5rem" }}>↑</span>
    </motion.button>
  );
}

/* ============================================================
    MAIN HOME
============================================================ */
function Home({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`home-root ${isOpen ? "home-root--sidebar-open" : ""}`}>
      <div className="home-overlay" />

      <motion.div
        className="home-content-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* =====================================================
            HERO SECTION (CLEANED)
        ===================================================== */}
        <section className="home-hero">
          <motion.div
            className="home-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="hero-title-main">
              NeX <span className="hero-symbol">≡</span> UP
            </h1>

            <p className="hero-subtitle">
              The future of worlds, interaction, and reality—reimagined.
            </p>

            <p className="hero-description">
              Through NexWorld, NexNodes, NexEngine, and NexHousing Systems,
              NexUP creates an interconnected realm where digital and physical
              life merge seamlessly.
            </p>

            <div className="hero-cta-row">
              <MagneticButton
                className="btn-primary"
                onClick={() => navigate("/ecosystem")}
              >
                Explore Ecosystem
              </MagneticButton>

              <MagneticButton
                className="btn-ghost"
                onClick={() => navigate("/about")}
              >
                About Us
              </MagneticButton>
            </div>
          </motion.div>
        </section>

        {/* =====================================================
            ECOSYSTEM GRID
        ===================================================== */}
        <motion.section
          className="ecosystem-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="ecosystem-title">Explore the NexUP Ecosystem</h2>
          <p className="ecosystem-subtitle">
            Dive into the immersive modules powering the future of spatial computing.
          </p>

          <div className="ecosystem-grid">
            <div className="eco-top-row">
              {["nexworld", "nexnodes", "nexhousing"].map((eco, i) => (
                <motion.div
                  key={i}
                  className={`eco-card eco-card--${eco}`}
                  onClick={() => navigate(`/ecosystem/${eco}`)}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 0 45px rgba(255,255,255,0.2)",
                    filter: "brightness(1.15)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="eco-card-content">
                    <h3>{eco.replace("nex", "Nex")}</h3>
                    <p>Explore the {eco} module.</p>
                    <MagneticButton className="eco-card-btn">Explore ↗</MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="eco-bottom-row">
              {["nexengine", "search"].map((eco, i) => (
                <motion.div
                  key={i}
                  className={`eco-card eco-card--${eco}`}
                  onClick={() => navigate(`/ecosystem/${eco}`)}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 0 45px rgba(255,255,255,0.2)",
                    filter: "brightness(1.15)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="eco-card-content">
                    <h3>{eco === "search" ? "Search Portal" : "NexEngine"}</h3>
                    <p>Discover more.</p>
                    <MagneticButton className="eco-card-btn">Explore ↗</MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            CTA SECTION
        ===================================================== */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cta-title"
          >
            Unlock the Future with NexUP
          </motion.h2>

          <div className="cta-buttons">
            <MagneticButton
              className="cta-btn-main"
              onClick={() => navigate("/ecosystem")}
            >
              Start Exploring
            </MagneticButton>

            <MagneticButton
              className="cta-btn-secondary"
              onClick={() => navigate("/about/vision")}
            >
              Our Vision
            </MagneticButton>
          </div>
        </motion.section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="footer">
          <div className="footer-column brand">
            <h2 className="footer-logo">NeX ≡ UP</h2>
            <p className="footer-tagline">
              Building the future of immersive digital worlds.
            </p>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h4>Ecosystem</h4>
              <a onClick={() => navigate("/ecosystem/nexworld")}>NexWorld</a>
              <a onClick={() => navigate("/ecosystem/nexnodes")}>NexNodes</a>
              <a onClick={() => navigate("/ecosystem/nexhousing")}>NexHousing</a>
              <a onClick={() => navigate("/ecosystem/nexengine")}>NexEngine</a>
              <a onClick={() => navigate("/ecosystem/search")}>Search</a>
            </div>

            <div className="footer-col">
              <h4>About Us</h4>
              <a onClick={() => navigate("/about")}>About</a>
              <a onClick={() => navigate("/about/vision")}>Vision</a>
              <a onClick={() => navigate("/about/team")}>Team</a>
              <a onClick={() => navigate("/about/stories")}>Stories</a>
              <a onClick={() => navigate("/about/company")}>Company</a>
              <a onClick={() => navigate("/about/career")}>Career</a>
              <a onClick={() => navigate("/about/news")}>News</a>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <a onClick={() => navigate("/support/guidelines")}>Guidelines</a>
              <a onClick={() => navigate("/support/help")}>Help / Support</a>
              <a onClick={() => navigate("/contact")}>Contact</a>
            </div>

            <div className="footer-col">
              <h4>Account & Safety</h4>
              <a onClick={() => navigate("/login")}>Login</a>
            </div>
          </div>
        </footer>
      </motion.div>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
