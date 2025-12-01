// src/layout/PageLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import useHeaderHeight from "../hooks/useHeaderHeight";
import "./PageLayout.css";

export default function PageLayout({ isOpen, children }) {
  const headerHeight = useHeaderHeight();
  const pageRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  const isMobile = window.innerWidth <= 768;

  /* ====================================================
       Show scroll-to-top button
  ==================================================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const threshold = window.innerHeight * 1.1;
      setShowTop(scrollPos > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================================
       Global cursor grabbing logic
  ==================================================== */
  useEffect(() => {
    const down = () => (document.body.style.cursor = "grabbing");
    const up = () => (document.body.style.cursor = "grab");

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  /* ====================================================
       Disable body scroll on mobile when sidebar open
  ==================================================== */
  useEffect(() => {
    if (isMobile && isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [isOpen, isMobile]);

  /* ====================================================
       Page slide animation (Option C = 140px)
       Desktop only → Mobile should not slide
  ==================================================== */
  const frameClass =
    !isMobile && isOpen ? "page-frame open" : "page-frame";

  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <div className="global-gradient"></div>

      {/* PAGE BLUR (Header stays clear) */}
      {isOpen && <div className="page-blur-layer"></div>}

      {/* MAIN PAGE CONTENT */}
      <div
        ref={pageRef}
        className={frameClass}
        style={{ marginTop: headerHeight }}
      >
        <div className="page-inner">{children}</div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            pageRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ▲
        </button>
      )}
    </>
  );
}
