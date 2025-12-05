// src/pages/sections/Terms.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../page-styles/sections/Terms.css";
import Footer from "../../components/Footer/Footer"; // Assuming Footer is needed

const Terms = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "eligibility", title: "2. Eligibility & Access" },
    { id: "identity", title: "3. Nex-DNS Identity" },
    { id: "spatial-data", title: "4. Spatial Data & Privacy" },
    { id: "conduct", title: "5. User Conduct" },
    { id: "assets", title: "6. Virtual Assets (NFTs)" },
    { id: "economy", title: "7. Virtual Economy" },
    { id: "ugc", title: "8. User Generated Content" },
    { id: "ai", title: "9. AI & Automation" },
    { id: "ar-safety", title: "10. AR/VR Safety" },
    { id: "liability", title: "11. Limitation of Liability" },
    { id: "termination", title: "12. Termination" },
    { id: "updates", title: "13. Updates to Terms" },
    { id: "contact", title: "14. Contact Us" },
  ];

  // Logic to highlight sidebar on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } 
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="terms-page">
      
      {/* HEADER */}
      <div className="terms-header">
        {/* 2. Hero Glow */}
        <div className="terms-glow" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="header-content"
        >
          {/* 8. Unified Badge Style */}
          <span className="doc-badge">LEGAL DOCUMENT // V2.4</span>
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">Last Updated: December 05, 2025</p>
        </motion.div>
      </div>

      <div className="terms-layout">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="terms-sidebar">
          <nav>
            <ul>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a 
                    href={`#${sec.id}`} 
                    className={activeSection === sec.id ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(sec.id);
                      if (el) {
                         // Manual offset scroll calculation
                         const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                         window.scrollTo({top: y, behavior: 'smooth'});
                      }
                      setActiveSection(sec.id);
                    }}
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="terms-content">
          
          <TermsSection id="intro" title="1. Introduction">
            <p>
              Welcome to <strong>NeXUP</strong> ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the NeXUP ecosystem. By connecting your wallet or creating a Nex-DNS identity, you enter into a binding legal agreement with NeXUP.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="eligibility" title="2. Eligibility & Access">
            <p>
              <strong>2.1 Age Requirement:</strong> The Services are intended for users who are at least 13 years old.
            </p>
            <p>
              <strong>2.2 Hardware:</strong> We are not responsible for performance degradation on devices that do not meet our minimum LiDAR specifications.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="identity" title="3. Nex-DNS Identity">
            <p>
              <strong>3.1 Decentralized ID:</strong> Your NeXUP account is tied to your Nex-DNS. This identity is Self-Sovereign.
            </p>
            <p>
              <strong>3.2 Private Key Custody:</strong> You are solely responsible for your private keys. NeXUP cannot recover your account if keys are lost.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="spatial-data" title="4. Spatial Data & Privacy">
            <p>
              <strong>4.1 Scanning:</strong> To place digital objects, NeXUP processes Spatial Data (LiDAR scans) of your surroundings.
            </p>
            <p>
              <strong>4.2 Processing:</strong> Data is processed locally on your device wherever possible.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="conduct" title="5. User Conduct">
            <p>
              Prohibited activities include: Digital Vandalism, Haptic Assault, Exploiting bugs, and Botting.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="assets" title="6. Virtual Assets (NFTs)">
            <p>
              <strong>6.1 Ownership:</strong> You own the NFT, but NeXUP retains IP rights to the code and visual models.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="economy" title="7. Virtual Economy">
            <p>
              All blockchain transactions are final. NeXUP is not responsible for gas fees or market volatility.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="ugc" title="8. User Generated Content">
            <p>
              By uploading content, you grant NeXUP a license to host and render that content within the ecosystem.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="ai" title="9. AI & Automation">
            <p>
              <strong>9.1 Hallucinations:</strong> AI agents may generate incorrect data.
            </p>
            <p>
              <strong>9.2 Liability:</strong> You are liable for autonomous agents you deploy using NexEngine.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="ar-safety" title="10. AR/VR Safety">
            <p>
              Always maintain awareness of physical surroundings. NeXUP is not liable for physical injury while using mixed reality features.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="liability" title="11. Limitation of Liability">
            <p>
              THE SERVICE IS PROVIDED "AS IS." NEXUP DISCLAIMS ALL WARRANTIES AND IS NOT LIABLE FOR DATA LOSS OR SYSTEM FAILURES.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="termination" title="12. Termination">
            <p>
              We reserve the right to suspend access to centralized services for violations of these Terms.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="updates" title="13. Updates to Terms">
            <p>
              We may update these Terms as the Spatial Web evolves. Continued use constitutes acceptance.
            </p>
          </TermsSection>

          <BreakLine />

          <TermsSection id="contact" title="14. Contact Us">
            <p>
              <strong>Legal:</strong> <a href="mailto:legal@nexup.world">legal@nexup.world</a>
            </p>
          </TermsSection>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

/* --- COMPONENTS --- */

// 3. Glass Panel Wrapper for Sections + 5. Animated Titles
const TermsSection = ({ id, title, children }) => (
  <motion.section 
    id={id}
    className="terms-block glass-panel"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <h2>{title}</h2>
    {children}
  </motion.section>
);

// 7. Animated Break Line
const BreakLine = () => (
  <motion.div 
    className="break-line" 
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  />
);

export default Terms;