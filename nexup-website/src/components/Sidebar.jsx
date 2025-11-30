import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Sidebar.css";
import useHeaderHeight from "../hooks/useHeaderHeight";
import RisingSmoke from "../animations/RisingSmoke";

function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  const headerHeight = useHeaderHeight();

  {/* Smoke */}
  <div className="home-smoke">
    <RisingSmoke />
  </div>

  /* Mobile swipe */
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const minSwipeDistance = 60;

  useEffect(() => {
    if (!isOpen) return;

    const el = document.querySelector(".sidebar");

    const handleTouchStart = (e) =>
      setTouchStartX(e.changedTouches[0].screenX);

    const handleTouchMove = (e) =>
      setTouchEndX(e.changedTouches[0].screenX);

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

  /* Auto-open sections */
  useEffect(() => {
    if (location.pathname.startsWith("/ecosystem"))
      setOpenSection("ecosystem");
    else if (location.pathname.startsWith("/about"))
      setOpenSection("about");
    else if (location.pathname.startsWith("/account"))
      setOpenSection("account");
  }, [location.pathname]);

  /* Auto close on mobile */
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) onClose?.();
  }, [location.pathname]);

  const toggle = (key) =>
    setOpenSection((prev) => (prev === key ? null : key));

  /* Data */
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

  const accountItems = [
    { label: "Login", to: "/account/login" },
    { label: "DNS", to: "/account/dns" },
    { label: "Safety Approach", to: "/account/safety-approach" },
    { label: "Security & Privacy", to: "/account/security-privacy" },
    { label: "Trust & Transparency", to: "/account/trust-transparency" }
  ];

  const supportItems = [
    { label: "Guidelines", to: "/support/guidelines" },
    { label: "Help / Support", to: "/support/help" },
    { label: "Contact", to: "/contact" }
  ];

  /* Scroll shadows */
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

  // ⭐ Drag to reorder sidebar items ⭐
  const [draggedId, setDraggedId] = useState(null);

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
                "sidebar-subitem sidebar-link" +
                (isActive ? " active" : "")
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
              "sidebar-item sidebar-link" +
              (isActive ? " active" : "")
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
          <span className="arrow">
            {openSection === "account" ? "▴" : "▾"}
          </span>
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
                "sidebar-subitem sidebar-link" +
                (isActive ? " active" : "")
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

  const initialSectionsOrder = ["main", "ecosystem", "about", "support", "account"];
  const [sectionOrder, setSectionOrder] = useState(initialSectionsOrder);

  const handleDragStart = (e, sectionId) => {
    e.dataTransfer.setData("sectionId", sectionId);
    setDraggedId(sectionId);
    e.currentTarget.classList.add("dragging");
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove("dragging");
    setDraggedId(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Essential to allow dropping
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData("sectionId");

    if (sourceId === targetId) return;

    const newOrder = [...sectionOrder];
    const sourceIndex = newOrder.indexOf(sourceId);
    const targetIndex = newOrder.indexOf(targetId);

    if (sourceIndex === -1 || targetIndex === -1) return;

    // Remove the dragged item
    newOrder.splice(sourceIndex, 1);
    // Insert it at the target position
    newOrder.splice(targetIndex, 0, sourceId);

    setSectionOrder(newOrder);
  };
  // ⭐ Drag to reorder sidebar items ⭐

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={{
        top: headerHeight + 30, // ⭐ Moved UP (previously +60)
        height: `calc(100vh - ${headerHeight + 30}px)`
      }}
    >

      {/* 🔥 Smoke Background Behind Sidebar Content */}
      <div className="sidebar-smoke">
        <RisingSmoke />
      </div>

      <div className="sidebar-inner">

        {/* Mapped and Draggable Sections */}
        {sectionOrder.map((sectionId, index) => (
          <React.Fragment key={sectionId}>
            <div
              className="sidebar-section"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, sectionId)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, sectionId)}
              // Optional: Add a visual indicator for drop target
              style={{ border: draggedId && draggedId !== sectionId ? '1px dashed #fff4' : 'none' }}
            >
              {sidebarSections[sectionId]}
            </div>
            {index < sectionOrder.length - 1 && <div className="sidebar-divider" />}
          </React.Fragment>
        ))}

      </div>
    </aside>
  );
}

export default Sidebar;