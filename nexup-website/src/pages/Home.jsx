// src/pages/Home.jsx
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import "../page-styles/Home.css";
import Footer from "../components/Footer/Footer";


/* =======================================
   ANIMATION VARIANTS
======================================= */

// 1. Page/Video Initial Reveal
const pageRevealVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

// 2. Bento Grid Stagger Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// 3. Individual Card Pop-in
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

// 4. Hover Arrow Reveal Variants
const arrowRevealVariants = {
  hidden: { opacity: 0, x: -15, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.1 }
  }
};

/* =======================================
   COMPONENT: SPOTLIGHT CARD
======================================= */
function SpotlightCard({ children, className = "", to }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link
      to={to}
      className={`bento-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* The Glow Effect */}
      <motion.div
        className="spotlight-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(184, 169, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Card Content Wrapper */}
      <div className="card-main-content">
        {children}
      </div>

      {/* The Revealing Explore Button */}
      <motion.span 
        className="card-arrow-bottom-right"
        variants={arrowRevealVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        Explore &rarr;
      </motion.span>
    </Link>
  );
}

/* =======================================
   MAIN PAGE COMPONENT
======================================= */
export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Parallax Transforms
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHeroScroll = useTransform(scrollYProgress, [0, 1], [1, 1.1]); 

  return (
    <div className="home-container" ref={scrollRef}>
      
      {/* =====================================================
           1. CINEMATIC HERO SECTION
      ====================================================== */}
      <section className="hero-fullscreen-wrapper">
        <motion.div 
          className="video-background-wrapper"
          style={{ scale: scaleHeroScroll }}
          variants={pageRevealVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="video-background">
            <video
              src="https://res.cloudinary.com/dgzikn7nn/video/upload/Futuristic_City_AR_VR_Fly_Through_wxzn65.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="bg-video"
            />
            <div className="video-overlay" />
            <div className="video-vignette" />
          </div>
        </motion.div>

        <motion.div
          className="hero-content-layer"
          style={{ y: yHero, opacity: opacityHero }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            v2.0 // Spatial Era
          </motion.div>
          
          <h1 className="home-title">
            Reality, <br />
            <motion.span 
              className="gradient-text"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Redefined.
            </motion.span>
          </h1>

          <p className="home-subtitle">
            The unified operating system for AR, VR, and intelligent environments.
          </p>

          <div className="home-buttons">
            <Link to="/ecosystem" className="primary-btn">
              Enter Ecosystem
            </Link>
            <Link to="/about/vision" className="secondary-btn">
              Our Vision
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
           2. THE MANIFESTO (With About Button)
      ====================================================== */}
      <div className="content-flow">
        <section className="section manifesto-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
              }
            }}
          >
            <motion.h2 
              className="manifesto-text"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              We are building a world where <span className="highlight">intelligence</span> and <span className="highlight">immersion</span> merge.
            </motion.h2>
            
            <motion.p 
              className="manifesto-sub"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              No longer just screens. NexUP enables a fluid interaction between physical
              and virtual environments.
            </motion.p>

            {/* --- ABOUT BUTTON --- */}
            <motion.div 
              className="manifesto-actions"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } 
              }}
            >
              <Link to="/about" className="glass-btn-large">
                <span className="btn-content">About NexUP</span>
                <span className="btn-glow"></span>
                <span className="btn-icon">&rarr;</span>
              </Link>
            </motion.div>

          </motion.div>
        </section>

        {/* =====================================================
             3. ECOSYSTEM BENTO GRID (With Video Backgrounds)
        ====================================================== */}
        <section className="section bento-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="small-label">The Platform</h3>
            {/* ⭐ 6. Animated Header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The NeX UP Ecosystem
            </motion.h2>
          </motion.div>

          <motion.div
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
          >
            
            {/* ITEM 1: NEXWORLD (Large) */}
            <motion.div variants={itemVariants} className="grid-span-large">
              <SpotlightCard to="/ecosystem/nexworld" className="card-large">
                <div className="card-bg-video-wrapper">
                  <video 
                    className="card-bg-video" 
                    autoPlay loop muted playsInline 
                    src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexWorld_Futuristic_Drone_Flythrough_f4pwmj.mp4" 
                  />
                  <div className="card-video-overlay" />
                </div>
                <h3>NexWorld</h3>
                <p>The immersive engine powering digital cities and shared 3D realities.</p>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 2: NEXNODES */}
            <motion.div variants={itemVariants} className="grid-span-tall">
               <SpotlightCard to="/ecosystem/nexnodes" className="card-tall">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline 
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1764942791/NexNodes_Energy_Network_Animation_ufdjqs.mp4" 
                    />
                    <div className="card-video-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
                  </div>
                  <h3>NexNodes</h3>
                  <p>Decentralized intelligence network.</p>
                <div className="tech-lines" />
              </SpotlightCard>
            </motion.div>

            {/* ITEM 3: NEXENGINE */}
            <motion.div variants={itemVariants} className="grid-span-wide">
              <SpotlightCard to="/ecosystem/nexengine" className="card-wide">
                 <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline 
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765032493/Nexengine_lhm4mf.mp4" 
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <h3>NexEngine</h3>
                  <p>Real-time physics and AI computation layer.</p>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 4: NEXHOUSING */}
            <motion.div variants={itemVariants}>
              <SpotlightCard to="/ecosystem/nexhousing">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline 
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexHousing_Futuristic_Smart_Living_District_pwwu48.mp4" type="video/mp4"
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <h3>NexHousing</h3>
                  <p>AR-powered living spaces.</p>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 5: SEARCH */}
            <motion.div variants={itemVariants}>
              <SpotlightCard to="/ecosystem/nexsearch">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline 
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765029785/NexSearch_AI_Cinematic_Showcase_fl7dwk.mp4" 
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <h3>Search</h3>
                  <p>Query the physical world.</p>
              </SpotlightCard>
            </motion.div>

          </motion.div>
        </section>

        {/* =====================================================
             4. FUTURE STATEMENT (The Living Gradient)
        ====================================================== */}
        <section className="section future-section-immersive">
          <div className="aurora-container">
            {/* The Moving Background Layers */}
            <div className="aurora-blob blob-1" />
            <div className="aurora-blob blob-2" />
            <div className="aurora-blob blob-3" />
            
            {/* Glass Overlay to smooth it out */}
            <div className="aurora-glass" />

            <motion.div 
              className="future-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="future-title">
                The Future is <span className="adaptive-text">Adaptive.</span>
              </h2>
              
              <p className="future-desc">
                Digital reality is no longer static. It learns, reacts, and evolves with you.
                <br />Powered by real-time neural networks.
              </p>

              <Link to="/sections/roadmap" className="roadmap-btn">
                <span>View Full Roadmap</span>
                <div className="btn-line-top"></div>
                <div className="btn-line-bottom"></div>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}