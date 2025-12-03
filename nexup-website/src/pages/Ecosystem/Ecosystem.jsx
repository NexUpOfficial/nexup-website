// src/pages/Ecosystem/Ecosystem.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Suspense,
} from "react";
import "../../page-styles/Ecosystem/Ecosystem.css";

/* Lazy-loaded pages */
const NexWorld = React.lazy(() => import("./NexWorld"));
const NexNodes = React.lazy(() => import("./NexNodes"));
const NexEngine = React.lazy(() => import("./NexEngine"));
const NexHousing = React.lazy(() => import("./NexHousing"));
const EcosystemSearch = React.lazy(() => import("./NexSearch"));

/* Tab data */
const TAB_DATA = [
  { key: "nexworld", name: "NexWorld" },
  { key: "nexnodes", name: "NexNodes" },
  { key: "nexengine", name: "NexEngine" },
  { key: "nexhousing", name: "NexHousing" },
  { key: "search", name: "Search Engine" },
];

const COMPONENT_MAP = {
  nexworld: NexWorld,
  nexnodes: NexNodes,
  nexengine: NexEngine,
  nexhousing: NexHousing,
  search: EcosystemSearch,
};

/* Preloaders for next/previous tabs */
const PRELOADERS = {
  nexworld: () => import("./NexWorld"),
  nexnodes: () => import("./NexNodes"),
  nexengine: () => import("./NexEngine"),
  nexhousing: () => import("./NexHousing"),
  search: () => import("./NexSearch"),
};

/* Skeleton loader */
function SkeletonFallback() {
  return (
    <div className="eco-loading">
      <div className="eco-skeleton" />
    </div>
  );
}

/* Tab content */
const TabContent = React.memo(
  ({ activeTab, isRevealing, contentRef, swipeOffset }) => {
    const ActiveComponent = COMPONENT_MAP[activeTab];

    return (
      <div
        className={`eco-content eco-reveal ${
          isRevealing ? "eco-reveal-active" : ""
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

export default function Ecosystem() {
  const tabKeys = useMemo(() => TAB_DATA.map((t) => t.key), []);

  const [activeTab, setActiveTab] = useState("nexworld");
  const [hideHeader, setHideHeader] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const minSwipe = 75;
  const touchStartRef = useRef(0);
  const contentRef = useRef(null);
  const tabListRef = useRef(null);

  /* Deep linking */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabKeys.includes(hash)) setActiveTab(hash);
  }, []);

  /* Hero revealed ONLY once */
  useEffect(() => {
    const t = setTimeout(() => setHeroAnimated(true), 50);
    return () => clearTimeout(t);
  }, []);

  /* Hide header on scroll */
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

  /* Reveal animation on tab change */
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
  const changeTab = (key) => {
    if (key === activeTab) return;

    setActiveTab(key);
    window.history.replaceState(null, "", `#${key}`);

    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  /* Swipe gestures */
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
    let x = i;

    if (dx > minSwipe) x = Math.min(i + 1, tabKeys.length - 1);
    else if (dx < -minSwipe) x = Math.max(i - 1, 0);

    if (x !== i) changeTab(tabKeys[x]);
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
    <div className="eco-container">
      {/* HERO */}
      <section className="eco-hero">
        <h1
          className={`eco-title eco-reveal ${
            heroAnimated ? "eco-reveal-active" : ""
          }`}
        >
          Explore the NexUP Ecosystem
        </h1>

        <p
          className={`eco-desc eco-reveal ${
            heroAnimated ? "eco-reveal-active" : ""
          }`}
        >
          Discover our platforms powering AR, VR, intelligence, and digital
          reality — modular, connected, and built for the future.
        </p>
      </section>

      {/* TABS */}
      <div className={`eco-tab-header ${hideHeader ? "hide-eco-header" : ""}`}>
        <div
          className="eco-tab-list"
          role="tablist"
          onKeyDown={onKeyDown}
          ref={tabListRef}
        >
          {TAB_DATA.map(({ key, name }) => (
            <span
              key={key}
              data-tab-key={key}
              className={activeTab === key ? "active" : ""}
              onClick={() => changeTab(key)}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="eco-content-wrapper"
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
