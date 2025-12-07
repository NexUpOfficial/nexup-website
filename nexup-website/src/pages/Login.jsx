import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiMail, FiLock, FiArrowRight, FiCheckCircle, 
  FiCpu, FiEye, FiEyeOff, FiLoader, FiAlertCircle, FiX 
} from "react-icons/fi";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import "../page-styles/Login.css";

/* --- ANIMATIONS (Kept same) --- */
const greetingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }
};
const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};
const inputVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({ 
    opacity: 1, y: 0, transition: { delay: i * 0.1 + 0.2, duration: 0.4 } 
  }),
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
};
const featureListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};
const featureItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

/* --- COMPONENTS (ParticleField & GlowButton kept same) --- */
const ParticleField = () => {
  const particles = useMemo(() => Array.from({ length: 20 }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    duration: Math.random() * 5 + 10,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 1
  })), []);

  return (
    <div className="particle-container">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{ x: [null, Math.random() * 40 - 20], y: [null, Math.random() * -100], opacity: [0, 0.3, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

const GlowButton = ({ children, className, onClick, disabled }) => {
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
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
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
  const [emailValid, setEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3D Tilt Logic
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 100, damping: 20 });

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleCardMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Email Validation
  useEffect(() => {
    const timer = setTimeout(() => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setEmailValid(isValid && email.length > 0);
    }, 200);
    return () => clearTimeout(timer);
  }, [email]);

  // Auth Handler
  const handleAuth = async (e) => {
    if(e) e.preventDefault();
    setError("");
    if (!email || !password) { setError("Credentials required."); return; }
    if (!emailValid) { setError("Invalid email format."); return; }
    if (password.length < 6) { setError("Password too short."); return; }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate("/"); 
    } catch (err) { setError("Authentication failed."); } finally { setIsLoading(false); }
  };

  // Greeting Sequence
  useEffect(() => {
    const skip = (e) => { if (e.key === "Escape") setShowGreeting(false); };
    window.addEventListener("keydown", skip);
    const timer1 = setTimeout(() => setGreetingStep(1), 1500);
    const timer2 = setTimeout(() => setGreetingStep(2), 3000);
    const timer3 = setTimeout(() => setShowGreeting(false), 4500);
    return () => {
      clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  if (showGreeting) {
    return (
      <div className="ai-greeting-screen">
        <AnimatePresence mode="wait">
          {greetingStep === 0 && (
            <motion.div key="s1" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text-container">
              <h2 className="ai-text typing-effect">Welcome back, Explorer.</h2>
            </motion.div>
          )}
          {greetingStep === 1 && (
            <motion.h2 key="s2" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text">
              Initializing Secure Gateway...
            </motion.h2>
          )}
          {greetingStep === 2 && (
            <motion.h2 key="s3" variants={greetingVariants} initial="hidden" animate="visible" exit="exit" className="ai-text">
              Synchronizing Reality Layers...
            </motion.h2>
          )}
        </AnimatePresence>
        
        <div className="loader-line" />
        
        {/* ⭐ NEW: Mobile/Desktop Skip Button */}
        <motion.button 
          className="skip-btn"
          onClick={() => setShowGreeting(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Skip Intro <span className="desktop-hint">(ESC)</span>
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`login-page ${isTyping ? "typing-mode" : ""}`}>
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
        <div className="login-text-side">
          <motion.div 
            className="glass-text-panel"
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
            <motion.div className="login-features" variants={featureListVariants} initial="hidden" animate="visible">
              <FeatureItem text="End-to-End Encryption" />
              <FeatureItem text="Biometric Ready" />
              <FeatureItem text="Distributed Ledger Sync" />
            </motion.div>
          </motion.div>
        </div>

        <div className="login-card-side">
          <motion.div 
            ref={cardRef}
            className="tilt-container"
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="neon-border-box">
              <div className={`auth-card glass-panel ${isTyping ? "card-active-glow" : ""}`}>
                <div className="holo-sheen" />
                <div className="card-brand-logo">NEXUP</div>
                <div className={`avatar-scanner ${isTyping ? "scanning" : ""}`}>
                  <div className="scan-line"></div>
                  <FiCpu className="avatar-icon" />
                </div>

                <div className="auth-tabs">
                  <button className={`tab-btn ${isLogin ? "active" : ""}`} onClick={() => { setIsLogin(true); setError(""); }}>Log In</button>
                  <button className={`tab-btn ${!isLogin ? "active" : ""}`} onClick={() => { setIsLogin(false); setError(""); }}>Sign Up</button>
                </div>

                <div className="auth-header">
                  <h2>{isLogin ? "Identity Verification" : "Create Identity"}</h2>
                  <p>{isLogin ? "Authenticate to access the ecosystem." : "Create your NexWorld Identity."}</p>
                </div>

                <div className="social-login-grid">
                  <button className="social-btn"><FaGoogle /></button>
                  <button className="social-btn"><FaGithub /></button>
                  <button className="social-btn"><FaApple /></button>
                </div>

                <div className="auth-divider"><span>Or use email protocol</span></div>

                {error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="error-banner">
                        <FiAlertCircle /> {error}
                    </motion.div>
                )}

                <form className="auth-form" onSubmit={handleAuth}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isLogin ? "login" : "signup"}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.div className={`input-group ${emailValid ? "success" : ""}`} custom={1} variants={inputVariants} initial="hidden" animate="visible">
                        <FiMail className="input-icon" />
                        <input type="email" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
                        <div className="input-border-glow" />
                      </motion.div>

                      <motion.div className="input-group" custom={2} variants={inputVariants} initial="hidden" animate="visible">
                        <FiLock className="input-icon" />
                        <input type={showPassword ? "text" : "password"} placeholder={isLogin ? "Password" : "Password (min. 6 characters)"} required value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} />
                        <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                        <div className="input-border-glow" />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {isLogin && (
                    <div className="form-actions">
                      {/* ⭐ UPDATED: Custom Neon Checkbox Structure */}
                      <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="custom-checkmark"></span>
                        <span className="checkbox-text">Keep session active</span>
                      </label>
                      <span className="forgot-link">Recover Key?</span>
                    </div>
                  )}

                  <GlowButton className="submit-btn" type="submit" disabled={isLoading}>
                    {isLoading ? <><FiLoader className="spinner" /> Authenticating...</> : <>{isLogin ? "Authenticate" : "Initialize Account"} <FiArrowRight /></>}
                  </GlowButton>
                </form>

                <p className="auth-footer">Protected by <span className="link">NexGuard</span> Encryption.</p>
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
    <motion.div className="feature-item" variants={featureItemVariants}>
      <FiCheckCircle className="check-icon" /> <span>{text}</span>
    </motion.div>
  );
}