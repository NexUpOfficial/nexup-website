import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../page-styles/vision/Vision.css";

export default function Vision() {
    return (
        <>
            <main className="page-container vision-page">
                
                {/* ==============================================
                    HEADER & METADATA
                ============================================== */}
                <header className="vision-header">
                    <h1>Our Vision: NexUP</h1>
                    <p className="vision-doc-meta">
                        Conceptual Document · Spatial Computing Platform · Long-Term Architecture
                    </p>
                    {/* ✅ OPTIONAL READING DEPTH CUE */}
                    <p className="vision-depth-note">
                        This document describes long-term systems, not short-term features.
                    </p>
                    <p className="lead-paragraph">
                        NexUP is built on the belief that digital environments should not be
                        temporary, fragmented, or owned by isolated platforms. The future of
                        computing lies in **persistent worlds** — systems that exist
                        continuously, evolve over time, and are shaped by their users.
                    </p>
                </header>

                {/* 1️⃣ VISION ORIENTATION BLOCK */}
                <section className="vision-orientation">
                    <p>
                        This document defines the long-term vision of NexUP.
                        It explains the principles, structures, and assumptions
                        that guide every system built within the ecosystem.
                    </p>
                    <p>
                        The concepts described here define direction and constraints,
                        not implementation details. {/* <--- 2️⃣ ABSTRACTION LEVEL CLARIFICATION */}
                    </p>
                    <p>
                        This is not a product announcement.
                        It is a foundational reference for how NexUP is designed to evolve over time.
                    </p>
                </section>

                {/* ==============================================
                    MAIN LAYOUT GRID (TOC + CONTENT)
                ============================================== */}
                <div className="vision-layout-grid">
                    
                    {/* LEFT COLUMN: TABLE OF CONTENTS (TOC) */}
                    <nav className="vision-toc">
                        {/* ✅ DOCUMENT NATURE STATEMENT */}
                        <p className="vision-reading-tip">
                            This document is intended to be read as a continuous system,
                            not as isolated sections.
                        </p>
                        <h3>In this section</h3>
                        <ul>
                            <li><a href="#vision-intro">The Core Vision</a></li>
                            <li><a href="#why-exist">Why NexUP Must Exist</a></li>
                            <li><a href="#core-law">Persistence as a Core Law</a></li>
                            <li><a href="#spatial-computing">Spatial Computing</a></li>
                            <li><a href="#identity-beyond">Identity Beyond Accounts</a></li>
                            <li><a href="#ecosystem">An Interconnected Ecosystem</a></li>
                            <li><a href="#worlds-infra">Worlds as Infrastructure</a></li>
                            <li><a href="#creation">Creation Without Gatekeepers</a></li>
                            <li><a href="#long-term">Designed for the Long Term</a></li>
                            <li><a href="#time">Time as a First-Class Dimension</a></li>
                            <li><a href="#economy">An Economy Rooted in Space</a></li>
                            <li><a href="#governance">Governance Through Architecture</a></li>
                            <li><a href="#constraints">Vision Constraints</a></li>
                            <li><a href="#outlives">Platform That Outlives Interfaces</a></li>
                            <li><a href="#who-for">Who This Vision Is For</a></li>
                            <li><a href="#building">Building for Generations</a></li>
                        </ul>
                    </nav>

                    {/* RIGHT COLUMN: MAIN CONTENT */}
                    <div className="vision-content-area">

                        <h2 id="vision-intro">The Core Vision</h2>
                        <p>
                            Today’s internet is composed of disconnected applications.
                            Users move between tools, accounts, and identities that do not
                            meaningfully persist or interact. NexUP envisions a unified
                            spatial computing platform where environments, identities,
                            and systems coexist inside a single continuous world.
                        </p>

                        <h2 id="why-exist">Why NexUP Must Exist</h2>
                        <p>
                            The modern internet was not designed for permanence.
                            It was designed for documents, transactions, and short-lived sessions.
                            As digital activity expanded, layers of tools were added on top of this
                            foundation — not rebuilt from first principles.
                        </p>
                        <p>
                            As a result, identity is fragmented, environments disappear when platforms
                            shut down, and digital work rarely leaves behind a meaningful spatial trace.
                            NexUP exists to solve this structural limitation.
                        </p>
                        <p>
                            Rather than optimizing existing systems, NexUP rethinks the internet
                            as a persistent spatial layer — one where identity, environment,
                            and infrastructure evolve together.
                        </p>
                        
                        <span className="vision-label">Foundational Principle</span>
                        <h2 id="core-law">Persistence as a Core Law</h2>
                        <p>
                            Persistence in NexUP is not a feature — it is a rule.
                            Once something is created inside the ecosystem, it does not vanish
                            without intention.
                        </p>
                        <p className="concept-block">
                            Spaces remember activity.
                            Systems record evolution.
                            Structures gain history.
                        </p>
                        <p>
                            This transforms digital interaction from momentary usage
                            into long-term participation.
                            Users are not visitors — they are inhabitants.
                        </p>
                        <p className="concept-cross-link">
                            This principle directly shapes how
                            <Link to="/vision/nexworld">NexWorld</Link>
                            environments persist and how
                            <Link to="/vision/nexnodes">NexNodes</Link>
                            retain historical state.
                        </p>

                        <h2 id="spatial-computing">Spatial Computing as a Foundation</h2>
                        <p>
                            NexUP is fundamentally a spatial system.
                            Information is not limited to screens or pages, but organized
                            within environments that can be navigated, shared, and inhabited.
                        </p>
                        <p>
                            Spatial computing allows complex systems to become intuitive.
                            Knowledge can be explored as space, collaboration can occur
                            within shared environments, and digital presence can feel
                            continuous rather than transactional.
                        </p>

                        <h2 id="identity-beyond">Identity Beyond Accounts</h2>
                        <p>
                            In NexUP, identity is not tied to a single application or login.
                            It is continuous across worlds, systems, and environments.
                        </p>
                        <p>
                            Your presence carries memory, reputation, spatial history,
                            and ownership — independent of any single interface.
                        </p>
                        <p>
                            This allows trust, collaboration, and contribution
                            to emerge naturally over time, instead of being rebuilt
                            inside every new platform.
                        </p>

                        <h2 id="ecosystem">An Interconnected Ecosystem</h2>

                        <p>
                            The NexUP ecosystem is composed of interconnected systems,
                            each serving a distinct role while operating as part of
                            a unified whole.

                        </p>

                        <ul className="vision-ecosystem-list">
                            <li>
                                <strong>
                                    <Link to="/vision/nexworld">NexWorld</Link>
                                </strong>{" "}
                                defines the persistent environments where users exist,
                                interact, and build.
                            </li>
                            <li>
                                <strong>
                                    <Link to="/vision/nexnodes">NexNodes</Link>
                                </strong>{" "}
                                provides the distributed infrastructure that supports
                                computation, data, and connectivity.
                            </li>
                            <li>
                                <strong>
                                    <Link to="/vision/nexengine">NexEngine</Link>
                                </strong>{" "}
                                enables the creation, simulation, and deployment of
                                worlds and systems.
                            </li>
                            <li>
                                <strong>
                                    <Link to="/vision/nexhousing">NexHousing</Link>
                                </strong>{" "}
                                introduces ownership, residency, and spatial permanence
                                within the world.
                            </li>
                            <li>
                                <strong>
                                    <Link to="/vision/nexsearch">NexSearch</Link>
                                </strong>{" "}
                                allows discovery, navigation, and understanding across
                                the entire ecosystem.
                            </li>
                        </ul>

                        <section className="vision-status-note">
                            <p>
                                Some concepts described here are actively under development,
                                while others represent long-term architectural direction.
                            </p>
                            <p>
                                NexUP is designed so these ideas can mature incrementally
                                without breaking the underlying vision.
                            </p>
                        </section>

                        <span className="vision-label">Architectural Philosophy</span>
                        <h2 id="worlds-infra">Worlds as Infrastructure, Not Content</h2>
                        <p>
                            Most platforms treat digital worlds as content —
                            something to consume, scroll, or abandon.
                        </p>
                        <p>
                            NexUP treats worlds as **infrastructure**.
                            They are places where systems operate,
                            communities form, and value accumulates.
                        </p>
                        <p>
                            Just as cities enable economies,
                            persistent worlds enable digital civilizations.
                        </p>

                        <h2 id="creation">Creation Without Gatekeepers</h2>
                        <p>
                            NexUP is designed to remove centralized permission
                            from the act of creation.
                        </p>
                        <p>
                            Users can build environments, systems, and experiences
                            without depending on approval from a single platform owner.
                        </p>
                        <p>
                            This openness allows innovation to emerge organically,
                            driven by users rather than dictated by trends.
                        </p>

                        <h2 id="long-term">Designed for the Long Term</h2>
                        <p>
                            NexUP is not optimized for short-term trends.
                            It is designed with a multi-decade horizon, not a product roadmap. {/* <--- 1️⃣ TIME HORIZON ADDED */}
                            Every architectural decision prioritizes scalability,
                            resilience, and adaptability.
                        </p>
                        <p>
                            This long-term perspective allows NexUP to remain flexible
                            as technologies change, while maintaining a consistent
                            underlying vision.
                        </p>

                        <h2 id="time">Time as a First-Class Dimension</h2>
                        <p>
                            Traditional software is static — it reacts, but does not age.
                            NexUP systems evolve with time.
                        </p>
                        <p className="concept-block">
                            Spaces change.
                            Communities grow.
                            Knowledge accumulates.
                        </p>
                        <p>
                            This temporal continuity allows long-term projects,
                            education, and collaboration to exist
                            without artificial resets.
                        </p>

                        <span className="vision-label">Economic Model</span>
                        <h2 id="economy">An Economy Rooted in Space</h2>
                        <p>
                            Value inside NexUP is not abstracted away from location.
                            It is tied to environments, activity, and contribution.
                        </p>
                        <p>
                            Ownership, access, and participation are spatially grounded,
                            creating economies that feel tangible rather than speculative.
                        </p>
                        <p>
                            This makes digital ownership understandable,
                            verifiable, and meaningful.
                        </p>
                        
                        <span className="vision-label">Governance Model</span>
                        <h2 id="governance">Governance Through Architecture</h2>
                        <p>
                            Instead of enforcing control through rules alone,
                            NexUP embeds governance into its architecture.
                        </p>
                        <p>
                            Transparency, persistence, and interoperability
                            reduce the need for arbitrary authority.
                        </p>
                        <p>
                            Systems are designed so that trust emerges
                            from structure, not promises.
                        </p>

                        <span className="vision-label">Safeguards & Boundaries</span>
                        <h2 id="constraints">Vision Constraints</h2>
                        <p>
                            NexUP intentionally avoids certain design paths.
                            These constraints are not limitations — they are safeguards.
                        </p>
                        <ul className="vision-constraints-list">
                            <li>No dependency on a single interface or device.</li>
                            <li>No forced monetization of participation.</li>
                            <li>No centralized ownership of user-created worlds.</li>
                            <li>No short-term architectural compromises.</li>
                        </ul>

                        <h2 id="outlives">A Platform That Outlives Interfaces</h2>
                        <p>
                            Interfaces will change.
                            Devices will evolve.
                            Interaction models will be replaced.
                        </p>
                        <p>
                            NexUP is built so the world persists
                            even as the way we access it transforms.
                        </p>
                        <p>
                            This ensures continuity across generations of technology,
                            without forcing users to start over.
                        </p>

                        <h2 id="who-for">Who This Vision Is For</h2>
                        <p>
                            This vision is written for builders, researchers, educators,
                            and organizations who believe digital systems should persist
                            and evolve rather than reset.
                        </p>
                        <p>
                            NexUP is for those willing to think in decades,
                            not release cycles.
                        </p>

                        <h2 id="building">Building for Generations</h2>
                        <p>
                            NexUP is not built for immediate adoption metrics
                            or short-term engagement graphs.
                        </p>
                        <p>
                            It is built for continuity, memory, and growth —
                            for a future where digital spaces
                            are as enduring as physical ones.
                        </p>
                        <p>
                            This vision guides every decision,
                            every system, and every layer of the NexUP ecosystem.
                        </p>

                        <div className="vision-concept-index-container">
                            <h3>Core Concepts Referenced</h3>
                            <ul className="vision-concept-index">
                                <li>Persistence</li>
                                <li>Spatial Computing</li>
                                <li>Identity Continuity</li>
                                <li>World Infrastructure</li>
                                <li>Temporal Systems</li>
                                <li>Governance by Architecture</li>
                            </ul>
                        </div>


                        {/* CTA BUTTON TO APPROACH PAGE (Kept as a Button for action/transition) */}
                        <div className="vision-cta-container">
                            <p className="cta-context">
                                If you understand the vision, here is how we are building it:
                            </p>
                            <Link to="/approach" className="vision-cta-button">
                                See Our Approach
                            </Link>
                        </div>
                    </div>
                </div>
                
                <footer className="vision-version">
                    <p>
                        Vision Document — Version 1.0 
                        The vision will evolve. The core principles will not.
                    </p>
                </footer>
            </main>

            <Footer />
        </>
    );
}