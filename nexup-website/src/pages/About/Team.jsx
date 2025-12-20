// src/pages/About/Team.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/Team.css";
import Footer from "../../components/Footer/Footer";

// Helper for standard descriptive sections
const Section = ({ title, children, className = '' }) => (
    <section className={`team-section ${className}`}>
        <h3>{title}</h3>
        {children}
    </section>
);

// Helper for colorful blocks (e.g., Culture, Structure)
const TeamBlock = ({ icon, title, description, color }) => (
    <div className="team-block" style={{ '--block-color': color }}>
        <div className="block-icon" style={{ backgroundColor: color }}>
            {icon}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

// NEW: Leadership Bio Component
const LeaderBio = ({ name, title, bio, color }) => (
    <div className="leader-bio-card" style={{ '--leader-color': color }}>
        <div className="leader-photo-placeholder" style={{ backgroundColor: color }}>
            {name.split(' ').map(n => n[0]).join('')} {/* Initials placeholder */}
        </div>
        <div className="leader-info">
            <h4>{name}</h4>
            <p className="leader-title">{title}</p>
            <p className="leader-bio-text">{bio}</p>
        </div>
    </div>
);

// NEW: Join the Team CTA Section
const JoinTheTeamCTA = () => (
    <section className="join-team-cta">
        <h3>Join the Team</h3>
        <p>
            The future of digital worlds requires committed builders, thinkers, and innovators. If you share our commitment to responsible technology, long-term thinking, and human-centered design, we invite you to explore career opportunities at NexUP.
        </p>
        <Link to="/careers" className="cta-button">
            View Open Roles & Apply
        </Link>
    </section>
);


const Team = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="team-page">
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

                    {/* NEW: Leadership Bios Section */}
                    <Section title="Leadership Bios" className="leadership-bios-section">
                        <div className="leadership-grid">
                            <LeaderBio
                                name="Alex Chen"
                                title="Chief Architect & CEO"
                                bio="Alex drives the technical vision for NexUP, focusing on scalable, persistent infrastructure and ethical AI integration. Their background is in spatial computing and large-scale decentralized systems."
                                color="#3498db"
                            />
                            <LeaderBio
                                name="Dr. Elena Rossi"
                                title="Head of Trust & Safety"
                                bio="Dr. Rossi oversees policy, community engagement, and data protection, ensuring NexUP adheres to human-centered design principles and global safety standards."
                                color="#2ecc71"
                            />
                            <LeaderBio
                                name="Kai Nakamura"
                                title="VP of NexEngine Development"
                                bio="Kai leads the team crafting the NexEngine, aiming to democratize world-building through intuitive tools and AI-assisted creation workflows."
                                color="#f39c12"
                            />
                        </div>
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
                    <Section title="Our Culture" className="culture-section">
                        <div className="team-blocks-container">
                            <TeamBlock
                                icon="💡"
                                title="Curiosity-Driven"
                                description="We ask questions, explore ideas, and remain open to learning. No one is expected to know everything."
                                color="#f39c12" 
                            />
                            <TeamBlock
                                icon="🛡️"
                                title="Responsibility-Led"
                                description="AI and immersive technologies have real-world impact. We take that responsibility seriously in every decision."
                                color="#e74c3c" 
                            />
                            <TeamBlock
                                icon="⏳"
                                title="Long-Term Thinking"
                                description="We prioritize sustainable progress over quick wins. Every choice is measured against long-term trust and value."
                                color="#2ecc71" 
                            />
                            <TeamBlock
                                icon="🤝"
                                title="Respect & Inclusion"
                                description="Diverse viewpoints make better systems. We foster an environment where people feel safe to contribute and grow."
                                color="#9b59b6" 
                            />
                        </div>
                    </Section>

                    {/* Team Structure */}
                    <Section title="Team Structure" className="structure-section">
                        <p className="intro-text">NexUP is organized around capability and impact, not rigid hierarchy.</p>
                        <div className="team-blocks-container">
                            <TeamBlock
                                icon="💻"
                                title="Engineering & Infrastructure"
                                description="Building the core systems that power NexUP — from backend infrastructure to real-time platforms."
                                color="#3498db" 
                            />
                            <TeamBlock
                                icon="🧠"
                                title="AI & Intelligence"
                                description="Designing AI systems that assist creativity, learning, and interaction responsibly."
                                color="#f1c40f" 
                            />
                            <TeamBlock
                                icon="🎨"
                                title="Design & Experience"
                                description="Crafting intuitive interfaces and spatial experiences that feel natural and empowering."
                                color="#1abc9c" 
                            />
                            <TeamBlock
                                icon="🗺️"
                                title="Product & Strategy"
                                description="Ensuring that everything we build aligns with the long-term vision and real user needs."
                                color="#d35400" 
                            />
                            <TeamBlock
                                icon="📣"
                                title="Community, Trust & Operations"
                                description="Supporting users, maintaining safety, and ensuring transparency across the platform."
                                color="#c0392b" 
                            />
                        </div>
                    </Section>

                    {/* Leadership Philosophy (Original section remains for context) */}
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

                    {/* Growing the Team (Now directly connects to the CTA) */}
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

                    {/* NEW: CTA Section */}
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
            
            <Footer>
                Our Team — The people building NexUP with responsibility, curiosity, and purpose.
            </Footer>
            
        </div>
    );
};

export default Team;