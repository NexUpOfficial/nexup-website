// src/components/Modals/PolicyAcceptanceModal.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "../../page-styles/Safety/Cookies.css";

const PolicyAcceptanceModal = () => {
    // State to control visibility. In a real app, this would be tied to user login status
    // and a backend flag indicating if they've accepted the current version of the policies.
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        // 1. Logic to record acceptance in user preferences/database.
        // 2. Logic to set essential cookies (or all, depending on jurisdiction).
        
        console.log('User has accepted all NexUP policies (Terms, Privacy, Cookies).');
        setIsVisible(false); // Hide the modal upon acceptance
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="policy-modal" role="dialog" aria-modal="true" aria-labelledby="policy-acceptance-title">
                
                <header className="modal-header">
                    <h2 id="policy-acceptance-title">NexUP Policy Update & Agreement</h2>
                </header>

                <div className="modal-body">
                    <p className="summary-intro">
                        To continue using the NexUP platform and our services (including AI features and immersive environments), you must read and agree to our updated foundational documents.
                    </p>
                    
                    <div className="policy-list">
                        <div className="policy-item">
                            <h4>Terms of Service (ToS)</h4>
                            <p>Govern your access and use of our platform, defining user rights, responsibilities, and legal conditions.</p>
                            <Link to="/legal/terms" target="_blank" className="policy-link">Review Terms</Link>
                        </div>

                        <div className="policy-item">
                            <h4>Privacy & Data Protection Guide</h4>
                            <p>Explains what data we collect, why, how it's protected, and outlines your rights over your personal data.</p>
                            <Link to="/policies/privacy" target="_blank" className="policy-link">Review Privacy Guide</Link>
                        </div>

                        <div className="policy-item">
                            <h4>Cookie Policy</h4>
                            <p>Details our minimal and privacy-first use of cookies for functionality and non-intrusive performance analytics.</p>
                            <Link to="/policies/cookies" target="_blank" className="policy-link">Review Cookie Policy</Link>
                        </div>
                    </div>

                    <p className="final-prompt">
                        By clicking **"Accept and Continue"**, you confirm that you have read, understand, and agree to be bound by all NexUP policies listed above.
                    </p>
                </div>

                <div className="modal-footer">
                    <button 
                        className="btn-accept" 
                        onClick={handleAccept}
                    >
                        Accept and Continue
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PolicyAcceptanceModal;