// src/pages/About/Vision.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/Vision.css";
import Footer from "../../components/Footer/Footer";

// Helper for standard descriptive sections
const Section = ({ title, children, className = '' }) => (
    <section className={`vision-section ${className}`}>
        <h3>{title}</h3>
        {children}
    </section>
);

// Helper for sections requiring a visual/media placeholder
const MediaCard = ({ title, mediaPlaceholderText, description, listItems, cardColor, reverse = false }) => (
    <section className={`media-card-section ${reverse ? 'reverse' : ''}`} style={{ '--card-color': cardColor }}>
        <div className="card-media-placeholder">
            <div className="media-box">{mediaPlaceholderText}</div>
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            {listItems && (
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    </section>
);

const Vision = () => {
    
    // Ensure page scrolls to top on initial load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="vision-page">
            <main className="vision-main-content">
                <div className="vision-document">
                    
                    <header className="document-header">
                        <h1>Our Vision</h1>
                        <h2 className="subtitle">Reimagining How Digital Worlds Exist</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP is building toward a future where digital spaces are no longer fragmented apps, temporary sessions, or isolated tools.
                    </p>
                    <p className="statement-header">
                        We envision a **persistent, intelligent, and interconnected digital universe**—one that feels continuous, purposeful, and human-centered. This vision spans AI, immersive environments, infrastructure, discovery, and ownership—working together as a single system.
                    </p>

                    
                    {/* The Core Vision of NexUP */}
                    <Section title="The Core Vision of NexUP">
                        <p>At its heart, NexUP exists to answer one question: What should the next generation of digital worlds feel like?</p>
                        <p>Our answer is simple but ambitious:</p>
                        <ul>
                            <li>Worlds that persist, not reset</li>
                            <li>Systems that assist, not overwhelm</li>
                            <li>Infrastructure that is invisible but reliable</li>
                            <li>Spaces designed for learning, creation, and meaningful interaction</li>
                            <li>Technology that respects people, privacy, and time</li>
                        </ul>
                        <p className="priority-note">NexUP is not building a product. It is building a digital foundation.</p>
                    </Section>

                    {/* NexUP as a Unified Platform */}
                    <Section title="NexUP as a Unified Platform">
                        <p>NexUP is designed as one ecosystem, not multiple disconnected services.</p>
                        <p>Every component—worlds, engines, infrastructure, housing, and search—exists to support a single, continuous experience.</p>
                        <p className="statement">You do not “switch apps.” You move through a world.</p>
                    </Section>

                    {/* --- Media Card Sections Start --- */}

                    {/* NexWorld: The Living Digital World */}
                    <MediaCard
                        title="NexWorld: The Living Digital World"
                        mediaPlaceholderText="Video: NexWorld - Persistent Spatial Environment"
                        description="NexWorld is the shared digital universe of NexUP. Unlike traditional virtual experiences that start and end with sessions, NexWorld is designed to be:"
                        listItems={[
                            "Persistent (it continues even when you leave)",
                            "Shared (others exist and build alongside you)",
                            "Evolving (it grows as people contribute)"
                        ]}
                        cardColor="#3498db" // Blue
                    />
                    <Section title="What Happens in NexWorld" className="sub-section">
                        <p>Inside NexWorld, people can:</p>
                        <ul>
                            <li>Learn and teach</li>
                            <li>Build and explore</li>
                            <li>Work and collaborate</li>
                            <li>Attend events and experiences</li>
                            <li>Create spaces with purpose</li>
                        </ul>
                        <p className="priority-note">NexWorld is not a game. It is a digital place. NexWorld is designed to support real value, not just entertainment.</p>
                    </Section>

                    {/* NexHousing: Digital Spaces You Belong To */}
                    <MediaCard
                        title="NexHousing: Digital Spaces You Belong To"
                        mediaPlaceholderText="Image: NexHousing - Personal Digital Presence"
                        description="NexHousing represents the idea of persistent digital spaces. Instead of temporary chat rooms or sessions, NexHousing introduces:"
                        listItems={[
                            "Personal digital spaces",
                            "Team environments",
                            "Learning hubs",
                            "Creative studios",
                            "Community areas"
                        ]}
                        cardColor="#2ecc71" // Green
                        reverse={true}
                    />
                    <Section title="Why NexHousing Matters" className="sub-section">
                        <p>Digital presence should not disappear when you log out.</p>
                        <p>NexHousing allows:</p>
                        <ul>
                            <li>Identity continuity</li>
                            <li>Long-term projects</li>
                            <li>Spatial memory</li>
                            <li>A sense of belonging in digital environments</li>
                        </ul>
                        <p className="priority-note">It transforms digital interaction from visits into presence.</p>
                    </Section>

                    {/* NexNodes: The Invisible Infrastructure */}
                    <MediaCard
                        title="NexNodes: The Invisible Infrastructure"
                        mediaPlaceholderText="Diagram: NexNodes - Backend Infrastructure Flow"
                        description="NexNodes are the backend infrastructure that powers the NexUP ecosystem. They are responsible for:"
                        listItems={[
                            "Connectivity between worlds",
                            "Data synchronization",
                            "Persistence and stability",
                            "Performance at scale",
                            "Security and trust enforcement"
                        ]}
                        cardColor="#e74c3c" // Red
                    />
                    <Section title="Why Infrastructure Is Central to the Vision" className="sub-section">
                        <p>A world is only as strong as what supports it.</p>
                        <p>NexNodes are designed to:</p>
                        <ul>
                            <li>Scale responsibly</li>
                            <li>Remain reliable over time</li>
                            <li>Protect user data</li>
                            <li>Enable real-time interactions</li>
                            <li>Support future expansion without breaking the system</li>
                        </ul>
                        <p className="priority-note">Users may never see NexNodes—but everything depends on them. Infrastructure is treated as a first-class product, not an afterthought.</p>
                    </Section>

                    {/* NexEngine: Building Worlds with Intelligence */}
                    <MediaCard
                        title="NexEngine: Building Worlds with Intelligence"
                        mediaPlaceholderText="Video: NexEngine - AI-Assisted Creation Tools"
                        description="NexEngine is the creation layer of NexUP. It allows people to:"
                        listItems={[
                            "Build worlds and spaces",
                            "Design environments",
                            "Add logic, interaction, and behavior",
                            "Use AI assistance to reduce complexity"
                        ]}
                        cardColor="#f39c12" // Orange
                        reverse={true}
                    />
                    <Section title="The Role of AI in NexEngine" className="sub-section">
                        <p>AI in NexEngine is designed to:</p>
                        <ul>
                            <li>Assist creativity</li>
                            <li>Automate repetitive tasks</li>
                            <li>Help users learn by building</li>
                            <li>Adapt to user intent</li>
                        </ul>
                        <p className="priority-note">NexEngine lowers the barrier between imagination and creation. AI does not replace creators. It amplifies them.</p>
                    </Section>
                    
                    {/* NexSearch: Discovery Inside a Universe */}
                    <MediaCard
                        title="NexSearch: Discovery Inside a Universe"
                        mediaPlaceholderText="Image: NexSearch - Spatial Discovery Interface"
                        description="NexSearch is not a traditional search engine. It is designed to help users:"
                        listItems={[
                            "Discover worlds",
                            "Find spaces and experiences",
                            "Navigate knowledge and environments",
                            "Explore communities and creations"
                        ]}
                        cardColor="#9b59b6" // Purple
                    />
                    <Section title="Why NexSearch Is Essential" className="sub-section">
                        <p>Without discovery:</p>
                        <ul>
                            <li>Worlds become isolated</li>
                            <li>Knowledge becomes hidden</li>
                            <li>Communities fragment</li>
                        </ul>
                        <p className="priority-note">NexSearch ensures that the ecosystem remains connected, explorable, and alive. In a large digital universe, discovery becomes as important as creation.</p>
                    </Section>
                    
                    {/* --- Media Card Sections End --- */}

                    {/* One Vision, Many Systems — Working Together */}
                    <Section title="One Vision, Many Systems — Working Together">
                        <p>Each part of NexUP serves a distinct role:</p>
                        <ul>
                            <li>NexWorld gives life and space</li>
                            <li>NexHousing gives belonging</li>
                            <li>NexNodes give stability</li>
                            <li>NexEngine gives creation</li>
                            <li>NexSearch gives discovery</li>
                        </ul>
                        <p className="statement">Together, they form a single coherent digital reality.</p>
                    </Section>
                    
                    {/* Human-Centered by Design */}
                    <Section title="Human-Centered by Design">
                        <p>Technology should never overpower the people who use it.</p>
                        <p>NexUP’s vision prioritizes:</p>
                        <ul>
                            <li>User autonomy</li>
                            <li>Privacy and data respect</li>
                            <li>Ethical AI usage</li>
                            <li>Mental and social well-being</li>
                            <li>Transparency and trust</li>
                        </ul>
                        <p className="priority-note">The platform is designed to grow with people, not over them.</p>
                    </Section>

                    {/* A Long-Term Vision */}
                    <Section title="A Long-Term Vision">
                        <p>NexUP is not chasing trends.</p>
                        <p>This vision is built for:</p>
                        <ul>
                            <li>Years, not months</li>
                            <li>Evolution, not disruption for its own sake</li>
                            <li>Responsibility, not reckless scale</li>
                        </ul>
                        <p className="statement">We believe the future of digital worlds must be intentional.</p>
                    </Section>

                    {/* Looking Forward (Final Statement) */}
                    <section className="vision-section final-section">
                        <h3>Looking Forward</h3>
                        <p>The digital future will not be flat.</p>
                        <p>It will be spatial, intelligent, and deeply interconnected.</p>
                        <p>NexUP exists to ensure that this future is:</p>
                        <ul>
                            <li>Open</li>
                            <li>Meaningful</li>
                            <li>Safe</li>
                            <li>Creative</li>
                            <li>Human-first</li>
                        </ul>
                        <div className="final-message-box">
                            <p>This is not just a platform. It is the beginning of a new digital way of living, learning, and building.</p>
                        </div>
                    </section>

                </div>
            </main>
            
            <Footer>
                Our Vision — Building intelligent, persistent digital worlds through NexUP.
            </Footer>
            
        </div>
    );
};

export default Vision;