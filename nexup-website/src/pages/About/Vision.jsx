// src/pages/About/Vision.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FiGlobe, FiCpu, FiTool, FiZap, FiCode, FiMap,
    FiArrowRight, FiHardDrive, FiSearch, FiLayers,
    FiBriefcase, FiBookOpen, FiUsers, FiShoppingCart, FiLifeBuoy, FiSlack
} from "react-icons/fi";
import "../../page-styles/About/Vision.css";
import Footer from "../../components/Footer/Footer";

/* --- DATA --- */
const CORE_CONCEPTS_DATA = [
    {
        icon: <FiLayers />,
        title: "NexNodes — The Building Blocks",
        text: "The self-contained spatial environments (rooms, buildings, worlds) that are independently owned, controlled, and form the infrastructure of NexWorld.",
    },
    {
        icon: <FiHardDrive />,
        title: "NexHousing — Digital Real Estate",
        text: "The digital real estate system that makes spatial worlds ownable, customizable, monetizable, and creates a real digital economy.",
    },
    {
        icon: <FiSearch />,
        title: "NexSearch — Browsing the World",
        text: "The spatial navigation system where users discover places, locate NexNodes, and enter environments directly. Search results are destinations.",
    },
];

const PILLARS_DATA = [
    {
        icon: <FiCode />,
        title: "The NexNode Standard",
        text: "A universal, open protocol for creating, connecting, and rendering persistent 3D digital environments.",
    },
    {
        icon: <FiGlobe />,
        title: "Ubiquitous Presence",
        text: "Seamless movement between AR, VR, and traditional screens, ensuring the experience is always consistent and accessible.",
    },
    {
        icon: <FiCpu />,
        title: "Ambient AI Integration",
        text: "AI models are built directly into the environment, acting as contextual assistants, guides, and intelligent world agents.",
    },
];

const REALITIES_DATA = [
    {
        icon: <FiBriefcase />,
        title: "Workspaces",
        text: "Immersive offices, collaboration rooms, and enterprise environments designed for presence, productivity, and global teams.",
    },
    {
        icon: <FiBookOpen />,
        title: "Education Rooms",
        text: "Virtual classrooms, labs, and training centers powered by AI tutors and high-fidelity real-world simulations.",
    },
    {
        icon: <FiUsers />,
        title: "Social Worlds",
        text: "Events, communities, creator spaces, and shared experiences that feel alive, deeply connected, and free from platform friction.",
    },
    {
        icon: <FiShoppingCart />,
        title: "Digital Commerce",
        text: "3D stores, services, and marketplaces where digital and physical value intersect with full spatial awareness.",
    },
    {
        icon: <FiLifeBuoy />,
        title: "Training & Simulation",
        text: "High-fidelity environments for professional training, safety drills, and skill development in risk-free, adaptive settings.",
    },
    {
        icon: <FiSlack />,
        title: "AI-Powered Worlds",
        text: "Intelligent environments that adapt and change based on user context, featuring dynamic AI characters and entities.",
    },
];

const TIMELINE_DATA = [
    {
        year: "PHASE I: 2025 – 2026",
        title: "The Foundation",
        desc: "Launch of the NexNode Core Framework, establishing core spatial connectivity, and initial developer SDK.",
    },
    {
        year: "PHASE II: 2026 – 2028",
        title: "Ecosystem Expansion",
        desc: "Beta launch of NexWorld, introduction of the NexHousing System, and large-scale integration of ambient AI agents.",
    },
    {
        year: "PHASE III: 2028+",
        title: "The Ubiquitous Layer",
        desc: "Global availability, cross-platform interoperability, and NexUP becoming the default spatial layer of the internet.",
    },
];

/* --- VARIANTS --- */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ================= COMPONENT WRAPPERS ================= */

function VisionSection({ label, title, children }) {
    return (
        <section className="vision-section column-layout">
            <SectionIntroLabel label={label} />
            <motion.h2
                className="gradient-title section-title center-text"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>
            {children}
        </section>
    );
}

function SectionIntroLabel({ label }) {
    return (
        <motion.div
            className="section-intro-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            {label}
        </motion.div>
    );
}

function BreakLine() {
    return <div className="break-line" />;
}

/* ================= MAIN COMPONENT ================= */

export default function Vision() {
    const navigate = useNavigate();

    return (
        <div className="vision-page">
            <div className="vision-wrapper">
                {/* ================= HERO ================= */}
                <section className="vision-hero-section">
                    <div className="vision-glow" />

                    <motion.div
                        className="vision-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="gradient-title big-hero-title">
                            Building the Operating System for Spatial Reality.
                        </h1>
                        <p className="hero-subtitle">
                            The future of the internet is not flat screens — it is immersive,
                            intelligent, and human-centered.
                        </p>
                    </motion.div>
                </section>

                <BreakLine />

                {/* ================= CONCEPT: OUR CORE VISION (MISSION) ================= */}
                <VisionSection label="Our Mission" title="The Core Mandate">
                    <motion.div
                        className="concept-block"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="gradient-title section-title">What NexUP Is</h2>
                        <div className="concept-text-group">
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                NexUP is not just an app or a single platform. It is a single,
                                interconnected world — a persistent digital reality where people
                                work, learn, socialize, build, trade, and simulate using AR, VR,
                                and AI.
                            </motion.p>
                            <motion.p
                                className="highlight-text"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                To become the operating system for the next generation of digital
                                reality. Just as iOS and Windows defined their eras, NexUP defines
                                **spatial computing**.
                            </motion.p>
                        </div>
                    </motion.div>
                </VisionSection>
                

                <BreakLine />

                {/* ================= THE SHIFT WE BELIEVE IN ================= */}
                <section className="vision-section column-layout text-only-section">
                    <SectionIntroLabel label="The Paradigm Shift" />
                    <motion.h2
                        className="section-title center-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        The Shift We Believe In
                    </motion.h2>
                    <motion.div
                        className="shift-content"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.p variants={itemVariants} className="shift-text old-way">The internet today is flat. Apps live in boxes. Information is stacked, clicked, and scrolled.</motion.p>
                        <motion.p variants={itemVariants} className="shift-text new-way">But humans don’t think in tabs — we think in space.</motion.p>
                        <motion.blockquote variants={itemVariants} className="shift-quote glass-panel">
                            NexUP is rebuilding the internet as a 3D, spatial, intelligent environment where interaction feels natural, immersive, and continuous.
                        </motion.blockquote>
                    </motion.div>
                </section>

                <BreakLine />

                {/* ================= NEXWORLD - WHAT IT IS & HOW IT FEELS ================= */}
                <section className="vision-section column-layout">
                    <SectionIntroLabel label="The Core World" />
                    <motion.h2 className="gradient-title section-title center-text">
                        NexWorld — What It Is & How It Feels
                    </motion.h2>

                    <motion.div
                        className="two-col-content-alt"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="two-col-item glass-panel" variants={itemVariants}>
                            <h3 className="sub-title">What Changes</h3>
                            <ul className="world-list">
                                <li>Apps are no longer icons — they are places</li>
                                <li>Data is no longer hidden — it is visible and interactive</li>
                                <li>Navigation is no longer scrolling — it is movement</li>
                            </ul>
                            <p className="note-text">Inside NexWorld, users don’t “open apps”. They enter environments.</p>
                        </motion.div>

                        <motion.div className="two-col-item glass-panel" variants={itemVariants}>
                            <h3 className="sub-title">How NexWorld Feels</h3>
                            <ul className="world-list-bullet">
                                <li>Apps float around you as interactive spatial panels</li>
                                <li>Buildings represent platforms, companies, or services</li>
                                <li>Offices, classrooms, stores, and labs exist as real locations</li>
                                <li>AI entities guide, assist, and collaborate with you</li>
                                <li>You move seamlessly between work, learning, and social spaces</li>
                            </ul>
                            <p className="note-text">This is not a simulation. It is a functional digital reality.</p>
                        </motion.div>
                    </motion.div>
                </section>

                <BreakLine />

                {/* ================= BUILDING BLOCKS (CORE CONCEPTS) ================= */}
                <section className="vision-section column-layout">
                    <SectionIntroLabel label="The Infrastructure" />
                    <motion.h2
                        className="gradient-title section-title center-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        The Core Concepts
                    </motion.h2>

                    <motion.div
                        className="pillars-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {CORE_CONCEPTS_DATA.map((item, index) => (
                            <motion.div
                                key={index}
                                className="pillar-card glass-panel"
                                variants={itemVariants}
                            >
                                <div className="pillar-icon-wrapper">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                

                <BreakLine />

                {/* ================= ONE WORLD. MANY REALITIES. (Grid Layout) ================= */}
                <section className="vision-section column-layout">
                    <SectionIntroLabel label="The Ecosystem" />
                    <motion.h2
                        className="gradient-title section-title center-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        One World. Many Realities.
                    </motion.h2>

                    <motion.div
                        className="why-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {REALITIES_DATA.map((item, index) => (
                            <motion.div
                                key={index}
                                className="why-item"
                                variants={itemVariants}
                            >
                                <div className="reality-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <BreakLine />

                {/* ================= ARCHITECTURAL PILLARS ================= */}
                <VisionSection label="The Blueprint" title="Architectural Pillars">
                    <motion.div
                        className="pillars-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {PILLARS_DATA.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="pillar-card glass-panel"
                                variants={itemVariants}
                            >
                                <div className="pillar-icon-wrapper">{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </VisionSection>

                <BreakLine />

                {/* ================= VISUAL TIMELINE ================= */}
                <section className="vision-section column-layout">
                    <SectionIntroLabel label="Roadmap" />
                    <motion.h2
                        className="gradient-title section-title center-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        The Path to Ubiquity
                    </motion.h2>

                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        {TIMELINE_DATA.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20, scale: 0.98 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content glass-panel">
                                    <span className="timeline-year">{item.year}</span>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                

                <BreakLine />

                {/* ================= FINAL CTA / VISION SUMMARY ================= */}
                <section className="vision-final-section">
                    <div className="final-glow-top" />

                    <motion.div
                        className="final-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="gradient-title final-big">
                            This is just the beginning.
                        </h2>
                        <p className="final-text">
                            Join us in shaping the future where humans and AI coexist inside
                            shared, intelligent worlds.
                        </p>

                        <div className="final-vision-summary glass-panel">
                            <p>
                                What websites were to Web 1.0. <br />
                                What apps were to mobile. <br />
                                **NexWorld is to the spatial era.**
                            </p>
                        </div>

                        <motion.button
                            className="white-btn"
                            onClick={() => navigate("/ecosystem")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore the Ecosystem <FiArrowRight style={{ marginLeft: '10px' }} />
                        </motion.button>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </div>
    );
}