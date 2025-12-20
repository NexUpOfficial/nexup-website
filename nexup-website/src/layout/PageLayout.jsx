// src/layout/PageLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./PageLayout.css";

export default function PageLayout({ isOpen, children }) {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  const pageRef = useRef(null);

  // Match Header height
  const HEADER_OFFSET = 80;

  /* ====================================================
     SCROLL TO TOP BUTTON VISIBILITY
  ==================================================== */
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================================
     ROUTE CHANGE → RESET SCROLL
  ==================================================== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  /* ====================================================
     MOBILE SCROLL LOCK (SIDEBAR OPEN)
     - Desktop: allow scroll
     - Mobile: lock background scroll
  ==================================================== */
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  /* ====================================================
     SCROLL TO TOP ACTION
  ==================================================== */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* GLOBAL VISUAL LAYERS */}
      <div className="global-noise" />
      <div className="global-vignette" />

      {/* MAIN PAGE FRAME */}
      <main
        ref={pageRef}
        className={`page-frame ${isOpen ? "sidebar-open" : ""}`}
        style={{ marginTop: HEADER_OFFSET }}
      >
        <div className="page-content">
          {children}
        </div>
      </main>

      {/* SCROLL TO TOP BUTTON */}
      <button
        className={`scroll-fab ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}
