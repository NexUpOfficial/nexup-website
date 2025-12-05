// src/hooks/refresh/RefreshPage.jsx
import { useEffect, useState, useRef } from "react";
import "./refresh.css";

const REFRESH_THRESHOLD = 100;    // pull needed for refresh
const SIDEBAR_THRESHOLD = 160;    // strong pull to open sidebar
const CLOSE_THRESHOLD = 120;      // pull up to close sidebar
const VELOCITY_THRESHOLD = 0.5; // velocity needed for refresh (pixels/ms)
const MAX_PULL = 200;

function vibrate(ms = 30) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

export default function RefreshPage({ onOpenSidebar, onCloseSidebar, isSidebarOpen }) {
  const [pullY, setPullY] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [mode, setMode] = useState("idle"); // idle | pulling | refreshing
  const pullStartTimeRef = useRef(0);
  const lastYRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const frameRef = useRef(null);
  
  // Global variables managed outside state for touch performance
  let isPulling = false;
  let startY = 0;
  let pullDistance = 0;
  
  // ⭐ 10. Throttle touchmove updates using requestAnimationFrame
  const updatePullY = (newY) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      setPullY(newY);
    });
  };

  useEffect(() => {
    const onTouchStart = (e) => {
      if (refreshing) return;

      const y = e.touches[0].clientY;
      
      // ⭐ 9. Avoid "ghost refresh" when scrolling up fast (check if user is at the very top)
      if (window.scrollY > 0 && !isSidebarOpen) return;
      
      // --- TOP PULL DOWN (Refresh/Sidebar Open) ---
      if (window.scrollY === 0) {
        isPulling = true;
        startY = y;
        setMode("pulling");
        pullStartTimeRef.current = performance.now();
        lastYRef.current = y;
        lastTimestampRef.current = pullStartTimeRef.current;
        pullDistance = 0;
        return;
      }

      // --- BOTTOM PULL UP (Close Sidebar) ---
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

      const now = performance.now();
      const dy = y - lastYRef.current;
      const dt = now - lastTimestampRef.current;
      
      let velocity = dt > 0 ? dy / dt : 0;
      
      lastYRef.current = y;
      lastTimestampRef.current = now;

      // TOP pull down → refresh
      if (!isSidebarOpen && pullDistance > 0) {
        // ⭐ 6. Block page scroll during strong pull
        e.preventDefault(); 
        
        const eased = Math.pow(pullDistance, 0.8); // Softer easing
        updatePullY(Math.min(eased, MAX_PULL));
        return;
      }

      // BOTTOM pull up → close sidebar
      if (isSidebarOpen && pullDistance < 0) {
        const upPull = Math.abs(pullDistance);
        const eased = Math.pow(upPull, 0.85);
        updatePullY(-Math.min(eased, 140)); // negative for upward
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (!isPulling || refreshing) return;
      
      const totalDuration = performance.now() - pullStartTimeRef.current;
      const avgVelocity = pullDistance / totalDuration; // Average velocity

      // Haptic feedback reference:
      const strongPull = pullDistance >= SIDEBAR_THRESHOLD;
      const meetsDistance = pullDistance >= REFRESH_THRESHOLD;
      const meetsVelocity = avgVelocity >= VELOCITY_THRESHOLD;

      // TOP refresh/sidebar
      if (!isSidebarOpen && pullDistance > 0) {
        
        if (strongPull) {
          // ⭐ 7. Open Sidebar Logic
          vibrate(60); // ⭐ A. Strong haptic
          onOpenSidebar?.();
          snapBack();
        } 
        else if (meetsDistance || meetsVelocity) {
          triggerRefresh();
        } else {
          snapBack();
        }
      }
      // BOTTOM close sidebar
      else if (isSidebarOpen && pullDistance < 0) {
        const upPull = Math.abs(pullDistance);
        if (upPull >= CLOSE_THRESHOLD) {
          vibrate(40); // ⭐ A. Haptic feedback
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
    window.addEventListener("touchmove", onTouchMove, { passive: false }); // Needs to be non-passive for e.preventDefault
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [refreshing, onOpenSidebar, onCloseSidebar, isSidebarOpen]);

  const snapBack = () => {
    setMode("idle");
    updatePullY(0);
  };

  const triggerRefresh = () => {
    setMode("refreshing");
    setRefreshing(true);
    vibrate(40); // ⭐ A. Threshold haptic

    // Simulate network delay before actual refresh
    setTimeout(() => {
      window.location.reload();
    }, 800); // Increased delay for visual effect
  };

  // ⭐ 4. Arrow overshoot logic: 180deg rotation + slight overshoot (20deg)
  const progress = Math.min(pullY / REFRESH_THRESHOLD, 1);
  const rotation = progress * 180 + (progress > 0.9 ? Math.sin(progress * Math.PI) * 20 : 0);
  
  // ⭐ 2. Blur opacity caps at 0.6
  const blurStrength = Math.min(Math.abs(pullY) / 140, 0.6); 

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
            {/* ⭐ C. NeX UP identity loader (Track and Head) */}
            <circle className="refresh-loader-track" cx="20" cy="20" r="14" />
            <circle className="refresh-loader-head" cx="20" cy="20" r="14" />
          </svg>
        ) : (
          <>
            {/* ⭐ B. Sparkle particle effect (visual only) */}
            <div className="refresh-sparkle-dust" /> 
            <svg
              className="refresh-arrow-svg"
              viewBox="0 0 40 40"
              style={{
                transform: `rotate(${rotation}deg)`
              }}
            >
              <circle cx="20" cy="20" r="14" className="refresh-arrow-circle" />
              <path d="M20 10 L20 22" className="refresh-arrow-stem" />
              <path d="M15 18 L20 23 L25 18" className="refresh-arrow-head" />
            </svg>
          </>
        )}
      </div>
    </>
  );
}