// src/components/TopLoader/Loader.jsx
import React, { useEffect, useState, useRef } from "react";
import "./Loader.css";

export default function Loader() {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  /* ============================================================
     ⚡ TRICKLE LOGIC (Premium UX)
     Instead of linear loading, we use a "decaying" increment.
     It starts fast to give immediate feedback, then slows down
     to indicate processing, never hitting 100% until ready.
  ============================================================ */
  const startLoader = () => {
    // Clear any existing animations
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    setIsActive(true);
    setProgress(0);

    // Start slightly ahead for instant feedback
    setTimeout(() => setProgress(10), 50);

    intervalRef.current = setInterval(() => {
      setProgress((oldProgress) => {
        // If we are almost done, stall the bar (wait for route to finish)
        if (oldProgress >= 90) {
          return oldProgress;
        }
        
        // Random increment between 1% and 5%
        const diff = Math.random() * 5 + 1;
        return Math.min(oldProgress + diff, 90);
      });
    }, 300);
  };

  /* ============================================================
     ⚡ FINISH ANIMATION
  ============================================================ */
  const endLoader = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Snap to 100%
    setProgress(100);

    // Wait for transition to finish, then hide
    setTimeout(() => {
      setIsActive(false);
      // Reset after fade out
      setTimeout(() => setProgress(0), 200);
    }, 400);
  };

  /* ============================================================
     🔥 EVENT LISTENERS
  ============================================================ */
  useEffect(() => {
    const onStart = () => startLoader();
    const onEnd = () => endLoader();

    window.addEventListener("route-loading-start", onStart);
    window.addEventListener("route-loading-end", onEnd);

    return () => {
      window.removeEventListener("route-loading-start", onStart);
      window.removeEventListener("route-loading-end", onEnd);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={`top-loader-container ${isActive ? "visible" : ""}`}>
      <div
        className="top-loader-bar"
        style={{ 
          width: `${progress}%`,
          // Disable transition when resetting to 0 to prevent "backwards" animation
          transition: progress === 0 ? "none" : "width 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        }}
      >
        {/* The glowing head of the bar */}
        <div className="loader-glow-head" />
      </div>
    </div>
  );
}