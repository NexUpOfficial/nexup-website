import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";

import RisingSmoke from "../animations/RisingSmoke";

function Sidebar({ isOpen, onClose }) {
  // UX: Load persisted state from localStorage to remember user preferences
  const [openSection, setOpenSection] = useState(() => {
    return localStorage.getItem("sidebar_open_section") || null;
  });

  const [sectionOrder, setSectionOrder] = useState(() => {
    const savedOrder = localStorage.getItem("sidebar_section_order");
    return savedOrder ? JSON.parse(savedOrder) : ["main", "ecosystem", "about", "support", "account"];
  });

  const [isDragging, setIsDragging] = useState(null); // UX: Track dragging state
  const location = useLocation();
  const FIXED_HEADER_OFFSET = 90;

  /* ------------------------
       MOBILE SWIPE CLOSE (Improved)
     ------------------------- */
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const el = document.querySelector(".sidebar");

    const handleTouchStart = (e) => {
      setTouchStartX(e.changedTouches[0].screenX);
      setTouchStartY(e.changedTouches[0].screenY);
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      
      const xDiff = touchStartX - touchEndX;
      const yDiff = Math.abs(touchStartY - touchEndY);

      // UX: Only close if swipe is horizontal and distinct (ignore vertical scrolling swipes)
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
       AUTO OPEN & PERSISTENCE
     ------------------------- */
  useEffect(() => {
    // UX: Save open section to local storage
    if (openSection) {
      localStorage.setItem("sidebar_open_section", openSection);
    } else {
      localStorage.removeItem("sidebar_open_section");
    }
  }, [openSection]);

  // UX: Auto-highlight section based on route, but don't override manual toggle if user closed it
  useEffect(() => {
    // Only auto-open if nothing is stored or if it matches the route significantly
    const path = location.pathname;
    let targetSection = null;

    if (path.startsWith("/ecosystem")) targetSection = "ecosystem";
    else if (path.startsWith("/about")) targetSection = "about";
    else if (path.startsWith("/safety") || path === "/dns" || path === "/login") targetSection = "account";

    if (targetSection && openSection !== targetSection) {
       setOpenSection(targetSection);
    }
  }, [location.pathname]);

  /* ------------------------
       AUTO CLOSE ON MOBILE
     ------------------------- */
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) onClose?.();
  }, [location.pathname]);

  /* ------------------------
       TOGGLE HANDLER (Keyboard + Click)
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
      const atBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 1; // +1 buffer

      container.classList.toggle("shadow-top", !atTop);
      container.classList.toggle("shadow-bottom", !atBottom);
    };

    handleShadow();
    container.addEventListener("scroll", handleShadow);
    return () => container.removeEventListener("scroll", handleShadow);
  }, []);

  /* ------------------------
       DRAG & DROP UX
     ------------------------- */
  const onDragStart = (e, id) => {
    setIsDragging(id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.effectAllowed = "move";
    // UX: Add a slight delay to the visual class change so the ghost image isn't styled
    setTimeout(() => {
        const el = document.getElementById(`section-${id}`);
        if(el) el.classList.add('dragging');
    }, 0);
  };

  const onDragEnd = (e, id) => {
    setIsDragging(null);
    const el = document.getElementById(`section-${id}`);
    if(el) el.classList.remove('dragging');
  };

  const onDrop = (e, id) => {
    const draggedId = e.dataTransfer.getData("id");
    if (draggedId === id) return;

    const newOrder = [...sectionOrder];
    const from = newOrder.indexOf(draggedId);
    const to = newOrder.indexOf(id);

    newOrder.splice(from, 1);
    newOrder.splice(to, 0, draggedId);

    setSectionOrder(newOrder);
    // UX: Save new order to persistence
    localStorage.setItem("sidebar_section_order", JSON.stringify(newOrder));
  };

  const allowDrop = (e) => e.preventDefault();

  /* ------------------------
        RENDER SECTIONS
     ------------------------- */
  const sidebarSections = {
    main: (
      <>
        <div className="sidebar-section-label">MAIN</div>
        <NavLink to="/" end className={({ isActive }) => "sidebar-item sidebar-link" + (isActive ? " active" : "")}>
          <span className="left-indicator" />
          Home
        </NavLink>
      </>
    ),

    ecosystem: (
      <>
        <div className="sidebar-section-label">ECOSYSTEM</div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => toggle("ecosystem")}
          onKeyDown={(e) => handleKeyDown(e, "ecosystem")}
          className={"sidebar-item sidebar-parent" + (openSection === "ecosystem" ? " open" : "")}
          aria-expanded={openSection === "ecosystem"}
        >
          <span className="left-indicator" />
          Ecosystem
          <span className="arrow">{openSection === "ecosystem" ? "▴" : "▾"}</span>
        </div>
        <div className={"sidebar-submenu " + (openSection === "ecosystem" ? "expand" : "collapse")}>
          {ecosystemItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => "sidebar-subitem sidebar-link" + (isActive ? " active" : "")}>
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
        <div
          role="button"
          tabIndex={0}
          onClick={() => toggle("about")}
          onKeyDown={(e) => handleKeyDown(e, "about")}
          className={"sidebar-item sidebar-parent" + (openSection === "about" ? " open" : "")}
          aria-expanded={openSection === "about"}
        >
          <span className="left-indicator" />
          About
          <span className="arrow">{openSection === "about" ? "▴" : "▾"}</span>
        </div>
        <div className={"sidebar-submenu " + (openSection === "about" ? "expand" : "collapse")}>
          {aboutItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => "sidebar-subitem sidebar-link" + (isActive ? " active" : "")}>
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
          <NavLink key={item.to} to={item.to} className={({ isActive }) => "sidebar-item sidebar-link" + (isActive ? " active" : "")}>
            <span className="left-indicator" />
            {item.label}
          </NavLink>
        ))}
      </>
    ),

    account: (
      <>
        <div className="sidebar-section-label">ACCOUNT & SAFETY</div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => toggle("account")}
          onKeyDown={(e) => handleKeyDown(e, "account")}
          className={"sidebar-item sidebar-parent" + (openSection === "account" ? " open" : "")}
          aria-expanded={openSection === "account"}
        >
          <span className="left-indicator" />
          Account & Safety
          <span className="arrow">{openSection === "account" ? "▴" : "▾"}</span>
        </div>
        <div className={"sidebar-submenu " + (openSection === "account" ? "expand" : "collapse")}>
          {accountItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => "sidebar-subitem sidebar-link" + (isActive ? " active" : "")}>
              <span className="left-indicator" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </>
    )
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={{
        top: FIXED_HEADER_OFFSET,
        height: `calc(100vh - ${FIXED_HEADER_OFFSET}px)`
      }}
      aria-hidden={!isOpen}
    >
      <div className="sidebar-smoke">
        <RisingSmoke />
      </div>

      <div className="sidebar-inner">
        {sectionOrder.map((id) => (
          <div
            key={id}
            id={`section-${id}`}
            className={`sidebar-section ${isDragging === id ? 'dragging' : ''}`}
            draggable="true"
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnd={(e) => onDragEnd(e, id)}
            onDragOver={allowDrop}
            onDrop={(e) => onDrop(e, id)}
            title="Drag to reorder"
          >
            {sidebarSections[id]}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;