// src/components/Footer/Footer.jsx

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
            transition={{ duration: 1.2, ease: "easeOut" }} 
        >
            {/* Background Ambience */}
            <div className="footer-noise" />
            <div className="footer-glow" />

            {/* ... (rest of the component) ... */}

      <div className="nx-footer-container">
        
        {/* ================= TOP GRID ROW: Brand (Left) & Auth Buttons (Right) ================= */}
        <div className="nx-footer-grid-top">
          
          {/* COLUMN 1 (LEFT): Brand Identity */}
          <div className="nx-col brand-col">
            <Link to="/" className="nx-logo">NeX UP</Link>
            <p className="nx-desc">
              A spatial computing platform designed for
              long-term digital environments.
            </p> {/* Change 2: Updated Brand Copy */}
          </div>

          {/* COLUMN 2 (RIGHT): Login & Sign Up Buttons */}
          <div className="nx-col auth-col">
            <div className="auth-buttons">
                <Link to="/login" className="auth-btn secondary">
                    Login
                </Link>
                <Link to="/login" className="auth-btn primary">
                    Sign Up
                </Link>
            </div>
          </div>
          
        </div>
        
        {/* ================= BOTTOM GRID ROW: Link Sections ================= */}
        <div className="nx-footer-grid-bottom">
          
          {/* COLUMN 2: Ecosystem (formerly Platform) */}
          <div className="nx-col">
            <h4>Ecosystem</h4> {/* Change 4: Column Label Fix */}
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
            <Link to="/about/stories">Stories</Link>
            {/* Removed Roadmap link here (Change 5) */}
          </div>

          {/* COLUMN 4: Support */}
          <div className="nx-col">
            <h4>Support</h4>
            <Link to="/support/help">Help Center</Link>
            <Link to="/support/guidelines">Guidelines</Link>
            <Link to="/contact">Contact Support</Link>
            <Link to="/dns">DNS Status</Link>
            <Link to="/sections/roadmap">Roadmap</Link> {/* Change 5: Moved Roadmap here */}
          </div>

          {/* COLUMN 5: Safety */}
          <div className="nx-col">
            <h4>Safety & Legal</h4>
            <Link to="/safety/approach">Approach</Link>
            <Link to="/safety/trust">Trust</Link>
            <Link to="/safety/privacy">Privacy & Data</Link>
            <Link to="/safety/cookies">Cookies</Link>
            <Link to="/safety/transparency">Transparency</Link>
            <Link to="/sections/terms">Terms</Link>
          </div>
          
          {/* COLUMN 6: Connect */}
           <div className="nx-col">
            <h4>Connect</h4>
            <a href="mailto:hello@nexup.com" className="contact-link">hello@nexup.com</a>
            <div className="social-row">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://instagram.com/jothish4real" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram/></a>
            </div>
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
            {/* Change 7: Removed Security Link */}
          </div>

          <div className="nx-system-status">
            <span className="status-dot"></span>
            <span>All systems operational</span> {/* Change 6B: Status text update */}
          </div>
        </div>

      </div>
    </motion.footer>
  );
}