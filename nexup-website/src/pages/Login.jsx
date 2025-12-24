// src/pages/About/Login.jsx (Final Infrastructural Design with Federated Identity Access)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Importing monochrome icons for provider list (Rule: No colorful buttons)
import { FaGoogle, FaGithub, FaMicrosoft, FaTwitter, FaFacebookF } from 'react-icons/fa';

import "../page-styles/Login.css";

const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const federatedProviders = [
    { name: "Google", icon: FaGoogle, key: "google" },
    { name: "GitHub", icon: FaGithub, key: "github" },
    { name: "Microsoft", icon: FaMicrosoft, key: "microsoft" },
    { name: "X", icon: FaTwitter, key: "twitter" }, // Using Twitter icon for 'X' as it's common
    { name: "Facebook", icon: FaFacebookF, key: "facebook" },
];

export default function Login() {
    const navigate = useNavigate();
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAuth = async (e) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Identity identifiers are required.");
            return;
        }
        
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            navigate("/dashboard"); 
        } catch (err) {
            setError("Verification failed. Protocol error or invalid key.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleFederatedAuth = (providerKey) => {
        setError("");
        setIsLoading(true); // Show system loading state (Rule: show system loading state)
        console.log(`Initiating delegated authentication via: ${providerKey}`);
        
        // Simulate OAuth Redirect/Flow
        setTimeout(() => {
            setIsLoading(false);
            // In a real app, this would trigger a redirect.
            setError(`Delegation for ${providerKey} initiated. Awaiting external response.`);
        }, 1500);
    }

    const handleSwitchMode = (mode) => {
        setIsAuthenticating(mode === 'authenticate');
        setError("");
    };

    const primaryActionText = isAuthenticating ? "Verify Identity" : "Register Identity";

    return (
        <div className="login-page-infrastructure">
            
            <motion.div 
                className="login-panel"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="system-indicator">SYSTEM ACCESS</p>
                <h1 className="identity-title">NexUP Identity</h1>
                <p className="context-line">
                    {isAuthenticating ? "Authenticate to access NexUP systems." : "Create a new identity for system enrollment."}
                </p>

                {error && (
                    <motion.div 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="error-message"
                    >
                        {error}
                    </motion.div>
                )}

                <form className="auth-form" onSubmit={handleAuth}>
                    <div className="input-field">
                        <label htmlFor="email">Email Identifier</label>
                        <input 
                            id="email"
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            disabled={isLoading}
                        />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password"> Create Access Key</label>
                        <input 
                            id="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            disabled={isLoading}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="primary-action-btn" 
                        disabled={isLoading}
                    >
                        {isLoading ? 
                            <span className="loading-state">Processing...</span> : 
                            primaryActionText}
                    </button>
                </form>

                {/* --- Federated Identity Access Section --- */}
                
                {/* Divider (Rule) */}
                <div className="auth-divider">
                    <span>or</span>
                </div>

                {/* Section Title (Rule) */}
                <p className="federated-access-title">
                    Continue using an external identity provider
                </p>

                {/* Provider List (Rule: Vertical, text-first) */}
                <div className="federated-providers-list">
                    {federatedProviders.map(provider => (
                        <motion.button
                            key={provider.key}
                            className="provider-btn"
                            onClick={() => handleFederatedAuth(provider.key)}
                            disabled={isLoading}
                            whileHover={{ scale: 1.005 }}
                            whileTap={{ scale: 0.995 }}
                        >
                            <span className="provider-name">{provider.name}</span>
                            <provider.icon className="provider-icon" />
                        </motion.button>
                    ))}
                </div>

                {/* --- Secondary Actions (Moved Below Federated Section) --- */}
                <div className="secondary-actions">
                    {isAuthenticating ? (
                        <>
                            <span 
                                className="action-link"
                                onClick={() => handleSwitchMode('create')}
                            >
                                Create Identity
                            </span>
                            <span className="separator">/</span>
                            <span 
                                className="action-link"
                                onClick={() => alert('Access key recovery initiated.')}
                            >
                                Recover access
                            </span>
                        </>
                    ) : (
                        <span 
                            className="action-link"
                            onClick={() => handleSwitchMode('authenticate')}
                        >
                            Return to Authentication
                        </span>
                    )}
                </div>

                {/* --- Footer Signal (Bottom of Panel) --- */}
                <p className="system-footer-signal">
                    This authentication process is governed by NexUP system controls.
                </p>

            </motion.div>
        </div>
    );
}