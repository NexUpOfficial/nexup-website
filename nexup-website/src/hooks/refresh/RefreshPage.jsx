// src/hooks/refresh/RefreshPage.jsx
import { useEffect, useState } from "react";
import "./refresh.css";

const REFRESH_THRESHOLD = 100;   // pull needed for refresh
const SIDEBAR_THRESHOLD = 160;   // strong pull to open sidebar
const CLOSE_THRESHOLD = 120;     // pull up to close sidebar

function vibrate(ms = 30) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

export default function RefreshPage({ onOpenSidebar, onCloseSidebar, isSidebarOpen }) {
  const [pullY, setPullY] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [mode, setMode] = useState("idle"); // idle | pulling | refreshing

  useEffect(() => {
    let startY = 0;
    let isPulling = false;
    let pullDistance = 0;

    const onTouchStart = (e) => {
      if (refreshing) return;

      const y = e.touches[0].clientY;

      // --- TOP PULL TO REFRESH ---
      if (window.scrollY === 0) {
        isPulling = true;
        startY = y;
        setMode("pulling");
        return;
      }

      // --- BOTTOM PULL UP TO CLOSE SIDEBAR ---
      const bottomZone = window.innerHeight - y < 50; // 50px from bottom

      if (isSidebarOpen && bottomZone) {
        isPulling = true;
        startY = y;
        setMode("pulling");
        pullDistance = 0;
      }
    };

    const onTouchMove = (e) => {
      if (!isPulling || refreshing) return;

      const y = e.touches[0].clientY;
      pullDistance = y - startY;

      // TOP pull down → refresh
      if (!isSidebarOpen && pullDistance > 0) {
        const eased = Math.pow(pullDistance, 0.85);
        setPullY(Math.min(eased, 200));
        return;
      }

      // BOTTOM pull up → close sidebar
      if (isSidebarOpen && pullDistance < 0) {
        const upPull = Math.abs(pullDistance);
        const eased = Math.pow(upPull, 0.85);
        setPullY(-Math.min(eased, 140)); // negative for upward
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (!isPulling || refreshing) return;

      // TOP refresh
      if (!isSidebarOpen && pullDistance >= SIDEBAR_THRESHOLD) {
        vibrate(40);
        onOpenSidebar?.();
        snapBack();
      } 
      else if (!isSidebarOpen && pullDistance >= REFRESH_THRESHOLD) {
        triggerRefresh();
      } 
      // BOTTOM close sidebar
      else if (isSidebarOpen && pullDistance < 0) {
        const upPull = Math.abs(pullDistance);
        if (upPull >= CLOSE_THRESHOLD) {
          vibrate(30);
          onCloseSidebar?.();
        }
        snapBack();
      } 
      else {
        snapBack();
      }

      isPulling = false;
      pullDistance = 0;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [refreshing, onOpenSidebar, onCloseSidebar, isSidebarOpen]);

  const snapBack = () => {
    setMode("idle");
    setPullY(0);
  };

  const triggerRefresh = () => {
    setMode("refreshing");
    setRefreshing(true);
    vibrate(30);

    setTimeout(() => {
      window.location.reload();
    }, 550);
  };

  const progress = Math.min(pullY / REFRESH_THRESHOLD, 1);
  const blurStrength = Math.min(Math.abs(pullY) / 140, 0.85);

  return (
    <>
      {/* Blur overlay */}
      <div
        className={`refresh-blur-overlay ${
          mode === "pulling" || mode === "refreshing" ? "visible" : ""
        }`}
        style={{ opacity: blurStrength }}
      />

      {/* Arrow shell (moves up or down) */}
      <div
        className={`refresh-arrow-shell ${
          mode === "refreshing" ? "refreshing" : ""
        }`}
        style={{
          transform: `translateY(${pullY * 0.4}px)`
        }}
      >
        {mode === "refreshing" ? (
          <svg className="refresh-loader-svg" viewBox="0 0 40 40">
            <circle className="refresh-loader-track" cx="20" cy="20" r="14" />
            <circle className="refresh-loader-head" cx="20" cy="20" r="14" />
          </svg>
        ) : (
          <svg
            className="refresh-arrow-svg"
            viewBox="0 0 40 40"
            style={{
              transform: `rotate(${progress * 180}deg)`
            }}
          >
            <circle cx="20" cy="20" r="14" className="refresh-arrow-circle" />
            <path d="M20 10 L20 22" className="refresh-arrow-stem" />
            <path d="M15 18 L20 23 L25 18" className="refresh-arrow-head" />
          </svg>
        )}
      </div>
    </>
  );
}
