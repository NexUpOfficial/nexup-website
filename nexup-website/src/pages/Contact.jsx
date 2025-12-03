// src/pages/Contact.jsx

import { motion } from "framer-motion";
import "../page-styles/Contact.css";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">

        {/* ================= HERO ================= */}
        <section className="contact-hero-section">
          <motion.div
            className="contact-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="gradient-title contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-sub">
              Whether you're a developer, creator, partner, or explorer—  
              NeX UP is here to support your journey into the intelligent spatial future.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CONTACT OPTIONS ================= */}
        <ContactSection title="Ways to Reach Us">
          <div className="contact-grid">

            <ContactCard
              title="General Support"
              text="Questions about NeX UP, AR/VR, NexWorld, or account help."
              label="support@nexup.com"
            />

            <ContactCard
              title="Business & Partnerships"
              text="Collaborations, enterprise requests, research projects."
              label="business@nexup.com"
            />

            <ContactCard
              title="Developers & Technical"
              text="API questions, world engine tools, integration support."
              label="dev@nexup.com"
            />

            <ContactCard
              title="Press & Media"
              text="Interviews, publications, announcements, and media coverage."
              label="press@nexup.com"
            />

          </div>
        </ContactSection>

        <BreakLine />

        {/* ================= FORM SECTION ================= */}
        <ContactSection title="Send Us a Message">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <textarea placeholder="Your Message" className="contact-textarea"></textarea>

            <button className="white-btn">Send Message →</button>
          </motion.form>
        </ContactSection>

        <BreakLine />

        {/* ================= LOCATION ================= */}
        <ContactSection title="NeX UP HQ (India)">
          <p className="contact-text">
            Hyderabad, Telangana  
            <br /> NeX UP Research & Spatial Computing Division
          </p>

          <p className="contact-text">
            Working hours: 9 AM – 6 PM IST (Mon–Sat)
          </p>
        </ContactSection>

        <BreakLine />

        {/* ================= SOCIAL ================= */}
        <ContactSection title="Social Platforms">
          <div className="social-links">
            <span>Twitter (X)</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </ContactSection>

        <BreakLine />

        {/* ================= CTA ================= */}
        <section className="contact-final-section">
          <motion.div
            className="contact-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">Let’s Build the Future Together</h2>
            <p className="final-text">
              We’re here to collaborate, support, and shape the next evolution of mixed reality.
            </p>

            <button className="white-btn">Email Us →</button>
          </motion.div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function ContactSection({ title, children }) {
  return (
    <section className="contact-section">
      <motion.div
        className="contact-section-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="gradient-title section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function ContactCard({ title, text, label }) {
  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="contact-label">{label}</span>
    </motion.div>
  );
}
