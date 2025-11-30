// src/pages/Home.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RisingSmoke from "../animations/RisingSmoke";
import "../page-styles/Home.css";

export default function Home() {
  /* =======================================  
     SCROLL REVEAL SYSTEM  
  ======================================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">

      {/* Smoke */}
      <div className="home-smoke">
        <RisingSmoke />
      </div>

      {/* Cinematic Gradient Blob */}
      <div className="cinematic-gradient"></div>

      {/* HERO BLOCK */}
      <motion.div
        className="home-hero reveal"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="home-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          NexUP Platform
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The next generation of AR, VR & intelligent digital reality.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/ecosystem" className="home-btn fill-btn">
            Explore Ecosystem <span className="arrow">›</span>
          </Link>

          <Link to="/about" className="home-btn outline-btn">
            About <span className="arrow">›</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
