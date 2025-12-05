// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ⭐ 8. Scroll Reveal
import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight
} from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer 
      className="nx-footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="nx-footer-container">
        
        {/* ================= TOP SECTION (Brand + Newsletter) ================= */}
        <div className="nx-footer-top">
          <div className="nx-brand-block">
            <h2 className="nx-logo">NeX UP</h2>
            <p className="nx-mission">
              The operating system for digital reality. <br />
              Building the bridge between intelligence and immersion.
            </p>
          </div>

          <div className="nx-newsletter">
            <label>Stay updated with the ecosystem</label>
            <div className="nx-input-wrapper">
              <input type="email" placeholder="Enter your email" />
              <button aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="nx-separator" />

        {/* ================= MIDDLE SECTION (Links Grid) ================= */}
        <div className="nx-footer-grid">
          
          <div className="nx-col">
            <h4>Platform</h4>
            <Link to="/ecosystem/nexworld">NexWorld</Link>
            <Link to="/ecosystem/nexengine">NexEngine</Link>
            <Link to="/ecosystem/nexnodes">NexNodes</Link>
            <Link to="/ecosystem/nexhousing">NexHousing</Link>
            <Link to="/ecosystem/nexsearch">Search Engine</Link>
          </div>

          <div className="nx-col">
            <h4>Company</h4>
            <Link to="/about/company">About Us</Link>
            <Link to="/about/vision">Vision</Link>
            <Link to="/about/team">Team</Link>
            <Link to="/about/career">Careers <span className="hiring-badge">Hiring</span></Link>
            <Link to="/about/news">Newsroom</Link>
          </div>

          <div className="nx-col">
            <h4>Resources</h4>
            <Link to="/support/help">Help Center</Link>
            <Link to="/support/guidelines">Guidelines</Link>
            <Link to="/safety/approach">Safety</Link>
            <Link to="/safety/privacy">Privacy</Link>
            <Link to="/safety/transparency">Transparency</Link>
          </div>

          <div className="nx-col">
            <h4>Connect</h4>
            <Link to="/contact">Contact Support</Link>
            <Link to="/login">Developer Login</Link>
            <Link to="/dns">DNS Status</Link>
            <div className="social-row">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="x"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="github"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
            </div>
          </div>

        </div>

        <div className="nx-separator" />

        {/* ================= BOTTOM SECTION (Legal + Status) ================= */}
        <div className="nx-footer-bottom">
          <div className="nx-copyright">
            © {new Date().getFullYear()} NeX UP Inc. All rights reserved.
          </div>
          
          <div className="nx-legal-links">
            <Link to="/sections/terms">Terms</Link>
            <Link to="/safety/privacy">Privacy</Link>
            <Link to="/safety/cookies">Cookies</Link>
          </div>

          <div className="nx-system-status">
            <span className="status-dot"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}