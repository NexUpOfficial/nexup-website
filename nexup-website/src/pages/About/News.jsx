// src/pages/About/News.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/News.css";
import Footer from "../../components/Footer/Footer";

// REALISTIC, ARCHITECTURE-LEVEL NEWS ENTRIES (NEWEST FIRST)
const newsEntries = [
    // NEW NEWS ENTRY #1 (TOP - MOST IMPORTANT)
    {
        id: 1,
        date: "January 8, 2026",
        category: "Platform",
        title: "NexUP Spatial Runtime Enters Internal Validation Phase",
        body: (
            <>
                <p>
                    NexUP has completed the initial integration of its spatial runtime
                    supporting AR, VR, and mixed-reality environments.
                </p>
                <p>
                    This phase focuses on validating spatial consistency, scene persistence,
                    and cross-device state synchronization within controlled internal builds.
                </p>
                <p>
                    No public access is enabled during this stage. Findings from validation
                    will inform subsequent engine-level optimizations.
                </p>
            </>
        )
    },
    // NEW NEWS ENTRY #2 — UNREAL ENGINE
    {
        id: 2,
        date: "December 18, 2025",
        category: "Platform",
        title: "Unreal Engine Integration Pathway Established",
        body: (
            <>
                <p>
                    NexUP has finalized the architectural pathway for integrating
                    Unreal Engine-based environments into the platform runtime.
                </p>
                <p>
                    This work defines how Unreal scenes are translated into NexUP’s
                    spatial execution layer, enabling future compatibility without
                    locking the system to a single engine.
                </p>
                <p>
                    Implementation will proceed incrementally to ensure performance
                    and long-term maintainability.
                </p>
            </>
        )
    },
    // NEW NEWS ENTRY #3 — AR / MR
    {
        id: 3,
        date: "November 22, 2025",
        category: "Platform",
        title: "Mixed Reality Spatial Anchoring Prototype Completed",
        body: (
            <>
                <p>
                    A prototype for spatial anchoring in mixed-reality environments
                    has been completed as part of NexUP’s AR/MR research track.
                </p>
                <p>
                    The prototype explores persistent spatial references across
                    physical and virtual contexts, forming a foundation for
                    long-lived environments.
                </p>
                <p>
                    This work remains experimental and is not yet exposed
                    to external users.
                </p>
            </>
        )
    },
    // NEW NEWS ENTRY #4 — SYSTEM INFRASTRUCTURE
    {
        id: 4,
        date: "October 30, 2025",
        category: "Operations",
        title: "Spatial Data Pipeline Refactoring Completed",
        body: (
            <>
                <p>
                    NexUP has completed a refactor of its internal spatial data pipeline
                    to improve reliability and scalability across immersive workloads.
                </p>
                <p>
                    The update reduces latency variance and establishes clearer
                    separation between simulation, rendering, and persistence layers.
                </p>
            </>
        )
    },
];

const NewsEntry = ({ date, category, title, body }) => (
    <article className="news-entry">
        <div className="entry-header">
            <span className="entry-date">{date}</span>
            {/* Improvement A: Removed dynamic category classes */}
            {category && <span className="entry-category">{category}</span>} 
        </div>
        <h2 className="entry-title">{title}</h2>
        <div className="entry-body">{body}</div>
    </article>
);


const News = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="nx-page news-page">
            <main className="nx-main-content">
                <div className="news-document">
                    
                    {/* Header Section */}
                    <header className="document-header">
                        <span className="indicator-text">Updates · News</span>
                        <h1>NEXUP NEWS</h1>
                        <p className="intro-text">
                            Official updates and disclosures related to the NexUP platform and organization.
                        </p>
                    </header>

                    {/* News Archive */}
                    <section className="news-archive">
                        {newsEntries.map(entry => (
                            <NewsEntry key={entry.id} {...entry} />
                        ))}
                    </section>
                    
                    {/* Final Lock / Closing Principle */}
                    <section className="closing-principle-section">
                        <p className="closing-statement">
                            This page documents verified updates to the NexUP platform and organization.
                        </p>
                    </section>
                </div>
            </main>
            
            <Footer>
                {/* Improvement C: Removed child text. Footer is now neutral. */}
            </Footer>
            
        </div>
    );
};

export default News;