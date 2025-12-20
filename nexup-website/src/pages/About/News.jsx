// src/pages/About/News.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../page-styles/About/News.css";
import Footer from "../../components/Footer/Footer";

// --- Components and Templates ---

// 1. Reusable Tag Component
const Tag = ({ category }) => (
    <span className={`tag tag-${category.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`}>
        {category}
    </span>
);

// 2. Featured/Main Story Component
const FeaturedPost = ({ title, category, date, contentSummary, link = "#" }) => (
    <div className="featured-post-card">
        <div className="featured-image-placeholder">
            <p>[Image: Conceptual rendering of a NexUP system or AI interface]</p>
        </div>
        <div className="featured-content">
            <Tag category={category} />
            <h2 className="featured-title">
                <Link to={link}>{title}</Link>
            </h2>
            <p className="featured-summary">{contentSummary}</p>
            <div className="post-meta">
                <span className="post-date">{date}</span>
                <Link to={link} className="read-more">View Full Announcement →</Link>
            </div>
        </div>
    </div>
);

// 3. Standard News Post Card (for smaller lists)
const StandardPostCard = ({ title, category, date, link = "#" }) => (
    <div className="standard-post-card">
        <Tag category={category} />
        <h4 className="post-title">
            <Link to={link}>{title}</Link>
        </h4>
        <span className="post-date">{date}</span>
    </div>
);

// 4. Placeholder Data (Focusing on NexUP's place in the AI/AR/VR news)
const featuredNews = {
    title: "NexUP Engine Receives Major Upgrade: Integrating Open Source Models for Creator Autonomy",
    category: "Platform Update",
    date: "Dec 20, 2025",
    contentSummary: "Following industry trends set by OpenAI and Gemini, NexUP is shifting its core NexEngine to better support open-source, fine-tuned large language and vision models. This move grants creators unprecedented control over their AI-driven virtual world assets and accelerates decentralized development within NexWorld.",
    link: "/news/nexengine-open-source"
};

const trendingNews = [
    { title: "NexWorld Creator Grant Program: Q1 2026 Recipients Announced", category: "Ecosystem", date: "Dec 18, 2025", link: "/news/grant-recipients-q1" },
    { title: "Infrastructure Report: NexNodes Global Latency Drops by 15%", category: "Tech Update", date: "Dec 15, 2025", link: "/news/latency-report" },
    { title: "Community Guidelines Revision: Focus on Generative AI Misuse", category: "Policy Update", date: "Dec 12, 2025", link: "/news/guidelines-revision" },
    { title: "NexUP at [Major AR/VR Conference]: Spatial Computing Demonstrations", category: "Company Event", date: "Dec 10, 2025", link: "/news/conference-summary" }
];

// 5. Sidebar CTA/Information Blocks
const SidebarFeedCTA = () => (
    <div className="sidebar-block feed-block">
        <h4>Subscribe to Alerts</h4>
        <p>Receive technical release notes and governance updates directly.</p>
        <Link to="/feed/rss" className="feed-link rss-link">
            RSS / ATOM Feed <span className="icon">📡</span>
        </Link>
        <Link to="/feed/email" className="feed-link email-link">
            Email Notifications <span className="icon">✉️</span>
        </Link>
    </div>
);

const SidebarPolicyAlert = () => (
    <div className="sidebar-block policy-alert-block">
        <h4 className="policy-alert-header">Governance & Compliance</h4>
        <p>Reminder: The revised Community Guidelines on PII and deepfake content are effective in 10 days.</p>
        <Link to="/policy/revision-notice" className="policy-link">View Policy Details →</Link>
    </div>
);

const SidebarTransparencyLink = () => (
    <div className="sidebar-block transparency-link-block">
        <h4>Editorial Mandate</h4>
        <p>All news is verified. We adhere to strict standards of transparency, separating product development news from market speculation.</p>
        <Link to="/about/transparency" className="policy-link">Read Our Principles →</Link>
    </div>
);


// 6. Main News Component
const News = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news-page modern-layout">
            <main className="news-main-content">
                <header className="document-header">
                    <p className="date-line">Official NexUP News & Announcements: December 20, 2025</p>
                    <h1>NEXUP NEWSWIRE</h1>
                    <h2 className="tagline">The source for platform updates, ecosystem growth, and governance.</h2>
                </header>

                <div className="news-grid-container">
                    
                    {/* --- LEFT COLUMN: MAIN STORIES --- */}
                    <div className="main-story-column">
                        
                        {/* FEATURED STORY */}
                        <FeaturedPost
                            title={featuredNews.title}
                            category={featuredNews.category}
                            date={featuredNews.date}
                            contentSummary={featuredNews.contentSummary}
                            link={featuredNews.link}
                        />

                        <section className="trending-section">
                            <h3 className="section-title">Latest Updates</h3>
                            <div className="trending-grid">
                                {trendingNews.map((post, index) => (
                                    <StandardPostCard 
                                        key={index}
                                        title={post.title}
                                        category={post.category}
                                        date={post.date}
                                        link={post.link}
                                    />
                                ))}
                            </div>
                            <div className="full-archive-link">
                                <Link to="/news/archive" className="read-more">View All Archived Posts →</Link>
                            </div>
                        </section>
                        
                    </div> {/* End Main Story Column */}

                    
                    {/* --- RIGHT COLUMN: SIDEBAR & INFO --- */}
                    <aside className="sidebar-column">
                        
                        <SidebarPolicyAlert />
                        
                        <SidebarFeedCTA />

                        <SidebarTransparencyLink />

                        <div className="sidebar-block general-info-block">
                            <h4>What We Publish</h4>
                            <p>This space focuses on factual, verified NexUP platform progress, feature releases, technical performance, and policy changes. Marketing and speculative content are hosted elsewhere.</p>
                        </div>
                        
                        <div className="sidebar-block press-contact-block">
                            <h4>Media Contact</h4>
                            <p>Journalists and partners requiring official statements should contact our dedicated relations team for access to authorized personnel and resources.</p>
                            <Link to="/contact" className="policy-link">Contact Media Relations →</Link>
                        </div>
                        
                    </aside> {/* End Sidebar Column */}
                </div> {/* End Grid Container */}

                {/* The Footer/End Note remains outside the grid */}
                <section className="final-note">
                    <p>NexUP Newswire: Transparency and trust are foundational to the Persistent Digital Universe.</p>
                </section>

            </main>
            
            <Footer>
                Newswire — Official updates from NexUP.
            </Footer>
            
        </div>
    );
};

export default News;