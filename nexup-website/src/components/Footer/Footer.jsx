import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="nx-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Ambience */}
      <div className="footer-noise" />
      <div className="footer-glow" />

      <div className="nx-footer-container">
        
        {/* ================= 5-COLUMN GRID (Brand + 4 Link Cols) ================= */}
        <div className="nx-footer-grid">
          
          {/* COLUMN 1: Brand Identity (Spans 2 cols on mobile if needed, or full width) */}
          <div className="nx-col brand-col">
            <Link to="/" className="nx-logo">NeX UP</Link>
            <p className="nx-desc">
              The operating system for digital reality. <br />
              Bridging intelligence and immersion.
            </p>
            {/* Socials moved here for cleaner mobile layout, or keep in connect */}
            <div className="social-row">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://instagram.com/jothish4real" target="_blank" rel="noreferrer" aria-lable="Instagram"><FaInstagram/></a>
            </div>
          </div>

          {/* COLUMN 2: Platform */}
          <div className="nx-col">
            <h4>Platform</h4>
            <Link to="/ecosystem/nexworld">NexWorld</Link>
            <Link to="/ecosystem/nexnodes">NexNodes</Link>
            <Link to="/ecosystem/nexengine">NexEngine</Link>
            <Link to="/ecosystem/nexhousing">NexHousing</Link>
            <Link to="/ecosystem/nexsearch">Search Engine</Link>
          </div>

          {/* COLUMN 3: Company */}
          <div className="nx-col">
            <h4>Company</h4>
            <Link to="/about/company">About Us</Link>
            <Link to="/about/vision">Vision</Link>
            <Link to="/about/team">Team</Link>
            <Link to="/about/career">Careers <span className="hiring-badge">Hiring</span></Link>
            <Link to="/about/news">Newsroom</Link>
          </div>

          {/* COLUMN 4: Resources (Restored Full List) */}
          <div className="nx-col">
            <h4>Resources</h4>
            <Link to="/support/help">Help Center</Link>
            <Link to="/support/guidelines">Guidelines</Link>
            <Link to="/safety/approach">Safety Approach</Link>
            <Link to="/safety/privacy">Privacy & Data</Link>
            <Link to="/safety/transparency">Transparency</Link>
          </div>

          {/* COLUMN 5: Connect (Restored Full List) */}
          <div className="nx-col">
            <h4>Connect</h4>
            <Link to="/contact">Contact Support</Link>
            <Link to="/login">Developer Login</Link>
            <Link to="/dns">DNS Status</Link>
            <a href="mailto:hello@nexup.com" className="contact-link">hello@nexup.com</a>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="nx-footer-bottom">
          <div className="nx-copyright">
            © {currentYear} NeX UP Inc. All rights reserved.
          </div>
          
          <div className="nx-legal-links">
            <Link to="/sections/terms">Terms</Link>
            <Link to="/safety/privacy">Privacy</Link>
            <Link to="/safety/cookies">Cookies</Link>
            <Link to="/safety/security">Security</Link>
          </div>

          <div className="nx-system-status">
            <span className="status-dot"></span>
            <span>Systems Operational</span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}