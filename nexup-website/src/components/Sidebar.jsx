import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";
import useHeaderHeight from "../hooks/useHeaderHeight";
import RisingSmoke from "../animations/RisingSmoke";

function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();
  const headerHeight = useHeaderHeight();

  /* ------------------------
       MOBILE SWIPE CLOSE
  ------------------------- */
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const minSwipeDistance = 60;

  useEffect(() => {
    if (!isOpen) return;

    const el = document.querySelector(".sidebar");

    const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);
    const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].screenX);
    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > minSwipeDistance) onClose?.();
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, touchStartX, touchEndX]);

  /* ------------------------
     AUTO OPEN ON ROUTE
  ------------------------- */
  useEffect(() => {
    if (location.pathname.startsWith("/ecosystem")) setOpenSection("ecosystem");
    else if (location.pathname.startsWith("/about")) setOpenSection("about");
    else if (location.pathname.startsWith("/safety") || location.pathname === "/dns" || location.pathname === "/login")
      setOpenSection("account");
  }, [location.pathname]);

  /* ------------------------
     AUTO CLOSE ON MOBILE
  ------------------------- */
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) onClose?.();
  }, [location.pathname]);

  const toggle = (key) => setOpenSection((prev) => (prev === key ? null : key));

  /* ------------------------
            ROUTE ITEMS
  ------------------------- */

  const ecosystemItems = [
    { label: "NexWorld", to: "/ecosystem/nexworld" },
    { label: "NexNodes", to: "/ecosystem/nexnodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine" },
    { label: "NexHousing", to: "/ecosystem/nexhousing" },
    { label: "Nex Search Engine", to: "/ecosystem/search" }
  ];

  const aboutItems = [
    { label: "Vision", to: "/about/vision" },
    { label: "Team", to: "/about/team" },
    { label: "Stories", to: "/about/stories" },
    { label: "Company", to: "/about/company" },
    { label: "Career", to: "/about/career" },
    { label: "News", to: "/about/news" }
  ];

  const supportItems = [
    { label: "Guidelines", to: "/support/guidelines" },
    { label: "Help / Support", to: "/support/help" },
    { label: "Contact", to: "/contact" }
  ];

  const accountItems = [
    { label: "Login", to: "/login" },
    { label: "DNS", to: "/dns" },
    { label: "Safety Approach", to: "/safety/approach" },
    { label: "Security & Privacy", to: "/safety/privacy" },
    { label: "Trust & Transparency", to: "/safety/transparency" }
  ];

  /* ------------------------
        SCROLL SHADOWS
  ------------------------- */
  useEffect(() => {
    const container = document.querySelector(".sidebar-inner");
    if (!container) return;

    const handleShadow = () => {
      const atTop = container.scrollTop <= 0;
      const atBottom =
        container.scrollHeight - container.scrollTop <= container.clientHeight;

      container.classList.toggle("shadow-top", !atTop);
      container.classList.toggle("shadow-bottom", !atBottom);
    };

    handleShadow();
    container.addEventListener("scroll", handleShadow);
    return () => container.removeEventListener("scroll", handleShadow);
  }, []);

  /* ------------------------
    CLEAN DRAG & DROP SYSTEM
  ------------------------- */

  const [sectionOrder, setSectionOrder] = useState([
    "main",
    "ecosystem",
    "about",
    "support",
    "account"
  ]);

  const onDragStart = (e, id) => e.dataTransfer.setData("id", id);
  const onDrop = (e, id) => {
    const draggedId = e.dataTransfer.getData("id");
    if (draggedId === id) return;

    const newOrder = [...sectionOrder];
    const from = newOrder.indexOf(draggedId);
    const to = newOrder.indexOf(id);

    newOrder.splice(from, 1);
    newOrder.splice(to, 0, draggedId);

    setSectionOrder(newOrder);
  };
  const allowDrop = (e) => e.preventDefault();

  /* ------------------------
         SIDEBAR STRUCTURE
  ------------------------- */

  const sidebarSections = {
    main: (
      <>  
         
         

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
      </>
    ),

    ecosystem: (
      <>
        <div className="sidebar-section-label">ECOSYSTEM</div>
        <button
          onClick={() => toggle("ecosystem")}
          className={
            "sidebar-item sidebar-parent" +
            (openSection === "ecosystem" ? " open" : "")
          }
        >
          <span className="left-indicator" />
          Ecosystem
          <span className="arrow">{openSection === "ecosystem" ? "▴" : "▾"}</span>
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
                "sidebar-subitem sidebar-link" + (isActive ? " active" : "")
              }
            >
              <span className="left-indicator" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </>
    ),

    about: (
      <>
        <div className="sidebar-section-label">ABOUT</div>

        <button
          onClick={() => toggle("about")}
          className={
            "sidebar-item sidebar-parent" +
            (openSection === "about" ? " open" : "")
          }
        >
          <span className="left-indicator" />
          About
          <span className="arrow">{openSection === "about" ? "▴" : "▾"}</span>
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
      </>
    ),

    support: (
      <>
        <div className="sidebar-section-label">SUPPORT</div>

        {supportItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "sidebar-item sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="left-indicator" />
            {item.label}
          </NavLink>
        ))}
      </>
    ),

    account: (
      <>
        <div className="sidebar-section-label">ACCOUNT & SAFETY</div>

        <button
          onClick={() => toggle("account")}
          className={
            "sidebar-item sidebar-parent" +
            (openSection === "account" ? " open" : "")
          }
        >
          <span className="left-indicator" />
          Account & Safety
          <span className="arrow">{openSection === "account" ? "▴" : "▾"}</span>
        </button>

        <div
          className={
            "sidebar-submenu " +
            (openSection === "account" ? "expand" : "collapse")
          }
        >
          {accountItems.map((item) => (
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
      </>
    ),
  };

  /* ------------------------
         RETURN MARKUP
  ------------------------- */

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={{
        top: headerHeight + 30,
        height: `calc(100vh - ${headerHeight + 30}px)`
      }}
    >
      {/* Smoke Background */}
      <div className="sidebar-smoke">
        <RisingSmoke />
      </div>

      <div className="sidebar-inner">
        {/* Render Reorderable Sections */}
        {sectionOrder.map((id) => (
          <div
            key={id}
            className="sidebar-section"
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={allowDrop}
            onDrop={(e) => onDrop(e, id)}
          >
            {sidebarSections[id]}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
 