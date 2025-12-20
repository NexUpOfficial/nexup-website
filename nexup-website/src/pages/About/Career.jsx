// src/pages/About/Career.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// All specific React icon imports are removed for a cleaner, professional look.
import "../../page-styles/About/Career.css";
import Footer from "../../components/Footer/Footer";

const Career = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper for structured sections
    // Icon prop is removed as icons are no longer used
    const Section = ({ id, title, children }) => (
        <section className="policy-section scroll-target" id={id}>
            <h3>{title}</h3>
            {children}
        </section>
    );

    // Reusable Apply Button Component
    const ApplyButton = ({ text, role }) => (
        <Link 
            to={`/contact#job-application`} 
            className="apply-button"
            state={{ role: role }} 
        >
            {text}
        </Link>
    );

    return (
        <div className="career-page">
            <main className="career-main-content">
                <div className="career-document">
                    
                    <header className="document-header">
                        <h1>Careers at NexUP</h1>
                        <h2 className="subtitle">Building the Next Digital Worlds — Together</h2>
                    </header>
                    
                    <p className="introduction">
                        At NexUP, we are building more than a platform. We are designing persistent AI-powered virtual worlds, immersive systems, and spatial experiences that will define how people learn, work, create, and connect in the future.
                    </p>
                    <p className="statement-header">
                        If you are driven by curiosity, responsibility, and the desire to build meaningful technology — NexUP is a place where your work can truly matter.
                    </p>


                    {/* 1. Why Work at NexUP? */}
                    <Section id="why-work" title="Why Work at NexUP?">
                        <p>NexUP is not a traditional company. We operate at the intersection of AI, AR/VR, infrastructure, and world-scale systems.</p>
                        <p>Working here means:</p>
                        <ul>
                            <li>Shaping early foundations of a long-term platform</li>
                            <li>Solving problems that don’t yet have templates</li>
                            <li>Building responsibly for a future that affects real people</li>
                            <li>Growing alongside the product, not just inside a role</li>
                        </ul>
                    </Section>

                    {/* 2. Our Core Values */}
                    <Section id="core-values" title="Our Core Values">
                        <div className="values-grid">
                            <article>
                                <h4>People Before Technology</h4>
                                <p>We build systems that serve humanity, enhance creativity, and improve real lives — not extract attention or exploit behavior.</p>
                            </article>
                            <article>
                                <h4>Thoughtful Curiosity</h4>
                                <p>We accept that no one has all the answers. We stay open to learning, questioning assumptions, and improving through feedback.</p>
                            </article>
                            <article>
                                <h4>Responsibility at Scale</h4>
                                <p>AI and immersive worlds have deep impact. We approach our work with seriousness, care, and awareness of long-term consequences.</p>
                            </article>
                            <article>
                                <h4>Build With Optimism</h4>
                                <p>We believe the future can be better — and we actively work toward it. Our products should feel empowering, inspiring, and meaningful.</p>
                            </article>
                        </div>
                    </Section>

                    {/* 3. How We Work (Operating Principles) */}
                    <Section id="how-we-work" title="How We Work (Operating Principles)">
                        <div className="principles-list">
                            <article>
                                <h4>Find the Path Forward</h4>
                                <p>We don’t wait for perfect conditions. We experiment, adapt, and move forward with intention. Good ideas can come from anyone.</p>
                            </article>
                            <article>
                                <h4>Creativity Over Rigidity</h4>
                                <p>We favor thoughtful solutions over strict processes. We use first-principles thinking, not bureaucracy.</p>
                            </article>
                            <article>
                                <h4>Learn Fast, Improve Faster</h4>
                                <p>We test ideas, listen carefully, and evolve quickly. Changing your mind based on evidence is a strength here.</p>
                            </article>
                            <article>
                                <h4>Deep Focus, Real Impact</h4>
                                <p>Clear priorities and ownership allow us to build things that truly matter.</p>
                            </article>
                        </div>
                    </Section>

                    {/* 4. What We’re Building */}
                    <Section id="what-we-build" title="What We’re Building">
                        <p>At NexUP, you may work on:</p>
                        <ul>
                            <li>AI-assisted world creation tools</li>
                            <li>Virtual environments and spatial UX</li>
                            <li>Backend systems (NexNodes) powering persistent worlds</li>
                            <li>Search and discovery for virtual ecosystems</li>
                            <li>Infrastructure for large-scale immersive platforms</li>
                            <li>Ethical AI systems integrated into creative workflows</li>
                        </ul>
                        <p className="priority-note">This is early-stage, foundational work with long-term impact.</p>
                    </Section>

                    {/* 5. Teams & Roles (Direct link to Contact Page) */}
                    <Section id="teams-roles" title="Teams & Roles">
                        <div className="roles-container">
                            
                            <div className="role-card">
                                <h4>Engineering</h4>
                                <ul>
                                    <li>Frontend (Web, VR interfaces)</li>
                                    <li>Backend & Infrastructure</li>
                                    <li>Real-time systems</li>
                                    <li>AI & ML integration</li>
                                </ul>
                                <ApplyButton text="Apply for Engineering Roles" role="Engineering" />
                            </div>

                            <div className="role-card">
                                <h4>Design & Experience</h4>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Spatial & interaction design</li>
                                    <li>World-building aesthetics</li>
                                </ul>
                                <ApplyButton text="Apply for Design Roles" role="Design" />
                            </div>

                            <div className="role-card">
                                <h4>AI & Research</h4>
                                <ul>
                                    <li>Applied AI</li>
                                    <li>Intelligent agents</li>
                                    <li>Simulation & generative systems</li>
                                </ul>
                                <ApplyButton text="Apply for AI & Research Roles" role="AI & Research" />
                            </div>

                            <div className="role-card">
                                <h4>Product & Strategy</h4>
                                <ul>
                                    <li>Product management</li>
                                    <li>Platform thinking</li>
                                    <li>Ecosystem design</li>
                                </ul>
                                <ApplyButton text="Apply for Product Roles" role="Product" />
                            </div>
                            
                            <div className="role-card">
                                <h4>Community & Operations</h4>
                                <ul>
                                    <li>Community building</li>
                                    <li>Support systems</li>
                                    <li>Trust & safety operations</li>
                                </ul>
                                <ApplyButton text="Apply for Community Roles" role="Community" />
                            </div>
                            
                        </div>
                    </Section>

                    {/* 6. Benefits & Growth */}
                    <Section id="benefits" title="Benefits & Growth">
                        <p>While NexUP is evolving, we focus on:</p>
                        <ul>
                            <li>Meaningful, high-impact work</li>
                            <li>Learning alongside cutting-edge technology</li>
                            <li>Direct ownership and responsibility</li>
                            <li>Transparent communication</li>
                            <li>Growth through real contribution</li>
                        </ul>
                        <p className="priority-note">More formal benefits will evolve as the platform grows.</p>
                    </Section>
                    
                    {/* 7. Who Should Join NexUP? */}
                    <Section id="who-should-join" title="Who Should Join NexUP?">
                        <p>You may belong here if you:</p>
                        <ul>
                            <li>Care deeply about the future of technology</li>
                            <li>Want to build AI and virtual worlds responsibly</li>
                            <li>Prefer long-term impact over short-term hype</li>
                            <li>Are comfortable working in evolving environments</li>
                            <li>Take ownership of your work</li>
                        </ul>
                        <p className="statement">Titles matter less than mindset and integrity.</p>
                    </Section>
                    
                    {/* 8. How to Apply */}
                    <section className="policy-section final-section" id="how-to-apply">
                        <h3>How to Apply</h3>
                        <p>We keep the process simple and respectful. All applications are handled via our <Link to="/contact" className="inline-link">Contact Page</Link>.</p>
                        <ol>
                            <li>Choose a role or team (via the buttons above)</li>
                            <li>Share your resume or portfolio</li>
                            <li>Tell us briefly why you want to build NexUP with us</li>
                        </ol>
                        <p>**Resume upload is supported** on the Job Application form.</p>
                        <p>Your data is handled securely.</p>
                        
                        <div className="final-message-box">
                            <p>NexUP is still being built — and so is our team.</p>
                            <p>If the idea of shaping AI-powered worlds excites you, and you want to build something meaningful from the ground up — We’d love to hear from you.</p>
                        </div>
                    </section>
                    

                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Careers at NexUP — Build the future of AI-powered virtual worlds.
            </Footer>
            
        </div>
    );
};

export default Career;