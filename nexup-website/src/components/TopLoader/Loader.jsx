// src/components/TopLoader/Loader.jsx
import React, { useEffect, useState, useRef } from "react";
import "./Loader.css";

export default function Loader() {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  /* ============================================================
     ⚡ Network-based speed detection
     If network is slow → loader fills slower and smoother
  ============================================================ */
  const getNetworkSpeed = () => {
    if (navigator.connection && navigator.connection.downlink) {
      const speed = navigator.connection.downlink; // Mbps
      return Math.max(0.4, Math.min(speed / 10, 1)); 
    }
    return 1; // fallback (normal speed)
  };

  /* ============================================================
     ⚡ Start Loader
  ============================================================ */
  const startLoader = () => {
    setIsActive(true);
    setProgress(0);

    const speed = getNetworkSpeed(); // dynamic speed

    const animate = () => {
      setProgress((p) => {
        const next = p + 0.015 * speed; // smoother fill
        return next >= 0.98 ? 0.98 : next;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  /* ============================================================
     ⚡ Finish Loader
  ============================================================ */
  const endLoader = () => {
    cancelAnimationFrame(rafRef.current);

    // Final smooth finish
    setProgress(1);

    setTimeout(() => {
      setIsActive(false);
      setProgress(0);
    }, 350);
  };

  /* ============================================================
     🔥 LISTEN FOR ROUTE LOADING EVENTS
     Triggered from App.jsx
  ============================================================ */
  useEffect(() => {
    const onStart = () => startLoader();
    const onEnd = () => endLoader();

    window.addEventListener("route-loading-start", onStart);
    window.addEventListener("route-loading-end", onEnd);

    return () => {
      window.removeEventListener("route-loading-start", onStart);
      window.removeEventListener("route-loading-end", onEnd);
    };
  }, []);

  return (
    <div className={`top-loader ${isActive ? "show" : ""}`}>
      <div
        className="top-loader-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
