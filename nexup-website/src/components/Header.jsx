import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";

function Header({ toggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showTooltip, setShowTooltip] = useState(false);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);
  const timer = useRef(null);

  const isMobile = window.innerWidth <= 768;

  /* ==============================================
     PAGE TITLES
  ============================================== */
  const TITLE_MAP = {
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
    "/search": "Search",
  };

  const headerTitle = TITLE_MAP[location.pathname] || "NexUP";

  useEffect(() => {
    document.title = TITLE_MAP[location.pathname] || "NexUP";
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  /* ==============================================
     SMOOTH HEADER HIDE ON SCROLL
  ============================================== */
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastY && current > 20) setHideHeader(true);
      else setHideHeader(false);

      lastY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ==============================================
     TOOLTIP HANDLERS
  ============================================== */
  const handleEnter = () => {
    if (isMobile) return;
    clearTimeout(timer.current);
    setShowTooltip(true);
    timer.current = setTimeout(() => setShowTooltip(false), 700);
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
    timer.current = setTimeout(() => setShowTooltip(false), 700);
  };

  /* ==============================================
     TITLE CLICK
  ============================================== */
  const navigateByTitle = () => {
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ==============================================
     RENDER
  ============================================== */
  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>
      <div className="header-gradient"></div>

      {/* LEFT SECTION */}
      <div className="header-left">

        {/* BACK BUTTON */}
        {!isHome && (
          <button className="back-arrow-btn" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24">
              <polyline points="14 18 8 12 14 6" />
            </svg>
          </button>
        )}

        {/* TITLE */}
        <h1
          className={`header-title ${isHome ? "big-title" : "small-title"}`}
          onClick={navigateByTitle}
        >
          {headerTitle}
        </h1>

        {/* SIDEBAR ICON — STAYS HERE ON DESKTOP */}
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
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>
              {/* CLOSED ICON */}
              <svg
                className="icon bottom-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
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
                stroke="white"
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
        {/* SEARCH */}
        <button className="search-btn" onClick={() => navigate("/search")}>
          <svg
            width="22"
            height="22"
            viewBox="0 1 24 24"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>

        {/* LOGIN (hidden on mobile) */}
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
