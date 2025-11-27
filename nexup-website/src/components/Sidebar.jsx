import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  /* Auto-open correct section on route */
  useEffect(() => {
    if (location.pathname.startsWith("/ecosystem")) {
      setOpenSection("ecosystem");
    } else if (location.pathname.startsWith("/about")) {
      setOpenSection("about");
    }
  }, [location.pathname]);

  /* Auto-close sidebar on mobile navigation */
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) {
      onClose?.();
    }
  }, [location.pathname]);

  const toggle = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  /* Menu items */
  const ecosystemItems = [
    { label: "NexWorld", to: "/ecosystem/nexworld" },
    { label: "NexNodes", to: "/ecosystem/nexnodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine" },
    { label: "NexHousing", to: "/ecosystem/nexhousing" },
    { label: "Nex Search Engine", to: "/ecosystem/search" },
  ];

  const aboutItems = [
    { label: "Vision", to: "/about/vision" },
    { label: "Team", to: "/about/team" },
    { label: "Stories", to: "/about/stories" },
    { label: "Company", to: "/about/company" },
    { label: "Career", to: "/about/career" },
    { label: "News", to: "/about/news" },
  ];

  return (
  <aside className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar-inner">

      {/* MAIN */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">MAIN</div>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "sidebar-item sidebar-link" + (isActive ? " active" : "")
          }
        >
          <span className="left-indicator" />
          Home
        </NavLink>
      </div>

      <div className="sidebar-divider" />

      {/* ECOSYSTEM */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">ECOSYSTEM</div>

        <button
          className={
            "sidebar-item sidebar-parent" +
            (openSection === "ecosystem" ? " open" : "")
          }
          onClick={() => toggle("ecosystem")}
        >
          <span className="left-indicator" />
          Ecosystem
          <span className="arrow">
            {openSection === "ecosystem" ? "▴" : "▾"}
          </span>
        </button>

        <div
          className={
            "sidebar-submenu " +
            (openSection === "ecosystem" ? "expand" : "collapse")
          }
        >
          {ecosystemItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "sidebar-subitem sidebar-link" +
                (isActive ? " active" : "")
              }
            >
              <span className="left-indicator" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="sidebar-divider" />

      {/* ABOUT */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">ABOUT US</div>

        <button
          className={
            "sidebar-item sidebar-parent" +
            (openSection === "about" ? " open" : "")
          }
          onClick={() => toggle("about")}
        >
          <span className="left-indicator" />
          About us
          <span className="arrow">
            {openSection === "about" ? "▴" : "▾"}
          </span>
        </button>

        <div
          className={
            "sidebar-submenu " +
            (openSection === "about" ? "expand" : "collapse")
          }
        >
          {aboutItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "sidebar-subitem sidebar-link" + (isActive ? " active" : "")
              }
            >
              <span className="left-indicator" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="sidebar-divider" />

      {/* SUPPORT */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">SUPPORT</div>

        <NavLink
          to="/support/guidelines"
          className={({ isActive }) =>
            "sidebar-item sidebar-link" + (isActive ? " active" : "")
          }
        >
          <span className="left-indicator" />
          Guidelines
        </NavLink>

        <NavLink
          to="/support/help"
          className={({ isActive }) =>
            "sidebar-item sidebar-link" + (isActive ? " active" : "")
          }
        >
          <span className="left-indicator" />
          Help / Support
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            "sidebar-item sidebar-link" + (isActive ? " active" : "")
          }
        >
          <span className="left-indicator" />
          Contact
        </NavLink>
      </div>

      <div className="sidebar-divider" />

      {/* ACCOUNT */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">ACCOUNT & Safety</div>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            "sidebar-item sidebar-link" + (isActive ? " active" : "")
          }
        >
          <span className="left-indicator" />
          Login System (DNS)
        </NavLink>
      </div>

    </div>
  </aside>
);


}

export default Sidebar;
