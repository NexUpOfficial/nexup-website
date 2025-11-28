import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";


function Header({ toggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showTooltip, setShowTooltip] = useState(false);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const timer = useRef(null);
  const isMobile = window.innerWidth <= 768;

  /* =======================================================
     BROWSER TITLE + HEADER TITLE LOGIC
  ======================================================== */

  const TITLE_MAP = {
    "/": "NexUP",

    "/ecosystem/nexworld": "NexWorld | NexUP",
    "/ecosystem/nexnodes": "NexNodes | NexUP",
    "/ecosystem/nexengine": "NexEngine | NexUP",
    "/ecosystem/nexhousing": "NexHousing | NexUP",
    "/ecosystem/search": "Search Engine | NexUP",

    "/about/vision": "Vision | NexUP",
    "/about/team": "Team | NexUP",
    "/about/stories": "Stories | NexUP",
    "/about/company": "Company | NexUP",
    "/about/career": "Career | NexUP",
    "/about/news": "News | NexUP",

    "/support/guidelines": "Guidelines | Support",
    "/support/help": "Help | Support",

    "/contact": "Contact | NexUP",
    "/login": "Login | NexUP",
    "/search": "Search | NexUP",
  };

  const SIMPLE_TITLE = {
    "/": "NexUP",

    "/ecosystem/nexworld": "NexWorld",
    "/ecosystem/nexnodes": "NexNodes",
    "/ecosystem/nexengine": "NexEngine",
    "/ecosystem/nexhousing": "NexHousing",
    "/ecosystem/search": "Search Engine",

    "/about/vision": "Vision",
    "/about/team": "Team",
    "/about/stories": "Stories",
    "/about/company": "Company",
    "/about/career": "Career",
    "/about/news": "News",

    "/support/guidelines": "Guidelines",
    "/support/help": "Help / Support",

    "/contact": "Contact",
    "/login": "Login",
    "/search": "Search"
  };

  /* ============================================
     NEW — CLICK TITLE → NAVIGATE TO CORRECT PAGE
  ============================================ */
  const ROUTE_MAP = {
    "NexUP": "/",
    "NexWorld": "/ecosystem/nexworld",
    "NexNodes": "/ecosystem/nexnodes",
    "NexEngine": "/ecosystem/nexengine",
    "NexHousing": "/ecosystem/nexhousing",
    "Search Engine": "/ecosystem/search",

    "Vision": "/about/vision",
    "Team": "/about/team",
    "Stories": "/about/stories",
    "Company": "/about/company",
    "Career": "/about/career",
    "News": "/about/news",

    "Guidelines": "/support/guidelines",
    "Help / Support": "/support/help",

    "Contact": "/contact",
    "Login": "/login",
    "Search": "/search",
  };

  const headerTitle = SIMPLE_TITLE[location.pathname] || "NexUP";

  // update browser title
  useEffect(() => {
    document.title = TITLE_MAP[location.pathname] || "NexUP";
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  /* =======================================================
     HIDE HEADER ON SCROLL
  ======================================================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 20) setHideHeader(true);
      else setHideHeader(false);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* =======================================================
     TOOLTIP HANDLERS
  ======================================================== */
  const handleEnter = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    setShowTooltip(true);
    timer.current = setTimeout(() => setShowTooltip(false), 500);
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

    clearTimeout(timer.current);
    setShowTooltip(true);
    timer.current = setTimeout(() => setShowTooltip(false), 500);
  };

  /* =======================================================
     NAVIGATE TO TOP WHEN TITLE CLICKED
  ======================================================== */
  const navigateByTitle = () => {
    const target = ROUTE_MAP[headerTitle] || "/";
    navigate(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =======================================================
     UI RENDER
  ======================================================== */
  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>

      {/* LEFT SECTION */}
      <div className="header-left">

        {/* BACK ARROW */}
        {!isHome && (
        <button className="back-arrow-btn" onClick={() => navigate(-1)}>
  <svg viewBox="0 0 24 24">
    <polyline points="14 18 8 12 14 6" />
  </svg>
</button>

        )}

        {/* CLICKABLE DYNAMIC TITLE */}
        <h1
          className={`header-title ${isHome ? "big-title" : "small-title"}`}
          onClick={navigateByTitle}
          style={{ cursor: "pointer" }}
        >
          {headerTitle}
        </h1>

        {/* SIDEBAR ICON */}
        <div
          className="sidebar-icon-wrapper tooltip-container"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        >
          <button
            className={`sidebar-icon-btn ${isOpen ? "is-open" : ""}`}
            onClick={() => {
              toggleSidebar();
              handleMobileTap();
            }}
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>

              {/* CLOSED ICON */}
              <svg
                className="icon bottom-icon"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>

              {/* OPEN ICON */}
              <svg
                className="icon top-icon"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
                  : `translateX(calc(-50% + ${mouseOffsetX}px))`
              }}
            >
              {isOpen ? "Close Menu" : "Open Menu"}
            </div>
          )}
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <button className="search-btn" onClick={() => navigate("/search")}>
  <svg
    width="22"
    height="22"
    viewBox="0 1 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Circle */}
    <circle cx="11" cy="11" r="7" />

    {/* Handle */}
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
</button>


        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

    </header>
  );
}

export default Header;
