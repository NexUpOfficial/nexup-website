import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
// VisionOS style will use a different CSS file
import "./styles/Sidebar.css"; 
// RisingSmoke animation is kept, assuming it fits a 'depth' aesthetic

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
    // Close sidebar on route change on small screens
    if (window.innerWidth <= 768 && isOpen) onClose?.(); 
  }, [location.pathname, isOpen, onClose, openSection]);

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
    { label: "NexWorld", to: "/ecosystem/nexworld", tooltip: "Immersive World environment" },
    { label: "NexNodes", to: "/ecosystem/nexnodes", tooltip: "Decentralized processing nodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine", tooltip: "Core platform technology" },
    { label: "NexHousing", to: "/ecosystem/nexhousing", tooltip: "Digital space management" },
    { label: "Nex Search", to: "/ecosystem/nexsearch", tooltip: "Platform-wide search functionality" },
  ];

  const aboutItems = [
    { label: "Vision", to: "/about/vision", tooltip: "Our guiding principles" },
    { label: "Team", to: "/about/team", tooltip: "Meet the core contributors" },
    { label: "Stories", to: "/about/stories", tooltip: "User and development narratives" },
    { label: "Company", to: "/about/company", tooltip: "Corporate structure and details" },
    { label: "Career", to: "/about/career", tooltip: "Job opportunities" },
    { label: "News", to: "/about/news", tooltip: "Latest updates and announcements" },
  ];

  const supportItems = [
    { label: "Guidelines", to: "/support/guidelines", tooltip: "Platform usage policies" },
    { label: "Help / Support", to: "/support/help", tooltip: "Access documentation and FAQs" },
    { label: "Contact", to: "/contact", tooltip: "Get in touch with us" },
  ];

  const accountItems = [
    { label: "Login", to: "/login", tooltip: "Access your personalized account" },
    { label: "DNS", to: "/dns", tooltip: "Configure network settings" },
    { label: "Safety Approach", to: "/safety/approach", tooltip: "Learn about our safety measures" },
    { label: "Privacy", to: "/safety/privacy", tooltip: "View our privacy policy" },
    { label: "Transparency", to: "/safety/transparency", tooltip: "Data and operation transparency report" },
  ];

  /* ------------------------
      RENDER HELPERS
    ------------------------- */
  const renderLink = (to, label, sectionName, tooltipText, isSubItem = false) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-link ${isActive ? "active" : ""} ${isSubItem ? "sub-link" : ""}`
      }
      // VISIONOS-STYLE TOOLTIP: Descriptive text
      data-tooltip={tooltipText || `${sectionName} • ${label}`}
    >
      <span className="nav-text">{label}</span>
      {/* Active dot/pill now acts as the focus/active indicator */}
      <span className="active-dot" /> 
    </NavLink>
  );

  const renderSection = (id) => {
    switch (id) {
      case "main":
        return (
          <div className="section-group">
            <div className="section-header-label">Platform</div>
            {renderLink("/", "Home", "Platform", "Navigate to the home dashboard")}
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
              data-tooltip="View the core product suite modules"
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
                  renderLink(i.to, i.label, "Modules", i.tooltip, true)
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
              data-tooltip="Information about the team and company"
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
                  renderLink(i.to, i.label, "Organization", i.tooltip, true)
                )}
              </div>
            </div>
          </div>
        );
      case "support":
        return (
          <div className="section-group">
            <div className="section-header-label">Resources</div>
            {supportItems.map((i) => renderLink(i.to, i.label, "Resources", i.tooltip))}
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
              data-tooltip="Manage your user profile and security"
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
                  renderLink(i.to, i.label, "Settings", i.tooltip, true)
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
      {/* The backdrop will handle the glass effect and depth */}
      <div className="sidebar-backdrop">
        {/* RisingSmoke is now a subtle background texture element */}
        {/* <RisingSmoke /> */}
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