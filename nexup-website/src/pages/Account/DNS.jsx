import React from 'react';
// Assuming the path to your required DNS CSS (DNS.css content will be handled separately if requested)
import "../../page-styles/Account/DNS.css";
// Assuming the path to your reusable Footer component
import Footer from "../../components/Footer/Footer"; 

// --- Component Definition ---

// A simple utility component for displaying key/value pairs in the system style.
const SystemDetail = ({ label, value }) => (
    <div className="system-detail">
        <span className="system-detail__label">{label}</span>
        <span className="system-detail__value">{value}</span>
    </div>
);

const DNS = () => {
    return (
        <div className="dns-status-page">
            <header className="dns-header">
                {/* 5. Page Metadata */}
                <span className="dns-header__indicator">Infrastructure • DNS</span>
                <h1 className="dns-header__title">NEXUP DNS STATUS</h1>
                <p className="dns-header__intro">
                    This page documents the current and planned state of NexUP’s domain name system and routing infrastructure.
                </p>
            </header>

            <main className="dns-main-content">
                {/* Section 01 — What This Page Represents */}
                <section className="dns-section">
                    <h2 className="dns-section__title">01. Document Purpose</h2>
                    <p className="dns-section__text">
                        This page exists to communicate the state of NexUP’s DNS and routing systems. It reflects both current operational status and forward-looking infrastructure intent.
                    </p>
                    <p className="dns-section__note">
                        This document acts as a technical trust anchor and will not display real-time metrics until public services are launched.
                    </p>
                </section>

                {/* Section 02 — Current DNS Status */}
                <section className="dns-section">
                    <h2 className="dns-section__title">02. Current DNS Status</h2>
                    <div className="status-box">
                        <p className="status-box__text">
                            NexUP’s public DNS infrastructure is currently in a foundational configuration. External availability is limited while internal systems are being validated.
                        </p>
                        {/* Status badge (text-only, using system-text color) */}
                        <div className="status-box__badge">
                            Status: <span className="status-box__state">Foundational / Not Public</span>
                        </div>
                    </div>
                </section>

                {/* Section 03 — Domains Covered */}
                <section className="dns-section">
                    <h2 className="dns-section__title">03. Domains Covered</h2>
                    <p className="dns-section__text">
                        The following domains are part of NexUP’s DNS planning and configuration:
                    </p>
                    <ul className="domain-list">
                        <li className="domain-list__item">nexup.com</li>
                        <li className="domain-list__item domain-list__item--planned">api.nexup.com <span className="domain-list__status">(Planned)</span></li>
                        <li className="domain-list__item domain-list__item--planned">status.nexup.com <span className="domain-list__status">(Planned)</span></li>
                        <li className="domain-list__item domain-list__item--planned">auth.nexup.com <span className="domain-list__status">(Planned)</span></li>
                    </ul>
                </section>

                {/* Section 04 — Routing Philosophy */}
                <section className="dns-section">
                    <h2 className="dns-section__title">04. Routing Philosophy</h2>
                    <blockquote className="dns-blockquote">
                        NexUP’s DNS architecture is designed with long-term resilience in mind. Routing decisions prioritize correctness, predictability, and fault isolation over aggressive latency optimization in early phases.
                    </blockquote>
                </section>

                {/* Section 05 — Reliability & Redundancy (Future Intent) */}
                <section className="dns-section">
                    <h2 className="dns-section__title">05. Reliability & Redundancy (Future Intent)</h2>
                    <p className="dns-section__text">
                        Future DNS infrastructure will incorporate redundancy, multi-region resolution, and controlled failover mechanisms.
                    </p>
                    <p className="dns-section__text dns-section__text--critical">
                        Note: These systems are currently internally configured and are not yet publicly active.
                    </p>
                </section>

                {/* Section 06 — Monitoring & Visibility */}
                <section className="dns-section">
                    <h2 className="dns-section__title">06. Monitoring & Visibility</h2>
                    <p className="dns-section__text">
                        DNS behavior is monitored internally during the foundational phase. Public status indicators and telemetry data will be introduced once external availability begins.
                    </p>
                </section>

                {/* Section 07 — Incident Disclosure Policy */}
                <section className="dns-section">
                    <h2 className="dns-section__title">07. Incident Disclosure Policy</h2>
                    <p className="dns-section__text">
                        DNS-related incidents that impact public availability will be disclosed on this page once the platform is publicly accessible and enters the Operational phase.
                    </p>
                </section>

                {/* Section 08 — Security & Integrity */}
                <section className="dns-section">
                    <h2 className="dns-section__title">08. Security & Integrity</h2>
                    <p className="dns-section__text">
                        DNS integrity is treated as a core security concern. Controls are designed to prevent unauthorized record changes and unintended propagation across global networks.
                    </p>
                </section>

                {/* Section 09 — Future Public Status */}
                <section className="dns-section">
                    <h2 className="dns-section__title">09. Future Public Status</h2>
                    <p className="dns-section__text">
                        This page will evolve into a real-time status surface with detailed operational metrics once NexUP systems are exposed to public traffic.
                    </p>
                </section>

                {/* Section 10 — Closing System Signal */}
                <section className="dns-section dns-section--closing">
                    <p className="dns-closing-statement">
                        This document reflects the current state of NexUP’s infrastructure.
                    </p>
                    <div className="dns-closing-metadata">
                        <SystemDetail label="Version" value="0.1" />
                        <SystemDetail label="Status" value="Foundational" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DNS;