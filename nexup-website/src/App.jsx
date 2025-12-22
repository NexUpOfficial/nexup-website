// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Loader from "./components/TopLoader/Loader";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PageLayout from "./layout/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import RefreshPage from "./hooks/refresh/RefreshPage";

import "./App.css";

/* Pages */
import Home from "./pages/Home";

/* Ecosystem */
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import NexWorld from "./pages/Ecosystem/NexWorld";
import NexNodes from "./pages/Ecosystem/NexNodes";
import NexEngine from "./pages/Ecosystem/NexEngine";
import NexHousing from "./pages/Ecosystem/NexHousing";
import NexSearch from "./pages/Ecosystem/NexSearch";

/* About */
import About from "./pages/About/About";
import Vision from "./pages/About/Vision";
import Team from "./pages/About/Team";
import StoriesPage from "./pages/About/Stories";
import Company from "./pages/About/Company";
import Career from "./pages/About/Career";
import News from "./pages/About/News";

/* Support */
import Guidelines from "./pages/Support/Guidelines";
import Help from "./pages/Support/Help";

/* Safety */
import SafetyApproach from "./pages/Safety/Approach";
import Privacy from "./pages/Safety/Privacy";
import Trust from "./pages/Safety/Trust";
import Transparency from "./pages/Safety/Transparency";
import Cookies from "./pages/Safety/Cookies";

/* Other */
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SearchPage from "./pages/Search/Search";
import FeedbackForm from "./pages/FeedbackForm";


/* Account */
import DNS from "./pages/Account/DNS";

/* Sections */
import Roadmap from "./pages/sections/Roadmap";
import Terms from "./pages/sections/Terms";

/* ============================================================
   Global Scroll Override — Fixes all pages
============================================================ */
function useGlobalScrollOverride() {
  useEffect(() => {
    const fix = () => {
      document.querySelectorAll(
        ".bounce-scroll, .page-scroll, .inner-scroll, .section-scroll, .content-scroll"
      ).forEach(el => {
        el.style.overflow = "visible";
        el.style.height = "auto";
        el.scrollTop = 0;
      });
    };

    fix();
    const t = setTimeout(fix, 50);
    const t2 = setTimeout(fix, 250);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);
}

/* ============================================================
   Animated Routes Wrapper
============================================================ */
function AnimatedRoutesWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Ecosystem */}
        <Route path="ecosystem">
          <Route index element={<Ecosystem />} />
          <Route path="nexworld" element={<NexWorld />} />
          <Route path="nexnodes" element={<NexNodes />} />
          <Route path="nexengine" element={<NexEngine />} />
          <Route path="nexhousing" element={<NexHousing />} />
          <Route path="nexsearch" element={<NexSearch />} />
        </Route>

        {/* About */}
        <Route path="about">
          <Route index element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="team" element={<Team />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="company" element={<Company />} />
          <Route path="career" element={<Career />} />
          <Route path="news" element={<News />} />
        </Route>

        {/* Support */}
        <Route path="support">
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="help" element={<Help />} />
        </Route>

        {/* Safety */}
        <Route path="safety">
          <Route path="approach" element={<SafetyApproach />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="trust" element={<Trust />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>

        {/* Other */}
        <Route path="/dns" element={<DNS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />


        {/* Sections */}
        <Route path="/sections/roadmap" element={<Roadmap />} />
        <Route path="/sections/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ============================================================
   App Root Component
============================================================ */
export default function App() {
  const [isOpen, setIsOpen] = useState(
    () => localStorage.getItem("sidebar_open") === "true"
  );

  useGlobalScrollOverride();

  /* EXISTING – DO NOT REMOVE */
  const toggleSidebar = () => {
    setIsOpen(prev => {
      const next = !prev;
      localStorage.setItem("sidebar_open", next);
      return next;
    });
  };

  /* EXISTING – DO NOT REMOVE */
  const closeSidebar = () => {
    setIsOpen(false);
    localStorage.setItem("sidebar_open", "false");
  };

  /* ============================================================
     ✅ NEW – SAFE ADDITION (DO NOT REMOVE EXISTING CODE)
     Allows Sidebar to toggle itself (Ctrl + S)
  ============================================================ */
  const setSidebarState = (value) => {
    if (typeof value === "function") {
      setIsOpen(prev => {
        const next = value(prev);
        localStorage.setItem("sidebar_open", next);
        return next;
      });
    } else {
      setIsOpen(value);
      localStorage.setItem("sidebar_open", value);
    }
  };

  return (
    <>
      <Loader />

      {/* Reset scroll on route */}
      <ScrollToTop />

      {/* 🔽 ONLY THIS PROP IS CHANGED */}
      <Sidebar isOpen={isOpen} onClose={setSidebarState} />

      {/* EXISTING – UNCHANGED */}
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <PageLayout isOpen={isOpen}>
        <RefreshPage
          isSidebarOpen={isOpen}
          onOpenSidebar={toggleSidebar}
          onCloseSidebar={closeSidebar}
        />

        <AnimatedRoutesWrapper />
      </PageLayout>
    </>
  );
}
