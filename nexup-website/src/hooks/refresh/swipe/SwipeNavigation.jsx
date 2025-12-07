// src/hooks/refresh/swipe/SwipeNavigation.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SwipeNavigation({
  onOpenSidebar,
  onCloseSidebar,
  isSidebarOpen,
}) {
  const pages = [
    "/", "/ecosystem", "/about", "/login", "/search",
    "/sections/roadmap", "/sections/terms",
    "/safety/approach", "/safety/privacy",
    "/support/guidelines", "/support/help",
    "/dns",
    "/about/vision", "/about/team", "/about/stories",
    "/about/career", "/about/news",
    "/ecosystem/nexworld", "/ecosystem/nexnodes",
    "/ecosystem/nexengine", "/ecosystem/nexhousing",
    "/ecosystem/nexsearch",
    "/safety/trust", "/safety/transparency", "/safety/cookies",
  ];

  const location = useLocation();
  const navigate = useNavigate();
  let startX = 0;
  let endX = 0;

  const currentIndex = pages.indexOf(location.pathname);

  useEffect(() => {
    const THRESH = 70;

    const start = (e) => (startX = e.touches[0].clientX);
    const move = (e) => (endX = e.touches[0].clientX);

    const end = () => {
      const diff = endX - startX;

      // Sidebar close
      if (isSidebarOpen && diff < -THRESH) {
        return onCloseSidebar?.();
      }

      // Sidebar open (only home)
      if (!isSidebarOpen && location.pathname === "/" && diff > THRESH) {
        return onOpenSidebar?.();
      }

      // Right swipe → previous page
      if (diff > THRESH && currentIndex > 0) {
        window.__pageSwipeDirection = 1;
        return navigate(pages[currentIndex - 1]);
      }

      // Left swipe → next page
      if (diff < -THRESH && currentIndex < pages.length - 1) {
        window.__pageSwipeDirection = -1;
        return navigate(pages[currentIndex + 1]);
      }
    };

    window.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [location.pathname, isSidebarOpen]);

  return null;
}
