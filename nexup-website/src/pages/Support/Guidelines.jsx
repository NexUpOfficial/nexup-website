// src/pages/Support/Guidelines.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    FiUsers, FiHeart, FiThumbsUp, FiAlertOctagon, 
    FiShield, FiZap, FiCopy, FiCpu, 
    FiLock, FiFlag, FiTool, FiRefreshCw, 
    FiBookOpen, FiZapOff // Added FiGavel for legal framing
} from 'react-icons/fi';
import "../../page-styles/Support/Guidelines.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ id, icon: Icon, title, children }) => (
    <section className="policy-section scroll-target" id={id}>
        <h3>{Icon && <Icon className="section-icon" />} {title}</h3>
        {children}
    </section>
);

// NEW: Quick Rules Summary Component
const QuickRulesSummary = () => (
    <div className="quick-rules-summary">
        <h2>NexUP Community Rules (Quick View)</h2>
        <p className="quick-intro">To keep NexUP safe, respectful, and meaningful, all users must follow these rules.</p>

        <div className="quick-rules-grid">
            <div className="rule-item allowed-rule">
                <h4>✅ Be Respectful</h4>
                <ul>
                    <li>Treat everyone with respect</li>
                    <li>No harassment, hate, or abuse</li>
                    <li>Disagree politely, not personally</li>
                </ul>
            </div>
            <div className="rule-item allowed-rule">
                <h4>✅ Share Responsible Content</h4>
                <ul>
                    <li>Educational, creative, and constructive content is welcome</li>
                    <li>No illegal, violent, or harmful material</li>
                    <li>No misleading or deceptive content</li>
                </ul>
            </div>
            <div className="rule-item allowed-rule">
                <h4>✅ Protect Safety & Privacy</h4>
                <ul>
                    <li>Do not exploit, threaten, or impersonate others</li>
                    <li>Do not collect or share personal data without consent</li>
                    <li>Respect anonymity and user boundaries</li>
                </ul>
            </div>
            <div className="rule-item allowed-rule">
                <h4>✅ Use the Platform Fairly</h4>
                <ul>
                    <li>No hacking, system abuse, or automation misuse</li>
                    <li>No fake accounts or spam activity</li>
                    <li>Do not interfere with platform stability</li>
                </ul>
            </div>
            <div className="rule-item allowed-rule">
                <h4>✅ Respect Ownership</h4>
                <ul>
                    <li>Share only content you own or have rights to</li>
                    <li>No plagiarism or copyright violations</li>
                    <li>Credit creators where required</li>
                </ul>
            </div>
            <div className="rule-item zero-tolerance">
                <h4>❌ Zero Tolerance For</h4>
                <ul>
                    <li>Harassment or hate speech</li>
                    <li>Security attacks or system misuse</li>
                    <li>Exploitation, scams, or deception</li>
                    <li>Severe safety or trust violations</li>
                </ul>
            </div>
        </div>
        
        <div className="enforcement-summary">
            <h4>⚠️ Enforcement</h4>
            <p>Violations may lead to: Content removal, Warnings or restrictions, Account suspension or permanent ban.</p>
        </div>
        <p className="priority-note quick-final-note">By using NexUP, you agree to follow these rules.</p>
    </div>
);


const Guidelines = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="guidelines-page">
            <main className="guidelines-main-content">
                <div className="guidelines-document">
                    
                    <header className="document-header">
                        <h1>NexUP Community Guidelines</h1>
                        <h2 className="subtitle">Our Shared Responsibility</h2>
                    </header>
                    
                    {/* NEW: QUICK VIEW SUMMARY (1) */}
                    <QuickRulesSummary />

                    <p className="introduction">
                        NexUP is being built as a long-term spatial computing ecosystem for learning, creation, collaboration, and exploration. To keep NexUP safe, respectful, and meaningful for everyone, all users must follow these guidelines.
                    </p>
                    <p className="statement-header">These rules exist to protect people, not restrict creativity.</p>


                    {/* NEW: LEGAL SECTION (2) - Placed after intro for formal context */}
                    <Section id="legal-alignment" icon={FiShield} title="Legally Aligned With Terms of Service">
                        <h4>Relationship to Terms of Service</h4>
                        <p>These Community Guidelines form an integral part of NexUP’s Terms of Service.</p>
                        <ul>
                            <li>Violation of these guidelines constitutes a violation of the Terms.</li>
                            <li>NexUP reserves the right to enforce these rules at its sole discretion.</li>
                        </ul>
                        
                        <h4>User Obligations</h4>
                        <p>By accessing or using NexUP, users agree to:</p>
                        <ul>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Use the platform responsibly and ethically</li>
                            <li>Respect other users and NexUP infrastructure</li>
                            <li>Follow all published policies, including these Guidelines</li>
                        </ul>
                        
                        <h4>Prohibited Conduct (Legal Framing)</h4>
                        <p>Users must not:</p>
                        <ul>
                            <li>Engage in harassment, abuse, hate speech, or threats</li>
                            <li>Upload illegal, harmful, or deceptive content</li>
                            <li>Attempt unauthorized access, reverse engineering, or system interference</li>
                            <li>Use NexUP for fraudulent, exploitative, or malicious purposes</li>
                            <li>Violate privacy, data protection, or intellectual property laws</li>
                        </ul>
                        
                        <p className="statement">
                            **Governing Principle:** NexUP prioritizes Safety over engagement, Trust over growth, and Responsibility over exploitation. These principles guide all enforcement actions.
                        </p>

                    </Section>
                    

                    {/* 1. Who These Guidelines Apply To (Old 1, now 3) */}
                    <Section id="apply-to" icon={FiUsers} title="Who These Guidelines Apply To">
                        <p>These guidelines apply to:</p>
                        <ul>
                            <li>All NexUP website users</li>
                            <li>Account holders</li>
                            <li>Developers and creators</li>
                            <li>Contributors and partners</li>
                            <li>Participants inside NexWorld and other NexUP environments</li>
                        </ul>
                        <p className="priority-note">By using NexUP, you agree to follow these guidelines.</p>
                    </Section>

                    {/* 2. Core Values of NexUP (Old 2, now 4) */}
                    <Section id="core-values" icon={FiHeart} title="Core Values of NexUP">
                        <p>Everything in NexUP is guided by these principles:</p>
                        <ul>
                            <li>**Respect for people:** Treat others as you wish to be treated.</li>
                            <li>**Safety over engagement:** Prioritizing user protection.</li>
                            <li>**Transparency over manipulation:** Being open and honest in our actions.</li>
                            <li>**Creativity with responsibility:** Building ethically and thoughtfully.</li>
                            <li>**Long-term thinking:** Ensuring a sustainable, positive environment.</li>
                        </ul>
                        <p className="statement">Any behavior that violates these values is not acceptable.</p>
                    </Section>

                    {/* 3. Respectful Behavior (Old 3, now 5) */}
                    <Section id="respectful-behavior" icon={FiThumbsUp} title="Respectful Behavior">
                        <article className="allowed-content">
                            <h4>✅ Allowed</h4>
                            <ul>
                                <li>Polite, respectful communication</li>
                                <li>Constructive feedback and discussion</li>
                                <li>Collaboration and knowledge sharing</li>
                                <li>Diverse opinions expressed respectfully</li>
                            </ul>
                        </article>
                        <article className="not-allowed-content">
                            <h4>❌ Not Allowed</h4>
                            <ul>
                                <li>Harassment, bullying, or threats</li>
                                <li>Hate speech or discriminatory content</li>
                                <li>Personal attacks or humiliation</li>
                                <li>Encouraging harm to others</li>
                            </ul>
                        </article>
                        <p className="statement">Respect is mandatory, not optional.</p>
                    </Section>

                    {/* 4. Content Guidelines (Old 4, now 6) */}
                    <Section id="content-guidelines" icon={FiBookOpen} title="Content Guidelines">
                        <article className="allowed-content">
                            <h4>Content You May Share</h4>
                            <ul>
                                <li>Educational and informative content</li>
                                <li>Creative work and original ideas</li>
                                <li>Constructive criticism</li>
                                <li>Responsible discussions</li>
                            </ul>
                        </article>
                        <article className="not-allowed-content">
                            <h4>Content That Is Not Allowed</h4>
                            <ul>
                                <li>Illegal content or activity</li>
                                <li>Explicit violence or abuse</li>
                                <li>Misinformation intended to mislead</li>
                                <li>Content that exploits or endangers others</li>
                                <li>Sexual exploitation or harmful material</li>
                            </ul>
                        </article>
                        <p className="statement">Content must be safe for a broad and diverse audience.</p>
                    </Section>

                    {/* 5. Safety & Well-Being (Old 5, now 7) */}
                    <Section id="safety-wellbeing" icon={FiShield} title="Safety & Well-Being">
                        <p>NexUP prioritizes user safety above growth or engagement.</p>
                        <ul>
                            <li>Do not encourage self-harm or dangerous behavior</li>
                            <li>Do not impersonate others</li>
                            <li>Do not manipulate or deceive users</li>
                            <li>Do not exploit vulnerabilities for personal gain</li>
                        </ul>
                        <p className="statement">Any behavior that threatens safety may result in immediate action.</p>
                    </Section>

                    {/* 6. Platform Integrity & Misuse (Old 6, now 8) */}
                    <Section id="platform-misuse" icon={FiZap} title="Platform Integrity & Misuse">
                        <h4>Prohibited Actions</h4>
                        <ul>
                            <li>Hacking or attempting to bypass security</li>
                            <li>Scraping, abusing, or overloading systems</li>
                            <li>Creating fake accounts or automated abuse</li>
                            <li>Misusing platform features</li>
                        </ul>
                        <p className="statement">We protect the integrity of NexUP’s infrastructure and community.</p>
                    </Section>
                    
                    {/* 7. Intellectual Property & Ownership (Old 7, now 9) */}
                    <Section id="intellectual-property" icon={FiCopy} title="Intellectual Property & Ownership">
                        <ul>
                            <li>Respect copyrights and ownership</li>
                            <li>Do not upload content you do not have rights to</li>
                            <li>Properly credit original creators when required</li>
                            <li>Do not plagiarize or steal ideas or assets</li>
                        </ul>
                        <p className="statement">Creators deserve respect and recognition.</p>
                    </Section>

                    {/* 8. AI, Automation & Ethical Use (Old 8, now 10) */}
                    <Section id="ai-ethical-use" icon={FiCpu} title="AI, Automation & Ethical Use">
                        <p>As NexUP uses AI and advanced technologies:</p>
                        <ul>
                            <li>Do not misuse AI tools for deception or harm</li>
                            <li>Do not create misleading or manipulative experiences</li>
                            <li>AI-generated content must align with ethical standards</li>
                        </ul>
                        <p className="statement">Technology must serve people responsibly.</p>
                    </Section>
                    
                    {/* 9. Privacy & Data Respect (Old 9, now 11) */}
                    <Section id="privacy-data-respect" icon={FiLock} title="Privacy & Data Respect">
                        <ul>
                            <li>Do not collect or share personal data without consent</li>
                            <li>Do not attempt to access private user information</li>
                            <li>Respect anonymity and privacy choices</li>
                        </ul>
                        <p className="statement">Violating privacy is a serious offense.</p>
                    </Section>

                    {/* 10. Reporting Violations (Old 10, now 12) */}
                    <Section id="reporting-violations" icon={FiFlag} title="Reporting Violations">
                        <p>If you encounter behavior or content that violates these guidelines:</p>
                        <ul>
                            <li>Use the <Link to="/feedback" className="inline-link">Feedback</Link> or <Link to="/contact" className="inline-link">Contact</Link> channels</li>
                            <li>Clearly describe the issue</li>
                            <li>Provide relevant details if possible</li>
                        </ul>
                        <p className="priority-note">Reports are reviewed responsibly and confidentially.</p>
                    </Section>

                    {/* 11. Enforcement & Actions (Old 11, now 13) */}
                    <Section id="enforcement-actions" icon={FiTool} title="Enforcement & Actions">
                        <h4>Violations may result in:</h4>
                        <ul>
                            <li>Content removal</li>
                            <li>Warnings</li>
                            <li>Temporary restrictions</li>
                            <li>Account suspension</li>
                            <li>Permanent bans (for serious or repeated violations)</li>
                        </ul>
                        <p className="statement">Actions are taken based on severity, frequency, and impact.</p>
                    </Section>
                    
                    {/* 12. Fairness & Transparency (Old 12, now 14) */}
                    <Section id="fairness-transparency" icon={FiAlertOctagon} title="Fairness & Transparency">
                        <ul>
                            <li>Enforcement is not arbitrary</li>
                            <li>Decisions are reviewed internally</li>
                            <li>Context and intent are considered where possible</li>
                        </ul>
                        <p className="statement">Our goal is correction and safety, not punishment.</p>
                    </Section>

                    {/* 13. Updates to These Guidelines (Old 13, now 15) */}
                    <Section id="updates" icon={FiRefreshCw} title="Updates to These Guidelines">
                        <p>These guidelines may evolve as NexUP grows.</p>
                        <ul>
                            <li>Updates will be communicated transparently</li>
                            <li>Continued use of NexUP means acceptance of updated guidelines</li>
                        </ul>
                    </Section>

                    {/* 14. Final Statement (Old 14, now 16) */}
                    <section className="policy-section final-section">
                        <h3>Final Statement</h3>
                        <p className="statement-header">NexUP is a shared space.</p>
                        <p>How it feels depends on how people behave.</p>
                        <p className="final-message">By following these guidelines, you help build a platform that is safe, creative, and meaningful for everyone.</p>
                    </section>


                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Guidelines — Building NexUP together with respect, safety, and responsibility.
            </Footer>
            
        </div>
    );
};

export default Guidelines;