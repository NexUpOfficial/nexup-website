import React, { useRef, useEffect, useState } from 'react';
import "../page-styles/Home.css";
// Assuming a Footer component and its path
import Footer from "../components/Footer/Footer"; 

// Video Links (Locked & Final)
const VIDEO_LINKS = {
    hero: "https://res.cloudinary.com/dgzikn7nn/video/upload/Futuristic_City_AR_VR_Fly_Through_wxzn65.mp4",
    nexWorld: "https://res.cloudinary.com/dgzikn7nn/video/upload/NexWorld_Futuristic_Drone_Flythrough_f4pwmj.mp4",
    nexNodes: "https://res.cloudinary.com/dgzikn7nn/video/upload/v1764942791/NexNodes_Energy_Network_Animation_ufdjqs.mp4",
    nexEngine: "https://res.cloudinary.com/dgzikn7nn/video/upload/v1765124047/NexEngine_Activation_Powering_NexWorld_afukbv.mp4",
    nexHousing: "https://res.cloudinary.com/dgzikn7nn/video/upload/NexHousing_Futuristic_Smart_Living_District_pwwu48.mp4",
    nexSearch: "https://res.cloudinary.com/dgzikn7nn/video/upload/v1765029785/NexSearch_AI_Cinematic_Showcase_fl7dwk.mp4",
};

// Component for the Ecosystem Card with Lazy-Loading and Play/Pause control
const EcosystemCard = ({ title, microLabel, videoUrl, text, ctaText, ctaClass, routePath }) => {
    const videoRef = useRef(null);
    const cardRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (isPlaying) {
            videoElement.play().catch(error => console.log("Video play failed:", error));
        } else {
            videoElement.pause();
        }
    }, [isPlaying, shouldLoad]);

    return (
        <div ref={cardRef} className="ecosystem__card">
            <div className="card__video-container">
                {shouldLoad ? (
                    <video 
                        ref={videoRef} 
                        className="card__video" 
                        src={videoUrl} 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                    >
                        {/* Fallback source could be added here */}
                    </video>
                ) : (
                    // Placeholder until loaded
                    <div className="card__video" style={{backgroundColor: '#111', height: '100%'}}></div>
                )}
            </div>
            <div className="card__content">
                <span className="card__micro-label">{microLabel}</span>
                <h3 className="card__title">{title}</h3>
                <p className="card__text text--secondary">{text}</p>
                {/* Linked to routePath */}
                <a href={routePath} className={`cta ${ctaClass}`}>{ctaText} →</a>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home">

            {/* 1. HERO — WORLD ENTRY (FINAL OS DASHBOARD LAYOUT) */}
            <section className="section-hero">
                {/* LEFT PANEL: TEXT & CTA (Solid Black Background) */}
                <div className="hero__panel-left">
                    <span className="hero__badge">NEXUP OS // SPATIAL COMPUTING</span>
                    <h1 className="hero__title">NEXUP</h1>
                    <h2 className="hero__subtitle">The Spatial Operating System</h2>
                    
                    {/* Updated Short Description */}
                    <p className="hero__supporting-line text--subtle">
                        A unified system for building, living, and operating inside persistent digital worlds.
                    </p>
                    
                    <div className="hero__cta-group">
                        {/* CTA: Enter NexWorld -> /ecosystem/nexworld */}
                        <a href="/ecosystem/nexworld" className="cta cta-primary">Enter NexWorld →</a>
                        {/* CTA: How NexUP Works -> /architecture */}
                        <a href="/architecture" className="cta cta-secondary">How NexUP Works</a>
                    </div>
                </div>

                {/* RIGHT PANEL: VIDEO PREVIEW (No Overlay/Blur) */}
                <div className="hero__panel-right">
                    <div className="hero__video-container">
                        <video 
                            className="hero__video" 
                            src={VIDEO_LINKS.hero} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        ></video>
                    </div>
                </div>
            </section>

            {/* 2. CONTEXT STRIP — POWERING THE PLATFORM */}
            <section className="section-context">
                <div className="context__list">
                    <span>UNREAL ENGINE 5</span>
                    <span>•</span>
                    <span>UNITY</span>
                    <span>•</span>
                    <span>WEBXR</span>
                    <span>•</span>
                    <span>NVIDIA OMNIVERSE</span>
                    <span>•</span>
                    <span>SOLANA</span>
                    <span>•</span>
                    <span>AI</span>
                </div>
            </section>

            {/* 3. THE SHIFT & 4. MINI MANIFESTO */}
            <section className="section-shift">
                {/* 3. THE SHIFT */}
                <div className="shift__content">
                    <h2 className="shift__title">The World Is No Longer Flat.</h2>
                    <div className="shift__text">
                        <p className="text--secondary">For decades, digital experiences have been confined to screens, applications, and isolated platforms. But reality is changing.</p>
                        <p className="text--secondary">Persistent worlds, spatial interfaces, and intelligent systems are redefining how humans interact with technology.</p>
                    </div>
                    <p className="shift__transition-line">NexUP is built for this shift.</p>
                    {/* CTA: Read the Manifesto -> /about/vision */}
                    <a href="/about/vision" className="cta cta-secondary">Read the Manifesto →</a>
                </div>

                {/* 4. MINI MANIFESTO */}
                <div className="section-manifesto">
                    <h3 className="manifesto__statement">
                        We are building a world where intelligence and immersion exist as one continuous reality.
                    </h3>
                    <p className="manifesto__supporting-line text--secondary">
                        No dashboards. No disconnected apps. Just living systems that respond, adapt, and evolve.
                    </p>
                </div>
            </section>

            {/* 5. HOW NEXUP WORKS — SYSTEM FLOW */}
            <section className="section-flow">
                <span className="section__label">ARCHITECTURE</span>
                <h2 className="section__title">How NexUP Operates</h2>
                
                {/*  */}
                <div className="flow__diagram">
                    <div className="flow__step">Physical Reality</div>
                    <div className="flow__arrow">↓</div>
                    <div className="flow__step">NexNodes — Distributed AI & Compute Infrastructure</div>
                    <div className="flow__arrow">↓</div>
                    <div className="flow__step">NexEngine — Real-Time Simulation & World Logic</div>
                    <div className="flow__arrow">↓</div>
                    <div className="flow__step">NexWorld — Persistent Spatial Experiences</div>
                </div>

                <p className="flow__supporting-line text--subtle">
                    Every layer functions together as a single operating system, not separate products.
                </p>
                {/* CTA: View Full Architecture -> /architecture */}
                <a href="/architecture" className="cta cta-secondary">View Full Architecture →</a>
            </section>

            {/* 6. ECOSYSTEM — ONE WORLD, MULTIPLE LAYERS */}
            <section className="section-ecosystem section--dark">
                <h2 className="section__title">One World. Multiple Layers.</h2>

                <div className="ecosystem__grid">
                    <EcosystemCard
                        title="NexWorld"
                        microLabel="EXPERIENCE"
                        videoUrl={VIDEO_LINKS.nexWorld}
                        text="The immersive layer where users live, explore, and interact inside persistent digital environments."
                        ctaText="Explore NexWorld"
                        ctaClass="cta-secondary"
                        routePath="/ecosystem/nexworld"
                    />
                    <EcosystemCard
                        title="NexNodes"
                        microLabel="INFRASTRUCTURE"
                        videoUrl={VIDEO_LINKS.nexNodes}
                        text="The decentralized intelligence network powering computation, AI reasoning, and real-time synchronization across the world."
                        ctaText="Discover NexNodes"
                        ctaClass="cta-secondary"
                        routePath="/ecosystem/nexnodes"
                    />
                    <EcosystemCard
                        title="NexEngine"
                        microLabel="CREATION"
                        videoUrl={VIDEO_LINKS.nexEngine}
                        text="The creation and simulation layer where physics, AI behavior, and world logic are built and executed."
                        ctaText="Open NexEngine"
                        ctaClass="cta-secondary"
                        routePath="/ecosystem/nexengine"
                    />
                    <EcosystemCard
                        title="NexHousing"
                        microLabel="LIVING"
                        videoUrl={VIDEO_LINKS.nexHousing}
                        text="Spatial living environments blending digital ownership, real-world infrastructure, and augmented reality."
                        ctaText="View NexHousing"
                        ctaClass="cta-secondary"
                        routePath="/ecosystem/nexhousing"
                    />
                    <EcosystemCard
                        title="NexSearch"
                        microLabel="DISCOVERY"
                        videoUrl={VIDEO_LINKS.nexSearch}
                        text="A reality-first search system that allows users to query physical and digital spaces instantly."
                        ctaText="Use NexSearch"
                        ctaClass="cta-secondary"
                        routePath="/ecosystem/nexsearch"
                    />
                </div>
            </section>

            {/* 7. USE-CASE SNAPSHOTS */}
            <section className="section-use-cases">
                <h2 className="section__title">Built for Every Layer of Society</h2>

                <div className="use-cases__grid">
                    <div className="use-case__pill">
                        <h4 className="use-case__role">Developers</h4>
                        <p className="use-case__description">Build intelligent worlds, simulations, and spatial applications.</p>
                    </div>
                    <div className="use-case__pill">
                        <h4 className="use-case__role">Creators</h4>
                        <p className="use-case__description">Design immersive experiences without traditional boundaries.</p>
                    </div>
                    <div className="use-case__pill">
                        <h4 className="use-case__role">Enterprises</h4>
                        <p className="use-case__description">Train, simulate, and operate inside real-time digital twins.</p>
                    </div>
                    <div className="use-case__pill">
                        <h4 className="use-case__role">Citizens</h4>
                        <p className="use-case__description">Live, explore, and own spaces inside persistent digital worlds.</p>
                    </div>
                </div>
            </section>

            {/* 8. MID-PAGE CTA — CHOOSE YOUR PATH */}
            <section className="section-mid-cta section--dark">
                <h2 className="mid-cta__title">Choose How You Enter NexUP</h2>
                <p className="mid-cta__helper">Different paths for different builders.</p>
                <div className="mid-cta__options">
                    {/* CTA: Build on NexUP -> /ecosystem/nexengine */}
                    <a href="/ecosystem/nexengine" className="mid-cta__option-cta cta-primary">Build on NexUP →</a>
                    {/* CTA: Explore NexWorld -> /ecosystem/nexworld */}
                    <a href="/ecosystem/nexworld" className="mid-cta__option-cta cta-secondary">Explore NexWorld →</a>
                    {/* CTA: Partner with NexUP -> /contact */}
                    <a href="/contact" className="mid-cta__option-cta cta-secondary">Partner with NexUP →</a>
                </div>
            </section>

            {/* 9. FUTURE DIRECTION */}
            <section className="section-future">
                <h2 className="section__title">Where NexUP Is Going</h2>
                <p className="future__text text--secondary">
                    NexUP is designed for a future where cities are augmented, worlds are persistent, and intelligence is embedded into reality itself.
                </p>
                <div className="future__pillars">
                    <span className="future__pillar">AR-DRIVEN CITIES</span>
                    <span className="future__pillar">PERSISTENT DIGITAL WORLDS</span>
                    <span className="future__pillar">AI-NATIVE ENVIRONMENTS</span>
                </div>
                {/* CTA: View Roadmap -> /sections/roadmap */}
                <a href="/sections/roadmap" className="cta cta-primary">View Roadmap →</a>
            </section>

            {/* 10. FINAL IDENTITY STATEMENT */}
            <section className="section-final">
                <h2 className="final__statement">
                    NexUP is not a platform.<br />
                    It is an operating system for <span>reality</span>.
                </h2>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Home;