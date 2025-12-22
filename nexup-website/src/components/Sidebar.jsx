import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";

function Sidebar({ isOpen }) {
  const sidebarRef = useRef(null);

  const ecosystemItems = [
    { label: "NexWorld", to: "/ecosystem/nexworld" },
    { label: "NexNodes", to: "/ecosystem/nexnodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine" },
    { label: "NexHousing", to: "/ecosystem/nexhousing" },
    { label: "NexSearch", to: "/ecosystem/nexsearch" },
  ];

  const aboutItems = [
    { label: "Vision", to: "/about/vision" },
    { label: "Team", to: "/about/team" },
    { label: "Stories", to: "/about/stories" },
    { label: "Company", to: "/about/company" },
    { label: "Careers", to: "/about/career" },
    { label: "News", to: "/about/news" },
  ];

  const renderLink = (to, label, isSub = false) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        `nav-link ${isSub ? "sub-link" : ""} ${isActive ? "active" : ""}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar-container ${isOpen ? "is-open" : ""}`}
      style={{
        top: "60px",
        height: "calc(100vh - 60px)",
      }}
      role="navigation"
      aria-label="Primary navigation"
    >
      {/* Background (pure black via CSS) */}
      <div className="sidebar-backdrop" />

      <nav className="sidebar-scroll-area">
        <div className="sidebar-content center-vertical">

          {/* ECOSYSTEM */}
          <div className="hover-group">
            <div className="nav-link hover-trigger">
              Ecosystem <span className="chevron">{">"}</span>
            </div>
            <div className="hover-submenu">
              {ecosystemItems.map(item =>
                renderLink(item.to, item.label, true)
              )}
            </div>
          </div>

          {/* ABOUT */}
          <div className="hover-group">
            <div className="nav-link hover-trigger">
              About <span className="chevron">{">"}</span>
            </div>
            <div className="hover-submenu">
              {aboutItems.map(item =>
                renderLink(item.to, item.label, true)
              )}
            </div>
          </div>

          {/* SUPPORT */}
          {renderLink("/support/help", "Support")}
          {renderLink("/contact", "Contact")}
          {renderLink("/login", "Login")}

        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
