// src/hooks/refresh/RefreshPage.jsx
import { useEffect, useState, useRef } from "react";
import "./refresh.css";

// Tweak these constants for the "long pull" effect
const REFRESH_THRESHOLD = 120;     // Increased pull distance to make it a "long pull"
const SWIPE_THRESHOLD = 100;      
const VELOCITY_THRESHOLD = 0.5;   // Velocity check is kept for general reference but will be ignored for vertical refresh
const MAX_PULL = 200;              

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
      if (!isVerticalRef.current && !isHorizontalRef.current) {
        if (absY > absX && absY > 10) {
          isVerticalRef.current = true;
        } else if (absX > absY && absX > 10) {
          isHorizontalRef.current = true;
        }
      }

      // --- 2. VERTICAL LOGIC (Pull-to-Refresh) ---
      if (isVerticalRef.current && !isSidebarOpen && window.scrollY === 0 && diffY > 0) {
        e.preventDefault(); 
        
        setMode("pulling");
        const eased = Math.pow(diffY, 0.8); 
        updatePullY(Math.min(eased, MAX_PULL));
      }

      // --- 3. HORIZONTAL LOGIC (Sidebar) ---
      if (isHorizontalRef.current) {
        // Prevent horizontal scrolling of page/carousels if we are detecting sidebar swipe
        if (!isSidebarOpen && diffX > 0) { 
           e.preventDefault(); 
        } else if (isSidebarOpen && diffX < 0) {
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
      
      const timeElapsed = performance.now() - pullStartTimeRef.current;
      const velocityY = Math.abs(diffY) / timeElapsed;
      // const velocityX = Math.abs(diffX) / timeElapsed; // Not used in this final logic

      // --- HANDLE REFRESH (Vertical) ---
      if (isVerticalRef.current && !isSidebarOpen && window.scrollY === 0 && diffY > 0) {
        
        // **KEY CHANGE: ONLY refresh if the pull distance exceeds the threshold**
        const meetsThreshold = diffY > REFRESH_THRESHOLD;

        if (meetsThreshold) {
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
        // Important: Reset visual state if we didn't trigger refresh
        if (mode === "pulling") {
            setMode("idle");
        }
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [refreshing, isSidebarOpen, onOpenSidebar, onCloseSidebar, mode]);

  const snapBack = () => {
    setMode("idle");
    updatePullY(0);
  };

  const triggerRefresh = () => {
    setMode("refreshing");
    setRefreshing(true);
    vibrate(50);

    // Snap the icon to the threshold height visually
    updatePullY(REFRESH_THRESHOLD);

    // Simulate Refresh
    setTimeout(() => {
      // In a real application, you would call your data fetching logic here.
      // After fetching, you would setRefreshing(false) and snapBack().
      // For this example, we reload the page:
      window.location.reload(); 
    }, 800);
  };

  // Visual Arrow Logic
  const progress = Math.min(pullY / REFRESH_THRESHOLD, 1);
  // Simple rotation for the arrow inside the ring
  const rotation = progress * 180;
  
  // The refresh indicator should only appear when actually pulling (diffY > 0)
  const isPullingDown = pullY > 0 && isVerticalRef.current;
  
  // If we are refreshing, we always show it, otherwise only if actively pulling down
  const showIndicator = mode === "refreshing" || isPullingDown;

  return (
    <>
      {/* Blur overlay */}
      {/* We only show the blur when pulling down, and base opacity on how far the user has pulled */}
      <div
        className={`refresh-blur-overlay ${mode === "pulling" || mode === "refreshing" ? "visible" : ""}`}
        // The blur effect should be subtle, maxing out quickly
        style={{ opacity: pullY / 200 }} 
      />

      {/* Arrow shell */}
      <div
        className={`refresh-arrow-shell ${mode === "refreshing" ? "refreshing" : ""}`}
        style={{
          // Only show the indicator when pulling down or refreshing
          opacity: showIndicator ? 1 : 0,
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
              transform: `rotate(${rotation}deg)`
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