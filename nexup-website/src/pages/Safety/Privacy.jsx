// src/pages/Safety/Privacy.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/Safety/Privacy.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ id, title, children }) => (
    <section className="policy-section scroll-target" id={id}>
        <h3>{title}</h3>
        {children}
    </section>
);

const Privacy = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <main className="privacy-main-content">
                <div className="privacy-document">
                    
                    <header className="document-header">
                        <h1>NexUP Privacy & Data Protection Guide</h1>
                        <h2 className="subtitle">Our Commitment to Privacy and Trust</h2>
                    </header>
                    
                    <p className="introduction">
                        At NexUP, privacy is a core design principle, not a feature added later.
                    </p>
                    <p className="statement-header">
                        We recognize that building AI-powered and immersive digital environments requires deep responsibility in how user data is handled, protected, and respected. This document explains what data we collect, why we collect it, how it is used, and how it is protected — transparently and honestly.
                    </p>

                    
                    {/* 1. Scope of This Guide (Alignment with Terms) */}
                    <Section id="scope" title="1. Scope of This Guide">
                        <p>This Privacy & Data Guide applies to:</p>
                        <ul>
                            <li>The NexUP website</li>
                            <li>User accounts and profiles</li>
                            <li>Feedback, contact, and job application submissions</li>
                            <li>Future NexUP platforms, including AI systems and immersive environments</li>
                            <li>Any services, tools, or experiences provided under NexUP</li>
                        </ul>
                        <p className="priority-note">By using NexUP, users agree to the practices described here.</p>
                    </Section>

                    {/* 2. Core Privacy Principles (GDPR/IT Act Alignment) */}
                    <Section id="principles" title="2. Core Privacy Principles">
                        <p>All data practices at NexUP follow these principles:</p>
                        <ul>
                            <li>Minimal collection — collect only what is necessary</li>
                            <li>Purpose limitation — use data only for clear, defined reasons</li>
                            <li>User control — respect consent and choice</li>
                            <li>Security by design — protect data at every layer</li>
                            <li>Transparency — no hidden data usage</li>
                        </ul>
                        <p className="priority-note">Privacy decisions are reviewed continuously as the platform evolves.</p>
                    </Section>

                    {/* 3. Types of Data We May Collect */}
                    <Section id="data-collected" title="3. Types of Data We May Collect">
                        <h4>A. Information You Provide Directly</h4>
                        <ul>
                            <li>Name and email address (when provided)</li>
                            <li>Contact messages and feedback</li>
                            <li>Job application details and resumes</li>
                            <li>Optional profile information</li>
                        </ul>
                        <p>Providing this information is voluntary unless required for a specific service.</p>

                        <h4>B. Technical & Usage Data</h4>
                        <ul>
                            <li>Device and browser information</li>
                            <li>Pages visited and basic usage patterns</li>
                            <li>Error logs and performance metrics</li>
                        </ul>
                        <p>This data helps improve reliability, performance, and user experience.</p>

                        <h4>C. Future Platform Data (Planned)</h4>
                        <p>As NexUP expands into AI and spatial environments:</p>
                        <ul>
                            <li>Interaction data within virtual spaces</li>
                            <li>AI-assisted creation inputs</li>
                            <li>System performance signals</li>
                        </ul>
                        <p className="priority-note">This data will always follow the same privacy principles outlined here.</p>
                    </Section>

                    {/* 4. What We Do NOT Collect */}
                    <Section id="data-not-collected" title="4. What We Do NOT Collect">
                        <p>To be explicit, NexUP does not:</p>
                        <ul>
                            <li>Sell personal data</li>
                            <li>Track users across unrelated platforms</li>
                            <li>Collect unnecessary sensitive personal data</li>
                            <li>Use hidden surveillance techniques</li>
                            <li>Profile users for manipulation or exploitation</li>
                        </ul>
                        <p className="priority-note">If a feature requires sensitive data in the future, it will be clearly disclosed.</p>
                    </Section>

                    {/* 5. How We Use Data */}
                    <Section id="data-use" title="5. How We Use Data">
                        <p>User data may be used to:</p>
                        <ul>
                            <li>Operate and maintain NexUP services</li>
                            <li>Respond to inquiries and applications</li>
                            <li>Improve product performance and usability</li>
                            <li>Ensure security and prevent abuse</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        <p className="statement">Data is never used for deceptive, exploitative, or unethical purposes.</p>
                    </Section>

                    {/* 6. AI, Automation & Data Use */}
                    <Section id="ai-data" title="6. AI, Automation & Data Use">
                        <p>NexUP uses AI responsibly.</p>
                        <ul>
                            <li>AI systems are designed to assist users, not manipulate them.</li>
                            <li>User data is not used to train AI models without proper safeguards.</li>
                            <li>Automated decisions that significantly affect users are avoided or clearly explained.</li>
                        </ul>
                        <p className="priority-note">Human oversight remains a core requirement.</p>
                    </Section>

                    {/* 7. Data Storage & Security (GDPR/IT Act Requirement) */}
                    <Section id="storage-security" title="7. Data Storage & Security">
                        <p>We take data security seriously.</p>
                        <ul>
                            <li>Secure storage systems</li>
                            <li>Access controls and role-based permissions</li>
                            <li>Encryption where appropriate</li>
                            <li>Regular security reviews and updates</li>
                        </ul>
                        <p className="priority-note">While no system is risk-free, we actively work to minimize threats and respond responsibly to incidents.</p>
                    </Section>

                    {/* 8. Data Retention Policy */}
                    <Section id="retention" title="8. Data Retention Policy">
                        <p>Data is kept only as long as necessary</p>
                        <ul>
                            <li>Job application data is retained for recruitment purposes only.</li>
                            <li>Feedback and contact data is retained to improve services.</li>
                            <li>Inactive or outdated data may be securely deleted.</li>
                        </ul>
                        <p className="priority-note">Retention periods may evolve but will always follow minimal-data principles.</p>
                    </Section>

                    {/* 9. User Rights & Control (GDPR Alignment) */}
                    <Section id="user-rights" title="9. User Rights & Control">
                        <p>Users have the right to:</p>
                        <ul>
                            <li>Request access to their data</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of their data (where applicable)</li>
                            <li>Withdraw consent for optional data usage</li>
                        </ul>
                        <p className="statement">Requests can be made through official NexUP contact channels.</p>
                    </Section>

                    {/* 10. Cookies & Tracking Technologies */}
                    <Section id="cookies" title="10. Cookies & Tracking Technologies">
                        <p>NexUP uses limited cookies where necessary</p>
                        <ul>
                            <li>Cookies support basic functionality and performance.</li>
                            <li>No aggressive or cross-site tracking cookies are used.</li>
                        </ul>
                        <p className="priority-note">Detailed cookie behavior may be explained separately if required.</p>
                    </Section>
                    
                    {/* 11. Third-Party Services */}
                    <Section id="third-party" title="11. Third-Party Services">
                        <p>NexUP may use trusted third-party services for:</p>
                        <ul>
                            <li>Hosting</li>
                            <li>Analytics</li>
                            <li>Email communication</li>
                            <li>Security monitoring</li>
                        </ul>
                        <p className="priority-note">These providers are selected carefully and are expected to meet strong privacy standards.</p>
                    </Section>
                    
                    {/* 12. Legal Compliance */}
                    <Section id="legal-compliance" title="12. Legal Compliance">
                        <p>NexUP aims to comply with applicable data protection laws, including:</p>
                        <ul>
                            <li>Local data protection regulations</li>
                            <li>International privacy standards (where applicable)</li>
                        </ul>
                        <p className="priority-note">As laws evolve, NexUP will adapt its practices responsibly.</p>
                    </Section>

                    {/* 13. Children & Minors */}
                    <Section id="minors" title="13. Children & Minors">
                        <p>NexUP does not knowingly collect personal data from minors without appropriate safeguards.</p>
                        <p className="priority-note">If such data is discovered, it will be handled or removed responsibly.</p>
                    </Section>

                    {/* 14. Policy Updates */}
                    <Section id="policy-updates" title="14. Policy Updates">
                        <p>This guide may be updated as NexUP evolves</p>
                        <ul>
                            <li>Significant changes will be communicated clearly.</li>
                            <li>Continued use of NexUP implies acceptance of updated practices.</li>
                        </ul>
                        <p className="priority-note">Transparency remains a priority.</p>
                    </Section>

                    {/* 15. Final Statement */}
                    <section className="policy-section final-section" id="final-statement">
                        <h3>15. Final Statement</h3>
                        <p>Privacy is foundational to trust.</p>
                        <div className="final-message-box">
                            <p>NexUP is committed to building technology that respects people, protects data, and earns confidence over time. If something feels unclear, we believe that clarity is our responsibility — not yours.</p>
                        </div>
                    </section>
                    

                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Privacy & Data — How NexUP protects your information responsibly.
            </Footer>
            
        </div>
    );
};

export default Privacy;