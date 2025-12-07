import { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue, 
  useSpring 
} from "framer-motion";
import { Link } from "react-router-dom";
import "../page-styles/Home.css";
import Footer from "../components/Footer/Footer";

/* =======================================
   ANIMATION VARIANTS
======================================= */

const pageRevealVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } // Smoother, premium ease
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

/* =======================================
   COMPONENT: SCROLL INDICATOR
======================================= */
function ScrollIndicator() {
  return (
    <motion.div 
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="mouse-icon">
        <div className="wheel"></div>
      </div>
    </motion.div>
  );
}

/* =======================================
   COMPONENT: SPOTLIGHT CARD (PREMIUM)
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
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(184, 169, 255, 0.10),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Glass Reflection Streak */}
      <div className={`glass-streak ${isHovered ? 'animate' : ''}`} />

      {/* Card Content Wrapper */}
      <div className="card-main-content">
        {children}
      </div>

      {/* Explore Button */}
      <motion.div 
        className="card-explore-wrapper"
        initial={{ opacity: 0.6, x: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6, x: isHovered ? 5 : 0 }}
      >
        <span className="explore-text">Explore</span>
        <span className="explore-arrow">&rarr;</span>
      </motion.div>
    </Link>
  );
}

/* =======================================
   MAIN PAGE COMPONENT
======================================= */
export default function Home() {
  const scrollRef = useRef(null);
  
  // Parallax Logic for Title
  const mouseX = useSpring(0, { stiffness: 30, damping: 15 });
  const mouseY = useSpring(0, { stiffness: 30, damping: 15 });

  function handleHeroMouseMove(e) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    // Calculate normalized position -0.5 to 0.5
    const xPct = (clientX / width) - 0.5;
    const yPct = (clientY / height) - 0.5;
    mouseX.set(xPct * 20); // Move 20px max
    mouseY.set(yPct * 20);
  }

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHeroScroll = useTransform(scrollYProgress, [0, 1], [1, 1.05]); 

  return (
    <div className="home-container" ref={scrollRef}>
      
      {/* Watermark Logo */}
      <div className="brand-watermark">NEXUP // OS</div>

      {/* =====================================================
           1. CINEMATIC HERO SECTION
      ====================================================== */}
      <section 
        className="hero-fullscreen-wrapper" 
        onMouseMove={handleHeroMouseMove}
      >
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
              preload="metadata"
              className="bg-video"
            />
            {/* Lighter overlay for clarity */}
            <div className="video-overlay" />
            <div className="video-vignette" />
            {/* Spatial Grid Overlay */}
            <div className="spatial-grid-overlay" />
          </div>
        </motion.div>

        <motion.div
          className="hero-content-layer"
          style={{ y: yHero, opacity: opacityHero }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            v2.0 &bull; Spatial Era
          </motion.div>
          
          <motion.h1 
            className="home-title"
            style={{ x: mouseX, y: mouseY }}
          >
            Reality, <br />
            <span className="text-depth">Redefined.</span>
          </motion.h1>

          <p className="home-subtitle">
            The unified operating system for AR, VR, and intelligent environments.
          </p>

          <div className="home-buttons">
            <Link to="/ecosystem" className="primary-btn">
              <span>Enter Ecosystem</span>
              <span className="icon-arrow">&rarr;</span>
            </Link>
            <Link to="/about/vision" className="secondary-btn">
              Our Vision
            </Link>
          </div>

          <ScrollIndicator />
        </motion.div>
      </section>

      {/* =====================================================
           2. THE MANIFESTO
      ====================================================== */}
      <div className="content-flow">
        <section className="section manifesto-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="manifesto-text"
              variants={itemVariants}
            >
              We are building a world where <span className="animated-underline">intelligence</span> and <span className="animated-underline">immersion</span> merge.
            </motion.h2>
            
            <motion.p 
              className="manifesto-sub"
              variants={itemVariants}
            >
              No longer just screens. NexUP enables a fluid interaction between physical
              and virtual environments, powered by a decentralized neural backbone.
            </motion.p>

            <motion.div variants={itemVariants} className="manifesto-actions">
              <Link to="/about" className="glass-link">
                Read the Manifesto &rarr;
              </Link>
            </motion.div>

          </motion.div>
        </section>

        {/* =====================================================
             3. ECOSYSTEM BENTO GRID
        ====================================================== */}
        <section className="section bento-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="small-label">The Platform</h3>
            <h2>The NeX UP Ecosystem</h2>
          </motion.div>

          <motion.div
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* ITEM 1: NEXWORLD (Large) */}
            <motion.div variants={itemVariants} className="grid-span-large">
              <SpotlightCard to="/ecosystem/nexworld" className="card-large">
                <div className="card-bg-video-wrapper">
                  <video 
                    className="card-bg-video" 
                    autoPlay loop muted playsInline preload="metadata"
                    src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexWorld_Futuristic_Drone_Flythrough_f4pwmj.mp4" 
                  />
                  <div className="card-video-overlay" />
                </div>
                <div className="card-text-content">
                  <h3 className="card-title">NexWorld <div className="hover-line"></div></h3>
                  <p>The immersive engine powering digital cities and shared 3D realities.</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 2: NEXNODES */}
            <motion.div variants={itemVariants} className="grid-span-tall">
               <SpotlightCard to="/ecosystem/nexnodes" className="card-tall">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline preload="metadata"
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1764942791/NexNodes_Energy_Network_Animation_ufdjqs.mp4" 
                    />
                    <div className="card-video-overlay overlay-darker" />
                  </div>
                  <div className="card-text-content">
                    <h3 className="card-title">NexNodes <div className="hover-line"></div></h3>
                    <p>Decentralized intelligence network.</p>
                  </div>
               </SpotlightCard>
            </motion.div>

            {/* ITEM 3: NEXENGINE */}
            <motion.div variants={itemVariants} className="grid-span-wide">
              <SpotlightCard to="/ecosystem/nexengine" className="card-wide">
                 <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline preload="metadata"
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765032493/Nexengine_lhm4mf.mp4" 
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <div className="card-text-content">
                    <h3 className="card-title">NexEngine <div className="hover-line"></div></h3>
                    <p>Real-time physics and AI computation layer.</p>
                  </div>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 4: NEXHOUSING */}
            <motion.div variants={itemVariants}>
              <SpotlightCard to="/ecosystem/nexhousing">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline preload="metadata"
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/NexHousing_Futuristic_Smart_Living_District_pwwu48.mp4"
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <div className="card-text-content">
                    <h3 className="card-title">NexHousing <div className="hover-line"></div></h3>
                    <p>AR-powered living spaces.</p>
                  </div>
              </SpotlightCard>
            </motion.div>

            {/* ITEM 5: SEARCH */}
            <motion.div variants={itemVariants}>
              <SpotlightCard to="/ecosystem/nexsearch">
                  <div className="card-bg-video-wrapper">
                    <video 
                      className="card-bg-video" 
                      autoPlay loop muted playsInline preload="metadata"
                      src="https://res.cloudinary.com/dgzikn7nn/video/upload/v1765029785/NexSearch_AI_Cinematic_Showcase_fl7dwk.mp4" 
                    />
                    <div className="card-video-overlay" />
                  </div>
                  <div className="card-text-content">
                    <h3 className="card-title">Search <div className="hover-line"></div></h3>
                    <p>Query the physical world.</p>
                  </div>
              </SpotlightCard>
            </motion.div>

          </motion.div>
        </section>

        {/* =====================================================
             4. FUTURE STATEMENT (Refined)
        ====================================================== */}
        <section className="section future-section-immersive">
          <div className="aurora-container">
            {/* Faint Grid Background */}
            <div className="grid-bg"></div>

            {/* The Moving Background Layers (Desaturated) */}
            <div className="aurora-blob blob-1" />
            <div className="aurora-blob blob-2" />
            <div className="aurora-blob blob-3" />
            
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

              <Link to="/sections/roadmap" className="roadmap-btn-glass">
                View Full Roadmap
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}