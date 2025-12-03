// src/pages/Support/Help.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Support/Help.css";
import Footer from "../../components/Footer/Footer";

export default function Help() {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      <div className="help-wrapper">

        {/* ================= HERO ================= */}
        <section className="help-hero-section">
          <motion.div
            className="help-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title help-hero-title">Help & Support</h1>
            <p className="help-hero-sub">
              Guidance, documentation, answers, and assistance for navigating the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= QUICK SUPPORT CARDS ================= */}
        <HelpSection title="Quick Support">
          <div className="quick-grid">
            <QuickCard title="Account & Login" text="Troubleshoot login, password, or profile issues." />
            <QuickCard title="Using NexWorld" text="Setup guides, AR/VR compatibility, environment help." />
            <QuickCard title="NexNode & NexEngine" text="Intelligence network support & developer info." />
            <QuickCard title="Billing & Subscription" text="Payments, invoices, renewal, cancellations." />
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= SEARCH HELP ================= */}
        <section className="help-search-section">
          <motion.div
            className="help-search-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>How can we help you today?</h3>
            <input
              type="text"
              className="help-search-input"
              placeholder="Search help articles..."
            />
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= TOP ARTICLES ================= */}
        <HelpSection title="Top Help Articles">
          <div className="article-list">
            {[
              "Getting Started with NeX UP",
              "Setting Up NexWorld Environments",
              "Troubleshooting Login Problems",
              "How NexNode Works",
              "Device Requirements for AR/VR",
              "Safety & Content Guidelines",
            ].map((item, i) => (
              <ArticleItem key={i} title={item} />
            ))}
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= FAQ ================= */}
        <HelpSection title="Frequently Asked Questions">
          <div className="faq-list">
            <FAQItem q="What is NeX UP?" a="NeX UP is a next-generation platform for immersive digital reality and spatial intelligence." />
            <FAQItem q="How does NexWorld work?" a="NexWorld enables users to explore adaptive 3D environments through AR/VR." />
            <FAQItem q="Is NeX UP free?" a="Core features are free; premium features depend on subscription level." />
            <FAQItem q="Where do I report issues?" a="Use the Contact or Report button below to submit an issue." />
            <FAQItem q="Which devices are supported?" a="Modern AR/VR devices, smartphones, and spatial hardware are supported." />
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= SUPPORT CATEGORIES ================= */}
        <HelpSection title="Support Categories">
          <div className="category-grid">
            <CategoryCard name="NexWorld" />
            <CategoryCard name="NexNode" />
            <CategoryCard name="NexEngine" />
            <CategoryCard name="NexHousing" />
            <CategoryCard name="NexSearch" />
            <CategoryCard name="Account" />
            <CategoryCard name="Developers" />
            <CategoryCard name="Safety" />
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= TROUBLESHOOTING ================= */}
        <HelpSection title="Troubleshooting">
          <div className="troubleshoot-grid">
            <TroubleCard
              title="App Not Loading"
              text="Fix crashes, blank screens, or performance issues."
            />
            <TroubleCard
              title="AR/VR Tracking Issues"
              text="Resolve environment detection or spatial mapping problems."
            />
            <TroubleCard
              title="Sync / Network Errors"
              text="Learn how to fix NexNode connectivity or data sync failures."
            />
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= DOCUMENTATION ================= */}
        <HelpSection title="Documentation & Guides">
          <div className="docs-grid">
            <DocCard title="Developer Docs" text="API, SDK, and system integration guides." />
            <DocCard title="User Manual" text="Beginner tutorials and feature walkthroughs." />
            <DocCard title="Platform Overview" text="Technical architecture and ecosystem design." />
          </div>
        </HelpSection>

        <BreakLine />

        {/* ================= SAFETY & TRUST ================= */}
        <HelpSection title="Safety & Trust at NeX UP">
          <p className="help-text">
            NeX UP prioritizes responsible technology and transparent systems.  
            Learn how we protect user data, ensure safe interactions, and build trust-first experiences.
          </p>

          <button
            className="ghost-btn"
            onClick={() => navigate("/safety/privacy")}
          >
            Learn About Safety →
          </button>
        </HelpSection>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="help-final-section">
          <motion.div
            className="help-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">Still need help?</h2>
            <p className="final-text">
              Our team is here to support you. Reach out and we’ll respond as soon as possible.
            </p>

            <div className="help-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Support →
              </button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/report")}
              >
                Report an Issue →
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ===========================================================
   COMPONENTS
=========================================================== */

function BreakLine() {
  return <div className="break-line"></div>;
}

function HelpSection({ title, children }) {
  return (
    <section className="help-section">
      <motion.div
        className="help-section-inner"
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

function QuickCard({ title, text }) {
  return (
    <motion.div
      className="quick-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function ArticleItem({ title }) {
  return (
    <motion.div
      className="article-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <span>›</span> {title}
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4>{q}</h4>
      <p>{a}</p>
    </motion.div>
  );
}

function CategoryCard({ name }) {
  return (
    <motion.div
      className="category-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{name}</h3>
    </motion.div>
  );
}

function TroubleCard({ title, text }) {
  return (
    <motion.div
      className="trouble-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function DocCard({ title, text }) {
  return (
    <motion.div
      className="doc-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
