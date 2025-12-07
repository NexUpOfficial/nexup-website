import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";
import RisingSmoke from "../animations/RisingSmoke";

function Sidebar({ isOpen, onClose }) {
  // ---------------------------------------------------------
  // CONFIGURATION: Adjust this value to match your Header height
  // ---------------------------------------------------------
  const FIXED_HEADER_OFFSET = 80;

  const [openSection, setOpenSection] = useState(() => {
    return localStorage.getItem("sidebar_open_section") || null;
  });

  const sidebarRef = useRef(null);
  const location = useLocation();

  /* ------------------------
       MOBILE SWIPE LOGIC
     ------------------------- */
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;
    const el = sidebarRef.current;

    const handleTouchStart = (e) => {
      setTouchStartX(e.changedTouches[0].screenX);
      setTouchStartY(e.changedTouches[0].screenY);
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const xDiff = touchStartX - touchEndX;
      const yDiff = Math.abs(touchStartY - touchEndY);

      if (xDiff > 60 && yDiff < 30) {
        onClose?.();
      }
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, touchStartX, touchStartY, onClose]);

  /* ------------------------
       AUTO OPEN & PERSIST
     ------------------------- */
  useEffect(() => {
    if (openSection) {
      localStorage.setItem("sidebar_open_section", openSection);
    } else {
      localStorage.removeItem("sidebar_open_section");
    }
  }, [openSection]);

  useEffect(() => {
    const path = location.pathname;
    let targetSection = null;

    if (path.startsWith("/ecosystem")) targetSection = "ecosystem";
    else if (path.startsWith("/about")) targetSection = "about";
    else if (path.startsWith("/safety") || path === "/dns" || path === "/login")
      targetSection = "account";

    if (targetSection && openSection !== targetSection) {
      setOpenSection(targetSection);
    }
    if (window.innerWidth <= 768 && isOpen) onClose?.();
  }, [location.pathname]);

  /* ------------------------
       TOGGLE HANDLER
     ------------------------- */
  const toggle = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const handleKeyDown = (e, key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(key);
    }
  };

  /* ------------------------
           DATA
     ------------------------- */
  const ecosystemItems = [
    { label: "NexWorld", to: "/ecosystem/nexworld" },
    { label: "NexNodes", to: "/ecosystem/nexnodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine" },
    { label: "NexHousing", to: "/ecosystem/nexhousing" },
    { label: "Nex Search", to: "/ecosystem/nexsearch" },
  ];

  const aboutItems = [
    { label: "Vision", to: "/about/vision" },
    { label: "Team", to: "/about/team" },
    { label: "Stories", to: "/about/stories" },
    { label: "Company", to: "/about/company" },
    { label: "Career", to: "/about/career" },
    { label: "News", to: "/about/news" },
  ];

  const supportItems = [
    { label: "Guidelines", to: "/support/guidelines" },
    { label: "Help / Support", to: "/support/help" },
    { label: "Contact", to: "/contact" },
  ];

  const accountItems = [
    { label: "Login", to: "/login" },
    { label: "DNS", to: "/dns" },
    { label: "Safety Approach", to: "/safety/approach" },
    { label: "Privacy", to: "/safety/privacy" },
    { label: "Transparency", to: "/safety/transparency" },
  ];

  /* ------------------------
       RENDER HELPERS
     ------------------------- */
  const renderLink = (to, label, sectionName, isSubItem = false) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-link ${isActive ? "active" : ""} ${isSubItem ? "sub-link" : ""}`
      }
      // TOOLTIP: Shows "Section • Item Name"
      data-tooltip={`${sectionName} • ${label}`}
    >
      <span className="nav-text">{label}</span>
      <span className="active-dot" />
    </NavLink>
  );

  const renderSection = (id) => {
    switch (id) {
      case "main":
        return (
          <div className="section-group">
            <div className="section-header-label">Platform</div>
            {renderLink("/", "Home", "Platform")}
          </div>
        );
      case "ecosystem":
        return (
          <div className="section-group">
            <div className="section-header-label">Modules</div>
            <div
              className={`accordion-trigger ${
                openSection === "ecosystem" ? "open" : ""
              }`}
              onClick={() => toggle("ecosystem")}
              onKeyDown={(e) => handleKeyDown(e, "ecosystem")}
              tabIndex={0}
              role="button"
              data-tooltip="Modules • Ecosystem"
            >
              <span className="nav-text">Ecosystem</span>
              <span className="chevron" />
            </div>
            <div
              className={`accordion-content ${
                openSection === "ecosystem" ? "expanded" : ""
              }`}
            >
              <div className="accordion-inner">
                {ecosystemItems.map((i) =>
                  renderLink(i.to, i.label, "Modules", true)
                )}
              </div>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="section-group">
            <div className="section-header-label">Organization</div>
            <div
              className={`accordion-trigger ${
                openSection === "about" ? "open" : ""
              }`}
              onClick={() => toggle("about")}
              onKeyDown={(e) => handleKeyDown(e, "about")}
              tabIndex={0}
              role="button"
              data-tooltip="Organization • About"
            >
              <span className="nav-text">About</span>
              <span className="chevron" />
            </div>
            <div
              className={`accordion-content ${
                openSection === "about" ? "expanded" : ""
              }`}
            >
              <div className="accordion-inner">
                {aboutItems.map((i) =>
                  renderLink(i.to, i.label, "Organization", true)
                )}
              </div>
            </div>
          </div>
        );
      case "support":
        return (
          <div className="section-group">
            <div className="section-header-label">Resources</div>
            {supportItems.map((i) => renderLink(i.to, i.label, "Resources"))}
          </div>
        );
      case "account":
        return (
          <div className="section-group">
            <div className="section-header-label">Settings</div>
            <div
              className={`accordion-trigger ${
                openSection === "account" ? "open" : ""
              }`}
              onClick={() => toggle("account")}
              onKeyDown={(e) => handleKeyDown(e, "account")}
              tabIndex={0}
              role="button"
              data-tooltip="Settings • Account"
            >
              <span className="nav-text">Account & Safety</span>
              <span className="chevron" />
            </div>
            <div
              className={`accordion-content ${
                openSection === "account" ? "expanded" : ""
              }`}
            >
              <div className="accordion-inner">
                {accountItems.map((i) =>
                  renderLink(i.to, i.label, "Settings", true)
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Fixed order without drag/drop
  const staticOrder = ["main", "ecosystem", "about", "support", "account"];

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar-container ${isOpen ? "is-open" : ""}`}
      style={{
        top: `${FIXED_HEADER_OFFSET}px`,
        height: `calc(100vh - ${FIXED_HEADER_OFFSET}px)`,
      }}
      aria-hidden={!isOpen}
    >
      <div className="sidebar-backdrop">
        <RisingSmoke />
        <div className="noise-overlay" />
      </div>

      <div className="sidebar-scroll-area">
        <div className="sidebar-content">
          {staticOrder.map((id) => (
            <div key={id} className="static-section">
              {renderSection(id)}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <span className="status-dot"></span>
          <span>NeX UP Systems v2.1</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;