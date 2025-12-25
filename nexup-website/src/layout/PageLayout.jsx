import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./PageLayout.css";

export default function PageLayout({
  isOpen,
  onCloseSidebar,
  children
}) {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  /* Scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Route change */
  useEffect(() => {
    if (isOpen) onCloseSidebar();
  }, [location.pathname]);

  /* Mobile scroll lock ONLY */
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      <main className={`page-frame ${isOpen ? "sidebar-open" : ""}`}>
        <div className="page-content">
          {children}
        </div>
      </main>

      <button
        className={`scroll-fab ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FiArrowUp />
      </button>
    </>
  );
}
