// src/pages/Safety/Trust.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../../page-styles/Safety/Trust.css";
import Footer from "../../components/Footer/Footer";

const Trust = () => {
    // Ensure the page scrolls to the top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="trust-page">
            <main className="trust-main-content">
                <div className="trust-document">
                    
                    <header className="document-header">
                        <h1 className="title">Trust at NexUP</h1>
                        <h2 className="subtitle">Our Commitment to Trust</h2>
                    </header>
                    
                    <p className="introduction">
                        At NexUP, trust is not an afterthought—it is the foundation of everything we build. As we work toward creating a unified spatial computing ecosystem that blends digital worlds, AI, and immersive technologies, we understand that users place immense trust in our platform.
                        We are committed to earning and maintaining that trust through transparency, security, ethical design, and long-term responsibility.
                    </p>

                    <section className="policy-section">
                        <h3>Transparency & Accountability</h3>
                        <p>We believe users deserve clarity about how platforms operate.</p>
                        <ul>
                            <li>We clearly communicate what NexUP is, what it is not, and how it evolves.</li>
                            <li>Our platform decisions are driven by long-term value, not short-term exploitation.</li>
                            <li>Any major changes to our systems, policies, or data handling practices are communicated openly.</li>
                            <li>We hold ourselves accountable to our community, contributors, and partners.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>User Data Protection & Privacy</h3>
                        <p>Your data belongs to you, not us.</p>
                        <ul>
                            <li>NexUP follows privacy-first principles from day one.</li>
                            <li>We collect only the minimum data necessary to operate and improve our services.</li>
                            <li>User data is never sold or misused.</li>
                            <li>Sensitive information is protected using modern security standards and encryption practices.</li>
                            <li>As NexUP expands into AR/VR and spatial environments, privacy remains a non-negotiable priority.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Security by Design</h3>
                        <p>Security is embedded into NexUP’s architecture—not added later.</p>
                        <ul>
                            <li>Secure authentication mechanisms</li>
                            <li>Role-based access control</li>
                            <li>Continuous monitoring and system integrity checks</li>
                            <li>Protection against unauthorized access and misuse</li>
                            <li>Our infrastructure (including NexNodes and backend systems) is designed to scale securely as the platform grows.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Ethical Technology & AI Responsibility</h3>
                        <p>NexUP is committed to ethical AI and responsible technology use.</p>
                        <ul>
                            <li>AI systems are designed to assist humans, not manipulate or replace human judgment.</li>
                            <li>We actively avoid dark patterns, addictive loops, or exploitative engagement models.</li>
                            <li>User autonomy, consent, and control are core principles of our design philosophy.</li>
                            <li>Technology should empower—not exploit.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Community-Centered Ecosystem</h3>
                        <p>NexUP is not just a platform; it is a community-driven ecosystem.</p>
                        <ul>
                            <li>We respect creators, developers, educators, and learners.</li>
                            <li>Fair recognition and attribution are core values.</li>
                            <li>Abuse, harassment, misinformation, and harmful behavior are not tolerated.</li>
                            <li>Our goal is to create safe, meaningful digital spaces where people can build, learn, and collaborate.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Long-Term Vision & Stability</h3>
                        <p>NexUP is built with a long-term mindset.</p>
                        <ul>
                            <li>We are not chasing trends or short-lived hype.</li>
                            <li>Our vision spans years, not months.</li>
                            <li>Decisions are made to ensure platform continuity, stability, and sustainability.</li>
                            <li>Users can trust that NexUP is being built to last.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Compliance & Legal Responsibility</h3>
                        <p>We respect applicable laws, regulations, and digital rights.</p>
                        <ul>
                            <li>Compliance with data protection and cybersecurity regulations</li>
                            <li>Cooperation with lawful authorities when required</li>
                            <li>Clear policies governing platform usage and responsibilities</li>
                            <li>As regulations evolve, NexUP evolves responsibly with them.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h3>Continuous Improvement</h3>
                        <p>Trust is not static—it must be earned every day.</p>
                        <ul>
                            <li>We regularly review and improve our systems</li>
                            <li>Security practices are updated as threats evolve</li>
                            <li>Feedback from users and partners is taken seriously</li>
                            <li>Mistakes, if they occur, are acknowledged and corrected—not hidden.</li>
                        </ul>
                    </section>

                    <section className="policy-section final-promise">
                        <h3>Our Promise</h3>
                        <p>We promise to:</p>
                        <ul>
                            <li>Put users first</li>
                            <li>Protect privacy and security</li>
                            <li>Act ethically and transparently</li>
                            <li>Build responsibly for the future</li>
                            <li>Never compromise trust for growth</li>
                        </ul>
                        <p className="final-statement">
                            Trust is the backbone of NexUP—and we are committed to protecting it.
                        </p>
                    </section>

                    <section className="policy-contact">
                        <h3>Contact & Trust Concerns</h3>
                        <p>
                            If you have questions, concerns, or suggestions related to trust, safety, or platform integrity, we encourage you to reach out through our official communication channels.
                        </p>
                        <p className="contact-callout">
                            Your voice matters.
                        </p>
                        <Link to="/feedback" className="feedback-button-link">
                           Submit Feedback
                        </Link>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Trust;