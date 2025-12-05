// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiUploadCloud, FiMapPin, FiMail } from "react-icons/fi";
import "../page-styles/Contact.css";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <ContactCard
              title="Business & Enterprise"
              text=" partnerships, investments, and B2B inquiries."
              email="business@nexup.com"
              delay={0}
            />
            <ContactCard
              title="Careers & Talent"
              text="Join our engineering and design teams."
              email="careers@nexup.com"
              delay={0.1}
            />
            <ContactCard
              title="Press & Media"
              text="Interviews, brand assets, and official statements."
              email="press@nexup.com"
              delay={0.2}
            />
            <ContactCard
              title="Developer Support"
              text="API access, documentation, and technical help."
              email="dev@nexup.com"
              delay={0.3}
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
            <div className="form-header">
              <h2 className="gradient-title">Send a Message</h2>
              <p>Tell us who you are and what you're building.</p>
            </div>

            <form className="contact-form">
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
                  <input type="email" placeholder="jane@company.com" className="form-input" />
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
                    <option>Partnership Proposal</option>
                    <option>Job Application</option>
                    <option>Investment Opportunity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="input-group full-width">
                <label>Tell us about your experience or proposal <span className="sub-label">(Min 50 words)</span></label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Describe your background, your interest in NeX UP, and how you can contribute to the ecosystem..."
                  rows="5"
                ></textarea>
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
                  <label htmlFor="file-upload" className="file-upload-label">
                    <FiUploadCloud className="upload-icon" />
                    <span className="upload-text">Click to upload or drag and drop</span>
                    <span className="file-name">{fileName}</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="form-footer">
                <button type="submit" className="submit-btn">Submit Application →</button>
              </div>
            </form>
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
              <p>Hyderabad, Telangana, India</p>
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
      <motion.div
        className="contact-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="gradient-title section-title centered-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function ContactCard({ title, text, email, delay }) {
  return (
    <motion.div 
      className="contact-card glass-panel-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
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