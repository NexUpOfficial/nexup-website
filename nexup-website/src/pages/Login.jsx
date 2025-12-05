// src/pages/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import "../page-styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/Signup

  return (
    <div className="login-page">
      {/* Background Ambient Glows */}
      <div className="login-glow-top" />
      <div className="login-glow-bottom" />

      <div className="login-content-wrapper">
        
        {/* ================= LEFT SIDE: HERO CONTENT ================= */}
        <motion.div 
          className="login-text-side"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="brand-pill">
            <span className="dot"></span> Secure Gateway v2.4
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

        {/* ================= RIGHT SIDE: AUTH CARD ================= */}
        <motion.div 
          className="login-card-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="auth-card glass-panel">
            
            {/* Tabs */}
            <div className="auth-tabs">
              <button 
                className={`tab-btn ${isLogin ? "active" : ""}`} 
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
              <button 
                className={`tab-btn ${!isLogin ? "active" : ""}`} 
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            {/* Header */}
            <div className="auth-header">
              <h2>{isLogin ? "Welcome back" : "Create Account"}</h2>
              <p>{isLogin ? "Enter your credentials to access the ecosystem." : "Join the future of intelligent reality today."}</p>
            </div>

            {/* Social Login */}
            <div className="social-login-grid">
              <button className="social-btn"><FaGoogle /> <span>Google</span></button>
              <button className="social-btn"><FaGithub /> <span>GitHub</span></button>
              <button className="social-btn"><FaApple /> <span>Apple</span></button>
            </div>

            <div className="auth-divider">
              <span>Or continue with email</span>
            </div>

            {/* Form */}
            <form className="auth-form">
              {!isLogin && (
                <div className="input-field">
                  <input type="text" placeholder="Full Name" />
                </div>
              )}
              
              <div className="input-group">
                <FiMail className="input-icon" />
                <input type="email" placeholder="name@example.com" required />
              </div>

              <div className="input-group">
                <FiLock className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>

              {isLogin && (
                <div className="form-actions">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <span className="forgot-link">Forgot Password?</span>
                </div>
              )}

              <button className="submit-btn">
                {isLogin ? "Sign In" : "Create Account"} <FiArrowRight />
              </button>
            </form>

            <p className="auth-footer">
              By continuing, you agree to NeX UP's <span className="link">Terms</span> and <span className="link">Privacy Policy</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

/* Helper Component */
function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <FiCheckCircle className="check-icon" />
      <span>{text}</span>
    </div>
  );
}