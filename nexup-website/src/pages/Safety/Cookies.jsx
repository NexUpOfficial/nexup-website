// src/pages/Safety/Cookies.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../page-styles/Safety/Cookies.css";

const Cookies = () => {
  // State for the checkboxes/toggles
  const [preferences, setPreferences] = useState({
    essential: true, // Locked (Always true)
    performance: true,
    ai: false,
    marketing: false,
  });

  const [isSaved, setIsSaved] = useState(false);

  // Toggle handler
  const toggleCookie = (type) => {
    if (type === "essential") return; // Cannot toggle essential
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Save handler
  const handleSave = (acceptAll = false) => {
    if (acceptAll) {
      setPreferences({
        essential: true,
        performance: true,
        ai: true,
        marketing: true,
      });
    }
    
    // Simulate API call to save to user's Nex-DNS
    setTimeout(() => {
      setIsSaved(true);
    }, 500);
  };

  return (
    <div className="cookies-page">
      <div className="cookies-header">
        <span className="doc-badge">PRIVACY PROTOCOL // V3.0</span>
        <h1 className="cookies-title">Data & Cookies</h1>
      </div>

      <div className="cookies-container">
        {/* --- POLICY CONTENT --- */}
        <div className="cookies-text-panel">
          <section>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data nodes stored on your device. NexUP uses them to synchronize your 
              <strong> Nex-DNS identity</strong>, reduce latency in AR rendering, and maintain the continuity of your digital assets.
            </p>
          </section>

          <section>
            <h2>2. Why We Use Them</h2>
            <p>We categorize data usage into four spatial layers:</p>
            <ul>
              <li><strong>Core System:</strong> Security and login.</li>
              <li><strong>Spatial Optimization:</strong> LiDAR mapping caches and world loading.</li>
              <li><strong>Neural Personalization:</strong> AI behavior adaptation.</li>
              <li><strong>External Uplinks:</strong> Partner integrations.</li>
            </ul>
          </section>

          <section>
            <h2>3. Managing Your Data</h2>
            <p>
              You maintain sovereignty over your data. Use the control panel below to configure 
              which data nodes NeXUP is allowed to access.
            </p>
          </section>
        </div>

        {/* --- INTERACTIVE CONTROL PANEL --- */}
        <div className="cookies-control-panel">
          <h3>Consent Configuration</h3>
          <p className="panel-desc">Customize your data stream preferences.</p>

          <div className="toggles-wrapper">
            
            {/* TOGGLE 1: ESSENTIAL (LOCKED) */}
            <div className="cookie-toggle-row locked">
              <div className="toggle-info">
                <h4>System Core (Essential)</h4>
                <p>Required for Nex-DNS login and security. Cannot be disabled.</p>
              </div>
              <div className="toggle-switch active disabled"></div>
            </div>

            {/* TOGGLE 2: PERFORMANCE */}
            <div 
              className={`cookie-toggle-row ${preferences.performance ? "active" : ""}`}
              onClick={() => toggleCookie("performance")}
            >
              <div className="toggle-info">
                <h4>Spatial Optimization</h4>
                <p>Reduces AR latency, caches 3D assets, and speeds up world loading.</p>
              </div>
              <div className={`toggle-switch ${preferences.performance ? "active" : ""}`}>
                <div className="toggle-knob" />
              </div>
            </div>

            {/* TOGGLE 3: AI PERSONALIZATION */}
            <div 
              className={`cookie-toggle-row ${preferences.ai ? "active" : ""}`}
              onClick={() => toggleCookie("ai")}
            >
              <div className="toggle-info">
                <h4>Neural AI Personalization</h4>
                <p>Allows NPCs and the world to "remember" your interactions and preferences.</p>
              </div>
              <div className={`toggle-switch ${preferences.ai ? "active" : ""}`}>
                <div className="toggle-knob" />
              </div>
            </div>

            {/* TOGGLE 4: MARKETING */}
            <div 
              className={`cookie-toggle-row ${preferences.marketing ? "active" : ""}`}
              onClick={() => toggleCookie("marketing")}
            >
              <div className="toggle-info">
                <h4>External Uplinks</h4>
                <p>Allows third-party partners to display relevant assets or offers.</p>
              </div>
              <div className={`toggle-switch ${preferences.marketing ? "active" : ""}`}>
                <div className="toggle-knob" />
              </div>
            </div>

          </div>

          {/* --- ACTION BUTTONS --- */}
          <AnimatePresence mode="wait">
            {!isSaved ? (
              <motion.div 
                className="action-buttons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <button className="btn-secondary" onClick={() => handleSave(false)}>
                  Save Preferences
                </button>
                <button className="btn-primary" onClick={() => handleSave(true)}>
                  Accept All & Initialize
                </button>
              </motion.div>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="success-icon">✓</span>
                <span>Preferences Encrypted & Saved to NexNode.</span>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
};

export default Cookies;