// src/layout/PageLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import useHeaderHeight from "../hooks/useHeaderHeight";
import "./PageLayout.css";

export default function PageLayout({ isOpen, children }) {
  const headerHeight = useHeaderHeight();
  const pageRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  /* ===============================
     Scroll Detection (Window + Page)
     =============================== */
  useEffect(() => {
    const page = pageRef.current;

    const handleScroll = () => {
      const trigger = window.innerHeight * 1.1;
      const winScroll = window.scrollY;
      const pageScroll = page ? page.scrollTop : 0;

      setShowTop(winScroll > trigger || pageScroll > trigger);
    };

    window.addEventListener("scroll", handleScroll);
    if (page) page.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (page) page.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ===============================
     Scroll To Top (All targets)
     =============================== */
  const scrollToTop = () => {
    const page = pageRef.current;

    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page) page.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {/* GLOBAL BACKGROUND GRADIENT */}
<div className="global-gradient"></div>

      {/* MAIN PAGE WRAPPER */}
      <div
        ref={pageRef}
        className={`page-frame ${isOpen ? "open" : ""}`}
        style={{
          marginTop: isOpen ? headerHeight - 20 : headerHeight,
        }}
      >
        <div className="page-inner">
          {children}
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <button
          className={`scroll-top-btn ${isOpen ? "arrow-shift" : ""}`}
          onClick={scrollToTop}
        >
          ▲
        </button>
      )}
    </>
  );
}
