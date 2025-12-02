// src/pages/About/News.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/News.css";
import Footer from "../../components/Footer/Footer";

export default function News() {
  const navigate = useNavigate();

  return (
    <div className="news-page">
      <div className="news-wrapper">
        {/* ================= HERO ================= */}
        <section className="news-hero-section">
          <motion.div
            className="news-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="gradient-title news-hero-title">
              NeX UP Newsroom
            </h1>
            <p className="news-hero-sub">
              Official updates, announcements, releases, and milestones from the NeX UP ecosystem.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FEATURED HEADLINE ================= */}
        <section className="news-featured-section">
          <motion.div
            className="news-featured-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="news-featured-img placeholder-img">Image</div>

            <div className="news-featured-content">
              <span className="news-tag">Release</span>
              <h2 className="news-featured-title">
                NexWorld Alpha: A New Step Toward Immersive Spatial Reality.
              </h2>
              <p className="news-featured-meta">December 2025 · NeX UP Platform</p>
              <p className="news-featured-text">
                NeX UP announces the NexWorld Alpha — a major milestone in building
                adaptive, immersive 3D environments that respond intelligently to
                context, behavior, and presence.
              </p>
              <button className="read-btn">Read Announcement →</button>
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= CATEGORY FILTER ================= */}
        <section className="news-category-section">
          <div className="news-category-container">
            {["All", "Releases", "Platform Updates", "Research", "Events", "Partnerships", "Leadership"].map(
              (cat) => (
                <button key={cat} className="news-category-btn">
                  {cat}
                </button>
              )
            )}
          </div>
        </section>

        <BreakLine />

        {/* ================= LATEST NEWS GRID ================= */}
        <NewsSection title="Latest News">
          <div className="news-grid">
            <NewsCard
              tag="Platform Update"
              title="NexNode Developer Preview Opens"
              date="Nov 2025"
              text="Developers can now begin experimenting with the NexNode intelligence network, enabling real-time spatial connectivity."
            />
            <NewsCard
              tag="Release"
              title="NexEngine Processing Upgrade"
              date="Oct 2025"
              text="A major update to NexEngine improves performance, latency, and context awareness for immersive interactions."
            />
            <NewsCard
              tag="Research"
              title="Spatial Cognition Study Published"
              date="Sep 2025"
              text="NeX UP research explores how humans navigate mixed-reality environments and intelligent spaces."
            />
            <NewsCard
              tag="Events"
              title="NeX UP Developer Session"
              date="Aug 2025"
              text="A live session sharing early insights into NexWorld world-building tools and experiences."
            />
            <NewsCard
              tag="Partnerships"
              title="Collaboration with AR Hardware Innovators"
              date="Jul 2025"
              text="NeX UP explores new possibilities with partners focused on spatial hardware and sensory layers."
            />
            <NewsCard
              tag="Leadership"
              title="Message from the CEO"
              date="Jun 2025"
              text="Founder & CEO Jothish Gandha shares a roadmap for the future of the NeX UP ecosystem."
            />
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= MEDIA HIGHLIGHTS ================= */}
        <NewsSection title="NeX UP in the Media">
          <div className="media-grid">
            <MediaCard
              outlet="TechFuture Magazine"
              title="“NeX UP is redefining the future of immersive computing.”"
              text="An in-depth feature on the architecture and long-term vision behind NeX UP."
            />
            <MediaCard
              outlet="DigitalWorld Journal"
              title="“A new layer between reality and intelligence.”"
              text="Coverage of NeX UP’s approach to spatial interfaces and adaptive environments."
            />
            <MediaCard
              outlet="Visionary Systems"
              title="“Why spatial intelligence is the next major platform shift.”"
              text="NeX UP is highlighted as a key player in the emerging spatial intelligence landscape."
            />
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= PRODUCT UPDATE LOG ================= */}
        <NewsSection title="Platform Updates">
          <div className="updates-list">
            <UpdateItem
              title="NexWorld v0.3 — Environment Layers"
              text="Introduces multi-layered world configurations, improved performance, and creator-focused tools."
            />
            <UpdateItem
              title="NexNode Network Improvements"
              text="Enhancements to distributed intelligence, real-time sync, and developer observability."
            />
            <UpdateItem
              title="NexHousing Spatial Layout Tools"
              text="New AR-powered layout features for dynamic housing and environment planning."
            />
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= EVENTS ================= */}
        <NewsSection title="Events & Announcements">
          <div className="events-grid">
            <EventCard
              title="NeX UP Spatial Summit (Online)"
              text="An upcoming session exploring how spatial computing reshapes digital experiences."
              date="Coming 2026"
            />
            <EventCard
              title="Creator Labs — NexWorld"
              text="Inviting early creators to experiment with NexWorld environments and tools."
              date="Beta Program"
            />
            <EventCard
              title="Research Roundtable"
              text="A discussion with researchers on human cognition, motion, and immersive systems."
              date="Invite-Only"
            />
          </div>
        </NewsSection>

        <BreakLine />

        {/* ================= PRESS CONTACT CTA ================= */}
        <section className="news-press-section">
          <motion.div
            className="news-press-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title press-title">Press & Media Inquiries</h2>
            <p className="press-text">
              For interviews, speaking opportunities, or official press information, reach out directly and our team
              will connect with you.
            </p>
            <button
              className="white-btn"
              onClick={() => navigate("/contact")}
            >
              Contact NeX UP →
            </button>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="news-final-section">
          <motion.div
            className="news-final"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Want to be part of what’s next?
            </h2>
            <p className="final-text">
              NeX UP is building the next era of intelligent, immersive digital reality. Join us as we shape what comes
              after screens.
            </p>
            <div className="news-final-actions">
              <button
                className="white-btn"
                onClick={() => navigate("/career")}
              >
                Explore Careers →
              </button>
              <button
                className="ghost-btn"
                onClick={() => navigate("/stories")}
              >
                Read Stories →
              </button>
            </div>
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

function NewsSection({ title, children }) {
  return (
    <section className="news-section">
      <motion.div
        className="news-section-inner"
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

function NewsCard({ tag, title, date, text }) {
  return (
    <motion.div
      className="news-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="news-card-img placeholder-img">Image</div>
      <span className="news-tag">{tag}</span>
      <h3>{title}</h3>
      <p className="news-card-meta">{date}</p>
      <p>{text}</p>
      <button className="read-btn">Read →</button>
    </motion.div>
  );
}

function MediaCard({ outlet, title, text }) {
  return (
    <motion.div
      className="media-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="media-outlet">{outlet}</p>
      <h3 className="media-title">{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function UpdateItem({ title, text }) {
  return (
    <motion.div
      className="update-item"
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

function EventCard({ title, text, date }) {
  return (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      <p>{text}</p>
    </motion.div>
  );
}
