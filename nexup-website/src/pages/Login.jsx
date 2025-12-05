// src/pages/Login.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight, FiCheckCircle, FiUser, FiCpu } from "react-icons/fi";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import "../page-styles/Login.css";

/* --- ANIMATION VARIANTS --- */
const greetingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// ⭐ 1. Input Stagger Animation
const inputVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1 + 0.2, duration: 0.4 } 
  }),
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
};

/* --- COMPONENTS --- */

const ParticleField = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="particle-container">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
};

const GlowButton = ({ children, className, onClick }) => {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.button
      ref={btnRef}
      className={`glow-trail-btn ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div className="glow-effect" style={{ x, y }} />
      <span className="btn-content">{children}</span>
    </motion.button>
  );
};

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingStep, setGreetingStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // 3D Tilt Logic
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 150, damping: 20 });

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ⭐ 6. & 10. AI Greeting Sequence + Escape Key
  useEffect(() => {
    // Escape key listener
    const skip = (e) => { if (e.key === "Escape") setShowGreeting(false); };
    window.addEventListener("keydown", skip);

    // Sequence timers
    const timer1 = setTimeout(() => setGreetingStep(1), 1500); // "Initializing"
    const timer2 = setTimeout(() => setGreetingStep(2), 3000); // "Synchronizing" (New Step)
    const timer3 = setTimeout(() => setShowGreeting(false), 4500); // Exit

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  // Greeting Render
  if (showGreeting) {
    return (
      <div className="ai-greeting-screen">
        <AnimatePresence mode="wait">
          {greetingStep === 0 && (
            <motion.h2 key="step1" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text">
              Welcome back, Explorer.
            </motion.h2>
          )}
          {greetingStep === 1 && (
            <motion.h2 key="step2" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text">
              Initializing Secure Gateway...
            </motion.h2>
          )}
          {/* ⭐ 6. New Step */}
          {greetingStep === 2 && (
            <motion.h2 key="step3" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text">
              Synchronizing Reality Layers...
            </motion.h2>
          )}
        </AnimatePresence>
        
        <div className="loader-line" />
        <p className="skip-hint">Press ESC to skip</p>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="cyber-grid" />
      <ParticleField />
      <div className="login-glow-top" />
      <div className="login-glow-bottom" />

      <motion.div 
        className="login-content-wrapper"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* ================= LEFT SIDE ================= */}
        <div className="login-text-side">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="brand-pill">
              <span className="dot pulse"></span> Secure Gateway v2.4
            </div>
            <h1 className="login-title">
              Welcome to <br />
              <span className="gradient-text">NexWorld ID.</span>
            </h1>
            <p className="login-sub">
              Your single identity for the spatial web. Access NexWorld, manage NexNodes, 
              and sync your digital reality across all devices.
            </p>

            <div className="login-features">
              <FeatureItem text="End-to-End Encryption" />
              <FeatureItem text="Biometric Ready" />
              <FeatureItem text="Distributed Ledger Sync" />
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="login-card-side">
          <motion.div 
            ref={cardRef}
            className="tilt-container"
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="neon-border-box">
              <div className="auth-card glass-panel">
                
                {/* ⭐ 2. Hologram Sheen */}
                <div className="holo-sheen" />

                <div className={`avatar-scanner ${isTyping ? "scanning" : ""}`}>
                  <div className="scan-line"></div>
                  <FiCpu className="avatar-icon" />
                </div>

                <div className="auth-tabs">
                  <button className={`tab-btn ${isLogin ? "active" : ""}`} onClick={() => setIsLogin(true)}>Log In</button>
                  <button className={`tab-btn ${!isLogin ? "active" : ""}`} onClick={() => setIsLogin(false)}>Sign Up</button>
                </div>

                <div className="auth-header">
                  <h2>{isLogin ? "Identity Verification" : "Create Identity"}</h2>
                  <p>{isLogin ? "Authenticate to access the ecosystem." : "Mint your new digital existence."}</p>
                </div>

                <div className="social-login-grid">
                  <button className="social-btn"><FaGoogle /></button>
                  <button className="social-btn"><FaGithub /></button>
                  <button className="social-btn"><FaApple /></button>
                </div>

                <div className="auth-divider">
                  <span>Or use email protocol</span>
                </div>

                {/* ⭐ 8. Tab Switch Spring Animation + ⭐ 1. Input Stagger */}
                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isLogin ? "login" : "signup"}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {!isLogin && (
                        <motion.div 
                          className="input-group"
                          custom={0}
                          variants={inputVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <FiUser className="input-icon" /> 
                          <input 
                            type="text" 
                            placeholder="Full Name" 
                            onFocus={() => setIsTyping(true)}
                            onBlur={() => setIsTyping(false)}
                          />
                          <div className="input-border-glow" />
                        </motion.div>
                      )}
                      
                      <motion.div 
                        className="input-group"
                        custom={1}
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <FiMail className="input-icon" />
                        <input 
                          type="email" 
                          placeholder="name@example.com" 
                          required 
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                        />
                        <div className="input-border-glow" />
                      </motion.div>

                      <motion.div 
                        className="input-group"
                        custom={2}
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <FiLock className="input-icon" />
                        <input 
                          type="password" 
                          placeholder={isLogin ? "Password" : "Password (min. 8 characters)"} 
                          required 
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                        />
                        <div className="input-border-glow" />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {isLogin && (
                    <div className="form-actions">
                      <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Keep session active
                      </label>
                      <span className="forgot-link">Recover Key?</span>
                    </div>
                  )}

                  {/* ⭐ 7. Placeholder Navigation */}
                  <GlowButton className="submit-btn" onClick={() => navigate("/")}>
                    {isLogin ? "Authenticate" : "Initialize Account"} <FiArrowRight />
                  </GlowButton>
                </form>

                <p className="auth-footer">
                  Protected by <span className="link">NexGuard</span> Encryption.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <FiCheckCircle className="check-icon" />
      <span>{text}</span>
    </div>
  );
}