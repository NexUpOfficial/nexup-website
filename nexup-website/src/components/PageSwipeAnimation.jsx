// src/components/PageSwipeAnimation.jsx
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./PageSwipeAnimation.css";

/**
 * PageSwipeAnimation
 * Props:
 * - direction: number (1 previous, -1 next, 0 none)
 * - children: ReactNode
 */
export default function PageSwipeAnimation({ direction = 0, children }) {
  const dir = Math.sign(direction) || 0;

  // motion value for interactive feel (drives overlays)
  const progress = useMotionValue(0);
  // transform progress into overlay opacities / dolly
  const gridOpacity = useTransform(progress, [0, 1], [0.06, 0.6]);
  const heatOpacity = useTransform(progress, [0, 1], [0, 0.7]);
  const chromaX = useTransform(progress, [0, 1], [0, dir * 6]); // px
  const dollyScale = useTransform(progress, [0, 1], [0.98, 1.02]);

  const baseVariants = {
    initial: {
      x: dir === 0 ? 0 : dir > 0 ? -160 : 160,
      rotateY: dir === 0 ? 0 : dir > 0 ? -32 : 32,
      scale: 0.96,
      opacity: 0,
      filter: "blur(6px) contrast(0.9)",
      transition: { type: "spring", stiffness: 160, damping: 22, mass: 0.9 },
    },
    animate: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px) contrast(1)",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 20,
        mass: 0.9,
      },
      // on animation start, push progress to 1 (drives overlays)
      // We'll trigger progress animation imperatively by passing animate prop to inner motion controls below,
    },
    exit: {
      x: dir === 0 ? 0 : dir > 0 ? 180 : -180,
      rotateY: dir === 0 ? 0 : dir > 0 ? 30 : -30,
      scale: 0.98,
      opacity: 0,
      filter: "blur(8px) contrast(0.85)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 1,
      },
    },
  };

  return (
    <motion.div
      className="psa-root"
      variants={baseVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      // drive progress value using animate prop (small timed ramp)
      onAnimationStart={() => progress.set(0)}
      onAnimationComplete={() => progress.set(1)}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
    >
      {/* SVG filters (pixel warp + heat warp) */}
      <svg className="psa-filters" aria-hidden="true">
        <defs>
          {/* displacement map for pixel/warp effect */}
          <filter id="psa-displace">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* heat shimmer — uses turbulence + displacement on alpha */}
          <filter id="psa-heat">
            <feTurbulence baseFrequency="0.02" numOctaves="2" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>

          {/* subtle pixel grid mask for hologram lines */}
          <pattern id="psa-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 0 L24 0 M0 6 L24 6 M0 12 L24 12 M0 18 L24 18" stroke="rgba(255,255,255,0.04)" strokeWidth="0.75"/>
          </pattern>
        </defs>
      </svg>

      {/* Chromatic split layers — children replicated and tinted */}
      <div className="psa-chroma-wrapper" style={{ transform: `translateZ(0)` }}>
        {/* red channel */}
        <motion.div
          className="psa-chroma psa-chroma-red"
          style={{ x: chromaX, scale: dollyScale }}
          aria-hidden="true"
        >
          {children}
        </motion.div>

        {/* green channel */}
        <motion.div
          className="psa-chroma psa-chroma-green"
          style={{ x: useTransform(chromaX, (v) => v * 0.5), scale: dollyScale }}
          aria-hidden="true"
        >
          {children}
        </motion.div>

        {/* blue channel (main) */}
        <motion.div
          className="psa-chroma psa-chroma-blue"
          style={{ x: useTransform(chromaX, (v) => v * 0.2), scale: dollyScale }}
        >
          {/* This is the real content — keep it highest fidelity */}
          <div className="psa-content">{children}</div>
        </motion.div>
      </div>

      {/* Hologram grid overlay */}
      <motion.div
        className="psa-grid-overlay"
        style={{ opacity: gridOpacity }}
        aria-hidden="true"
      >
        <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="psa-grid-svg">
          <rect width="100%" height="100%" fill="url(#psa-grid)" />
        </svg>
      </motion.div>

      {/* Pixel warp / heat shimmer overlay */}
      <motion.div
        className="psa-warp-overlay"
        style={{ opacity: heatOpacity }}
        aria-hidden="true"
      >
        <div className="psa-heat-layer" />
      </motion.div>

      {/* Chromatic vignette / edge glow */}
      <motion.div className="psa-edge-glow" style={{ opacity: useTransform(progress, [0, 1], [0, 0.9]) }} aria-hidden="true" />

      {/* subtle camera dolly shadow for depth */}
      <motion.div
        className="psa-dolly-shadow"
        style={{ opacity: useTransform(progress, [0, 1], [0.02, 0.2]) }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
