import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";
import useBrowserTitle from "../hooks/titles/BrowserTitle";
// Import the new search icon
import { IoIosSearch } from "react-icons/io";

// Check for mobile size
const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

function Header({ toggleSidebar, isOpen }) {
  // --- ROUTER ---
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // --- TITLE (from hook) ---
  const headerTitle = useBrowserTitle();
  const isHome = pathname === "/";

  // --- SCROLL UI STATE ---
  const [hideHeader, setHideHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ====================================================
   * SCROLL LOGIC
   * ==================================================== */
  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      // Hide header on scroll down
      if (current > lastY && current > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      // Activate glass background
      setIsScrolled(current > 10);

      lastY = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================================
   * HELPERS
   * ==================================================== */
  const navigateToHomeAndScroll = () => {
    if (!isHome) navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSidebarKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSidebar();
    }
  };

  /* ====================================================
   * RENDER
   * ==================================================== */
  return (
    <header
      className={`header-v-os ${hideHeader ? "hide" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {/* VisionOS style layers */}
      <div className="header-backdrop" />
      <div className="header-gradient" />

      {/* LEFT */}
      <div className="header-left">
        {/* BACK BUTTON */}
        {!isHome && (
          <button
            className="v-os-btn back-arrow-btn"
            onClick={() => navigate(-1)}
            aria-label="Go Back"
          >
            <svg viewBox="0 0 24 24">
              <polyline points="14 18 8 12 14 6" />
            </svg>
          </button>
        )}

        {/* TITLE */}
        <h1
          className={`header-title ${
            isHome ? "big-title" : "small-title"
          } active-page-indicator`}
          onClick={navigateToHomeAndScroll}
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            e.key === "Enter" ? navigateToHomeAndScroll() : null
          }
        >
          {headerTitle}
        </h1>

        {/* SIDEBAR TOGGLE */}
        <div className="sidebar-icon-wrapper">
          <button
            className="v-os-btn sidebar-icon-btn"
            onClick={toggleSidebar}
            onKeyDown={handleSidebarKeydown}
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
            aria-expanded={isOpen}
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>
              {/* CLOSED ICON */}
              <svg
                className="icon bottom-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>

              {/* OPEN ICON */}
              <svg
                className="icon top-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="8" x2="20" y2="8" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <button
          className="v-os-btn search-btn"
          onClick={() => navigate("/search")}
          aria-label="Search Ecosystem"
        >
          {/* REPLACED SVG WITH IoIosSearch COMPONENT */}
          <IoIosSearch size={17} /> 
        </button>

        <button
          className="v-os-btn login-btn primary-action"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;