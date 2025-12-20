import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";

/* ====================================================
 * STATIC CONFIGURATION
 * ==================================================== */
const TITLE_MAP = {
  /* =========================
     Home
  ========================= */
  "/": "NexUP",

  /* =========================
     Ecosystem
  ========================= */
  "/ecosystem": "Ecosystem",
  "/ecosystem/nexworld": "NexWorld",
  "/ecosystem/nexnodes": "NexNodes",
  "/ecosystem/nexengine": "NexEngine",
  "/ecosystem/nexhousing": "NexHousing",
  "/ecosystem/nexsearch": "NexSearch",

  /* =========================
     About
  ========================= */
  "/about": "About NexUP",
  "/about/vision": "Vision",
  "/about/team": "Team",
  "/about/stories": "Stories",
  "/about/company": "Company",
  "/about/career": "Careers",
  "/about/news": "News",

  /* =========================
     Support
  ========================= */
  "/support": "Support",
  "/support/guidelines": "Guidelines",
  "/support/help": "Help & Support",

  /* =========================
     Safety
  ========================= */
  "/safety": "Safety",
  "/safety/approach": "Safety Approach",
  "/safety/privacy": "Privacy Policy",
  "/safety/trust": "Trust",
  "/safety/transparency": "Transparency",
  "/safety/cookies": "Cookies Policy",

  /* =========================
     Account
  ========================= */
  "/dns": "DNS",

  /* =========================
     Auth
  ========================= */
  "/login": "Login",

  /* =========================
     Contact & Feedback
  ========================= */
  "/contact": "Contact Us",
  "/feedback": "Feedback",

  /* =========================
     Search
  ========================= */
  "/search": "Search",

  /* =========================
     Sections
  ========================= */
  "/sections/roadmap": "Roadmap",
  "/sections/terms": "Terms & Conditions",
};


// Check for mobile size outside the component (or in a separate hook)
// Using a simple window check here for consistency with original code
const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

function Header({ toggleSidebar, isOpen }) {
  // --- HOOKS & ROUTER STATE ---
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // --- REFS ---
  const tooltipTimer = useRef(null);

  // --- LOCAL COMPONENT STATE ---
  // State for Tooltip/Interaction
  const [showTooltip, setShowTooltip] = useState(false);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);

  // State for Scroll UI
  const [hideHeader, setHideHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ====================================================
   * MEMOIZED VALUES
   * ==================================================== */
  const headerTitle = useMemo(() => {
    return TITLE_MAP[pathname] || "NexUP";
  }, [pathname]);

  const isHome = pathname === "/";

  /* ====================================================
   * TITLE & SEO SIDE EFFECT
   * ==================================================== */
  useEffect(() => {
    if (isHome) {
      document.title = "NexUP";
    } else {
      document.title = `${headerTitle} | NexUP`;
    }
  }, [headerTitle, isHome]);

  /* ====================================================
   * SCROLL LOGIC (Optimized)
   * ==================================================== */
  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      // 1. Logic for Hide on Scroll Down
      if (current > lastY && current > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      // 2. Logic for Sticky Shadow (VisionOS-style background activation)
      // This is debounced by scroll position > 10
      setIsScrolled(current > 10);

      lastY = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  /* ====================================================
   * INTERACTION HANDLERS
   * ==================================================== */
  const handleEnter = () => {
    if (isMobile) return;
    clearTimeout(tooltipTimer.current);
    setShowTooltip(true);
    // Auto-hide tooltip after a delay
    tooltipTimer.current = setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleLeave = () => {
    if (isMobile) return;
    clearTimeout(tooltipTimer.current);
    setShowTooltip(false);
  };

  const handleMove = (e) => {
    if (isMobile) return;
    // Calculate a mouse offset for a subtle parallax effect on the tooltip
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setMouseOffsetX((x / rect.width - 0.5) * 20); // Range is approx -10 to +10
  };

  const handleMobileTap = () => {
    if (!isMobile) return;
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000); // Shorter duration for tap
  };

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
      {/* Background elements for glassmorphism/visionOS style */}
      <div className="header-backdrop"></div>
      <div className="header-gradient"></div>

      {/* LEFT SECTION (Back button, Title, Sidebar Toggle) */}
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

        {/* TITLE (Acts as Active Page Indicator / Home Link) */}
        <h1
          className={`header-title ${
            isHome ? "big-title" : "small-title"
          } active-page-indicator`}
          onClick={navigateToHomeAndScroll}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? navigateToHomeAndScroll() : null)}
        >
          {headerTitle}
        </h1>

        {/* SIDEBAR TOGGLE & TOOLTIP WRAPPER */}
        <div
          className="sidebar-icon-wrapper"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        >
          <button
            className="v-os-btn sidebar-icon-btn"
            onClick={() => {
              toggleSidebar();
              handleMobileTap();
            }}
            onKeyDown={handleSidebarKeydown}
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
            aria-expanded={isOpen}
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>
              {/* CLOSED ICON (Bottom) */}
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

              {/* OPEN ICON (Top) */}
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

          {/* TOOLTIP */}
          {showTooltip && (
            <div
              className="v-os-tooltip"
              style={{
                // Set the CSS variable for the animation keyframe based on mouse position (or 0 for mobile)
                "--tooltip-offset-x": isMobile
                  ? "0px"
                  : `calc(-50% + ${mouseOffsetX}px)`,
              }}
            >
              {isOpen ? "Close Menu" : "Open Menu"}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SECTION (Search and Login buttons) */}
      <div className="header-right">
        <button
          className="v-os-btn search-btn"
          onClick={() => navigate("/search")}
          aria-label="Search Ecosystem"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
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