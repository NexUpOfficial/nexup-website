import React, { useState, useRef, useEffect } from "react";
import "./styles/Header.css";

function Header({ toggleSidebar, isOpen }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);
  const timer = useRef(null);

  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ================================
     HEADER HIDE ON SCROLL
  ================================== */
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

  /* ================================
     TOOLTIP LOGIC
  ================================== */
  const handleEnter = () => {
    clearTimeout(timer.current);
    setShowTooltip(true);
    timer.current = setTimeout(() => setShowTooltip(false), 1000);
  };

  const handleLeave = () => {
    clearTimeout(timer.current);
    setShowTooltip(false);
  };

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setMouseOffsetX((x / rect.width - 0.5) * 20);
  };

  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>

      {/* LEFT SIDE: TITLE + SIDEBAR ICON */}
      <div className="header-left">

        {/* ALWAYS show NexUP text */}
        <h1 className="header-title glow-text fade-smooth">NexUP</h1>

        {/* SIDEBAR ICON (NEVER MOVES) */}
        <div
          className="tooltip-container"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        >
          <button
            className={`sidebar-icon-btn ${isOpen ? "is-open" : ""}`}
            onClick={toggleSidebar}
          >
            <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>

              {/* CLOSED ICON */}
              <svg
                className="icon bottom-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>

              {/* OPEN ICON */}
              <svg
                className="icon top-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="7" x2="21" y2="7" />
              </svg>

            </div>
          </button>

          {showTooltip && (
            <div
              className="diamond-tooltip"
              style={{
                transform: `translateX(calc(-50% + ${mouseOffsetX}px))`,
              }}
            >
              {isOpen ? "Close Menu" : "Open Menu"}
            </div>
          )}
        </div>

      </div>

      {/* RIGHT SIDE: SEARCH + LOGIN */}
      <div className="header-right">
        <button className="search-btn">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="17" y1="17" x2="21" y2="21" />
          </svg>
        </button>

        <button className="login-btn">Login</button>
      </div>

    </header>
  );
}

export default Header;
