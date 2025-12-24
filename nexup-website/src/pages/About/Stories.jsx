// src/pages/About/Stories.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../page-styles/About/Stories.css'; 
import Footer from '../../components/Footer/Footer';

// Mock Data for Story Entries (Newest first, Chronological)
const storyEntries = [
    {
        id: 1,
        date: "December 15, 2025",
        category: "Architecture",
        title: "The Constraint of Time: Why We Chose Scene Persistence over Eventual Consistency",
        subtitle: "Designing long-term state synchronization for spatial environments.",
        body: (
            <>
                <p>The fundamental challenge in building a global spatial platform is managing state across disparate devices and environments. We faced a critical architectural choice: prioritize eventual consistency (simpler scaling) or enforce scene persistence (guaranteed causality).</p>
                <p>We chose the latter. Eventual consistency, common in feed-based social platforms, breaks down when dealing with spatial causality—if an object is moved in AR, it must stay moved for all users immediately, regardless of network lag, or the environment becomes unreliable.</p>
                <p>This decision introduced complex trade-offs, requiring us to manage a global, canonical state that prioritizes transactional integrity over maximum read throughput. This is less efficient but fundamentally more honest to the promise of a shared digital reality.</p>
            </>
        )
    },
    {
        id: 2,
        date: "November 1, 2025",
        category: "Reflections",
        title: "Building the Operating System, Not the Application",
        subtitle: "The philosophical separation between foundational systems and user experiences.",
        body: (
            <>
                <p>We often refer to NexUP as an "operating system for digital reality." This is a guiding constraint, not a marketing term. An OS does not tell you what to do; it provides reliable primitives for applications to run on.</p>
                <p>In practice, this means our focus is strictly on low-level infrastructure: spatial meshing, data pipelines, anchoring, and execution. We intentionally avoid building default consumer applications that might compete with the creativity of developers we seek to empower.</p>
                <p>One major lesson learned during the early prototype phase was the danger of scope creep: every time we added a user-facing feature, we compromised the stability of the underlying system. The current discipline—systems first, platform always—is non-negotiable.</p>
            </>
        )
    },
    {
        id: 3,
        date: "September 10, 2025",
        category: "Systems",
        title: "From Pixels to Points: Designing the NexNodes Decentralization Model",
        subtitle: "A retrospective on the shift from centralized compute to localized spatial rendering.",
        body: (
            <>
                <p>The initial concept relied heavily on centralized cloud rendering, typical of many early cloud gaming and VR services. The latency inherent to this model proved unacceptable for mixed-reality environments where response time is critical for physical safety and immersion.</p>
                <p>The solution was the "NexNodes" model: local execution layers that process and render scene data near the user. This requires robust, decentralized synchronization, but it pushes rendering cycles to the edge, drastically reducing perceived latency.</p>
                <p>The consequence is a heavier dependency on high-quality network synchronization, but it frees us from the impossible constraint of achieving sub-20ms round-trip latency globally for all users.</p>
            </>
        )
    },
];

const StoryEntry = ({ date, category, title, subtitle, body }) => (
    <article className="story-entry">
        <div className="entry-header">
            <span className="entry-date">{date}</span>
            {/* Rule 9: Categories are informational, not visually differentiated */}
            {category && <span className="entry-category">{category}</span>} 
        </div>
        <h2 className="entry-title">{title}</h2>
        {subtitle && <p className="entry-subtitle">{subtitle}</p>}
        
        {/* The body acts as the main text column */}
        <div className="entry-body">{body}</div>
        
        {/* Optional divider before final reflection/closing */}
        <div className="entry-divider"></div>
        
        <Link to={`/stories/${title.toLowerCase().replace(/\s/g, '-')}`} className="read-more-link">
            Read Full Story 
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </Link>
    </article>
);


const Stories = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="nx-page stories-page">
            <main className="nx-main-content">
                <div className="stories-document">
                    
                    {/* Header Section (Rule 12) */}
                    <header className="document-header">
                        <span className="indicator-text">Perspectives · Stories</span>
                        <h1>NEXUP STORIES</h1>
                        <p className="intro-text">
                            Stories provide context, reasoning, and reflections behind the NexUP platform.
                        </p>
                    </header>

                    {/* Stories Archive (Rule 7: Chronological Order) */}
                    <section className="stories-archive">
                        {storyEntries.map(entry => (
                            <StoryEntry key={entry.id} {...entry} />
                        ))}
                    </section>
                    
                    {/* Closing Principle (Rule 11) */}
                    <section className="closing-principle-section">
                        <p className="closing-statement">
                            Stories document how NexUP thinks, not how it markets.
                        </p>
                    </section>
                </div>
            </main>
            
            <Footer /> {/* Rule C: Footer remains neutral */}
            
        </div>
    );
};

export default Stories;