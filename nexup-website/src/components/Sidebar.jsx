import React, { useRef, useState, useEffect } from "react"; 
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";
// --- Import React Icons ---
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6"; 
import { IoMdClose } from "react-icons/io"; // Close Icon

function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  // State to manage which submenu is currently open on mobile
  const [openMenu, setOpenMenu] = useState({}); 

  // Reset submenu state when the sidebar closes
  useEffect(() => {
    if (!isOpen) {
      setOpenMenu({});
    }
  }, [isOpen]);

  // Function to handle opening/closing submenus
  const toggleMenu = (menuName) => {
    // If the same menu is clicked, close it. Otherwise, open it.
    setOpenMenu(prev => ({
      [menuName]: !prev[menuName] 
    }));
  };

  // 🔧 UPDATED ROUTE DATA
  const ecosystemItems = [
    { label: "NexWorld", to: "/ecosystem/nexworld" },
    { label: "NexNodes", to: "/ecosystem/nexnodes" },
    { label: "NexEngine", to: "/ecosystem/nexengine" },
    { label: "NexHousing", to: "/ecosystem/nexhousing" },
    { label: "NexSearch", to: "/ecosystem/nexsearch" },
  ];

  const aboutItems = [
    { label: "Team", to: "/about/team" }, 
    { label: "Company", to: "/about/company" },
    { label: "Careers", to: "/about/career" },
    { label: "News", to: "/about/news" },
  ];

  const socialItems = [
    { label: "GitHub", to: "https://github.com/nex", icon: <FaGithub /> },
    { label: "X", to: "https://x.com/nex", icon: <FaXTwitter /> },
    { label: "LinkedIn", to: "https://linkedin.com/company/nex", icon: <FaLinkedinIn /> },
    { label: "Instagram", to: "https://instagram.com/nex", icon: <AiFillInstagram /> },
    { label: "YouTube", to: "https://youtube.com/nex", icon: <FaYoutube /> }
  ];

  const renderLink = (to, label, isSub = false, isMobileBtn = false) => {
    // Determine if the link should close the sidebar. 
    const clickHandler = isMobileBtn ? undefined : onClose; 

    return (
      <NavLink
        key={to}
        to={to}
        onClick={clickHandler} 
        className={({ isActive }) =>
          `${isMobileBtn ? "mobile-login-btn" : "nav-link"} ${isSub ? "sub-link" : ""} ${isActive ? "active" : ""}`
        }
      >
        {label}
        {/* Only add chevron for specific links (Support, Contact, Login, Search) for utility links */}
        {(!isSub && (label === "Support" || label === "Contact" || label === "Login" || label === "Search")) && <span className="chevron">{">"}</span>}
      </NavLink>
    );
  };

  const renderSearchLink = () => (
    <NavLink
      key="/search"
      to="/search"
      onClick={onClose}
      className={({ isActive }) =>
        `nav-link ${isActive ? "active" : ""}`
      }
    >
      <span>Search</span>
      <span className="chevron">{">"}</span> 
    </NavLink>
  );


  const renderSocialLink = (item) => (
    <a
      key={item.label}
      href={item.to}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label={item.label}
    >
      {item.icon}
    </a>
  );

  // Function to render menus that require mobile click-to-open logic
  const renderSubMenu = (menuName, label, items) => {
    const isOpenClass = openMenu[menuName] ? "is-open" : "";
    
    return (
      <div key={menuName} className={`hover-group ${isOpenClass}`}> 
        <div 
          className="nav-link hover-trigger"
          onClick={() => toggleMenu(menuName)} // <-- TOGGLE ON CLICK/TAP
          role="button" 
          tabIndex={0} 
          aria-expanded={!!openMenu[menuName]}
        >
          {label} <span className="chevron">{">"}</span>
        </div>
        
        {/* The is-open class is picked up by the CSS to trigger the transition */}
        <div className={`hover-submenu ${isOpenClass}`}> 
          {items.map(item =>
            renderLink(item.to, item.label, true)
          )}
        </div>
      </div>
    );
  };

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar-container ${isOpen ? "is-open" : ""}`}
      role="navigation"
      aria-label="Primary navigation"
    >
      {/* Background (pure black via CSS) - Click closes menu */}
      <div className="sidebar-backdrop" onClick={onClose} />

      <nav className="sidebar-scroll-area">
        
        {/* ⭐️ NAVIGATION CONTENT (MOVED TO TOP OF SCROLL AREA) */}
        <div className="sidebar-content center-vertical">
          
          {/* SEARCH */}
          <div className="hover-group standalone">
            {renderSearchLink()}
          </div>

          {/* VISION */}
          <div className="hover-group standalone">
            {renderLink("/vision", "Vision")}
          </div>

          {/* APPROACH */}
          <div className="hover-group standalone">
            {renderLink("/approach", "Approach")}
          </div>

          {/* ECOSYSTEM */}
          {renderSubMenu("ecosystem", "Ecosystem", ecosystemItems)}

          {/* ABOUT */}
          {renderSubMenu("about", "About", aboutItems)}

          {/* STANDALONE UTILITY LINKS */}
          <div className="hover-group standalone">
            {renderLink("/support/help", "Support")}
          </div>
          <div className="hover-group standalone">
            {renderLink("/contact", "Contact")}
          </div>

          {/* LOGIN (For Desktop View) */}
          <div className="hover-group standalone desktop-only-login">
            {renderLink("/login", "Login")}
          </div>

        </div>
        {/* END NAVIGATION CONTENT */}

        {/* CLOSE BUTTON (Positioned sticky, but rendered after content) */}
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          <IoMdClose /> 
        </button>
        {/* END CLOSE BUTTON */}
        
      </nav>
      
      {/* MOBILE LOGIN BUTTON / FOOTER */}
      <div className="sidebar-footer">
        {/* Social Links */}
        <div className="social-links-group">
          {socialItems.map(renderSocialLink)}
        </div>
        {/* Login Button */}
        {renderLink("/login", "Login", false, true)} 
      </div>
    </aside>
  );
}

export default Sidebar;