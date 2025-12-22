// src/pages/Safety/Approach.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../page-styles/Safety/Approach.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ id, title, children }) => (
    <section className="policy-section scroll-target" id={id}>
        <h3>{title}</h3>
        {children}
    </section>
);

const Approach = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to handle "Go Back" action
    const handleGoBack = () => {
        // Use browser history go back, since we don't know the exact previous route
        window.history.back();
    };

    return (
        <div className="approach-page">
            <main className="approach-main-content">
                
                {/* *** REVISED PAGE INDICATOR WITH BACK ARROW AND TOOLTIP *** */}
                <div className="page-indicator-container">
                    {/* Back Arrow Link with Tooltip */}
                    <Link 
                        to="#" 
                        onClick={handleGoBack} 
                        className="back-arrow"
                        aria-label="Go Back"
                        data-tooltip="Go Back" // Custom attribute for CSS tooltip
                    >
                        {/* Left arrow Unicode character */}
                        &#x2190; 
                    </Link>
                    
                    {/* Page Indicator Text */}
                    <div className="page-indicator">
                        <p>Approach</p>
                    </div>
                </div>
                
                <div className="approach-document">
                    
                    <header className="document-header">
                        <h1>How We Build at NexUP</h1>
                        <h2 className="subtitle">Operating Framework for Responsible Spatial Computing</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP is building a long-term spatial computing platform that combines AI, immersive environments, and digital infrastructure. Our approach defines how we make decisions, how we design systems, and how we balance innovation with responsibility.
                    </p>
                    <p className="statement-header">
                        This approach guides every product, system, and interaction we create.
                    </p>

                    
                    {/* Core Principles (Sections omitted for brevity, unchanged) */}
                    <Section id="long-term" title="Build for the Long Term">
                        <p>We design NexUP with years in mind, not short-term trends.</p>
                        <ul>
                            <li>Systems are built to evolve, not be replaced.</li>
                            <li>Architectural decisions prioritize stability and extensibility.</li>
                            <li>Short-term convenience is never allowed to compromise long-term trust.</li>
                        </ul>
                        <p className="priority-note">We believe sustainable platforms require patience and clarity.</p>
                    </Section>

                    <Section id="responsibility" title="Responsibility First">
                        <p>Advanced technologies like AI and immersive worlds carry real consequences.</p>
                        <ul>
                            <li>We assess risks alongside opportunities.</li>
                            <li>Safety and ethics are considered early, not retrofitted.</li>
                            <li>We avoid design choices that exploit users or manipulate behavior.</li>
                        </ul>
                        <p className="priority-note">Progress without responsibility is not progress.</p>
                    </Section>

                    {/* ... (Remaining Sections and Footer unchanged) ... */}
                    <Section id="human-centered" title="Human-Centered Design">
                        <p>Technology should feel understandable, empowering, and respectful.</p>
                        <ul>
                            <li>Interfaces are designed to reduce friction, not add complexity.</li>
                            <li>AI assists human creativity rather than replacing it.</li>
                            <li>User autonomy and consent are central to system behavior.</li>
                        </ul>
                        <p className="priority-note">We build for people, not metrics.</p>
                    </Section>

                    <Section id="systems-thinking" title="Systems Thinking">
                        <p>NexUP is not a collection of isolated features.</p>
                        <ul>
                            <li>Every component is designed to work as part of a larger ecosystem.</li>
                            <li>Backend infrastructure, tools, and experiences are tightly aligned.</li>
                            <li>Changes in one system are evaluated for ecosystem-wide impact.</li>
                        </ul>
                        <p className="priority-note">This ensures coherence as the platform grows.</p>
                    </Section>

                    <Section id="adaptive" title="Iterative and Adaptive">
                        <p>We believe in learning through real usage.</p>
                        <ul>
                            <li>Ideas are tested thoughtfully.</li>
                            <li>Feedback is taken seriously.</li>
                            <li>Assumptions are revisited when evidence changes.</li>
                        </ul>
                        <p className="priority-note">Being willing to adapt is a strength, not a weakness.</p>
                    </Section>

                    <Section id="clarity" title="Clarity Over Complexity">
                        <p>We aim to make advanced technology approachable.</p>
                        <ul>
                            <li>Simple explanations over technical jargon.</li>
                            <li>Clear documentation over hidden behavior.</li>
                            <li>Predictable systems over surprising ones.</li>
                        </ul>
                        <p className="priority-note">If something feels confusing, we treat that as a design problem.</p>
                    </Section>
                    
                    <Section id="communication" title="Open Communication">
                        <p>Transparency builds trust.</p>
                        <ul>
                            <li>We communicate platform changes clearly.</li>
                            <li>We explain the reasoning behind important decisions.</li>
                            <li>We acknowledge uncertainty when answers are not final.</li>
                        </ul>
                        <p className="priority-note">Honest communication is part of responsible engineering.</p>
                    </Section>

                    <Section id="security-privacy" title="Security and Privacy by Design">
                        <p>Protection is built into the foundation.</p>
                        <ul>
                            <li>Privacy-first data handling.</li>
                            <li>Secure infrastructure practices.</li>
                            <li>Continuous evaluation of threats and safeguards.</li>
                        </ul>
                        <p className="priority-note">Trust is protected through deliberate engineering choices.</p>
                    </Section>

                    <Section id="growth" title="Thoughtful Growth">
                        <p>Growth is meaningful only when it is healthy.</p>
                        <ul>
                            <li>We scale carefully.</li>
                            <li>We avoid growth that harms user experience or safety.</li>
                            <li>We prioritize quality of engagement over volume.</li>
                        </ul>
                        <p className="priority-note">Not everything that can grow should grow fast.</p>
                    </Section>

                    {/* Final Summary Section */}
                    <section className="policy-section final-section" id="how-this-shapes-nexup">
                        <h3>How This Shapes NexUP</h3>
                        <p>This approach influences:</p>
                        <ul>
                            <li>Product design decisions</li>
                            <li>AI system behavior</li>
                            <li>Platform policies and guidelines</li>
                            <li>Hiring and team culture</li>
                            <li>Long-term roadmap planning</li>
                        </ul>
                        <p className="statement">It is not just a philosophy — it is an operating framework.</p>
                    </section>
                    
                    <section className="policy-section final-section" id="looking-forward">
                        <h3>Looking Forward</h3>
                        <p>The future of computing will be immersive, intelligent, and deeply integrated into daily life.</p>
                        <div className="final-message-box">
                            <p>NexUP’s approach ensures that as this future takes shape, it remains human-centered, responsible, and worth trusting.</p>
                        </div>
                    </section>

                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Our Approach — How NexUP builds responsibly for the future.
            </Footer>
            
        </div>
    );
};

export default Approach;