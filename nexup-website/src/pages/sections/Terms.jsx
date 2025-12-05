// src/pages/sections/Terms.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../page-styles/sections/Terms.css";

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
      { rootMargin: "-20% 0px -60% 0px" } // Triggers when section is near top of screen
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="doc-badge">LEGAL DOCUMENT // V2.4</span>
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">Last Updated: December 05, 2025</p>
        </motion.div>
      </div>

      <div className="terms-layout">
        
        {/* SIDEBAR NAVIGATION (Sticky & Active) */}
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
                      document.getElementById(sec.id).scrollIntoView({ behavior: "smooth" });
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
          
          <section id="intro">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>NeXUP</strong> ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the NeXUP ecosystem. By connecting your wallet or creating a Nex-DNS identity, you enter into a binding legal agreement with NeXUP.
            </p>
          </section>

          <section id="eligibility">
            <h2>2. Eligibility & Access</h2>
            <p>
              <strong>2.1 Age Requirement:</strong> The Services are intended for users who are at least 13 years old.
            </p>
            <p>
              <strong>2.2 Hardware:</strong> We are not responsible for performance degradation on devices that do not meet our minimum LiDAR specifications.
            </p>
          </section>

          <section id="identity">
            <h2>3. Nex-DNS Identity</h2>
            <p>
              <strong>3.1 Decentralized ID:</strong> Your NeXUP account is tied to your Nex-DNS. This identity is Self-Sovereign.
            </p>
            <p>
              <strong>3.2 Private Key Custody:</strong> You are solely responsible for your private keys. NeXUP cannot recover your account if keys are lost.
            </p>
          </section>

          <section id="spatial-data">
            <h2>4. Spatial Data & Privacy</h2>
            <p>
              <strong>4.1 Scanning:</strong> To place digital objects, NeXUP processes Spatial Data (LiDAR scans) of your surroundings.
            </p>
            <p>
              <strong>4.2 Processing:</strong> Data is processed locally on your device wherever possible.
            </p>
          </section>

          <section id="conduct">
            <h2>5. User Conduct</h2>
            <p>
              Prohibited activities include: Digital Vandalism, Haptic Assault, Exploiting bugs, and Botting.
            </p>
          </section>

          <section id="assets">
            <h2>6. Virtual Assets (NFTs)</h2>
            <p>
              <strong>6.1 Ownership:</strong> You own the NFT, but NeXUP retains IP rights to the code and visual models.
            </p>
          </section>

          <section id="economy">
            <h2>7. Virtual Economy</h2>
            <p>
              All blockchain transactions are final. NeXUP is not responsible for gas fees or market volatility.
            </p>
          </section>

          <section id="ugc">
            <h2>8. User Generated Content</h2>
            <p>
              By uploading content, you grant NeXUP a license to host and render that content within the ecosystem.
            </p>
          </section>

          <section id="ai">
            <h2>9. AI & Automation</h2>
            <p>
              <strong>9.1 Hallucinations:</strong> AI agents may generate incorrect data.
            </p>
            <p>
              <strong>9.2 Liability:</strong> You are liable for any autonomous agents you deploy using NexEngine.
            </p>
          </section>

          <section id="ar-safety">
            <h2>10. AR/VR Safety</h2>
            <p>
              Always maintain awareness of physical surroundings. NeXUP is not liable for physical injury while using mixed reality features.
            </p>
          </section>

          <section id="liability">
            <h2>11. Limitation of Liability</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS." NEXUP DISCLAIMS ALL WARRANTIES AND IS NOT LIABLE FOR DATA LOSS OR SYSTEM FAILURES.
            </p>
          </section>

          <section id="termination">
            <h2>12. Termination</h2>
            <p>
              We reserve the right to suspend access to centralized services for violations of these Terms.
            </p>
          </section>

          <section id="updates">
            <h2>13. Updates to Terms</h2>
            <p>
              We may update these Terms as the Spatial Web evolves. Continued use constitutes acceptance.
            </p>
          </section>

          <section id="contact">
            <h2>14. Contact Us</h2>
            <p>
              <strong>Legal:</strong> <a href="mailto:legal@nexup.world">legal@nexup.world</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;