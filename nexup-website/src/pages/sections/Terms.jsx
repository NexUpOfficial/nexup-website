// src/pages/Legal/Terms.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/sections/Terms.css";
import Footer from "../../components/Footer/Footer";

// Helper for structured sections
const Section = ({ title, children }) => (
    <section className="terms-section scroll-target">
        <h3>{title}</h3>
        {children}
    </section>
);

const Terms = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <main className="terms-main-content">
                <div className="terms-document">
                    
                    <header className="document-header">
                        <h1>NexUP Terms of Service</h1>
                        <h2 className="subtitle">The rules and responsibilities that govern the use of NexUP</h2>
                    </header>
                    
                    {/* Acceptance of These Terms */}
                    <Section title="Acceptance of These Terms">
                        <p className="introduction">
                            By accessing or using NexUP’s website, services, or platforms, you agree to be bound by these Terms of Service (“Terms”).
                        </p>
                        <p className="statement-header">
                            If you do not agree with these Terms, you must not use NexUP. These Terms apply to all users, visitors, contributors, and partners interacting with NexUP.
                        </p>
                    </Section>

                    {/* About NexUP */}
                    <Section title="About NexUP">
                        <p>NexUP is a technology platform building AI-powered and immersive digital systems, including websites, tools, and future spatial computing environments.</p>
                        <p className="priority-note">Some features may be experimental, evolving, or in early development stages.</p>
                    </Section>

                    {/* Eligibility to Use NexUP */}
                    <Section title="Eligibility to Use NexUP">
                        <p>By using NexUP, you confirm that:</p>
                        <ul>
                            <li>You are legally permitted to use digital services in your jurisdiction</li>
                            <li>You will comply with all applicable laws and regulations</li>
                            <li>You will not misuse the platform or harm others</li>
                        </ul>
                        <p className="priority-note">NexUP reserves the right to restrict or deny access if these conditions are violated.</p>
                    </Section>

                    {/* User Responsibilities */}
                    <Section title="User Responsibilities">
                        <p>You agree to:</p>
                        <ul>
                            <li>Use NexUP responsibly and ethically</li>
                            <li>Follow all Community Guidelines and policies</li>
                            <li>Provide accurate information where required</li>
                            <li>Respect other users and platform integrity</li>
                        </ul>
                        <p className="statement">You are solely responsible for your actions while using NexUP.</p>
                    </Section>

                    {/* Prohibited Activities */}
                    <Section title="Prohibited Activities">
                        <p>You must not:</p>
                        <ul>
                            <li>Violate laws or regulations</li>
                            <li>Harass, abuse, threaten, or discriminate against others</li>
                            <li>Upload illegal, harmful, or misleading content</li>
                            <li>Attempt unauthorized access, hacking, or system interference</li>
                            <li>Exploit or manipulate NexUP services</li>
                            <li>Misuse AI or automation features</li>
                        </ul>
                        <p className="priority-note">Violations may result in immediate action.</p>
                    </Section>
                    
                    {/* Accounts & Access */}
                    <Section title="Accounts & Access">
                        <p>Some NexUP features may require account creation.</p>
                        <p>You are responsible for:</p>
                        <ul>
                            <li>Maintaining account security</li>
                            <li>Protecting login credentials</li>
                            <li>All activity conducted under your account</li>
                        </ul>
                        <p className="priority-note">NexUP is not liable for losses caused by unauthorized account use.</p>
                    </Section>

                    {/* Intellectual Property */}
                    <Section title="Intellectual Property">
                        <p>All NexUP content, branding, systems, and platform materials are owned by NexUP or its licensors.</p>
                        <p>You may not:</p>
                        <ul>
                            <li>Copy, modify, or distribute NexUP content without permission</li>
                            <li>Reverse-engineer or extract proprietary systems</li>
                        </ul>
                        <p className="priority-note">User-submitted content remains the responsibility of the user.</p>
                    </Section>
                    
                    {/* User-Generated Content */}
                    <Section title="User-Generated Content">
                        <p>If you submit content to NexUP:</p>
                        <ul>
                            <li>You confirm you have the right to share it</li>
                            <li>You grant NexUP permission to use it for platform operation and improvement</li>
                            <li>NexUP may remove content that violates policies</li>
                        </ul>
                        <p className="priority-note">NexUP does not endorse user-generated content.</p>
                    </Section>

                    {/* AI & Automated Systems */}
                    <Section title="AI & Automated Systems">
                        <p>NexUP may use AI and automated systems to support platform functionality.</p>
                        <ul>
                            <li>AI outputs are provided “as is”</li>
                            <li>AI systems may produce errors or limitations</li>
                            <li>Users should not rely on AI outputs as professional or legal advice</li>
                        </ul>
                        <p className="priority-note">Human oversight remains important.</p>
                    </Section>

                    {/* Privacy & Data Protection */}
                    <Section title="Privacy & Data Protection">
                        <p>Your use of NexUP is subject to our **Privacy & Data Policy** and **Cookie Policy**.</p>
                        <p className="statement">By using NexUP, you consent to data practices described in those documents.</p>
                    </Section>

                    {/* Third-Party Services */}
                    <Section title="Third-Party Services">
                        <p>NexUP may integrate third-party tools or services.</p>
                        <ul>
                            <li>NexUP is not responsible for third-party platforms</li>
                            <li>Use of third-party services is at your own risk</li>
                            <li>Third-party terms may apply</li>
                        </ul>
                    </Section>

                    {/* Suspension & Termination */}
                    <Section title="Suspension & Termination">
                        <p>NexUP may suspend or terminate access if:</p>
                        <ul>
                            <li>These Terms are violated</li>
                            <li>Platform integrity or safety is threatened</li>
                            <li>Legal compliance requires action</li>
                        </ul>
                        <p className="priority-note">NexUP may act without prior notice when necessary.</p>
                    </Section>

                    {/* Disclaimer of Warranties */}
                    <Section title="Disclaimer of Warranties">
                        <p>NexUP is provided “as is” and “as available.”</p>
                        <p>We do not guarantee:</p>
                        <ul>
                            <li>Continuous availability</li>
                            <li>Error-free operation</li>
                            <li>That services will meet all expectations</li>
                        </ul>
                        <p className="statement">Use NexUP at your own discretion.</p>
                    </Section>
                    
                    {/* Limitation of Liability */}
                    <Section title="Limitation of Liability">
                        <p>To the maximum extent permitted by law:</p>
                        <ul>
                            <li>NexUP is not liable for indirect or consequential damages</li>
                            <li>NexUP is not responsible for user-generated content</li>
                            <li>NexUP is not liable for losses resulting from platform use</li>
                        </ul>
                        <p className="priority-note">Some jurisdictions may not allow certain limitations.</p>
                    </Section>

                    {/* Indemnification */}
                    <Section title="Indemnification">
                        <p>You agree to indemnify and hold NexUP harmless from claims arising from:</p>
                        <ul>
                            <li>Your misuse of the platform</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of laws or third-party rights</li>
                        </ul>
                    </Section>

                    {/* Changes to These Terms */}
                    <Section title="Changes to These Terms">
                        <p>NexUP may update these Terms as the platform evolves.</p>
                        <ul>
                            <li>Updates will be posted on this page</li>
                            <li>Continued use constitutes acceptance of changes</li>
                            <li>Material changes will be communicated where reasonable</li>
                        </ul>
                    </Section>

                    {/* Governing Law */}
                    <Section title="Governing Law">
                        <p className="statement">These Terms are governed by applicable laws based on NexUP’s operational jurisdiction, without regard to conflict-of-law principles.</p>
                    </Section>

                    {/* Contact Information */}
                    <Section title="Contact Information">
                        <p className="priority-note">For questions about these Terms, you may contact NexUP through official communication channels listed on the website.</p>
                    </Section>

                    {/* Final Statement */}
                    <section className="terms-section final-section">
                        <h3>Final Statement</h3>
                        <p>These Terms exist to protect:</p>
                        <ul>
                            <li>Users</li>
                            <li>The NexUP platform</li>
                            <li>The long-term vision of responsible technology</li>
                        </ul>
                        <div className="final-message-box">
                            <p>By using NexUP, you agree to participate respectfully and responsibly.</p>
                        </div>
                    </section>
                    
                </div>
            </main>
            
            {/* Footer Component with one-liner */}
            <Footer>
                Terms of Service — The rules and responsibilities that govern the use of NexUP.
            </Footer>
            
        </div>
    );
};

export default Terms;