// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiUploadCloud, FiMapPin, FiMail, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import "../page-styles/Contact.css";
import Footer from "../components/Footer/Footer";

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // 4. Motion Stagger
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 12. Shake Animation for Error
const shakeVariants = {
  idle: { x: 0 },
  shake: { x: [0, -6, 6, -6, 6, 0], transition: { duration: 0.4 } },
};

export default function Contact() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isFileSelected, setIsFileSelected] = useState(false); // 5. File Highlight Logic
  const [isSubmitted, setIsSubmitted] = useState(false); // 11. Success State
  const [errors, setErrors] = useState({}); // 12. Error State

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setIsFileSelected(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    
    // Simple validation
    if (!form.email.value) newErrors.email = true;
    if (!form.message.value) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors({}), 500); // Reset shake trigger
    } else {
      // Simulate submission
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        
        {/* ================= HERO ================= */}
        <section className="contact-hero-section">
          <div className="contact-glow" />
          <motion.div
            className="contact-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <span className="hero-badge">Connect with NeX UP</span>
            <h1 className="gradient-title contact-hero-title">Let's Build the Future.</h1>
            <p className="contact-hero-sub">
              Whether you're an engineer, investor, or visionary partner — we are ready to scale the spatial web together.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= DIRECT CONTACT GRID ================= */}
        <ContactSection title="Direct Lines">
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactCard
              title="Business & Enterprise"
              text="Partnerships, investments, and B2B inquiries." // 3. Fixed Text
              email="teamnexup@gmail.com"
            />
            <ContactCard
              title="Careers & Talent"
              text="Join our engineering and design teams."
              email="teamnexup@gmail.com"
            />
            <ContactCard
              title="Press & Media"
              text="Interviews, brand assets, and official statements."
              email="teamnexup@gmail.com"
            />
            <ContactCard
              title="Developer Support"
              text="API access, documentation, and technical help."
              email="teamnexup@gmail.com"
            />
          </motion.div>
        </ContactSection>

        <BreakLine />

        {/* ================= BUSINESS FORM ================= */}
        <section className="contact-form-section">
          <motion.div 
            className="form-container glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              /* 11. Success View */
              <motion.div 
                className="success-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-circle"><FiCheckCircle /></div>
                <h2>Message Sent</h2>
                <p>Thank you for reaching out. Our team will review your inquiry and respond shortly.</p>
                <button className="white-btn" onClick={() => setIsSubmitted(false)}>Send Another</button>
              </motion.div>
            ) : (
              <>
                <div className="form-header">
                  <h2 className="gradient-title">Send a Message</h2>
                  <p>Tell us who you are and what you're building.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Row 1: Name */}
                  <div className="form-row">
                    <div className="input-group">
                      <label>First Name</label>
                      <input type="text" placeholder="Jane" className="form-input" />
                    </div>
                    <div className="input-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Doe" className="form-input" />
                    </div>
                  </div>

                  {/* Row 2: Contact Info */}
                  <div className="form-row">
                    <div className="input-group">
                      <label>Work Email</label>
                      <motion.input 
                        name="email"
                        type="email" 
                        placeholder="jane@company.com" 
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        variants={shakeVariants}
                        animate={errors.email ? "shake" : "idle"}
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" className="form-input" />
                    </div>
                  </div>

                  {/* Row 3: Role & Context */}
                  <div className="form-row">
                    <div className="input-group">
                      <label>Current Role / Title</label>
                      <input type="text" placeholder="e.g. Senior Product Designer" className="form-input" />
                    </div>
                    <div className="input-group">
                      <label>Inquiry Type</label>
                      <select className="form-select">
                        <option className="form-opt">Partnership Proposal</option>
                        <option className="form-opt">Job Application</option>
                        <option className="form-opt">Investment Opportunity</option>
                        <option className="form-opt">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="input-group full-width">
                    <label>Tell us about your experience or proposal <span className="sub-label">(Min 50 words)</span></label>
                    <motion.textarea 
                      name="message"
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      placeholder="Describe your background, your interest in NeX UP, and how you can contribute to the ecosystem..."
                      rows="5"
                      variants={shakeVariants}
                      animate={errors.message ? "shake" : "idle"}
                    ></motion.textarea>
                  </div>

                  {/* Row 5: File Upload */}
                  <div className="input-group full-width">
                    <label>Upload Resume / Pitch Deck</label>
                    <div className="file-upload-wrapper">
                      <input 
                        type="file" 
                        id="file-upload" 
                        className="file-input-hidden" 
                        onChange={handleFileChange}
                      />
                      {/* 5. File Selected Highlight */}
                      <label htmlFor="file-upload" className={`file-upload-label ${isFileSelected ? 'file-selected' : ''}`}>
                        {isFileSelected ? <FiCheckCircle className="upload-icon success-icon"/> : <FiUploadCloud className="upload-icon" />}
                        <span className="upload-text">{isFileSelected ? "File Attached Successfully" : "Click to upload or drag and drop"}</span>
                        <span className="file-name">{fileName}</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="form-footer">
                    <button type="submit" className="submit-btn">Submit Application →</button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= LOCATION & SOCIALS ================= */}
        <section className="contact-footer-info">
          <div className="info-grid">
            <motion.div 
              className="info-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3><FiMapPin /> NeX UP HQ</h3>
              <p>Vishkapatanam, 
                Andra Pradesh, India</p>
              <p className="dimmed">Spatial Computing Research Div.</p>
              <p className="dimmed">9:00 AM — 6:00 PM IST</p>
            </motion.div>

            <motion.div 
              className="info-col social-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Follow Our Journey</h3>
              <div className="social-icons-wrapper">
                <SocialIcon icon={<FaTwitter />} link="#" />
                <SocialIcon icon={<FaLinkedinIn />} link="#" />
                <SocialIcon icon={<FaInstagram />} link="#" />
                <SocialIcon icon={<FaYoutube />} link="#" />
                <SocialIcon icon={<FaGithub />} link="#" />
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function ContactSection({ title, children }) {
  return (
    <section className="contact-section">
      <div className="contact-section-inner">
        {/* 10. Animated Title */}
        <motion.h2 
          className="gradient-title section-title centered-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

function ContactCard({ title, text, email }) {
  return (
    <motion.div 
      className="contact-card glass-panel-sm"
      variants={itemVariants}
    >
      <div className="card-icon"><FiMail /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={`mailto:${email}`} className="email-link">{email}</a>
    </motion.div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a href={link} className="social-icon-btn" target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}