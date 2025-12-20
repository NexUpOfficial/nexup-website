// src/pages/About/Company.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/Company.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ id, title, children }) => (
    <section className="policy-section scroll-target" id={id}>
        <h3>{title}</h3>
        {children}
    </section>
);

const Company = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="company-page">
            <main className="company-main-content">
                <div className="company-document">
                    
                    {/* NEW: Minimal "Company" Text Bar */}
                    <div className="top-title-bar">
                        <p>Company</p>
                    </div>
                    
                    <header className="document-header">
                        <h1>About NexUP</h1>
                        <h2 className="subtitle">The Foundation for the Next Digital Worlds</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP is a technology company building a long-term spatial computing platform that blends AI, immersive environments, and digital infrastructure into a unified ecosystem.
                    </p>
                    <p className="statement-header">
                        We are focused on creating systems that allow people to build, explore, learn, and collaborate inside persistent digital worlds — responsibly and at scale. NexUP is not a short-term product.
                    </p>


                    {/* 1. What We Do */}
                    <Section id="what-we-do" title="What We Do">
                        <p>NexUP designs and develops technologies across:</p>
                        <ul>
                            <li>AI-powered creation tools</li>
                            <li>Virtual and spatial environments</li>
                            <li>Platform infrastructure for persistent worlds</li>
                            <li>Search and discovery inside digital ecosystems</li>
                            <li>Systems that support learning, work, and community interaction</li>
                        </ul>
                        <p className="priority-note">Everything we build is designed to work together as one connected ecosystem, not isolated products.</p>
                    </Section>

                    {/* 2. Our Mission */}
                    <Section id="our-mission" title="Our Mission">
                        <p>To build a responsible, human-centered spatial computing platform that empowers people to create, connect, and grow in digital worlds.</p>
                        <p className="statement">We aim to make advanced technology useful, accessible, and meaningful — not overwhelming or exploitative.</p>
                    </Section>

                    {/* 3. Our Vision */}
                    <Section id="our-vision" title="Our Vision">
                        <p>We envision a future where:</p>
                        <ul>
                            <li>Digital spaces feel natural and empowering</li>
                            <li>AI supports creativity instead of replacing it</li>
                            <li>Virtual worlds are persistent, interoperable, and purposeful</li>
                            <li>Technology respects human values and societal impact</li>
                        </ul>
                        <p className="priority-note">NexUP exists to help shape that future — thoughtfully and responsibly.</p>
                    </Section>

                    {/* 4. How We Think */}
                    <Section id="how-we-think" title="How We Think (Our Core Beliefs)">
                        <p>Our approach is guided by a few core beliefs:</p>
                        <div className="beliefs-list">
                            <article>
                                <h4>Long-term over short-term</h4>
                                <p>We build with years in mind, not trends.</p>
                            </article>
                            <article>
                                <h4>Responsibility over speed</h4>
                                <p>Moving fast matters, but building right matters more.</p>
                            </article>
                            <article>
                                <h4>Clarity over complexity</h4>
                                <p>Technology should explain itself.</p>
                            </article>
                            <article>
                                <h4>People before platforms</h4>
                                <p>Human well-being always comes first.</p>
                            </article>
                        </div>
                    </Section>
                    
                    {/* 5. The NexUP Ecosystem */}
                    <Section id="ecosystem" title="The NexUP Ecosystem (The Platform)">
                        <p>NexUP is composed of multiple interconnected systems:</p>
                        <ul>
                            <li>**NexWorld** — shared digital and spatial environments</li>
                            <li>**NexEngine** — tools to build and publish worlds</li>
                            <li>**NexNodes** — backend infrastructure powering the platform</li>
                            <li>**NexHousing** — persistent digital spaces and structures</li>
                            <li>**NexSearch** — discovery and navigation across the ecosystem</li>
                        </ul>
                        <p className="statement">Together, these form a single evolving platform.</p>
                    </Section>

                    {/* 6. Our Stage */}
                    <Section id="our-stage" title="Our Stage">
                        <p>NexUP is actively evolving.</p>
                        <p>Some systems are in early development, others are being refined, and new ideas are continuously explored. We believe in building openly, learning fast, and improving continuously.</p>
                        <p className="priority-note">Progress is intentional, not rushed.</p>
                    </Section>

                    {/* 7. Trust & Responsibility */}
                    <Section id="trust-responsibility" title="Trust & Responsibility (Our Commitment)">
                        <p>Trust is foundational to NexUP. We are committed to:</p>
                        <ul>
                            <li>Privacy-first design</li>
                            <li>Ethical use of AI</li>
                            <li>Transparent communication</li>
                            <li>Safe and respectful digital spaces</li>
                        </ul>
                        <p className="priority-note">These principles influence every technical and business decision we make.</p>
                    </Section>

                    {/* 8. Who We Build For */}
                    <Section id="who-we-build-for" title="Who We Build For (Target Audience)">
                        <p>NexUP is built for:</p>
                        <ul>
                            <li>Learners and educators</li>
                            <li>Developers and creators</li>
                            <li>Communities and organizations</li>
                            <li>Future builders of digital worlds</li>
                        </ul>
                        <p className="statement">Anyone who believes technology can be both powerful and responsible.</p>
                    </Section>
                    
                    {/* 9. Looking Ahead */}
                    <section className="policy-section final-section" id="looking-ahead">
                        <h3>Looking Ahead</h3>
                        <p>The future of computing will be immersive, intelligent, and interconnected.</p>
                        <div className="final-message-box">
                            <p>NexUP is building toward that future — carefully, openly, and with purpose.</p>
                        </div>
                    </section>
                    

                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Company — Learn about NexUP, our mission, and the future we are building.
            </Footer>
            
        </div>
    );
};

export default Company;