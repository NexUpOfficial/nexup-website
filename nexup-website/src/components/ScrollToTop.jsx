// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset internal scroll containers (if any exist)
    document.querySelectorAll(
      ".bounce-scroll, .page-scroll, .inner-scroll, .section-scroll, .content-scroll"
    ).forEach(el => {
      el.scrollTop = 0;
      el.style.overflow = "visible";
      el.style.height = "auto";
    });

    // Reset main window scroll
    window.scrollTo({ top: 0, behavior: "instant" });

    // Double-check after rendering
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 40);

  }, [pathname]);

  return null;
}
