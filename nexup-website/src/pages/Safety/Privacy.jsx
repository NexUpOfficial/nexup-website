// src/pages/Support/Privacy.jsx (Retained from previous update)
// No changes required in JSX for alignment, as the CSS handles positioning.

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiShield, FiLock, FiEye, FiDatabase, FiServer, 
  FiUserCheck, FiGlobe, FiFileText, FiLink, FiMail,
  FiActivity, FiTarget, FiTool, FiZap, FiBox, FiAlertTriangle 
} from "react-icons/fi";
// Ensure the correct path to the CSS file
import "../../page-styles/Safety/Privacy.css"; 
// Ensure the Footer component is imported
import Footer from "../../components/Footer/Footer"; 

/* --- DATA --- */
const EFFECTIVE_DATE = "December 2025";
const COMPANY_NAME = "NexUP";

// SECTION 2.1: Personal Data You Provide to Us
const DATA_PROVIDED = [
  { 
    title: "Account & Contact Information", 
    icon: <FiUserCheck />,
    points: [
      "Name, Email address, Username or profile identifiers.",
      "Organization or company name (if applicable)"
    ] 
  },
  { 
    title: "User Communications & Content", 
    icon: <FiMail />,
    points: [
      "Messages submitted via contact forms, support requests, and feedback.",
      "Reports, inputs, uploads, or content shared through NexUP tools."
    ] 
  },
];

// SECTION 2.2: Personal Data Collected Automatically
const DATA_AUTO = [
  { 
    title: "Log & Usage Data", 
    icon: <FiDatabase />,
    points: [
      "IP address, Browser type and version, Device type and operating system.",
      "Pages viewed, interactions, and navigation patterns."
    ] 
  },
  { 
    title: "Device & Location Info", 
    icon: <FiGlobe />,
    points: [
      "Device identifiers, Platform type, Language and region settings.",
      "Approximate location derived from IP address."
    ] 
  },
];

// SECTION 3: How We Use Personal Data
const HOW_WE_USE = [
  { icon: <FiServer />, text: "Provide, operate, and maintain Services." },
  { icon: <FiTool />, text: "Develop new features and virtual environments." },
  { icon: <FiActivity />, text: "Improve performance, design, and functionality." },
  { icon: <FiEye />, text: "Ensure platform security and prevent misuse." },
  { icon: <FiTarget />, text: "Comply with legal obligations and enforce policies." },
];

// SECTION 5: Disclosure Circumstances
const DISCLOSURE_REASONS = [
  { 
    title: "5.1 Service Providers", 
    desc: "Sharing with trusted vendors (hosting, analytics, security) necessary to operate our Services." 
  },
  { 
    title: "5.2 Legal & Safety Reasons", 
    desc: "Disclosure required to comply with law, respond to requests, or protect rights, safety, or property." 
  },
  { 
    title: "5.3 Business Transfers", 
    desc: "Transfer of data in the event of a merger, acquisition, restructuring, or asset transfer." 
  },
];

// SECTION 7: Your Rights & Choices
const USER_RIGHTS = [
  { title: "Access", desc: "Access your Personal Data." },
  { title: "Correction/Update", desc: "Correct or update inaccurate data." },
  { title: "Deletion", desc: "Request deletion of your data." },
  { title: "Objection", desc: "Restrict or object to certain processing." }
];

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* --- MAIN COMPONENT --- */
export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      <div className="privacy-wrapper">
        
        {/* ================= HERO: Title and Scope (Now Centered via CSS) ================= */}
        <section className="privacy-hero-section">
          <div className="privacy-glow" />
          <motion.div
            className="privacy-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="status-badge">
              <span className="status-dot"></span> Effective Date: {EFFECTIVE_DATE}
            </div>
            <h1 className="gradient-title privacy-hero-title">
              {COMPANY_NAME} Privacy Policy
            </h1>
            <p className="privacy-hero-sub">
              This policy describes how we handle Personal Data when you use our Services, including NexWorld and NexEngine.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= SECTION 1: SCOPE ================= */}
        <PrivacySection title="1. Scope of This Privacy Policy">
          <div className="privacy-intro glass-panel">
            <FiBox className="intro-icon" />
            <div className="intro-text">
              <h3>Applicability</h3>
              <p>
                This Policy applies to personal data collected directly by NexUP through our websites, contact forms, and future 
                spatial computing platforms. It covers individual users, creators, developers, and partners.
              </p>
              <p className="note-text-full">
                **Exclusions:** This policy does not apply to third-party services linked from our platforms.
              </p>
            </div>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= SECTION 2: DATA WE COLLECT (2.1, 2.2, 2.3) ================= */}
        <PrivacySection title="2. Personal Data We Collect">
          <div className="sub-section-grid">
            {/* 2.1 Personal Data You Provide to Us */}
            <DataListCard sectionTitle="2.1 Personal Data You Provide to Us" data={DATA_PROVIDED[0]} />
            <DataListCard sectionTitle="" data={DATA_PROVIDED[1]} />

            {/* 2.2 Personal Data Collected Automatically */}
            <DataListCard sectionTitle="2.2 Personal Data Collected Automatically" data={DATA_AUTO[0]} />
            <DataListCard sectionTitle="" data={DATA_AUTO[1]} />
          </div>
          
          <div className="cookies-section glass-panel-sm">
            <h4>2.3 Cookies & Similar Technologies</h4>
            <p>We use cookies to ensure core website functionality, remember user preferences, and analyze usage trends. You can control cookies through your browser settings.</p>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= SECTION 3: HOW WE USE DATA ================= */}
        <PrivacySection title="3. How We Use Personal Data">
          <div className="use-grid">
            {HOW_WE_USE.map((item, idx) => (
              <motion.div key={idx} className="use-card glass-panel-sm" variants={itemVariants}>
                <div className="card-icon-wrapper-sm">{item.icon}</div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="note-text-full mt-30">
            **Aggregated Data:** We may aggregate or anonymize data so it no longer identifies you and use it for research and platform improvement.
          </p>
        </PrivacySection>

        <BreakLine />
        
        {/* ================= SECTION 4: AI & PLATFORM EVOLUTION ================= */}
        <PrivacySection title="4. AI, Virtual Worlds & Platform Evolution">
          <div className="legal-panel glass-panel-sm">
            <h4 className="flex-center"><FiZap style={{ marginRight: '10px' }}/> AI & Platform Evolution</h4>
            <p>Interaction data and AI-assisted tools may process user inputs to generate environments or responses. **Such data is used only to operate and improve NexUP Services.** We do not sell personal data or use it for intrusive advertising.</p>
          </div>
        </PrivacySection>
        
        <BreakLine />

        {/* ================= SECTION 5: DISCLOSURE (5.1, 5.2, 5.3) ================= */}
        <PrivacySection title="5. Disclosure of Personal Data">
          <motion.div 
            className="disclosure-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {DISCLOSURE_REASONS.map((reason, idx) => (
              <motion.div key={idx} className="disclosure-card glass-panel-sm" variants={itemVariants}>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </PrivacySection>

        <BreakLine />
        
        {/* ================= SECTION 6 & 7: RETENTION & RIGHTS ================= */}
        <PrivacySection title="6. Data Retention & 7. Your Rights">
          <div className="info-two-col">
            <div className="info-card glass-panel-sm">
                <h4>6. Data Retention</h4>
                <p>We retain Personal Data only for as long as necessary to provide and maintain our Services, fulfill legal/security obligations, resolve disputes, and enforce agreements.</p>
                <p className="small-detail">Retention periods depend on the type, purpose, and sensitivity of the data.</p>
            </div>
            <div className="info-card rights-section glass-panel-sm">
                <h4>7. Your Rights & Choices</h4>
                <div className="rights-list">
                  {USER_RIGHTS.map((right, idx) => (
                    <div key={idx} className="right-item">
                      <strong>{right.title}:</strong> {right.desc}
                    </div>
                  ))}
                </div>
                <p className="small-detail">You may exercise these rights by contacting us.</p>
            </div>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= SECTION 8, 9, 10, 11: COMPLIANCE ================= */}
        <PrivacySection title="Compliance & Security">
          <div className="compliance-grid">
            <div className="compliance-panel glass-panel-sm">
                <h4>8. Children’s Privacy</h4>
                <p>Services are **not intended for children under 13**. We delete data promptly if we become aware such data was collected unknowingly.</p>
            </div>
            <div className="compliance-panel glass-panel-sm">
                <h4>9. Data Security</h4>
                <p>We implement reasonable technical, administrative, and organizational safeguards. <FiAlertTriangle style={{color: 'red'}}/> No system is completely secure, and we cannot guarantee absolute online security.</p>
            </div>
            <div className="compliance-panel glass-panel-sm">
                <h4>10. International Transfers</h4>
                <p>We may process and store data on servers located in different jurisdictions, applying appropriate safeguards regardless of location.</p>
            </div>
            <div className="compliance-panel glass-panel-sm">
                <h4>11. Policy Changes</h4>
                <p>We update this Policy from time to time. We will update the effective date and publish the revised policy on this page.</p>
            </div>
          </div>
        </PrivacySection>

        <BreakLine />

        {/* ================= SECTION 12: CONTACT US ================= */}
        <section className="privacy-final-section">
          <motion.div
            className="privacy-final"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              12. Contact Us
            </h2>
            <p className="final-text">
              If you have questions, concerns, or requests related to this Privacy Policy:
            </p>
            <div className="privacy-final-actions">
              <a href="mailto:privacy@nexup.world" className="white-btn">
                <FiMail style={{ marginRight: '8px' }}/> Email: privacy@nexup.world
              </a>
              <button className="ghost-btn" onClick={() => navigate("/support/help")}>
                <FiLink style={{ marginRight: '8px' }}/> Contact Support
              </button>
            </div>
            <p className="company-info">Company: {COMPANY_NAME}</p>
          </motion.div>
        </section>

      </div>
      <Footer />
      {/* The rest of the page content */}
    </div>
  );
}

/* ================= UTILITY COMPONENTS ================= */

function PrivacySection({ title, children }) {
  return (
    <section className="privacy-section">
      <motion.div
        className="privacy-section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }} 
        viewport={{ once: true, margin: "-50px" }}
      >
        {title && <h2 className="gradient-title section-title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}

function DataListCard({ sectionTitle, data }) {
    return (
        <motion.div 
            className="data-list-card glass-panel"
            variants={itemVariants}
        >
            <div className="list-card-header">
                {data.icon && <div className="card-icon-wrapper-sm">{data.icon}</div>}
                <div className="header-text">
                  {sectionTitle && <h5 className="section-title-sm">{sectionTitle}</h5>}
                  <h4>{data.title}</h4>
                </div>
            </div>
            <ul>
                {data.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );
}