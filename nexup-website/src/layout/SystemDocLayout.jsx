import { useState } from "react";
import "../page-styles/SystemDoc.css";
import Footer from "../components/Footer/Footer";

export default function SystemDocLayout({
  indicator,
  title,
  intro,
  sections,
  anchorSections = ["01", "03", "05", "09"],
  defaultOpen = "01",
  closing,
  cta, // ✅ FIX: declare cta properly
}) {
  const [openSection, setOpenSection] = useState(defaultOpen);

  const toggleSection = (number) => {
    setOpenSection(openSection === number ? null : number);
  };

  return (
    <>
      <div className="approach-page">
        <div className="approach-content-container">

          {/* Header Indicator */}
          <div className="approach-header-indicator">
            <span className="page-indicator-text">{indicator}</span>
          </div>

          {/* Title */}
          <h1 className="approach-title">{title}</h1>

          {/* Intro */}
          <p className="approach-intro">{intro}</p>

          {/* Sections */}
          <div className="approach-sections-stack">
            {sections.map((section) => {
              const isOpen = openSection === section.number;
              const isAnchor = anchorSections.includes(section.number);

              return (
                <div
                  key={section.number}
                  className={`section ${isOpen ? "open" : ""} ${
                    isAnchor ? "anchor-section" : ""
                  }`}
                >
                  <div
                    className="section-header"
                    onClick={() => toggleSection(section.number)}
                  >
                    <span className="section-number">
                      {section.number.padStart(2, "0")}
                    </span>
                    <h2 className="section-title">
                      {section.title}
                      <span className="toggle-icon">+</span>
                    </h2>
                  </div>

                  <div className="section-explanation-wrapper">
                    <div className="section-explanation">
                      {section.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing */}
          {closing && (
            <p className="approach-closing">{closing}</p>
          )}

          {/* Unsaid Signal */}
          <p className="approach-signal">
            This document changes with the system.
          </p>

          {/* Silent Structural Signal */}
          <div className="silent-signal-container">
            <p className="silent-signal">Version: 0.1</p>
            <p className="silent-signal">Status: Foundational</p>
          </div>

          {/* ✅ Page-specific CTA (SAFE NOW) */}
          {cta && (
            <div className="cta-container-text">
              {cta}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}
