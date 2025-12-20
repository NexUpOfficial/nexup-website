// src/pages/Contact.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiBriefcase, FiUsers, FiLock, FiUpload, FiSend, FiLink } from 'react-icons/fi'; // Added FiLink
import "../page-styles/Contact.css";
import Footer from "../components/Footer/Footer";

// --- Configuration Data ---
const CONTACT_TYPES = [
    { value: 'general', label: 'General Inquiry', icon: FiMail, target: 'general-contact' },
    { value: 'job', label: 'Job Application', icon: FiBriefcase, target: 'job-application' },
    { value: 'partnership', label: 'Partnership / Collaboration', icon: FiUsers, target: 'partnership-request' },
    { value: 'media', label: 'Media / Press', icon: FiMail, target: 'general-contact' },
    { value: 'trust_safety', label: 'Trust, Safety, or Legal Concern', icon: FiLock, target: 'trust-legal-contact' },
    { value: 'other', label: 'Other', icon: FiMail, target: 'general-contact' },
];

const EXPERIENCE_LEVELS = [
    { value: 'student', label: 'Student / Fresher' },
    { value: 'junior', label: 'Junior' },
    { value: 'mid', label: 'Mid-Level' },
    { value: 'senior', label: 'Senior' },
];

const MAX_FILE_SIZE_MB = 10;

// --- Stub Submission Functions ---
const submitGeneral = async (data) => console.log("Submitting General:", data);
const submitJob = async (data) => console.log("Submitting Job:", data);
const submitPartnership = async (data) => console.log("Submitting Partnership:", data);

const Contact = () => {
    const [generalFormData, setGeneralFormData] = useState({ contactType: 'general' });
    const [jobFormData, setJobFormData] = useState({ file: null });
    const [partnershipFormData, setPartnershipFormData] = useState({});
    const [status, setStatus] = useState(null);
    
    // Ref for the General Contact Type dropdown to force default value reset
    const contactTypeRef = useRef(null); 

    // --- Anchor Scroll Handler (Reusable for Links and Dropdown) ---
    const handleScrollToId = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.history.pushState(null, null, `#${id}`);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        handleScrollToId(id);
    };

    // --- NEW: Handles navigation when Contact Type is selected in the dropdown ---
    const handleDropdownNav = (e) => {
        const selectedValue = e.target.value;
        setGeneralFormData({ ...generalFormData, contactType: selectedValue });
        
        // Find the target section ID based on the selected value
        const contactType = CONTACT_TYPES.find(type => type.value === selectedValue);
        if (contactType) {
            handleScrollToId(contactType.target);
        }
    };

    // --- Utility Functions ---
    const handleGeneralChange = (e) => {
        // This is only for the other form fields, handleDropdownNav handles the 'contactType'
        if (e.target.name !== 'contactType') {
            setGeneralFormData({ ...generalFormData, [e.target.name]: e.target.value });
        }
    };

    // ... (handleJobChange and handlePartnershipChange remain the same) ...
    const handleJobChange = (e) => {
        if (e.target.name === 'resume_upload') {
            const file = e.target.files[0];
            if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
                alert(`File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB}MB.`);
                setJobFormData({ ...jobFormData, file: null });
                e.target.value = ''; // Clear the input
            } else {
                setJobFormData({ ...jobFormData, file });
            }
        } else {
            setJobFormData({ ...jobFormData, [e.target.name]: e.target.value });
        }
    };

    const handlePartnershipChange = (e) => {
        setPartnershipFormData({ ...partnershipFormData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e, formType, submitFunction, formData) => {
        e.preventDefault();
        
        if (formType === 'job' && !formData.file) {
             alert("Please upload your Resume/CV to apply.");
             return;
        }

        submitFunction(formData);
        setStatus({ type: formType, success: true });
        
        // Reset form data and force dropdown back to 'general'
        if (formType === 'general') {
            setGeneralFormData({ contactType: 'general' });
            if (contactTypeRef.current) {
                contactTypeRef.current.value = 'general';
            }
        }
        if (formType === 'job') setJobFormData({ file: null });
        if (formType === 'partnership') setPartnershipFormData({});

        setTimeout(() => setStatus(null), 5000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // --- Form Rendering Components ---

    const GeneralForm = () => (
        <form onSubmit={(e) => handleFormSubmit(e, 'general', submitGeneral, generalFormData)} className="contact-form">
            <div className="form-group">
                <label htmlFor="fullName">Full Name <span aria-hidden>*</span></label>
                <input type="text" id="fullName" name="fullName" onChange={handleGeneralChange} required value={generalFormData.fullName || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address <span aria-hidden>*</span></label>
                <input type="email" id="email" name="email" onChange={handleGeneralChange} required value={generalFormData.email || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="contactType">Contact Type <span aria-hidden>*</span></label>
                {/* FIX: Use handleDropdownNav on change */}
                <select 
                    id="contactType" 
                    name="contactType" 
                    onChange={handleDropdownNav} 
                    required 
                    defaultValue="general"
                    ref={contactTypeRef} // Attach ref for reset
                >
                    {CONTACT_TYPES.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject <span aria-hidden>*</span></label>
                <input type="text" id="subject" name="subject" onChange={handleGeneralChange} required value={generalFormData.subject || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message <span aria-hidden>*</span></label>
                <textarea id="message" name="message" rows="6" onChange={handleGeneralChange} required value={generalFormData.message || ''}></textarea>
            </div>
            <button type="submit" className="submit-button">
                <FiSend /> Send Message to NexUP
            </button>
        </form>
    );
    
    // ... (JobForm and PartnershipForm remain the same, omitting for brevity) ...
    const JobForm = () => (
        <form onSubmit={(e) => handleFormSubmit(e, 'job', submitJob, jobFormData)} className="contact-form">
            <div className="form-group">
                <label htmlFor="jobFullName">Full Name <span aria-hidden>*</span></label>
                <input type="text" id="jobFullName" name="fullName" onChange={handleJobChange} required value={jobFormData.fullName || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="jobEmail">Email Address <span aria-hidden>*</span></label>
                <input type="email" id="jobEmail" name="email" onChange={handleJobChange} required value={jobFormData.email || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role Applying For</label>
                <input type="text" id="role" name="role" onChange={handleJobChange} value={jobFormData.role || ''} placeholder="e.g., Senior Graphics Engineer" />
            </div>
            <div className="form-group">
                <label htmlFor="experienceLevel">Experience Level</label>
                <select id="experienceLevel" name="experienceLevel" onChange={handleJobChange} value={jobFormData.experienceLevel || EXPERIENCE_LEVELS[0].value}>
                    {EXPERIENCE_LEVELS.map(level => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="introduction">Short Introduction</label>
                <textarea id="introduction" name="introduction" rows="4" onChange={handleJobChange} value={jobFormData.introduction || ''} placeholder="Tell us briefly about yourself and why you want to work with NexUP."></textarea>
            </div>
            
            <div className="form-group file-upload-group">
                <label htmlFor="resume_upload">Resume / CV Upload <span aria-hidden>*</span></label>
                <input type="file" id="resume_upload" name="resume_upload" accept=".pdf,.doc,.docx" onChange={handleJobChange} required />
                <p className="file-info">Accepted formats: PDF, DOC, DOCX. Max size: {MAX_FILE_SIZE_MB}MB.</p>
                {jobFormData.file && <p className="file-success">File selected: {jobFormData.file.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn / GitHub (Optional)</label>
                <input type="url" id="portfolio" name="portfolio" onChange={handleJobChange} value={jobFormData.portfolio || ''} placeholder="Paste link here" />
            </div>

            <button type="submit" className="submit-button">
                <FiBriefcase /> Apply to NexUP
            </button>
        </form>
    );

    const PartnershipForm = () => (
        <form onSubmit={(e) => handleFormSubmit(e, 'partnership', submitPartnership, partnershipFormData)} className="contact-form">
            <div className="form-group">
                <label htmlFor="orgName">Organization / Individual Name <span aria-hidden>*</span></label>
                <input type="text" id="orgName" name="orgName" onChange={handlePartnershipChange} required value={partnershipFormData.orgName || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="partnerEmail">Email Address <span aria-hidden>*</span></label>
                <input type="email" id="partnerEmail" name="partnerEmail" onChange={handlePartnershipChange} required value={partnershipFormData.partnerEmail || ''} />
            </div>
            <div className="form-group">
                <label htmlFor="partnerType">Type of Partnership <span aria-hidden>*</span></label>
                <input type="text" id="partnerType" name="partnerType" onChange={handlePartnershipChange} required value={partnershipFormData.partnerType || ''} placeholder="e.g., Technology Integration, Content Creation, Research" />
            </div>
            <div className="form-group">
                <label htmlFor="proposal">Brief Proposal or Message <span aria-hidden>*</span></label>
                <textarea id="proposal" name="proposal" rows="6" onChange={handlePartnershipChange} required value={partnershipFormData.proposal || ''}></textarea>
            </div>
            <button type="submit" className="submit-button">
                <FiUsers /> Submit Partnership Request
            </button>
        </form>
    );

    return (
        <div className="contact-page">
            <main className="contact-main-content">
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
                        <h3><FiSend className="section-icon" /> Contact Options Overview</h3>
                        <p>To avoid confusion, please first choose why you are contacting NexUP. This helps us route your message correctly and ensures faster handling.</p>
                        
                        <div className="core-sections-list">
                            {CONTACT_TYPES.map(type => (
                                <Link 
                                    key={type.value} 
                                    to={`#${type.target}`} 
                                    className="section-nav-button"
                                    onClick={(e) => handleNavClick(e, type.target)}
                                >
                                    <type.icon className="nav-icon" />
                                    {type.label}
                                </Link>
                            ))}
                        </div>

                        {/* NEW: Dedicated Careers Page Link */}
                        <div className="external-links-container">
                             <Link to="/careers" className="external-link-button">
                                <FiBriefcase className="nav-icon" /> Explore Careers Page
                            </Link>
                             <Link to="/help" className="external-link-button help-link">
                                <FiLink className="nav-icon" /> Visit Help Center
                            </Link>
                        </div>
                    </section>
                    
                    {/* Submission Success Message */}
                    {status && status.success && (
                        <div className="submission-success">
                            <FiSend className="success-icon" />
                            <p>Success! Your {status.type} message has been received. Thank you for contacting NexUP.</p>
                        </div>
                    )}


                    {/* 3. Section 1: General Contact Form */}
                    <section className="contact-form-section scroll-target" id="general-contact">
                        <h3><FiMail className="section-icon" /> General Inquiry & Media</h3>
                        <p>Use this form for general questions, media inquiries, or official communication that doesn't fit the other categories.</p>
                        <GeneralForm />
                    </section>

                    {/* 4. Section 2: Job Application Form */}
                    <section className="contact-form-section scroll-target" id="job-application">
                        <h3><FiBriefcase className="section-icon" /> Careers at NexUP (Job Application)</h3>
                        <p>NexUP is always interested in people who are curious, responsible, and motivated to build the future of digital and spatial experiences. Apply directly below.</p>
                        <JobForm />
                    </section>

                    {/* 5. Section 3: Partnerships & Collaborations */}
                    <section className="contact-form-section scroll-target" id="partnership-request">
                        <h3><FiUsers className="section-icon" /> Partnerships & Collaborations</h3>
                        <p>We welcome collaboration with startups, institutions, developers, researchers, and creators. Submit your proposal here.</p>
                        <PartnershipForm />
                    </section>
                    
                    {/* 6. Section 4: Trust, Safety & Legal Contact */}
                    <section className="policy-section scroll-target" id="trust-legal-contact">
                        <h3><FiLock className="section-icon" /> Trust, Safety, & Legal Communication</h3>
                        <p>If your concern involves **Data privacy, Platform safety, Ethical or legal issues, or Policy violations**, please use the General Contact Form above and ensure you select the **"Trust, Safety, or Legal Concern"** Contact Type.</p>
                        <p className="priority-note">These messages are highly prioritized and reviewed carefully by the relevant internal teams.</p>
                    </section>
                    
                    {/* 7. Resume Upload – Important Handling Notes */}
                    <section className="policy-section file-handling-section">
                        <h3><FiUpload className="section-icon" /> Resume & File Handling</h3>
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
                        <h3><FiLock className="section-icon" /> Privacy & Data Assurance</h3>
                        <p className="priority-note">Contact data is used only to respond to your request. Resume data is used only for hiring evaluation. **No data is sold, misused, or shared.**</p>
                        <p>For more details, please consult our full <Link to="/privacy" className="inline-link">Privacy Policy</Link>.</p>
                    </section>

                    {/* 9. What Happens After Submission? */}
                    <section className="policy-section after-submission-section">
                        <h3>📬 After You Contact Us</h3>
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