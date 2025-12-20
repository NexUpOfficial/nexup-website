// src/pages/FeedbackForm.jsx
import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiLock, FiRepeat, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "../page-styles/Feedback/FeedbackForm.css";
import Footer from "../components/Footer/Footer"; // Assuming a Footer component exists

// --- Configuration Data ---
const MIN_CONTENT_LENGTH = 10;

const FEEDBACK_TYPES = [
    { value: 'bug', label: 'Bug / Technical Issue' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'ui_ux', label: 'UI / UX Improvement' },
    { value: 'nexworld', label: 'NexWorld Experience' },
    { value: 'performance', label: 'Performance or Stability' },
    { value: 'safety_trust', label: 'Safety or Trust Concern' },
    { value: 'general', label: 'General Feedback' },
    { value: 'other', label: 'Other' },
];

const AFFECTED_AREAS = [
    { value: 'website', label: 'Website' },
    { value: 'nexworld', label: 'NexWorld' },
    { value: 'nexengine', label: 'NexEngine' },
    { value: 'nexnodes', label: 'NexNodes' },
    { value: 'nexhousing', label: 'NexHousing' },
    { value: 'search', label: 'Search / Discovery' },
    { value: 'account', label: 'Account & Login' },
    { value: 'other', label: 'Other' },
];

const SEVERITY_OPTIONS = [
    { value: '', label: '-- Select Impact (Optional) --' },
    { value: 'low', label: 'Low (Suggestion)' },
    { value: 'medium', label: 'Medium (Affects usability)' },
    { value: 'high', label: 'High (Blocks usage or trust)' },
];

const initialFormData = {
    userType: 'individual',
    firstName: '',
    lastName: '',
    email: '',
    type: 'general',
    affectedAreas: [],
    content: '',
    severity: '',
    source: "web", // Internal Metadata
    version: "v1.1", // Internal Metadata
};

const submitFeedback = async (data) => {
    // Stub for future API integration
    console.log("Feedback payload ready:", data);
};


const FeedbackForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const isContentValid = formData.content.length >= MIN_CONTENT_LENGTH;
    const isButtonDisabled = isSubmitted || !isContentValid;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Auto-clear success message after 5 seconds
    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prev => {
                const updatedAreas = checked
                    ? [...prev.affectedAreas, value]
                    : prev.affectedAreas.filter(area => area !== value);
                return { ...prev, affectedAreas: updatedAreas };
            });
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isContentValid) {
             alert(`Please describe your feedback with at least ${MIN_CONTENT_LENGTH} characters.`);
             return;
        }

        submitFeedback(formData);
        
        setIsSubmitted(true);
        
        // Reset form data after successful submission
        setFormData(initialFormData);
    };

    return (
        <div className="feedback-page">
            <main className="feedback-container">
                <header className="feedback-header">
                    <h1>Feedback & Suggestions</h1>
                    <p>Help us shape the future of NexUP.</p>
                </header>

                <div className="introduction-section">
                    <p>
                        Your feedback matters at NexUP. NexUP is being built as a long-term spatial computing ecosystem — encompassing immersive worlds, AI-powered tools, infrastructure, and digital experiences. We believe the best platforms are built with their community, not just for them.
                    </p>
                    <p>
                        This feedback page exists so users, creators, developers, and partners can directly influence how NexUP evolves. This is not a "contact us" page, but a platform improvement channel.
                    </p>
                </div>

                {isSubmitted && (
                    <div className="submission-success">
                        <FiCheckCircle className="success-icon" />
                        <p>Feedback received! Thank you for helping us improve NexUP.</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="feedback-form">
                    
                    {/* User Type */}
                    <div className="form-group large-margin-bottom">
                        <label htmlFor="userType">
                            I am submitting feedback as: <span aria-hidden>*</span>
                        </label>
                        <select id="userType" name="userType" value={formData.userType} onChange={handleChange} required>
                            <option value="individual">An Individual User / Creator</option>
                            <option value="company">A Company / Organization</option>
                        </select>
                    </div>

                    {/* Contact Information FIELDSET */}
                    <fieldset className="contact-fieldset">
                        <legend>Contact Information (Optional)</legend>
                        
                        {/* First Name and Last Name - In a Row */}
                        <div className="form-group">
                            <div className="form-row name-row">
                                <div className="form-group-internal half-width">
                                    <label htmlFor="firstName" className="visually-hidden">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        placeholder="First Name"
                                        autoFocus
                                    />
                                </div>
                                <div className="form-group-internal half-width">
                                    <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Email - Now a separate form-group for bottom spacing */}
                        <div className="form-group email-group">
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email (For follow-up)"
                            />
                        </div>
                    </fieldset>
                    
                    {/* Feedback Type Selection */}
                    <div className="form-group large-margin-bottom">
                        <label htmlFor="type">
                            Feedback Category <span aria-hidden>*</span>
                        </label>
                        <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                            {FEEDBACK_TYPES.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Affected Area Checkboxes */}
                    <div className="form-group large-margin-bottom">
                        <label>Affected Area(s) (Optional)</label>
                        <div className="checkbox-grid">
                            {AFFECTED_AREAS.map(area => (
                                <div key={area.value} className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id={area.value} 
                                        name="affectedAreas"
                                        value={area.value} 
                                        checked={formData.affectedAreas.includes(area.value)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={area.value}>{area.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description & Validation */}
                    <div className="form-group large-margin-bottom">
                        <label htmlFor="content">
                            Describe Your Feedback <span aria-hidden>*</span>
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="8"
                            placeholder="Please explain clearly. Screenshots or steps (if applicable) help us understand faster."
                            required
                            aria-label="Describe your feedback in detail"
                        ></textarea>
                        {formData.content.length > 0 && formData.content.length < MIN_CONTENT_LENGTH && (
                            <small className="validation-feedback">
                                Please provide a little more detail (min {MIN_CONTENT_LENGTH} characters)
                            </small>
                        )}
                    </div>

                    {/* Severity */}
                    <div className="form-group large-margin-bottom">
                        <label htmlFor="severity">Severity / Impact (Optional)</label>
                        <select id="severity" name="severity" value={formData.severity} onChange={handleChange}>
                            {SEVERITY_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isButtonDisabled}
                    >
                        {isSubmitted ? "Submitted ✓" : "Send Feedback to NexUP"}
                    </button>
                </form>
                
                {/* Contact Queries Section */}
                <div className="contact-queries-section">
                    <p>Have an urgent query or need immediate assistance?</p>
                    <Link to="/contact" className="contact-button-link">
                        <FiPhone /> Contact Support
                    </Link>
                </div>


                {/* Trust & Privacy Assurance */}
                <div className="trust-assurance-section">
                    <h3><FiLock className="section-icon" /> Privacy & Trust</h3>
                    <ul>
                        <li>Feedback data is never sold or misused</li>
                        <li>Messages are reviewed only by NexUP team</li>
                        <li>No automated profiling or tracking</li>
                        <li>Anonymous feedback is fully supported</li>
                        <li>Safety and trust concerns are prioritized</li>
                    </ul>
                    <p>Your honesty helps make NexUP better — safely and responsibly.</p>
                </div>

                {/* Follow-Up & Community Message */}
                <div className="follow-up-section">
                    <h3><FiRepeat className="section-icon" /> What Happens After You Submit?</h3>
                    <ul>
                        <li>Feedback is reviewed internally</li>
                        <li>Relevant teams are notified</li>
                        <li>Critical issues are prioritized</li>
                        <li>Repeated suggestions influence roadmap decisions</li>
                    </ul>
                    <p className="community-message">
                        While we may not respond to every message, every feedback is read.
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default FeedbackForm;