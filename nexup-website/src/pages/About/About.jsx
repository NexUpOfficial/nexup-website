// src/pages/About/About.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  Suspense,
} from "react";
import { motion } from "framer-motion";
import "../../page-styles/About/About.css";

/* Lazy-loaded sub-pages */
const Vision = React.lazy(() => import("./Vision"));
const Team = React.lazy(() => import("./Team"));
const Stories = React.lazy(() => import("./Stories"));
const Company = React.lazy(() => import("./Company"));
const Career = React.lazy(() => import("./Career"));
const News = React.lazy(() => import("./News"));

/* Tab Data */
const TAB_DATA = [
  { key: "about", name: "Overview" },
  { key: "vision", name: "Vision" },
  { key: "team", name: "Team" },
  { key: "stories", name: "Stories" },
  { key: "company", name: "Company" },
  { key: "career", name: "Careers" },
  { key: "news", name: "News" },
];

const COMPONENT_MAP = {
  vision: Vision,
  team: Team,
  stories: Stories,
  company: Company,
  career: Career,
  news: News,
  about: () => (
    <div className="about-default">
      <h2>About NeX UP</h2>
      <p>
        NeX UP builds the future of AR, VR, Intelligence, and immersive digital
        ecosystems. Our mission is to transform how the world interacts with
        information, reality, and AI.
      </p>
    </div>
  ),
};

/* Preloaders */
const PRELOADERS = {
  vision: () => import("./Vision"),
  team: () => import("./Team"),
  stories: () => import("./Stories"),
  company: () => import("./Company"),
  career: () => import("./Career"),
  news: () => import("./News"),
};

/* Skeleton Loader */
function SkeletonFallback() {
  return (
    <div className="about-loading">
      <div className="about-spinner" />
    </div>
  );
}

/* Tab Content Wrapper */
const TabContent = React.memo(
  ({ activeTab, contentRef, swipeOffset }) => {
    const ActiveComponent = COMPONENT_MAP[activeTab];

    return (
      <motion.div
        className="about-content"
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

export default function About() {
  const tabKeys = useMemo(() => TAB_DATA.map((t) => t.key), []);
  const [activeTab, setActiveTab] = useState("about");
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
    <div className="about-page">
      {/* Background Ambience */}
      <div className="about-ambient-bg" />

      {/* HERO */}
      <section className="about-hero-section">
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="about-badge">Who We Are</span>
          <h1 className="about-title">
            Defining the Future <br /> of Digital Reality.
          </h1>
          <p className="about-desc">
            Explore our journey, teams, values, and the vision behind NeX UP.
          </p>
        </motion.div>
      </section>

      {/* NAVIGATION DOCK */}
      <div className={`about-dock-wrapper ${hideHeader ? "dock-hidden" : ""}`}>
        <div className="about-dock" ref={tabListRef}>
          {TAB_DATA.map(({ key, name }) => (
            <button
              key={key}
              data-tab={key}
              onClick={() => changeTab(key)}
              className={`dock-item ${activeTab === key ? "active" : ""}`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="about-dock-pill"
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
        className="about-content-wrapper"
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