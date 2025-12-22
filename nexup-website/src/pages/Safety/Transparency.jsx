// src/pages/Safety/Transparency.jsx - FINAL ALIGNMENT: CENTERED CONTENT & CORRECT INDICATOR

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/Safety/Transparency.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ id, title, children }) => (
    <section className="policy-section scroll-target" id={id}>
        <h3>{title}</h3>
        {children}
    </section>
);

const Transparency = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to handle "Go Back" action
    const handleGoBack = () => {
        window.history.back();
    };


    return (
        <div className="transparency-page">
            <main className="transparency-main-content">
                
                {/* *** PAGE INDICATOR WITH BACK ARROW *** */}
                <div className="page-indicator-container">
                    {/* Back Arrow Link with Tooltip */}
                    <Link 
                        to="#" 
                        onClick={handleGoBack} 
                        className="back-arrow"
                        aria-label="Go Back"
                        data-tooltip="Go Back" // Tooltip trigger
                    >
                        {/* Left arrow Unicode character */}
                        &#x2190; 
                    </Link>
                    
                    {/* Page Indicator Text (Corrected) */}
                    <div className="page-indicator">
                        <p>Transparency Policy</p>
                    </div>
                </div>

                <div className="transparency-document">
                    
                    <header className="document-header">
                        <h1>Transparency at NexUP</h1>
                        <h2 className="subtitle">Our Commitment to Openness and Accountability</h2>
                    </header>
                    
                    <p className="introduction">
                        At NexUP, transparency is not a marketing promise — it is an operating principle.
                    </p>
                    <p className="statement-header">
                        We believe users deserve to understand how our platform works, how decisions are made, and how responsibilities are handled, especially as we build AI-powered and immersive digital environments. This page explains how NexUP practices transparency across technology, policy, and governance.
                    </p>

                    
                    {/* Why Transparency Matters */}
                    <Section id="why-it-matters" title="Why Transparency Matters">
                        <p>Advanced platforms influence people’s experiences, opportunities, and trust.</p>
                        <p>Without transparency, technology can become confusing, opaque, or harmful.</p>
                        <p>NexUP believes:</p>
                        <ul>
                            <li>Trust is built through clarity.</li>
                            <li>Accountability requires openness.</li>
                            <li>Responsible innovation depends on informed users.</li>
                        </ul>
                    </Section>

                    {/* What We Are Transparent About */}
                    <Section id="what-we-are-transparent-about" title="What We Are Transparent About">
                        
                        <h4>Platform Purpose & Direction</h4>
                        <p>We clearly communicate:</p>
                        <ul>
                            <li>What NexUP is building.</li>
                            <li>What stage the platform is in.</li>
                            <li>Which features are experimental, evolving, or stable.</li>
                        </ul>
                        <p className="priority-note">We avoid misleading claims or exaggerated promises.</p>

                        <h4>Data & Privacy Practices</h4>
                        <p>We explain:</p>
                        <ul>
                            <li>What data we collect.</li>
                            <li>Why it is collected.</li>
                            <li>How it is protected.</li>
                            <li>What we do not do with data.</li>
                        </ul>
                        <p className="priority-note">Privacy policies and data guides are written to be understandable, not hidden behind legal jargon.</p>

                        <h4>AI & Automation Use</h4>
                        <p>We disclose:</p>
                        <ul>
                            <li>When AI systems are involved in user experiences.</li>
                            <li>The role of automation in platform features.</li>
                            <li>The limits of automated decision-making.</li>
                        </ul>
                        <p className="priority-note">We do not present AI behavior as human or infallible.</p>

                        <h4>Policies & Rules</h4>
                        <p>All major policies are publicly accessible, including:</p>
                        <ul>
                            <li>Community Guidelines</li>
                            <li>Privacy & Data Practices</li>
                            <li>Cookie Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                        <p className="priority-note">Rules are documented so users know what is expected and what is enforced.</p>
                    </Section>

                    {/* What We Are Not Transparent About (And Why) */}
                    <Section id="limits-of-transparency" title="What We Are Not Transparent About (And Why)">
                        <p>To protect users and the platform, we do not publicly disclose:</p>
                        <ul>
                            <li>Internal security vulnerabilities.</li>
                            <li>Sensitive infrastructure details.</li>
                            <li>Private user data.</li>
                            <li>Information that could enable abuse or attacks.</li>
                        </ul>
                        <p className="statement">Transparency must never compromise safety.</p>
                    </Section>

                    {/* How We Handle Changes */}
                    <Section id="handling-changes" title="How We Handle Changes">
                        
                        <h4>Platform Updates</h4>
                        <p>When significant changes occur:</p>
                        <ul>
                            <li>Policies are updated clearly.</li>
                            <li>Material changes are communicated where appropriate.</li>
                            <li>Historical versions may be referenced when necessary.</li>
                        </ul>
                        <p className="priority-note">Users are not expected to guess what has changed.</p>

                        <h4>Accountability & Responsibility</h4>
                        <p>NexUP takes responsibility for:</p>
                        <ul>
                            <li>Platform design choices.</li>
                            <li>Data protection practices.</li>
                            <li>Safety and trust decisions.</li>
                            <li>Responding to legitimate concerns.</li>
                        </ul>
                        <p className="priority-note">We do not shift responsibility onto users for system-level issues.</p>
                    </Section>
                    
                    {/* Feedback & Questions */}
                    <Section id="feedback" title="Feedback & Questions">
                        <p>Transparency is a two-way process. Users can:</p>
                        <ul>
                            <li>Ask questions about policies.</li>
                            <li>Share concerns or feedback.</li>
                            <li>Report unclear or confusing practices.</li>
                        </ul>
                        <p className="priority-note">Constructive feedback helps us improve clarity.</p>
                    </Section>

                    {/* Governance & Decision-Making */}
                    <Section id="governance" title="Governance & Decision-Making">
                        <p>While NexUP is still evolving, we aim to:</p>
                        <ul>
                            <li>Document major platform decisions.</li>
                            <li>Balance innovation with responsibility. </li>
                            <li>Make decisions that prioritize long-term trust over short-term gain.</li>
                        </ul>
                        <p className="priority-note">As the platform grows, governance structures will evolve transparently.</p>
                    </Section>

                    {/* Regulatory Awareness */}
                    <Section id="regulatory" title="Regulatory Awareness">
                        <p>NexUP monitors relevant:</p>
                        <ul>
                            <li>Technology regulations.</li>
                            <li>Data protection laws.</li>
                            <li>AI governance discussions.</li>
                        </ul>
                        <p className="priority-note">We adapt responsibly as legal and societal expectations change.</p>
                    </Section>
                    
                    {/* Future Commitments */}
                    <Section id="future-commitments" title="Future Commitments">
                        <p>As NexUP expands into AI-driven and immersive environments:</p>
                        <ul>
                            <li>Transparency will remain a core requirement.</li>
                            <li>New systems will include clear explanations.</li>
                            <li>Users will be informed about meaningful changes.</li>
                        </ul>
                        <p className="priority-note">We believe transparency must scale alongside technology.</p>
                    </Section>

                    {/* Final Statement */}
                    <section className="policy-section final-section" id="final-statement">
                        <h3>Final Statement</h3>
                        <p>Transparency is not about revealing everything — it is about revealing what matters.</p>
                        <div className="final-message-box">
                            <p>NexUP is committed to openness, honesty, and accountability as we build the future of digital and spatial computing.</p>
                        </div>
                    </section>
                    
                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Transparency — How NexUP builds trust through openness and accountability.
            </Footer>
            
        </div>
    );
};

export default Transparency;