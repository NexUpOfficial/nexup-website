// src/layout/PageLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./PageLayout.css";

export default function PageLayout({ isOpen, children }) {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  const pageRef = useRef(null);

  // Matches the new Header height + spacing
  const HEADER_OFFSET = 80;

  /* ====================================================
     SCROLL TO TOP LOGIC
  ==================================================== */
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================================
     ROUTE CHANGE: RESET SCROLL
  ==================================================== */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* ====================================================
     MOBILE SCROLL LOCK
  ==================================================== */
  useEffect(() => {
    // Prevent background scrolling on mobile when sidebar is open
    if (window.innerWidth <= 768 && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* GLOBAL BACKGROUNDS */}
      <div className="global-noise" />
      <div className="global-vignette" />

      {/* MAIN CONTENT FRAME */}
      <main 
        className={`page-frame ${isOpen ? "sidebar-open" : ""}`}
        style={{ marginTop: HEADER_OFFSET }}
      >
        <div className="page-content">
          {children}
        </div>
      </main>

      {/* SCROLL TO TOP FAB */}
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