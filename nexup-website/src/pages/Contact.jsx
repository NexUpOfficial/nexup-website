// src/pages/Contact.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// Assuming this is used for general purpose and is now available
import { FaArrowLeft } from 'react-icons/fa'; 
import "../page-styles/Contact.css"; // Ensure this path is correct
import Footer from "../components/Footer/Footer";

// --- Configuration Data ---
const CONTACT_TYPES = [
    { value: 'general', label: 'General Inquiry', target: 'general-contact' },
    { value: 'job', label: 'Job Application', target: 'job-application' },
    { value: 'partnership', label: 'Partnership / Collaboration', target: 'partnership-request' },
    { value: 'media', label: 'Media / Press', target: 'general-contact' },
    { value: 'trust_safety', label: 'Trust, Safety, or Legal Concern', target: 'trust-legal-contact' },
    { value: 'other', label: 'Other', target: 'general-contact' },
];

const EXPERIENCE_LEVELS = [
    { value: 'student', label: 'Student / Fresher' },
    { value: 'junior', label: 'Junior' },
    { value: 'mid', label: 'Mid-Level' },
    { value: 'senior', label: 'Senior' },
];

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

// --- Stub Submission Functions (Simulated API Calls) ---
const submitGeneral = async (data) => console.log("Submitting General:", data);
const submitJob = async (data) => console.log("Submitting Job:", data);
const submitPartnership = async (data) => console.log("Submitting Partnership:", data);

// --- Custom Hook for Form Logic Abstraction (Logic remains the same) ---
const useContactForm = (initialState, submitFunction, formType) => {
    const [formData, setFormData] = useState(initialState);
    const [status, setStatus] = useState(null);

    const handleChange = useCallback((e) => {
        const { name, value, files } = e.target;

        if (name === 'resume_upload' && files && files[0]) {
            const file = files[0];
            if (file.size > MAX_FILE_SIZE_BYTES) {
                alert(`File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB}MB.`);
                setFormData(prev => ({ ...prev, file: null }));
                e.target.value = '';
            } else {
                setFormData(prev => ({ ...prev, file }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        
        if (formType === 'job' && !formData.file) {
            alert("Please upload your Resume/CV to apply.");
            return;
        }

        try {
            await submitFunction(formData);
            setStatus({ type: formType, success: true });
            
            const resetState = formType === 'general' ? { contactType: 'general' } : initialState;
            setFormData(resetState);

            setTimeout(() => setStatus(null), 5000);
        } catch (error) {
            console.error(`Submission error for ${formType}:`, error);
            setStatus({ type: formType, success: false, error: "Submission failed. Please try again." });
            setTimeout(() => setStatus(null), 5000);
        }
    }, [formData, submitFunction, formType, initialState]);

    return { formData, status, handleChange, handleSubmit, setStatus, setFormData };
};


const Contact = () => {
    const navigate = useNavigate(); // Hook for back navigation

    // Custom Hooks for each form (Initialization logic omitted for brevity)
    const { formData: generalFormData, status: generalStatus, handleChange: handleGeneralChange, handleSubmit: handleGeneralSubmit, setFormData: setGeneralFormData } = useContactForm({ contactType: 'general', fullName: '', email: '', subject: '', message: '' }, submitGeneral, 'general');
    const { formData: jobFormData, status: jobStatus, handleChange: handleJobChange, handleSubmit: handleJobSubmit } = useContactForm({ fullName: '', email: '', role: '', experienceLevel: EXPERIENCE_LEVELS[0].value, introduction: '', file: null, portfolio: '' }, submitJob, 'job');
    const { formData: partnershipFormData, status: partnershipStatus, handleChange: handlePartnershipChange, handleSubmit: handlePartnershipSubmit } = useContactForm({ orgName: '', partnerEmail: '', partnerType: '', proposal: '' }, submitPartnership, 'partnership');

    const contactTypeRef = useRef(null); 

    // --- Anchor Scroll Handler ---
    const handleScrollToId = useCallback((id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.history.pushState(null, null, `#${id}`);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        handleScrollToId(id);
    };

    // --- Handles navigation when Contact Type is selected in the General Form dropdown ---
    const handleDropdownNav = (e) => {
        const selectedValue = e.target.value;
        setGeneralFormData(prev => ({ ...prev, contactType: selectedValue }));
        
        const contactType = CONTACT_TYPES.find(type => type.value === selectedValue);
        if (contactType) {
            handleScrollToId(contactType.target);
        }
    };

    // Effect to reset the dropdown visually after submission via form logic
    useEffect(() => {
        if (contactTypeRef.current && generalFormData.contactType === 'general') {
            contactTypeRef.current.value = 'general';
        }
    }, [generalFormData.contactType]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Function to handle "Go Back" action
    const handleGoBack = () => {
        window.history.back();
    };

    // Form rendering components (omitted for brevity, assume content is the same as previous updates)
    const GeneralForm = () => ( /* ... form structure ... */ <form onSubmit={handleGeneralSubmit} className="contact-form">
        <div className="form-group"><label htmlFor="fullName">Full Name <span aria-hidden>*</span></label><input type="text" id="fullName" name="fullName" onChange={handleGeneralChange} required value={generalFormData.fullName || ''} /></div>
        <div className="form-group"><label htmlFor="email">Email Address <span aria-hidden>*</span></label><input type="email" id="email" name="email" onChange={handleGeneralChange} required value={generalFormData.email || ''} /></div>
        <div className="form-group"><label htmlFor="contactType">Contact Type <span aria-hidden>*</span></label><select id="contactType" name="contactType" onChange={handleDropdownNav} required defaultValue="general" ref={contactTypeRef}>{CONTACT_TYPES.map(type => (<option key={type.value} value={type.value}>{type.label}</option>))}</select></div>
        <div className="form-group"><label htmlFor="subject">Subject <span aria-hidden>*</span></label><input type="text" id="subject" name="subject" onChange={handleGeneralChange} required value={generalFormData.subject || ''} /></div>
        <div className="form-group"><label htmlFor="message">Message <span aria-hidden>*</span></label><textarea id="message" name="message" rows="6" onChange={handleGeneralChange} required value={generalFormData.message || ''}></textarea></div>
        <button type="submit" className="submit-button">Send Message to NexUP</button>
    </form>);
    
    const JobForm = () => ( /* ... form structure ... */ <form onSubmit={handleJobSubmit} className="contact-form">
        <div className="form-group"><label htmlFor="jobFullName">Full Name <span aria-hidden>*</span></label><input type="text" id="jobFullName" name="fullName" onChange={handleJobChange} required value={jobFormData.fullName || ''} /></div>
        <div className="form-group"><label htmlFor="jobEmail">Email Address <span aria-hidden>*</span></label><input type="email" id="jobEmail" name="email" onChange={handleJobChange} required value={jobFormData.email || ''} /></div>
        <div className="form-group"><label htmlFor="role">Role Applying For</label><input type="text" id="role" name="role" onChange={handleJobChange} value={jobFormData.role || ''} placeholder="e.g., Senior Graphics Engineer" /></div>
        <div className="form-group"><label htmlFor="experienceLevel">Experience Level</label><select id="experienceLevel" name="experienceLevel" onChange={handleJobChange} value={jobFormData.experienceLevel}>{EXPERIENCE_LEVELS.map(level => (<option key={level.value} value={level.value}>{level.label}</option>))}</select></div>
        <div className="form-group"><label htmlFor="introduction">Short Introduction</label><textarea id="introduction" name="introduction" rows="4" onChange={handleJobChange} value={jobFormData.introduction || ''} placeholder="Tell us briefly about yourself and why you want to work with NexUP."></textarea></div>
        <div className="form-group file-upload-group"><label htmlFor="resume_upload">Resume / CV Upload <span aria-hidden>*</span></label><input type="file" id="resume_upload" name="resume_upload" accept=".pdf,.doc,.docx" onChange={handleJobChange} required={!jobFormData.file} /><p className="file-info">Accepted formats: PDF, DOC, DOCX. Max size: {MAX_FILE_SIZE_MB}MB.</p>{jobFormData.file && <p className="file-success">File selected: **{jobFormData.file.name}**</p>}</div>
        <div className="form-group"><label htmlFor="portfolio">Portfolio / LinkedIn / GitHub (Optional)</label><input type="url" id="portfolio" name="portfolio" onChange={handleJobChange} value={jobFormData.portfolio || ''} placeholder="Paste link here" /></div>
        <button type="submit" className="submit-button">Apply to NexUP</button>
    </form>);

    const PartnershipForm = () => ( /* ... form structure ... */ <form onSubmit={handlePartnershipSubmit} className="contact-form">
        <div className="form-group"><label htmlFor="orgName">Organization / Individual Name <span aria-hidden>*</span></label><input type="text" id="orgName" name="orgName" onChange={handlePartnershipChange} required value={partnershipFormData.orgName || ''} /></div>
        <div className="form-group"><label htmlFor="partnerEmail">Email Address <span aria-hidden>*</span></label><input type="email" id="partnerEmail" name="partnerEmail" onChange={handlePartnershipChange} required value={partnershipFormData.partnerEmail || ''} /></div>
        <div className="form-group"><label htmlFor="partnerType">Type of Partnership <span aria-hidden>*</span></label><input type="text" id="partnerType" name="partnerType" onChange={handlePartnershipChange} required value={partnershipFormData.partnerType || ''} placeholder="e.g., Technology Integration, Content Creation, Research" /></div>
        <div className="form-group"><label htmlFor="proposal">Brief Proposal or Message <span aria-hidden>*</span></label><textarea id="proposal" name="proposal" rows="6" onChange={handlePartnershipChange} required value={partnershipFormData.proposal || ''}></textarea></div>
        <button type="submit" className="submit-button">Submit Partnership Request</button>
    </form>);


    // Determines which status message to display
    const currentStatus = generalStatus || jobStatus || partnershipStatus;

    return (
        <div className="contact-page">
            <main className="contact-main-content">
                
                {/* *** NEW: PAGE INDICATOR WITH BACK ARROW AND TOOLTIP *** */}
                <div className="page-indicator-container">
                    {/* Back Arrow Link with Tooltip, using the Unicode character for styling */}
                    <Link 
                        to="#" 
                        onClick={handleGoBack} 
                        className="back-arrow"
                        aria-label="Go Back"
                        data-tooltip="Go Back to Previous Page" // Updated tooltip text
                    >
                        {/* Left arrow Unicode character */}
                        &#x2190; 
                    </Link>
                    
                    {/* Page Indicator Text */}
                    <div className="page-indicator">
                        <p>Contact</p>
                    </div>
                </div>
                {/* -------------------------------------- */}

                <div className="contact-document">
                    
                    <header className="document-header">
                        <h1>Contact NexUP</h1>
                        <h2 className="subtitle">Get in Touch With Us</h2>
                    </header>
                    
                    <p className="introduction">
                        NexUP is building a long-term spatial computing ecosystem. Whether you are interested in working with us, collaborating, or simply reaching out, this page provides a clear and structured way to connect. We value meaningful communication and review every submission responsibly.
                    </p>

                    {/* --- Purpose and Navigation Section --- */}
                    <section className="policy-section nav-section">
                        <h3>Contact Options Overview</h3>
                        <p>To avoid confusion, please first choose why you are contacting NexUP. This helps us route your message correctly and ensures faster handling.</p>
                        
                        <div className="core-sections-list">
                            {CONTACT_TYPES.map(type => (
                                <Link 
                                    key={type.value} 
                                    to={`#${type.target}`} 
                                    className="section-nav-button"
                                    onClick={(e) => handleNavClick(e, type.target)}
                                >
                                    {type.label}
                                </Link>
                            ))}
                        </div>

                        {/* Dedicated Links */}
                        <div className="external-links-container">
                               <Link to="/careers" className="external-link-button">
                                   Explore Careers Page
                               </Link>
                               <Link to="/help" className="external-link-button help-link">
                                   Visit Help Center
                               </Link>
                        </div>
                    </section>
                    
                    {/* Submission Success/Error Message */}
                    {currentStatus && currentStatus.success && (
                        <div className="submission-success">
                            <p>Success! Your {currentStatus.type} message has been received. Thank you for contacting NexUP.</p>
                        </div>
                    )}
                    {currentStatus && !currentStatus.success && currentStatus.error && (
                        <div className="submission-error">
                            <p>Error: {currentStatus.error}</p>
                        </div>
                    )}


                    {/* 3. Section 1: General Contact Form */}
                    <section className="contact-form-section scroll-target" id="general-contact">
                        <h3>General Inquiry & Media</h3>
                        <p>Use this form for general questions, media inquiries, or official communication that doesn't fit the other categories.</p>
                        <GeneralForm />
                    </section>

                    {/* 4. Section 2: Job Application Form */}
                    <section className="contact-form-section scroll-target" id="job-application">
                        <h3>Careers at NexUP (Job Application)</h3>
                        <p>NexUP is always interested in people who are curious, responsible, and motivated to build the future of digital and spatial experiences. Apply directly below.</p>
                        <JobForm />
                    </section>

                    {/* 5. Section 3: Partnerships & Collaborations */}
                    <section className="contact-form-section scroll-target" id="partnership-request">
                        <h3>Partnerships & Collaborations</h3>
                        <p>We welcome collaboration with startups, institutions, developers, researchers, and creators. Submit your proposal here.</p>
                        <PartnershipForm />
                    </section>
                    
                    {/* 6. Section 4: Trust, Safety & Legal Contact */}
                    <section className="policy-section scroll-target" id="trust-legal-contact">
                        <h3>Trust, Safety, & Legal Communication</h3>
                        <p>If your concern involves **Data privacy, Platform safety, Ethical or legal issues, or Policy violations**, please use the General Contact Form above and ensure you select the **"Trust, Safety, or Legal Concern"** Contact Type.</p>
                        <p className="priority-note">These messages are highly prioritized and reviewed carefully by the relevant internal teams.</p>
                    </section>
                    
                    {/* 7. Resume Upload – Important Handling Notes */}
                    <section className="policy-section file-handling-section">
                        <h3>Resume & File Handling</h3>
                        <div className="info-block">
                            <ul>
                                <li>Uploaded resumes are used **only** for recruitment purposes.</li>
                                <li>Files are stored securely on NexUP servers.</li>
                                <li>Resumes are not shared with third parties.</li>
                                <li>Applicants may request deletion of their data at any time.</li>
                            </ul>
                            <p className="statement">This builds candidate trust.</p>
                        </div>
                    </section>
                    
                    {/* 8. Privacy & Data Assurance */}
                    <section className="policy-section privacy-assurance-section">
                        <h3>Privacy & Data Assurance</h3>
                        <p className="priority-note">Contact data is used only to respond to your request. Resume data is used only for hiring evaluation. **No data is sold, misused, or shared.**</p>
                        <p>For more details, please consult our full <Link to="/privacy" className="inline-link">Privacy Policy</Link>.</p>
                    </section>

                    {/* 9. What Happens After Submission? */}
                    <section className="policy-section after-submission-section">
                        <h3>After You Contact Us</h3>
                        <ul>
                            <li>Your message is received securely, and relevant team members are notified.</li>
                            <li>Important or time-sensitive messages are prioritized.</li>
                            <li>Job applications are reviewed based on role needs.</li>
                            <li>Due to volume, individual responses may vary, but every submission is acknowledged internally.</li>
                        </ul>
                    </section>


                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;