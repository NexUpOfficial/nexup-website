import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";
import useHeaderHeight from "../hooks/useHeaderHeight";


function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  /* Auto height dectector  */
const headerHeight = useHeaderHeight();
const [touchStartX, setTouchStartX] = useState(0);
const [touchEndX, setTouchEndX] = useState(0);
/* Mobile Swipe-to-Close */
useEffect(() => {
  if (!isOpen) return;

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = () => {
    // Swipe left gesture
    if (touchStartX - touchEndX > minSwipeDistance) {
      onClose?.();
    }
  };

  const el = document.querySelector(".sidebar");

  el.addEventListener("touchstart", handleTouchStart);
  el.addEventListener("touchmove", handleTouchMove);
  el.addEventListener("touchend", handleTouchEnd);

  return () => {
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchmove", handleTouchMove);
    el.removeEventListener("touchend", handleTouchEnd);
  };
}, [isOpen, touchStartX, touchEndX]);


const minSwipeDistance = 60;


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

  /* ===========================
   SCROLL SHADOW LOGIC
=========================== */
useEffect(() => {
  const container = document.querySelector(".sidebar-inner");
  if (!container) return;

  const handleShadow = () => {
    const atTop = container.scrollTop <= 0;
    const atBottom =
      container.scrollHeight - container.scrollTop === container.clientHeight;

    // toggle top shadow
    if (!atTop) container.classList.add("shadow-top");
    else container.classList.remove("shadow-top");

    // toggle bottom shadow
    if (!atBottom) container.classList.add("shadow-bottom");
    else container.classList.remove("shadow-bottom");
  };

  // initial shadow check
  handleShadow();

  // attach scroll listener
  container.addEventListener("scroll", handleShadow);

  // cleanup
  return () => container.removeEventListener("scroll", handleShadow);
}, []);


  return (
  <aside
  className={`sidebar ${isOpen ? "open" : ""}`}
  style={{
    top: headerHeight,
    height: `calc(100vh - ${headerHeight}px)`
  }}
>

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
          Login
        </NavLink>
      </div>

    </div>
  </aside>
);


}

export default Sidebar;
