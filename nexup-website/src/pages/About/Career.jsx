// src/pages/About/Career.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/About/Career.css";
import Footer from "../../components/Footer/Footer";

export default function Career() {
  const navigate = useNavigate();

  return (
    <div className="career-page">
      <div className="career-wrapper">

        {/* ================= HERO ================= */}
        <section className="career-hero-full">
          <motion.div
            className="career-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="gradient-title career-big-title">
              Build the future with NeX UP.
            </h1>

            <p className="career-sub">
              We’re searching for innovators, creators, and bold thinkers  
              who are ready to redefine how humans interact with technology.
            </p>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= WHY WORK ================= */}
        <CareerSection
          title="Why Work at NeX UP"
          text={`NeX UP is more than a workplace — it's a mission-driven environment where  
people transform ambitious ideas into real-world impact.

We work with frontier technologies like AR, VR, spatial intelligence,  
NexNode systems, and immersive digital architecture.

If you love building something that hasn’t existed before,  
this is the place for you.`}
        />

        <BreakLine />

        {/* ================= CULTURE ================= */}
        <CareerSection
          title="Our Culture"
          text={`We believe in curiosity, honesty, and building meaningfully.

At NeX UP:
• Creativity is encouraged  
• Ideas > hierarchy  
• Ownership is essential  
• Innovation drives everything  
• Quality is our standard  

We don’t wait for the future — we design it.`}
        />

        <BreakLine />

        {/* ================= TEAMS ================= */}
        <section className="default-section">
          <motion.div
            className="teams-sec"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title section-title">Teams at NeX UP</h2>

            <div className="teams-grid">
              <TeamCard
                title="Engineering"
                text="Build high-performance AR/VR systems, NexNode computation, and adaptive world frameworks."
              />

              <TeamCard
                title="Design"
                text="Shape immersive experiences and intuitive human–computer interactions."
              />

              <TeamCard
                title="Research"
                text="Explore cognitive interfaces, spatial models, and next-generation intelligence."
              />

              <TeamCard
                title="Operations"
                text="Scale systems, optimize workflow, and bring product visions to execution."
              />
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= OPEN ROLES ================= */}
        <section className="default-section">
          <motion.div
            className="roles-sec"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title section-title">Open Roles</h2>

            <div className="roles-grid">
              <RoleCard title="Frontend Engineer" location="Remote / India" />
              <RoleCard title="AR Interaction Designer" location="Hybrid / Bangalore" />
              <RoleCard title="3D Environment Artist" location="Remote" />
              <RoleCard title="AI Systems Researcher" location="On-site / Hyderabad" />
              <RoleCard title="Product Strategist" location="Remote" />
              <RoleCard title="Operations Manager" location="Hybrid" />
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= BENEFITS ================= */}
        <CareerSection
          title="Benefits at NeX UP"
          text={`• Remote-friendly environment  
• Flexible hours  
• High-end hardware  
• Learning & development support  
• Creative freedom to experiment  
• Work with advanced AR/VR intelligence  
• Build impactful products  

We empower you so you can create your best work.`}
        />

        <BreakLine />

        {/* ================= LIFE AT NEX UP ================= */}
        <section className="default-section">
          <motion.div
            className="life-sec"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title section-title">Life at NeX UP</h2>

            <div className="life-grid">
              <ImageCard label="Image 1" />
              <ImageCard label="Image 2" />
              <ImageCard label="Image 3" />
              <ImageCard label="Image 4" />
            </div>
          </motion.div>
        </section>

        <BreakLine />

        {/* ================= FINAL CTA ================= */}
        <section className="default-section">
          <motion.div
            className="career-final"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-title final-big">
              Want to work with me?
            </h2>

            <p className="final-text">
              Join hands with me and let’s build the next generation  
              of world-changing technologies together.
            </p>

            <button className="white-btn" onClick={() => navigate("/contact")}>
              Contact Me →
            </button>
          </motion.div>
        </section>

      </div>

      {/* FOOTER FIXED — SAME STRUCTURE AS HOME */}
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function CareerSection({ title, text }) {
  return (
    <section className="default-section">
      <motion.div
        className="career-sec"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="gradient-title section-title">{title}</h2>
        <p className="sec-text">{text}</p>
      </motion.div>
    </section>
  );
}

function BreakLine() {
  return <div className="break-line"></div>;
}

function TeamCard({ title, text }) {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function RoleCard({ title, location }) {
  return (
    <motion.div
      className="role-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{location}</p>
    </motion.div>
  );
}

function ImageCard({ label }) {
  return (
    <motion.div
      className="life-img placeholder-img"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {label}
    </motion.div>
  );
}
