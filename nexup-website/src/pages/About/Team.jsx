// src/pages/About/Team.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/Team.css";
import Footer from "../../components/Footer/Footer"; // The main Footer component

// Helper for standard descriptive sections
const Section = ({ title, children, className = '' }) => (
    <section className={`team-section ${className}`}>
        <h3>{title}</h3>
        {children}
    </section>
);

// NEW/REINTRODUCED: Join the Team CTA Section (Styled using NexUP aesthetic)
const JoinTheTeamCTA = () => (
    <section className="join-team-cta">
        <h3>Build with Us</h3>
        <p>
            If you are driven by the ambition to build responsible, long-term spatial systems, we welcome your inquiry. We are looking for people who prioritize impact and integrity.
        </p>
        <div className="cta-buttons-group">
            <Link to="/about/career" className="cta-button primary">
                View Open Roles
            </Link>
            <Link to="/contact" className="cta-button secondary">
                General Inquiries
            </Link>
        </div>
    </section>
);


const Team = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        // The .team-page container should span full width
        <div className="team-page">
            
            {/* The main content area where width is restricted (e.g., to 720px) */}
            <main className="team-main-content">
                <div className="team-document">
                    
                    <header className="document-header">
                        <h1>Our Team</h1>
                        <h2 className="subtitle">The People Behind NexUP</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP is built by people who believe that technology should be purposeful, responsible, and human-centered.
                    </p>
                    <p className="statement-header">
                        Our team brings together individuals from diverse backgrounds who share a common goal: to build meaningful digital and spatial experiences that last. We are not defined by titles alone — we are defined by how we think, how we build, and how we treat responsibility.
                    </p>

                    {/* Core Team section */}
                    <Section title="Core Team">
                        <p>
                            NexUP is currently built by a small, focused founding team.
                        </p>
                        <p>
                            Roles are intentionally fluid, and responsibilities evolve
                            as the system architecture develops.
                        </p>
                        <p className="priority-note">
                            Individual profiles will be published as the organization grows.
                        </p>
                    </Section>


                    {/* How We Work Together */}
                    <Section title="How We Work Together">
                        <p>The NexUP team operates with a strong sense of ownership and collaboration.</p>
                        <ul>
                            <li>Small, focused teams</li>
                            <li>Clear responsibility and accountability</li>
                            <li>Open communication and shared learning</li>
                            <li>Respect for different perspectives</li>
                        </ul>
                        <p className="priority-note">We value clarity over hierarchy and collaboration over silos.</p>
                    </Section>

                    {/* Our Culture */}
                    <Section title="Our Culture">
                        <ul>
                            <li>Curiosity-driven problem solving</li>
                            <li>Responsibility-led decision making</li>
                            <li>Long-term thinking over short-term wins</li>
                            <li>Respect for diverse perspectives</li>
                        </ul>
                    </Section>

                    {/* Team Structure */}
                    <Section title="Team Structure">
                        <p>
                            NexUP is organized around capability and impact,
                            not rigid hierarchy.
                        </p>
                        <ul>
                            <li>Engineering & Infrastructure</li>
                            <li>AI & Intelligence</li>
                            <li>Design & Experience</li>
                            <li>Product & Strategy</li>
                            <li>Operations, Trust & Support</li>
                        </ul>
                    </Section>

                    {/* Leadership Philosophy */}
                    <Section title="Leadership Philosophy">
                        <p>Leadership at NexUP is about direction, not control.</p>
                        <p>Leaders are expected to:</p>
                        <ul>
                            <li>Set clear vision and priorities</li>
                            <li>Enable teams rather than micromanage</li>
                            <li>Encourage honest discussion and feedback</li>
                            <li>Take responsibility for outcomes</li>
                        </ul>
                        <p className="statement">Authority exists to support progress, not restrict it.</p>
                    </Section>

                    {/* Growing the Team */}
                    <Section title="Growing the Team">
                        <p>NexUP is evolving, and so is our team.</p>
                        <p>We look for people who:</p>
                        <ul>
                            <li>Care deeply about the future of technology</li>
                            <li>Are comfortable working in evolving environments</li>
                            <li>Take responsibility for their work</li>
                            <li>Value ethics, trust, and long-term impact</li>
                        </ul>
                        <p className="priority-note">Skills matter — but mindset matters more.</p>
                    </Section>
                    
                    {/* Collaboration Beyond NexUP */}
                    <Section title="Collaboration Beyond NexUP">
                        <p>We believe great platforms are built with collaboration.</p>
                        <p>NexUP works with:</p>
                        <ul>
                            <li>Independent creators and developers</li>
                            <li>Researchers and educators</li>
                            <li>Communities and partners</li>
                            <li>Contributors aligned with our values</li>
                        </ul>
                        <p className="priority-note">Building the future is a shared effort.</p>
                    </Section>

                    {/* Transparency & Trust Within the Team */}
                    <Section title="Transparency & Trust Within the Team">
                        <p>We strive to maintain:</p>
                        <ul>
                            <li>Honest internal communication</li>
                            <li>Clear expectations</li>
                            <li>Fair decision-making</li>
                            <li>Respect for individual contributions</li>
                        </ul>
                        <p className="statement">Trust inside the team reflects trust we aim to build outside.</p>
                    </Section>

                    {/* RE-INTRODUCED: CTA Section */}
                    <JoinTheTeamCTA />
                    
                    {/* Looking Ahead (Final concluding section) */}
                    <section className="team-section final-section">
                        <h3>Looking Ahead</h3>
                        <p>As NexUP grows, the team will grow with it — thoughtfully and responsibly.</p>
                        <p>We are committed to building a workplace where:</p>
                        <ul>
                            <li>People do meaningful work</li>
                            <li>Technology serves humanity</li>
                            <li>Long-term vision guides daily action</li>
                        </ul>
                    </section>
                    
                </div>
            </main>
            
            {/* 🛑 CORRECTED: Use self-closing tag for the imported Footer component, 
                and keep it outside of the main content wrapper for full-width layout. */}
            <Footer />
            
        </div>
    );
     <Footer />
};

export default Team;