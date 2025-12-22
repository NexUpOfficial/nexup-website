// src/pages/Safety/Cookies.jsx - REVISED FINAL (Unnumbered Sections, Line Spacing)

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../page-styles/Safety/Cookies.css'; 
import Footer from '../../components/Footer/Footer'; 

// Helper for structured sections (titles are unnumbered)
const Section = ({ id, title, children }) => (
    <section className="nx-policy-section" id={id}>
        <h3>{title}</h3>
        {children}
    </section>
);

const Cookies = () => {

    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to handle "Go Back" action
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="nx-cookie-page">
            <main className="nx-cookie-main-content">
                
                {/* *** PAGE INDICATOR WITH BACK ARROW *** */}
                <div className="nx-page-indicator-container">
                    {/* Back Arrow Link with Tooltip and FIX class */}
                    <Link 
                        to="#" 
                        onClick={handleGoBack} 
                        className="nx-back-arrow" // Removed nx-remove-list-style class as CSS handles it now
                        aria-label="Go Back"
                        data-tooltip="Go Back" // Tooltip trigger
                    >
                        {/* Left arrow Unicode character */}
                        &#x2190; 
                    </Link>
                    
                    {/* Page Indicator Text */}
                    <div className="nx-page-indicator">
                        <p>Cookie Policy</p>
                    </div>
                </div>
                
                <div className="nx-cookies-document">
                    
                    <header className="nx-document-header">
                        <h1 id="document-title">Cookie Policy</h1>
                        <h2 className="subtitle">Understanding Our Use of Cookies</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP uses cookies minimally and primarily for platform functionality and anonymous performance tracking.
                    </p>
                    <p className="nx-statement-header">
                        Effective Date: December 23, 2025
                        <br />
                        This document details our use of cookies and similar technologies on the NexUP platform.
                    </p>

                    
                    {/* SECTION 1: What are Cookies? (NO NUMBER) */}
                    <Section id="what-are" title="What are Cookies?">
                        <p>
                            Cookies are small text files placed on your computer or mobile device when you access a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
                        </p>
                    </Section>

                    {/* SECTION 2: Our Minimal Use of Cookies (NO NUMBER) */}
                    <Section id="minimal-use" title="Our Minimal Use of Cookies">
                        <p>
                            NexUP uses cookies that fall into two primary categories: **Strictly Necessary** and **Performance**. We do not use third-party advertising cookies or retargeting trackers.
                        </p>
                        
                        <div className="nx-statement">
                            <h4>Transparency Commitment:</h4>
                            <p>We are committed to a privacy-first approach. All non-essential data collection is anonymized and limited to platform optimization, never sold or shared for behavioral advertising.</p>
                        </div>
                        
                        {/* SUB-SECTION (NO NUMBER/BULLET) */}
                        <h4>Strictly Necessary Cookies</h4>
                        <p>
                            These cookies are essential for you to browse the NexUP platform and use its features, such as accessing secure areas and maintaining your session. 
                        </p>
                        <ul>
                            <li>Session Cookie: Used to maintain your login status.</li>
                            <li>Preference Cookie: Used to remember your dark mode preference or language settings.</li>
                        </ul>

                        {/* SUB-SECTION (NO NUMBER/BULLET) */}
                        <h4>Performance Cookies (Anonymous)</h4>
                        <p>
                            These cookies collect aggregated, anonymized information about how visitors use the platform. This helps us monitor performance, identify bottlenecks, and improve the user experience.
                        </p>
                        <ul>
                            <li>Analytics Cookie: Records page load times and popular content, ensuring no personally identifiable information (PII) is captured.</li>
                        </ul>
                    </Section>

                    {/* SECTION 3: Your Choices and Controls (NO NUMBER) */}
                    <Section id="controls" title="Your Choices and Controls">
                        <p>
                            Given our minimal use of cookies, complete refusal may affect core functionality. However, you can control cookies in the following ways:
                        </p>
                        <ul>
                            <li>Browser Settings: You can instruct your browser to refuse or manage cookies. Note that this will affect all websites, not just NexUP.</li>
                            <li>Consent Modal: By clicking "Accept and Continue" on the Policy Acceptance Modal, you consent to the use of strictly necessary and anonymous performance cookies.</li>
                        </ul>
                        <p className="nx-statement">
                            If you have questions about our practices, please contact us via our <Link to="/support/contact" className="nx-policy-link">Contact Page</Link>.
                        </p>
                    </Section>
                    
                    
                </div>
            </main>
            
            {/* Footer Component */}
            <Footer>
                Cookie Policy — Minimal, necessary tracking to ensure functionality and performance.
            </Footer>
        </div>
    );
};

export default Cookies;