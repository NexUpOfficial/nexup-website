// src/pages/About/Stories.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Stories.css";
import Footer from "../../components/Footer/Footer";

export default function Stories() {
  const navigate = useNavigate();

  return (
    <div className="stories-page">
      <div className="stories-wrapper">

        {/* ================= HERO ================= */}
        <section className="stories-hero-section">
          <motion.div
            className="stories-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title stories-hero-title">
              Stories from NeX UP
            </h1>

            <p className="stories-hero-sub">
              Insights, breakthroughs, designs, and ideas shaping the future of
              intelligent digital reality.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FEATURED STORY ================= */}
        <section className="featured-section">
          <motion.div
            className="featured-story-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="featured-img placeholder-img">Image</div>

            <div className="featured-content">
              <span className="story-tag">Design</span>

              <h2 className="featured-title">
                Designing the Future of Spatial Interfaces
              </h2>

              <p className="featured-text">
                How the NeX UP design team is shaping interaction patterns that feel
                natural inside AR, VR, and adaptive intelligent environments.
              </p>

              <button className="read-btn">Read Story →</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CATEGORY NAVIGATION ================= */}
        <section className="category-section">
          <div className="category-container">
            {["All", "Engineering", "Design", "Research", "Culture", "NexWorld", "Announcements"].map(cat => (
              <button key={cat} className="category-btn">{cat}</button>
            ))}
          </div>
        </section>

        <BreakLine />

        {/* ================= LATEST STORIES ================= */}
        <StoriesSection title="Latest Stories">
          <div className="stories-grid">
            <StoryCard
              tag="Engineering"
              title="How NexNode Synchronizes Spatial Intelligence"
              desc="Exploring the architecture behind real-time, world-scale intelligent systems."
            />
            <StoryCard
              tag="NexWorld"
              title="The Evolution of NexWorld Environments"
              desc="From simulation-based prototypes to fully adaptive spatial worlds."
            />
            <StoryCard
              tag="Design"
              title="Inside NeX UP Motion Design"
              desc="Crafting a motion language for immersive future interfaces."
            />
            <StoryCard
              tag="Research"
              title="Understanding Human Spatial Cognition"
              desc="How neuroscience guides the future of AR/VR experience design."
            />
            <StoryCard
              tag="Culture"
              title="Life at NeX UP"
              desc="A behind-the-scenes look at how our builders prototype the future."
            />
            <StoryCard
              tag="Announcements"
              title="Upcoming Platform Release"
              desc="A look at what’s coming next for NexWorld and NexNode."
            />
          </div>
        </StoriesSection>

        <BreakLine />

        {/* ================= DEEP DIVE SERIES ================= */}
        <StoriesSection title="Deep Dive Series">
          <div className="deepdive-grid">
            <DeepDiveCard
              title="Engineering Deep Dives"
              text="Infrastructure, intelligence models, and architectural decisions shaping NeX UP."
            />
            <DeepDiveCard
              title="Design Explorations"
              text="Experiments, prototypes, and interaction models built by our design team."
            />
            <DeepDiveCard
              title="Research Insights"
              text="Studies in cognition, behavior, and advanced spatial frameworks."
            />
          </div>
        </StoriesSection>

        <BreakLine />

        {/* ================= TEAM STORIES ================= */}
        <StoriesSection title="Inside NeX UP">
          <div className="teamstories-grid">
            <TeamStoryCard
              title="A Day in the Life of a Spatial Engineer"
              text="What it feels like to build immersive worlds from the ground up."
            />
            <TeamStoryCard
              title="Sketch to Reality — Design Workflows"
              text="How designers turn ideas into living digital spaces."
            />
            <TeamStoryCard
              title="Research to Product"
              text="How early experiments evolve into real features across the NeX UP ecosystem."
            />
          </div>
        </StoriesSection>

        <BreakLine />

        {/* ================= TIMELINE ================= */}
        <StoriesSection title="How NeX UP Was Built — Key Moments">
          <div className="timeline-list">
            <TimelineItem
              year="2025"
              text="The founding vision: spatial intelligence + immersive systems."
            />
            <TimelineItem
              year="2026"
              text="NexNode and early NexWorld prototypes take form."
            />
            <TimelineItem
              year="2027"
              text="Launch of immersive experiences and early creator tools."
            />
            <TimelineItem
              year="2030"
              text="Fully realized NeX UP ecosystem launches globally."
            />
          </div>
        </StoriesSection>

        <BreakLine />

        {/* ================= ANNOUNCEMENTS ================= */}
        <StoriesSection title="Announcements">
          <div className="announcement-grid">
            <AnnouncementCard
              title="New Partnership Coming Soon"
              text="A collaboration that expands the NeX UP ecosystem."
            />
            <AnnouncementCard
              title="NexWorld Alpha Update"
              text="Our biggest update yet for immersive spatial environments."
            />
            <AnnouncementCard
              title="NexNode Developer Preview"
              text="Opening the gateway for real-time intelligent world systems."
            />
          </div>
        </StoriesSection>

        <BreakLine />

        {/* ================= NEWSLETTER CTA ================= */}
        <section className="newsletter-section">
          <motion.div
            className="newsletter-box"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title newsletter-title">
              Stay Updated.
            </h2>

            <p className="newsletter-text">
              Get the latest stories, updates, and research insights from NeX UP.
            </p>

            <div className="newsletter-inputs">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />
              <button className="white-btn">Subscribe</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="stories-final-section">
          <motion.div
            className="stories-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Want to build the future with us?
            </h2>

            <p className="final-text">
              Join NeX UP and help define the next era of immersive and intelligent technology.
            </p>

            <div className="stories-final-actions">
                <button
  className="white-btn"
  onClick={() => navigate("/about/career")}   // use full path
>
  Explore Careers →
</button>

              <button
                className="ghost-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us →
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* FOOTER PERFECTLY ALIGNED */}
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BreakLine() {
  return <div className="break-line" />;
}

function StoriesSection({ title, children }) {
  return (
    <section className="stories-section">
      <motion.div
        className="stories-section-inner"
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

function StoryCard({ tag, title, desc }) {
  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="story-img placeholder-img">Image</div>
      <span className="story-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="read-btn">Read →</button>
    </motion.div>
  );
}

function DeepDiveCard({ title, text }) {
  return (
    <motion.div
      className="deepdive-card"
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

function TeamStoryCard({ title, text }) {
  return (
    <motion.div
      className="teamstory-card"
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

function TimelineItem({ year, text }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="timeline-year">{year}</span>
      <p>{text}</p>
    </motion.div>
  );
}

function AnnouncementCard({ title, text }) {
  return (
    <motion.div
      className="announcement-card"
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
