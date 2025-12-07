// src/hooks/refresh/RefreshPage.jsx
import { useEffect, useState, useRef } from "react";
import "./refresh.css";

const REFRESH_THRESHOLD = 100;    // Pull down distance to trigger refresh
const SWIPE_THRESHOLD = 100;      // Horizontal distance to trigger sidebar
const VELOCITY_THRESHOLD = 0.5;   // Speed check
const MAX_PULL = 200;             // Visual max pull distance

function vibrate(ms = 30) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

export default function RefreshPage({ onOpenSidebar, onCloseSidebar, isSidebarOpen }) {
  const [pullY, setPullY] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [mode, setMode] = useState("idle"); // idle | pulling | refreshing
  
  // Refs for tracking gestures without re-renders
  const pullStartTimeRef = useRef(0);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isVerticalRef = useRef(false);
  const isHorizontalRef = useRef(false);
  const frameRef = useRef(null);
  
  // Throttle updates for smooth animation
  const updatePullY = (newY) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      setPullY(newY);
    });
  };

  useEffect(() => {
    const onTouchStart = (e) => {
      if (refreshing) return;

      const touch = e.touches[0];
      startXRef.current = touch.clientX;
      startYRef.current = touch.clientY;
      pullStartTimeRef.current = performance.now();
      
      // Reset axis locks
      isVerticalRef.current = false;
      isHorizontalRef.current = false;
    };

    const onTouchMove = (e) => {
      if (refreshing) return;

      const touch = e.touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;
      
      const diffX = currentX - startXRef.current;
      const diffY = currentY - startYRef.current;
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);

      // --- 1. AXIS LOCKING LOGIC ---
      // Determine user intent early (after 10px movement)
      if (!isVerticalRef.current && !isHorizontalRef.current) {
        if (absY > absX && absY > 10) {
          isVerticalRef.current = true;
        } else if (absX > absY && absX > 10) {
          isHorizontalRef.current = true;
        }
      }

      // --- 2. VERTICAL LOGIC (Refresh Only) ---
      // Only allowed if we are at the top of the page AND dragging down AND sidebar is closed
      if (isVerticalRef.current && !isSidebarOpen && window.scrollY === 0 && diffY > 0) {
        e.preventDefault(); // Stop native scrolling
        
        setMode("pulling");
        const eased = Math.pow(diffY, 0.8); // Resistance effect
        updatePullY(Math.min(eased, MAX_PULL));
      }

      // --- 3. HORIZONTAL LOGIC (Sidebar Only) ---
      if (isHorizontalRef.current) {
        // Prevent horizontal scrolling of page/carousels if we are detecting sidebar swipe
        if (!isSidebarOpen && diffX > 0) { 
           // Trying to open (Left -> Right)
           e.preventDefault(); 
        } else if (isSidebarOpen && diffX < 0) {
           // Trying to close (Right -> Left)
           e.preventDefault();
        }
      }
    };

    const onTouchEnd = (e) => {
      if (refreshing) return;

      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      
      const diffX = endX - startXRef.current;
      const diffY = endY - startYRef.current;
      
      // Calculate Velocity
      const timeElapsed = performance.now() - pullStartTimeRef.current;
      const velocityY = Math.abs(diffY) / timeElapsed;
      const velocityX = Math.abs(diffX) / timeElapsed;

      // --- HANDLE REFRESH (Vertical) ---
      if (isVerticalRef.current && !isSidebarOpen && window.scrollY === 0 && diffY > 0) {
        const meetsThreshold = diffY > REFRESH_THRESHOLD;
        const meetsVelocity = velocityY > VELOCITY_THRESHOLD;

        if (meetsThreshold || (diffY > 50 && meetsVelocity)) {
          triggerRefresh();
        } else {
          snapBack();
        }
      }

      // --- HANDLE SIDEBAR (Horizontal) ---
      if (isHorizontalRef.current) {
        // OPEN: Left -> Right Swipe
        if (!isSidebarOpen && diffX > SWIPE_THRESHOLD) {
          vibrate(40);
          onOpenSidebar?.();
        }
        // CLOSE: Right -> Left Swipe
        else if (isSidebarOpen && diffX < -SWIPE_THRESHOLD) {
          vibrate(40);
          onCloseSidebar?.();
        }
      }

      // Reset
      if (!refreshing) {
        isVerticalRef.current = false;
        isHorizontalRef.current = false;
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false }); // Non-passive to block scroll
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [refreshing, isSidebarOpen, onOpenSidebar, onCloseSidebar]);

  const snapBack = () => {
    setMode("idle");
    updatePullY(0);
  };

  const triggerRefresh = () => {
    setMode("refreshing");
    setRefreshing(true);
    vibrate(50);

    // Simulate Refresh
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  // Visual Arrow Logic
  const progress = Math.min(pullY / REFRESH_THRESHOLD, 1);
  const rotation = progress * 180 + (progress > 0.9 ? Math.sin(progress * Math.PI) * 20 : 0);
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

      {/* Arrow shell */}
      <div
        className={`refresh-arrow-shell ${
          mode === "refreshing" ? "refreshing" : ""
        }`}
        style={{
          // Hide if strictly horizontal swipe to reduce clutter, ONLY show on vertical pull
          opacity: isVerticalRef.current || mode === "refreshing" ? 1 : 0,
          transform: `translateY(${pullY * 0.4}px)`
        }}
      >
        {mode === "refreshing" ? (
          <svg className="refresh-loader-svg" viewBox="0 0 40 40">
            <circle className="refresh-loader-track" cx="20" cy="20" r="14" />
            <circle className="refresh-loader-head" cx="20" cy="20" r="14" />
          </svg>
        ) : (
          <>
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