// src/pages/About/About.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Suspense,
} from "react";
import "../../page-styles/About/About.css";

/* Lazy-loaded sub-pages */
const Vision = React.lazy(() => import("./Vision"));
const Team = React.lazy(() => import("./Team"));
const Stories = React.lazy(() => import("./Stories"));
const Company = React.lazy(() => import("./Company"));
const Career = React.lazy(() => import("./Career"));
const News = React.lazy(() => import("./News"));

/* Tab map */
const TAB_DATA = [
  { key: "about", name: "About" },
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

/* Preloaders for instant switching */
const PRELOADERS = {
  vision: () => import("./Vision"),
  team: () => import("./Team"),
  stories: () => import("./Stories"),
  company: () => import("./Company"),
  career: () => import("./Career"),
  news: () => import("./News"),
};

/* Skeleton loader */
function SkeletonFallback() {
  return (
    <div className="tab-loading-state" aria-busy="true">
      <div className="about-skeleton" />
    </div>
  );
}

/* Tab content component */
const TabContent = React.memo(
  ({ activeTab, isRevealing, contentRef, swipeOffset }) => {
    const ActiveComponent = COMPONENT_MAP[activeTab];

    return (
      <div
        className={`about-content about-reveal ${
          isRevealing ? "about-reveal-active" : ""
        }`}
        ref={contentRef}
        role="tabpanel"
        id={`panel-${activeTab}`}
        style={{
          transform: `translateX(${swipeOffset}px)`,
          opacity: 1 - Math.min(Math.abs(swipeOffset) / 200, 0.4),
        }}
      >
        <Suspense fallback={<SkeletonFallback />}>
          <ActiveComponent />
        </Suspense>
      </div>
    );
  }
);

export default function About() {
  const tabKeys = useMemo(() => TAB_DATA.map((t) => t.key), []);
  const [activeTab, setActiveTab] = useState("about");

  const [hideHeader, setHideHeader] = useState(false);

  const [isRevealing, setIsRevealing] = useState(false);

  const [swipeOffset, setSwipeOffset] = useState(0);

  const [heroAnimated, setHeroAnimated] = useState(false);

  const touchStartRef = useRef(0);
  const contentRef = useRef(null);
  const tabListRef = useRef(null);
  const minSwipe = 75;

  /* Deep linking */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabKeys.includes(hash)) setActiveTab(hash);
  }, []);

  /* Hero animate ONCE */
  useEffect(() => {
    const t = setTimeout(() => {
      setHeroAnimated(true);
    }, 50);
    return () => clearTimeout(t);
  }, []);

  /* Hide/show header on scroll */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const now = window.scrollY;
      if (now > last && now > 200) setHideHeader(true);
      else setHideHeader(false);
      last = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Tab reveal animation */
  useEffect(() => {
    setIsRevealing(true);
    const t = setTimeout(() => setIsRevealing(false), 600);
    return () => clearTimeout(t);
  }, [activeTab]);

  /* Preload next + prev tabs */
  useEffect(() => {
    const index = tabKeys.indexOf(activeTab);
    const next = tabKeys[index + 1];
    const prev = tabKeys[index - 1];
    if (PRELOADERS[next]) PRELOADERS[next]();
    if (PRELOADERS[prev]) PRELOADERS[prev]();
  }, [activeTab, tabKeys]);

  /* Change tab */
  const changeTab = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);

    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  /* Touch gestures */
  const onTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    setSwipeOffset(0);
  };

  const onTouchMove = (e) => {
    const dx = e.touches[0].clientX - touchStartRef.current;
    setSwipeOffset(dx * 0.45);
  };

  const onTouchEnd = (e) => {
    const dx = touchStartRef.current - e.changedTouches[0].clientX;
    setSwipeOffset(0);

    const i = tabKeys.indexOf(activeTab);
    let nextIndex = i;

    if (dx > minSwipe) nextIndex = Math.min(i + 1, tabKeys.length - 1);
    else if (dx < -minSwipe) nextIndex = Math.max(i - 1, 0);

    if (nextIndex !== i) changeTab(tabKeys[nextIndex]);
  };

  /* Keyboard navigation */
  const onKeyDown = (e) => {
    const i = tabKeys.indexOf(activeTab);
    let x = i;

    if (e.key === "ArrowRight") x = Math.min(i + 1, tabKeys.length - 1);
    if (e.key === "ArrowLeft") x = Math.max(i - 1, 0);

    if (x !== i) {
      changeTab(tabKeys[x]);
      const el = tabListRef.current?.querySelector(
        `[data-tab-key="${tabKeys[x]}"]`
      );
      el?.focus();
    }
  };

  return (
    <div className="about-container">
      {/* HERO - animate ONLY on first load */}
      <section className="about-hero">
        <h1
          className={`about-title about-reveal ${
            heroAnimated ? "about-reveal-active" : ""
          }`}
        >
          About NeX UP
        </h1>

        <p
          className={`about-desc about-reveal ${
            heroAnimated ? "about-reveal-active" : ""
          }`}
        >
          Explore our journey, teams, values, and how we build the digital future.
        </p>
      </section>

      {/* TABS HEADER */}
      <div className={`about-tab-header ${hideHeader ? "hide-about-header" : ""}`}>
        <div
          className="about-tab-list"
          onKeyDown={onKeyDown}
          ref={tabListRef}
          role="tablist"
        >
          {TAB_DATA.map(({ key, name }) => (
            <span
              key={key}
              data-tab-key={key}
              className={activeTab === key ? "active" : ""}
              onClick={() => changeTab(key)}
              tabIndex="0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="about-content-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <TabContent
          activeTab={activeTab}
          isRevealing={isRevealing}
          contentRef={contentRef}
          swipeOffset={swipeOffset}
        />
      </div>
    </div>
  );
}
