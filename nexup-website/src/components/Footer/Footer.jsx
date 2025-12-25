// src/components/Footer/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for the 'X' link

import "./Footer.css";

const Footer = () => {
    // Determine the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className="nx-footer">
            <nav aria-label="Footer navigation">

                {/* ================= TOP BRAND ROW ================= */}
                <div className="nx-footer-top">
                    <div className="nx-footer-brand">
                        <Link to="/" className="nx-logo">
                            <h2>NexUP</h2>
                        </Link>
                    </div>
                    
                </div>

                {/* ================= MERGED LINK GRID (4-COLUMN FLOW) ================= */}
                <div className="nx-footer-grid">

                    {/* COLUMN 1: PLATFORM (Consolidated Ecosystem + Roadmap/Search/Housing/DNS) */}
                    <div className="nx-footer-grid-col">
                        <h4>Platform</h4>
                        <Link to="/ecosystem/nexworld">NexWorld</Link>
                        <Link to="/ecosystem/nexnodes">NexNodes</Link>
                        <Link to="/ecosystem/nexengine">NexEngine</Link>
                        {/* Old Link: Search Engine (kept as NexSearch) */}
                        <Link to="/ecosystem/nexsearch">NexSearch</Link>
                        <Link to="/ecosystem/nexhousing">NexHousing</Link>
                        {/* Old Link: Roadmap (moved from Company to Platform/System context) */}
                        <Link to="/sections/roadmap">Roadmap</Link>
                        {/* Old Link: DNS Status (Support/System context) */}
                        <Link to="/dns">DNS Status</Link>
                    </div>

                    {/* COLUMN 2: COMPANY (Consolidated About/Vision/Team/Careers/News/Stories) */}
                    <div className="nx-footer-grid-col">
                        <h4>Company</h4>
                        <Link to="/about/company">About Us</Link> {/* Used 'About Us' from old */}
                        <Link to="/about/vision">Vision</Link>
                        <Link to="/about/team">Team</Link>
                        <Link to="/about/stories">Stories</Link>
                        {/* Used 'Career' from old, including badge placeholder */}
                        <Link to="/about/career">Careers <span className="hiring-badge">Hiring</span></Link>
                        <Link to="/about/news">Newsroom</Link> {/* Used 'Newsroom' from old */}
                    </div>

                    {/* COLUMN 3: SAFETY & TRUST (Consolidated Safety, Legal, Privacy, Guidelines, Support) */}
                    <div className="nx-footer-grid-col">
                        <h4>Safety & Trust</h4>
                        {/* Old Link: Safety Approach */}
                        <Link to="/safety/approach">Safety Approach</Link>
                           <Link to="/safety/security">Security</Link>
                        {/* Old Link: Trust (from Safety & Legal) */}
                        <Link to="/safety/trust">Trust</Link>
                        {/* Old Link: Privacy & Data (kept as Privacy) */}
                        <Link to="/safety/privacy">Privacy & Data</Link>
                        {/* Old Link: Cookies */}
                        <Link to="/safety/cookies">Cookies</Link>
                        {/* Old Link: Transparency */}
                        <Link to="/safety/transparency">Transparency</Link>
                        {/* Old Link: Terms (kept as Terms) */}
                        <Link to="/sections/terms">Terms & Conditions</Link>
                        {/* Old Link: Guidelines (from Support) */}
                        <Link to="/support/guidelines">Guidelines</Link>
                    </div>

                    {/* COLUMN 4: CONNECT (Contact, Help Center, Social Links) */}
                    <div className="nx-footer-grid-col">
                        <h4>Connect & Support</h4> {/* Merged title for clarity */}
                        {/* Old Link: Contact Support (kept as Contact Support) */}
                        <Link to="/contact">Contact Support</Link>
                        {/* Old Link: Help Center (from Support) */}
                        <Link to="/support/help">Help Center</Link>
                        {/* Old Link: Email (kept as mailto link) */}
                        <a href="mailto:hello@nexup.com" className="contact-link">hello@nexup.com</a>

                        {/* Social Links - Ensuring all old social links are present */}
                        <div className="social-row">
                            {/* Old: FaGithub */}
                            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            {/* Old: FaTwitter (now FaXTwitter) */}
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (formerly Twitter)">
                                <FaXTwitter />
                            </a>
                            {/* Old: FaLinkedinIn */}
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            {/* Old: FaYoutube */}
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ================= LEGAL BAR ================= */}
            <div className="nx-footer-legal">
                {/* Note: Updated copyright text to match the old component's structure */}
                <span>© {currentYear} NeX UP Inc. All rights reserved.</span>

                {/* The legal links match the old component's bottom bar */}
                <div className="nx-legal-links">
                    <Link to="/sections/terms">Terms</Link>
                    <Link to="/safety/privacy">Privacy</Link>
                    <Link to="/safety/cookies">Cookies</Link>
                    <Link to="/system-docs">Docs</Link>
                </div>

                {/* Re-added the system status from the old component's bottom bar */}
                <div className="nx-system-status">
                    <span className="status-dot"></span>
                    <span>All systems operational</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;