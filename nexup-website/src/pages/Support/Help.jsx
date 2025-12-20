// src/pages/Support/Help.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiUser, FiAperture, FiGlobe, FiShield, FiAlertTriangle, FiPhone } from 'react-icons/fi';
import "../../page-styles/Support/Help.css";
import Footer from "../../components/Footer/Footer";

const Help = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="help-page">
            <main className="help-main-content">
                <div className="help-document">
                    
                    <header className="document-header">
                        <h1>NexUP Help Center</h1>
                        <h2 className="subtitle">How can we help you?</h2>
                    </header>
                    
                    <p className="introduction">
                        Welcome to the NexUP Help Center. This space is designed to help users understand, navigate, and confidently use the NexUP ecosystem — from the website today to immersive spatial worlds in the future. Our goal is simple: clear help, honest guidance, and real support.
                    </p>

                    {/* --- Purpose of the Help Center --- */}
                    <section className="policy-section principle-section">
                        <h3><FiBookOpen className="section-icon" /> Purpose of the Help Center</h3>
                        <p>The NexUP Help Center exists to:</p>
                        <ul>
                            <li>Provide self-service support</li>
                            <li>Reduce confusion and friction</li>
                            <li>Educate users about the platform</li>
                            <li>Offer safe and trusted guidance</li>
                            <li>Support long-term community growth</li>
                        </ul>
                        <p className="statement">We believe good platforms explain themselves well.</p>
                    </section>


                    {/* --- Section 1: Getting Started --- */}
                    <section className="policy-section">
                        <h3><FiAperture className="section-icon" /> Getting Started</h3>
                        <article>
                            <h4>What is NexUP?</h4>
                            <p>NexUP is a long-term spatial computing platform focused on immersive digital environments, AI-powered creation, and connected virtual ecosystems.</p>
                        </article>
                        <article>
                            <h4>Who is NexUP for?</h4>
                            <ul className="sub-list">
                                <li>Students & learners</li>
                                <li>Developers & creators</li>
                                <li>Educators & institutions</li>
                                <li>Communities & organizations</li>
                                <li>Future AR/VR builders</li>
                            </ul>
                        </article>
                        <article>
                            <h4>How do I start using NexUP?</h4>
                            <p>You can begin by exploring the website, learning about the ecosystem, and gradually engaging with features as they become available.</p>
                        </article>
                    </section>
                    
                    {/* --- Section 2: Account & Access --- */}
                    <section className="policy-section">
                        <h3><FiUser className="section-icon" /> Account & Access</h3>
                        <article>
                            <h4>Do I need an account?</h4>
                            <p>Some features require an account, while others are accessible publicly.</p>
                        </article>
                        <article>
                            <h4>How do I create an account?</h4>
                            <p>Account creation is simple and guided. Only essential information is requested.</p>
                        </article>
                        <article>
                            <h4>I forgot my password. What should I do?</h4>
                            <p>Use the password recovery option on the login page and follow the instructions.</p>
                        </article>
                        <article>
                            <h4>Is my account data safe?</h4>
                            <p>Yes. Account security and privacy are core priorities at NexUP.</p>
                        </article>
                    </section>

                    {/* --- Section 3: Platform Features --- */}
                    <section className="policy-section">
                        <h3><FiGlobe className="section-icon" /> Platform Features</h3>
                        <article>
                            <h4>What features does NexUP offer?</h4>
                            <p>NexUP provides tools and systems for:</p>
                            <ul className="sub-list">
                                <li>Digital exploration</li>
                                <li>AI-powered creation</li>
                                <li>Spatial environments</li>
                                <li>Learning and collaboration</li>
                            </ul>
                        </article>
                        <article>
                            <h4>Are features still under development?</h4>
                            <p>Yes. NexUP is actively evolving. Some features may be released gradually as part of our long-term roadmap.</p>
                        </article>
                    </section>

                    {/* --- Section 4: NexUP Ecosystem Overview --- */}
                    <section className="policy-section ecosystem-section">
                        <h3>NexUP Ecosystem Overview</h3>
                        <div className="ecosystem-components">
                            <article>
                                <h4>NexWorld</h4>
                                <p>A shared spatial world for interaction, learning, creation, and experience.</p>
                            </article>
                            <article>
                                <h4>NexEngine</h4>
                                <p>The creation engine used to build worlds, environments, and digital experiences using AI-assisted tools.</p>
                            </article>
                            <article>
                                <h4>NexNodes</h4>
                                <p>The backend infrastructure that connects and powers the NexUP ecosystem.</p>
                            </article>
                            <article>
                                <h4>NexHousing</h4>
                                <p>Digital spaces and structures designed for persistent virtual presence.</p>
                            </article>
                            <article>
                                <h4>NexSearch</h4>
                                <p>A discovery and navigation system for the NexUP universe.</p>
                            </article>
                        </div>
                        <p className="statement">Each component works together to form one connected ecosystem.</p>
                    </section>

                    {/* --- Section 5: Safety, Trust & Privacy --- */}
                    <section className="policy-section">
                        <h3><FiShield className="section-icon" /> Safety, Trust & Privacy</h3>
                        <article>
                            <h4>How does NexUP handle user data?</h4>
                            <p>We follow privacy-first principles and collect only what is necessary.</p>
                        </article>
                        <article>
                            <h4>Is NexUP safe to use?</h4>
                            <p>Yes. Safety, ethical design, and responsible technology use are core to NexUP’s philosophy.</p>
                        </article>
                        <article>
                            <h4>Where can I learn more?</h4>
                            <p>Please visit our <Link to="/safety/trust" className="inline-link">Trust</Link>, Privacy, and Safety Guidelines pages for detailed information.</p>
                        </article>
                    </section>

                    {/* --- Section 6: Troubleshooting & Common Issues --- */}
                    <section className="policy-section">
                        <h3><FiAlertTriangle className="section-icon" /> Troubleshooting & Common Issues</h3>
                        <article>
                            <h4>The site isn’t loading properly</h4>
                            <ul className="sub-list">
                                <li>Check your internet connection</li>
                                <li>Refresh the page</li>
                                <li>Try another browser or device</li>
                            </ul>
                        </article>
                        <article>
                            <h4>I found a bug</h4>
                            <p>Please report it through the <Link to="/feedback" className="inline-link">Feedback page</Link> so our team can investigate.</p>
                        </article>
                        <article>
                            <h4>Something doesn’t make sense</h4>
                            <p>We’re improving documentation continuously. Your feedback helps.</p>
                        </article>
                    </section>

                    {/* --- Section 10: Help Center Principles --- */}
                    <section className="policy-section principle-section">
                        <h3>Help Center Principles</h3>
                        <p>The NexUP Help Center is built on:</p>
                        <ul>
                            <li>Clarity over complexity</li>
                            <li>Honesty over hype</li>
                            <li>Helpfulness over automation</li>
                            <li>Trust over manipulation</li>
                        </ul>
                        <p className="statement">We do not hide information behind confusing language.</p>
                    </section>

                    {/* --- Section 11: Future Improvements --- */}
                    <section className="policy-section future-section">
                        <h3>Future Improvements</h3>
                        <p>Planned enhancements include:</p>
                        <ul className="sub-list">
                            <li>Searchable help articles</li>
                            <li>Step-by-step guides</li>
                            <li>Visual walkthroughs</li>
                            <li>In-world help inside NexWorld</li>
                            <li>Community-driven knowledge base</li>
                        </ul>
                    </section>

                    {/* --- Section 7: Contact & Support & Final Message --- */}
                    <section className="policy-section contact-final-section">
                        <h3>Contact & Support</h3>
                        <p>If you cannot find the answer you’re looking for:</p>
                        <ul>
                            <li>Use the <Link to="/feedback" className="inline-link">Feedback page</Link> for suggestions or issues</li>
                            <li>Use the Contact page for official communication</li>
                            <li>For trust or safety concerns, reach out through designated channels</li>
                        </ul>
                        <p className="contact-callout">We aim to respond responsibly and transparently.</p>
                        
                        <div className="final-message">
                            <h4 className="final-heading">Final Message</h4>
                            <p>If something feels unclear, confusing, or broken — that’s on us, not you.</p>
                            <p>The NexUP Help Center exists to make sure you’re never stuck alone while exploring the future we’re building together.</p>
                        </div>
                    </section>
                    
                    {/* Contact Button */}
                    <div className="contact-queries-section">
                        <p>For official communication or urgent support queries, use our contact channel.</p>
                        <Link to="/contact" className="contact-button-link">
                            <FiPhone /> Contact Support Team
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Help;