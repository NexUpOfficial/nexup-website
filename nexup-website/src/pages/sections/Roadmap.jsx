// src/pages/sections/Roadmap.jsx
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "../../page-styles/sections/Roadmap.css";

const Roadmap = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const phases = [
    {
      id: "01",
      title: "NexWorld v1.0",
      subtitle: "Foundation Build",
      desc: "Initial ecosystem setup, immersive UI/UX, DNS login system, user identity structure, and the NeXUP Loop concept.",
      color: "#4a3aff" 
    },
    {
      id: "02",
      title: "NexNodes",
      subtitle: "Infrastructure Layer",
      desc: "Core nodes that act as the digital skeleton of NexWorld. Introducing decentralized data flow and early support for NexHousing.",
      color: "#b8a9ff" 
    },
    {
      id: "03",
      title: "NexHousing",
      subtitle: "Smart Virtual Living",
      desc: "3D futuristic homes, AR blueprints, holographic room control, and environment customization. Models generated via AI.",
      color: "#ff4aae" 
    },
    {
      id: "04",
      title: "NexEngine",
      subtitle: "Development Powerhouse",
      desc: "AI-assisted ecosystem engine enabling creators to build apps, simulations, and tools. Full integration with NexNodes.",
      color: "#4a3aff"
    },
    {
      id: "05",
      title: "NexWorld City",
      subtitle: "Immersive AR/VR Experience",
      desc: "Full virtual city with app-buildings, dynamic neon environments, avatar navigation, and portal systems.",
      color: "#b8a9ff"
    },
    {
      id: "06",
      title: "NexUP Loop",
      subtitle: "Portal System",
      desc: "The signature dimensional gate for entering NexWorld. Contains motion graphics, energy effects, and biometric authentication.",
      color: "#ff4aae"
    },
    {
      id: "07",
      title: "Digital Identity",
      subtitle: "Nex-DNS",
      desc: "Universal NexUP login handling identity mapping, permission layers, user journey tracking, and multi-app authentication.",
      color: "#4a3aff"
    },
    {
      id: "08",
      title: "AR/VR Integration",
      subtitle: "NexWorld 2.0",
      desc: "Full support for AR glasses and VR headsets. Mixed reality blending of homes, nodes, portals, and AI agents.",
      color: "#b8a9ff"
    },
    {
      id: "09",
      title: "AI Ecosystem",
      subtitle: "NexAI",
      desc: "Personalized AI guides, world-builders, content generators, and city navigators. AI-driven character creation.",
      color: "#ff4aae"
    },
    {
      id: "10",
      title: "Marketplace",
      subtitle: "Creator Hub",
      desc: "Virtual assets, 3D homes, nodes, extensions, avatars, and motion packs. Creator Hub allows users to publish inside NexWorld.",
      color: "#4a3aff"
    },
    {
      id: "11",
      title: "NexWorld 3.0",
      subtitle: "Autonomous Universe",
      desc: "Self-updating world systems, evolving cities, AI-managed services, holographic interfaces, and global connectivity.",
      color: "#b8a9ff"
    },
    {
      id: "12",
      title: "Beyond 2026",
      subtitle: "Immersive Reality Future",
      desc: "Complete Metaverse integration. Interoperability, avatar economy, interactive physics, and real-time transformation.",
      color: "#fff" 
    },
  ];

  return (
    <div className="roadmap-page" ref={containerRef}>
      
      <div className="roadmap-header">
        <motion.div 
          className="header-badge"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Master Plan
        </motion.div>
        <motion.h1 
          className="roadmap-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Path to <span className="gradient-text">Immersion.</span>
        </motion.h1>
      </div>

      <div className="roadmap-timeline-wrapper">
        <motion.div className="central-line-container" style={{ scaleY }}>
          <div className="central-line-glow"></div>
        </motion.div>
        <div className="central-line-static"></div>

        <div className="timeline-items">
          {phases.map((phase, index) => (
            <TimelineItem key={index} data={phase} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`timeline-row ${isEven ? "left" : "right"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="timeline-node">
        <div className="node-circle" style={{ borderColor: data.color }}></div>
        <div className="node-pulse" style={{ background: data.color }}></div>
      </div>

      <div className="timeline-card glass-panel">
        <div className="card-header">
          <span className="phase-id" style={{ color: data.color }}>PHASE {data.id}</span>
          <h3 className="phase-title">{data.title}</h3>
        </div>
        <h4 className="phase-subtitle">{data.subtitle}</h4>
        <p className="phase-desc">{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default Roadmap;