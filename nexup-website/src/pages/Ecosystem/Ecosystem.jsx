// src/pages/Ecosystem/Ecosystem.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  Suspense,
} from "react";
import { motion } from "framer-motion";
import "../../page-styles/Ecosystem/Ecosystem.css";

/* Lazy-loaded pages */
const NexWorld = React.lazy(() => import("./NexWorld"));
const NexNodes = React.lazy(() => import("./NexNodes"));
const NexEngine = React.lazy(() => import("./NexEngine"));
const NexHousing = React.lazy(() => import("./NexHousing"));
const EcosystemSearch = React.lazy(() => import("./NexSearch"));

/* Tab Data */
const TAB_DATA = [
  { key: "nexworld", name: "NexWorld" },
  { key: "nexnodes", name: "NexNodes" },
  { key: "nexengine", name: "NexEngine" },
  { key: "nexhousing", name: "NexHousing" },
  { key: "search", name: "Search" },
];

const COMPONENT_MAP = {
  nexworld: NexWorld,
  nexnodes: NexNodes,
  nexengine: NexEngine,
  nexhousing: NexHousing,
  search: EcosystemSearch,
};

/* Preloaders */
const PRELOADERS = {
  nexworld: () => import("./NexWorld"),
  nexnodes: () => import("./NexNodes"),
  nexengine: () => import("./NexEngine"),
  nexhousing: () => import("./NexHousing"),
  search: () => import("./NexSearch"),
};

/* Skeleton Loader */
function SkeletonFallback() {
  return (
    <div className="eco-loading">
      <div className="eco-spinner" />
    </div>
  );
}

/* Tab Content Wrapper */
const TabContent = React.memo(
  ({ activeTab, isRevealing, contentRef, swipeOffset }) => {
    const ActiveComponent = COMPONENT_MAP[activeTab];

    return (
      <motion.div
        className="eco-content"
        ref={contentRef}
        role="tabpanel"
        id={`panel-${activeTab}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          x: swipeOffset 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Suspense fallback={<SkeletonFallback />}>
          <ActiveComponent />
        </Suspense>
      </motion.div>
    );
  }
);

export default function Ecosystem() {
  const tabKeys = useMemo(() => TAB_DATA.map((t) => t.key), []);

  const [activeTab, setActiveTab] = useState("nexworld");
  const [hideHeader, setHideHeader] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const minSwipe = 75;
  const touchStartRef = useRef(0);
  const contentRef = useRef(null);
  const tabListRef = useRef(null);

  /* Deep Linking */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabKeys.includes(hash)) setActiveTab(hash);
  }, [tabKeys]);

  /* Scroll Header Logic */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const now = window.scrollY;
      // Only hide if we are scrolled down a bit
      if (now > last && now > 100) setHideHeader(true);
      else setHideHeader(false);
      last = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Preload Adjacent Tabs */
  useEffect(() => {
    const index = tabKeys.indexOf(activeTab);
    const next = tabKeys[index + 1];
    const prev = tabKeys[index - 1];

    if (next && PRELOADERS[next]) PRELOADERS[next]();
    if (prev && PRELOADERS[prev]) PRELOADERS[prev]();
  }, [activeTab, tabKeys]);

  /* Auto-scroll Tab Bar on Mobile */
  useEffect(() => {
    if (tabListRef.current) {
      const activeEl = tabListRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTab]);

  /* Change Tab */
  const changeTab = (key) => {
    if (key === activeTab) return;
    setActiveTab(key);
    window.history.replaceState(null, "", `#${key}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Swipe Gestures */
  const onTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    setSwipeOffset(0);
  };

  const onTouchMove = (e) => {
    const dx = e.touches[0].clientX - touchStartRef.current;
    // Damping
    setSwipeOffset(dx * 0.4);
  };

  const onTouchEnd = (e) => {
    const dx = touchStartRef.current - e.changedTouches[0].clientX;
    setSwipeOffset(0);

    const i = tabKeys.indexOf(activeTab);
    let x = i;

    if (dx > minSwipe) x = Math.min(i + 1, tabKeys.length - 1);
    else if (dx < -minSwipe) x = Math.max(i - 1, 0);

    if (x !== i) changeTab(tabKeys[x]);
  };

  return (
    <div className="eco-page">
      {/* Background Ambience */}
      <div className="eco-ambient-bg" />

      {/* HERO */}
      <section className="eco-hero-section">
        <motion.div 
          className="eco-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="eco-badge">The Unified Platform</span>
          <h1 className="eco-title">
            One Ecosystem. <br /> Infinite Realities.
          </h1>
          <p className="eco-desc">
            Navigate the layers of the NeX UP universe. From the physics engine to the 
            social fabric, everything is connected.
          </p>
        </motion.div>
      </section>

      {/* NAVIGATION DOCK */}
      <div className={`eco-dock-wrapper ${hideHeader ? "dock-hidden" : ""}`}>
        <div className="eco-dock" ref={tabListRef}>
          {TAB_DATA.map(({ key, name }) => (
            <button
              key={key}
              data-tab={key}
              onClick={() => changeTab(key)}
              className={`dock-item ${activeTab === key ? "active" : ""}`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="dock-pill"
                  className="dock-pill-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="dock-label">{name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC CONTENT */}
      <div
        className="eco-content-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <TabContent
          activeTab={activeTab}
          contentRef={contentRef}
          swipeOffset={swipeOffset}
        />
      </div>
    </div>
  );
}