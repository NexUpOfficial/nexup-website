import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
// VisionOS style will use a different CSS file
import "./styles/Sidebar.css"; 
// RisingSmoke animation is kept, assuming it fits a 'depth' aesthetic

function Sidebar({ isOpen, onClose }) {
  // ---------------------------------------------------------
  // CONFIGURATION: Header offset values
  // ---------------------------------------------------------
  const DESKTOP_HEADER_OFFSET = 80;
  const MOBILE_HEADER_OFFSET = 64;

  // ---------------------------------------------------------
  // STATE & REFS
  // ---------------------------------------------------------
  const [openSection, setOpenSection] = useState(() => {
    return localStorage.getItem("sidebar_open_section") || null;
  });

  const sidebarRef = useRef(null);
  const location = useLocation();

  // Track previous route for close-on-route-change logic
  const prevPathRef = useRef(location.pathname);

  // Determine the current header offset based on screen size
  const [headerOffset, setHeaderOffset] = useState(DESKTOP_HEADER_OFFSET);

  // ---------------------------------------------------------
  // DATA 
  // ---------------------------------------------------------
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

  // ---------------------------------------------------------
  // EFFECTS
  // ---------------------------------------------------------

  // Effect to update header offset on window resize
  useEffect(() => {
    const handleResize = () => {
      setHeaderOffset(
        window.innerWidth <= 768 ? MOBILE_HEADER_OFFSET : DESKTOP_HEADER_OFFSET
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile Swipe Logic
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

      // Swipe left gesture detection (swipe distance > 60px and mostly horizontal)
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

  // Section Persistence (localStorage)
  useEffect(() => {
    if (openSection) {
      localStorage.setItem("sidebar_open_section", openSection);
    } else {
      localStorage.removeItem("sidebar_open_section");
    }
  }, [openSection]);

  // Auto Open/Close on Route Change
  useEffect(() => {
    const path = location.pathname;
    let targetSection = null;

    // Determine target section based on route
    if (path.startsWith("/ecosystem")) targetSection = "ecosystem";
    else if (path.startsWith("/about")) targetSection = "about";
    else if (path.startsWith("/safety") || path === "/dns" || path === "/login")
      targetSection = "account";

    // Auto-open logic
    if (targetSection && openSection !== targetSection) {
      setOpenSection(targetSection);
    }

    // Close sidebar on mobile ONLY when route actually changes
    if (
      window.innerWidth <= 768 &&
      isOpen &&
      prevPathRef.current !== location.pathname
    ) {
      onClose?.();
    }

    prevPathRef.current = location.pathname;
  }, [location.pathname, isOpen, onClose, openSection]);

  // ---------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------

  const toggle = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const handleKeyDown = (e, key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(key);
    }
  };

  // ---------------------------------------------------------
  // RENDER HELPERS 
  // ---------------------------------------------------------
  const renderLink = (to, label, isSubItem = false) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-link ${isActive ? "active" : ""} ${isSubItem ? "sub-link" : ""}`
      }
      // Removed data-tooltip attribute
      onClick={() => window.innerWidth <= 768 && onClose?.()}
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
            {renderLink("/", "Home")}
          </div>
        );
      case "ecosystem":
        return (
          <div className="section-group">
            <div className="section-header-label">Modules</div>
            <div
              className={`accordion-trigger ${openSection === "ecosystem" ? "open" : ""}`}
              onClick={() => toggle("ecosystem")}
              onKeyDown={(e) => handleKeyDown(e, "ecosystem")}
              tabIndex={0}
              role="button"
            >
              <span className="nav-text">Ecosystem</span>
              <span className="chevron" />
            </div>
            <div className={`accordion-content ${openSection === "ecosystem" ? "expanded" : ""}`}>
              <div className="accordion-inner">
                {ecosystemItems.map((i) =>
                  renderLink(i.to, i.label, true) // Passed 'true' for isSubItem
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
              className={`accordion-trigger ${openSection === "about" ? "open" : ""}`}
              onClick={() => toggle("about")}
              onKeyDown={(e) => handleKeyDown(e, "about")}
              tabIndex={0}
              role="button"
            >
              <span className="nav-text">About</span>
              <span className="chevron" />
            </div>
            <div className={`accordion-content ${openSection === "about" ? "expanded" : ""}`}>
              <div className="accordion-inner">
                {aboutItems.map((i) =>
                  renderLink(i.to, i.label, true) // Passed 'true' for isSubItem
                )}
              </div>
            </div>
          </div>
        );
      case "support":
        return (
          <div className="section-group">
            <div className="section-header-label">Resources</div>
            {supportItems.map((i) =>
              renderLink(i.to, i.label)
            )}
          </div>
        );
      case "account":
        return (
          <div className="section-group">
            <div className="section-header-label">Settings</div>
            <div
              className={`accordion-trigger ${openSection === "account" ? "open" : ""}`}
              onClick={() => toggle("account")}
              onKeyDown={(e) => handleKeyDown(e, "account")}
              tabIndex={0}
              role="button"
            >
              <span className="nav-text">Account & Safety</span>
              <span className="chevron" />
            </div>
            <div className={`accordion-content ${openSection === "account" ? "expanded" : ""}`}>
              <div className="accordion-inner">
                {accountItems.map((i) =>
                  renderLink(i.to, i.label, true) // Passed 'true' for isSubItem
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // ---------------------------------------------------------
  // MAIN RENDER
  // ---------------------------------------------------------
  const staticOrder = ["main", "ecosystem", "about", "support", "account"];

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar-container ${isOpen ? "is-open" : ""}`}
      style={{
        top: `${headerOffset}px`,
        height: `calc(100vh - ${headerOffset}px)`,
      }}
      aria-hidden={!isOpen}
    >
      {/* Background for visual effect (VisionOS style) */}
      <div className="sidebar-backdrop">
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

        {/* Footer */}
        <div className="sidebar-footer">
          <span className="status-dot"></span>
          <span>NeX UP Systems v2.0</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;