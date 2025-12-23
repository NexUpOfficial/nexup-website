import React, { useState } from 'react';
// Assuming the CSS is correctly imported
import '../../page-styles/Safety/Approach.css';
import Footer from "../../components/Footer/Footer"; 

// Helper component to simulate a Link
const RouterLink = ({ to, className, children }) => (
    <a href={to} className={className}>{children}</a>
);

// Helper component for text highlighting
const Highlight = ({ children }) => (
    <span className="highlighted-text">{children}</span>
);

// Define Anchor Sections for dynamic styling and default open state
const ANCHOR_SECTIONS = ['01', '03', '04', '05'];

// --- REORDERED, REWRITTEN, AND BRUTALLY CUT SECTIONS ---
const sections = [
    {
        number: '01',
        title: 'Systems Before Surfaces',
        content: (
            <>
                <p>Most platforms begin with interfaces. <Highlight>NexUP begins with systems</Highlight>.</p>
                <p>We design protocols before products, and architecture before applications. Every experience is <Highlight>Stable, Interoperable, and Evolvable</Highlight>.</p>
            </>
        ),
    },
    {
        number: '02',
        title: 'Continuous Layer Architecture',
        content: (
            <>
                <h3>Function</h3>
                <p>NexUP is architected as one continuous environment, not fragmented applications. Components operate within the <Highlight>same spatial reality</Highlight>.</p>
                
                <p>Core layers include: <Highlight>NexNodes, NexWorld, NexEngine, and NexHousing</Highlight>.</p>
            </>
        ),
    },
    {
        number: '03',
        title: 'NexNodes',
        subtitle: 'Distributed Intelligence',
        content: (
            <>
                <h3>Function</h3>
                <p>NexNodes are the neural infrastructure of NexUP. They <Highlight>synchronize state, compute intelligence, and maintain environment continuity</Highlight>.</p>
                <h3>Design</h3>
                <p>A distributed node architecture replaces centralized servers. This guarantees <Highlight>fault tolerance, resilience, and geographic distribution</Highlight>.</p>
            </>
        ),
    },
    {
        number: '04',
        title: 'NexWorld',
        subtitle: 'Spatial Reality Layer',
        content: (
            // FIX APPLIED HERE: Ensure <Highlight> tags are balanced and correctly wrapped.
            <>
                <h3>Function</h3>
                <p>NexWorld is the inhabited layer where users exist, interact, and socialize. It <Highlight>functions as a digital reality layer</Highlight> that mirrors physical logic while expanding capabilities.</p>
                <h3>Principles</h3>
                <ul>
                    <li><Highlight>Stateful presence</Highlight> (The environment exists when users leave).</li>
                    <li>Spatial continuity (No hard application boundaries).</li>
                </ul>
                <p>Applications are places. Data is spatially navigable.</p>
            </>
        ),
    },
    {
        number: '05',
        title: 'NexEngine',
        subtitle: 'Simulation and Creation',
        content: (
            <>
                <h3>Function</h3>
                <p>NexEngine is the core environment-building engine. It handles <Highlight>Creation, System Simulation, and AI-assisted design</Highlight>.</p>
                <h3>Design</h3>
                <p>The Engine operates with <Highlight>spatial-first logic</Highlight>; creators design spaces, not interfaces.</p>
                <ul>
                    <li>Modular component architecture.</li>
                    <li>Real-time simulation feedback.</li>
                </ul>
            </>
        ),
    },
    {
        number: '06',
        title: 'NexHousing',
        subtitle: 'Stateful Ownership',
        content: (
            <>
                <h3>Function</h3>
                <p>NexHousing represents <Highlight>ownership and permanence</Highlight> inside NexWorld. It anchors identity and ensures assets remain continuous.</p>
                <h3>Design</h3>
                <p>Spatial ownership replaces traditional profiles. Users own locations and environments, not just accounts.</p>
            </>
        ),
    },
    {
        number: '07',
        title: 'NexSearch',
        subtitle: 'Contextual Navigation',
        content: (
            <>
                <h3>Function</h3>
                <p>NexSearch is the intelligence layer for discovery. It is <Highlight>not a traditional search engine</Highlight>.</p>
                <h3>Design</h3>
                <p>It processes spatial context, user intent, and environment relevance. Users navigate Spaces, Objects, and Events directly.</p>
            </>
        ),
    },
    {
        number: '08',
        title: 'AI is Native',
        content: (
            <>
                <p>AI in NexUP is not a feature; it is a <Highlight>native layer</Highlight>. It exists inside NexEngine, across NexNodes, and is embedded in environment behavior.</p>
                <p>AI assists: Creation, Optimization, Navigation, and Adaptation.</p>
            </>
        ),
    },
    {
        number: '09',
        title: 'Longevity and Protocol',
        content: (
            <>
                <h3>Strategy</h3>
                <p>NexUP is designed for <Highlight>decades</Highlight>. The architecture prioritizes expansion and adaptation over replacement or rigidity.</p>
                <ul>
                    <li>Modular architecture.</li>
                    <li>Backward compatibility.</li>
                    <li>Protocol-driven growth.</li>
                </ul>
            </>
        ),
    },
    {
        number: '10',
        title: 'Structural Difference',
        content: (
            <>
                <p>Most platforms build apps, chase features, and optimize engagement.</p>
                <p>NexUP <Highlight>builds environments, designs systems, and enables ecosystems</Highlight>.</p>
            </>
        ),
    },
    {
        number: '11',
        title: 'Where This Document Exists',
        content: (
            <>
                <p>NexUP is an ecosystem designed to change over decades. It is not defined by features, but by its <Highlight>underlying structure</Highlight>.</p>
                <p>This document defines the methodology: <Highlight>How we think, how we build, and how we guarantee continuity</Highlight>.</p>
            </>
        ),
    },
];

const Approach = () => {
    // Default open Section 01 (Systems Before Surfaces)
    const [openSection, setOpenSection] = useState('01'); 

    const toggleSection = (number) => {
        setOpenSection(openSection === number ? null : number);
    };

    return (
        <>
            <div className="approach-page">
                <div className="approach-content-container">

                    {/* --- Header Indicator and Back Arrow --- */}
                    <div className="approach-header-indicator">
                        <span className="page-indicator-text">
                            Methodology · Platform Architecture
                        </span>
                    </div>
                    
                    {/* 1. Page Title */}
                    <h1 className="approach-title">
                        NEXUP SYSTEM APPROACH
                    </h1>

                    {/* 2. Intro Statement (Colder Tone) */}
                    <p className="approach-intro">
                        NexUP is a system architecture. 
                        It defines how a spatial environment is built, operated, and changed.
                    </p>

                    {/* 3. Core Approach Sections (Accordion Stack) */}
                    <div className="approach-sections-stack">
                        {sections.map((section) => {
                            const isAnchor = ANCHOR_SECTIONS.includes(section.number);
                            const isOpen = openSection === section.number;
                            
                            return (
                                <div 
                                    key={section.number} 
                                    className={`section ${isOpen ? 'open' : ''} ${isAnchor ? 'anchor-section' : ''}`}
                                >
                                    {/* Section Header (Clickable for Toggling) */}
                                    <div 
                                        className="section-header"
                                        onClick={() => toggleSection(section.number)}
                                    >
                                        <span className="section-number">{section.number.padStart(2, '0')}</span>
                                        <h2 className="section-title">
                                            {section.title}
                                            <span className="toggle-icon">+</span>
                                        </h2>
                                    </div>

                                    {/* Collapsible Content Wrapper (Not Clickable) */}
                                    <div className="section-explanation-wrapper">
                                        <div className="section-explanation">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* 4. Closing Statement and Signals */}
                    <p className="approach-closing">
                        Every component of NexUP integrates, endures, and operates as part of a continuous system.
                    </p>

                    {/* 5. Unsaid Signal */}
                    <p className="approach-signal">
                        This document changes with the system.
                    </p>
                    
                    {/* 6. Silent Structural Signal */}
                    <div className="silent-signal-container">
                        <p className="silent-signal">Version: 0.1</p>
                        <p className="silent-signal">Status: Foundational</p>
                    </div>


                    {/* 7. Simplified CTA Text Link */}
                    <div className="cta-container-text">
                        <RouterLink to="/src/pages/contact" className="cta-text-link">
                            Continue → Contact
                        </RouterLink>
                    </div>

                </div>
            </div>

            {/* 8. Footer */}
            <Footer />
        </>
    );
};

export default Approach;