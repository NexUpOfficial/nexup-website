import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";

/* ==============================================
     STATIC CONFIG
   ============================================== */
const TITLE_MAP = {
  "/": "NexUP",
  "/ecosystem": "Ecosystem",
  "/ecosystem/nexworld": "NexWorld",
  "/ecosystem/nexnodes": "NexNodes",
  "/ecosystem/nexengine": "NexEngine",
  "/ecosystem/nexhousing": "NexHousing",
  "/ecosystem/nexsearch": "NexSearch Engine",
  "/about": "About Us",
  "/about/vision": "Vision",
  "/about/team": "Team",
  "/contact": "Contact",
  "/login": "Login",
  "/search": "Search",
};

function Header({ toggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showTooltip, setShowTooltip] = useState(false);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);
  
  // States for Scroll UI
  const [hideHeader, setHideHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // FIX #6: Detect top vs scroll
  
  const timer = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const headerTitle = useMemo(() => {
    return TITLE_MAP[location.pathname] || "NexUP";
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "NexUP";
    } else {
      document.title = `${headerTitle} | NexUP`;
    }
  }, [headerTitle, location.pathname]);

  /* ==============================================
       SCROLL LOGIC (Optimized)
     ============================================== */
  useEffect(() => {
    let lastY = 0;
    
    const handleScroll = () => {
      const current = window.scrollY;
      
      // Logic for Hide on Scroll Down
      if (current > lastY && current > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      // Logic for Sticky Shadow (Fix #6)
      if (current > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastY = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ==============================================
       INTERACTION HANDLERS
     ============================================== */
  const handleEnter = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    setShowTooltip(true);
    timer.current = setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleLeave = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    setShowTooltip(false);
  };

  const handleMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setMouseOffsetX((x / rect.width - 0.5) * 20);
  };

  const handleMobileTap = () => {
    if (!isMobile) return;
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  const navigateByTitle = () => {
    if (!isHome) navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSidebar();
    }
  };

  /* ==============================================
       RENDER
     ============================================== */
  return (
    <header 
      className={`header ${hideHeader ? "hide" : ""} ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="header-gradient"></div>

      {/* LEFT SECTION */}
      <div className="header-left">

        {/* BACK BUTTON */}
        {!isHome && (
          <button 
            className="back-arrow-btn" 
            onClick={() => navigate(-1)}
            aria-label="Go Back"
          >
            <svg viewBox="0 0 24 24">
              <polyline points="14 18 8 12 14 6" />
            </svg>
          </button>
        )}

        {/* TITLE (Acts as Active Indicator) */}
        <h1
          className={`header-title ${isHome ? "big-title" : "small-title"} active-page-indicator`}
          onClick={navigateByTitle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' ? navigateByTitle() : null)}
        >
          {headerTitle}
        </h1>

        {/* SIDEBAR ICON */}
        <div
          className="sidebar-icon-wrapper"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        >
          <button
            className="sidebar-icon-btn"
            onClick={() => {
              toggleSidebar();
              handleMobileTap();
            }}
            onKeyDown={handleKeyDown}
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
            aria-expanded={isOpen}
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>
              {/* CLOSED ICON */}
              <svg className="icon bottom-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>

              {/* OPEN ICON */}
              <svg className="icon top-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="8" x2="20" y2="8" />
              </svg>
            </div>
          </button>

          {/* TOOLTIP */}
          {showTooltip && (
            <div
              className="diamond-tooltip"
              style={{
                transform: isMobile
                  ? "translateX(-50%)"
                  : `translateX(calc(-50% + ${mouseOffsetX}px))`,
              }}
            >
              {isOpen ? "Close Menu" : "Open Menu"}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <button 
          className="search-btn" 
          onClick={() => navigate("/search")}
          aria-label="Search Ecosystem"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>

        <button 
          className="login-btn" 
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;