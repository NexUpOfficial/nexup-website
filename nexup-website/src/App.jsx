import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* ================= ANALYTICS ================= */
import AnalyticManage from "./analytics/AnalyticManage";

/* ================= CORE ================= */
import Loader from "./components/TopLoader/Loader";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PageLayout from "./layout/PageLayout";
import RefreshPage from "./hooks/refresh/RefreshPage";
import ScrollRestoration from "./components/ScrollRestoration";
import NotFound from "./pages/NotFound";

import "./App.css";

/* ============================================================
    PAGES
============================================================ */

/* Home */
import Home from "./pages/Home";

/* ================= Ecosystem ================= */
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import EcoNexWorld from "./pages/Ecosystem/NexWorld";
import EcoNexNodes from "./pages/Ecosystem/NexNodes";
import EcoNexEngine from "./pages/Ecosystem/NexEngine";
import EcoNexHousing from "./pages/Ecosystem/NexHousing";
import EcoNexSearch from "./pages/Ecosystem/NexSearch";

/* ================= About ================= */
import About from "./pages/About/About";
import AboutVision from "./pages/About/Vision";
import Team from "./pages/About/Team";
import StoriesPage from "./pages/About/Stories";
import Company from "./pages/About/Company";
import Career from "./pages/About/Career";
import News from "./pages/About/News";

/* ================= Support ================= */
import Guidelines from "./pages/Support/Guidelines";
import Help from "./pages/Support/Help";

/* ================= Safety ================= */
import SafetyApproach from "./pages/Safety/Approach";
import SafetyPrivacy from "./pages/Safety/Privacy";
import SafetySecurity from "./pages/Safety/Security";
import Trust from "./pages/Safety/Trust";
import SafetyTransparency from "./pages/Safety/Transparency";
import SafetyCookies from "./pages/Safety/Cookies";

/* ================= Misc ================= */
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SearchPage from "./pages/Search/Search";
import FeedbackForm from "./pages/FeedbackForm";
import DNS from "./pages/Account/DNS";

/* ================= Sections ================= */
import Roadmap from "./pages/sections/Roadmap";
import SectionTerms from "./pages/sections/Terms";

/* ================= Vision ================= */
import VisionIndex from "./pages/Vision/Vision";
import VisionNexWorld from "./pages/Vision/NexWorld";
import VisionNexNodes from "./pages/Vision/NexNodes";
import VisionNexEngine from "./pages/Vision/NexEngine";
import VisionNexHousing from "./pages/Vision/NexHousing";
import VisionNexSearch from "./pages/Vision/NexSearch";

/* ================= Approach ================= */
import ApproachIndex from "./pages/Approach/Approach";
import Architecture from "./pages/Approach/Architecture";
import Scalability from "./pages/Approach/Scalability";
import Rollout from "./pages/Approach/Rollout";

/* ================= System Docs ================= */
import Overview from "./pages/SystemDocs/Overview";
import SysGovernance from "./pages/SystemDocs/Governance";
import SysSecurity from "./pages/SystemDocs/Security";
import SysPrivacy from "./pages/SystemDocs/Privacy";
import SysCookies from "./pages/SystemDocs/Cookies";
import SysTransparency from "./pages/SystemDocs/Transparency";
import SysTerms from "./pages/SystemDocs/Terms";

/* ============================================================
    ANIMATED ROUTES (NO ANALYTICS HERE ANYMORE)
============================================================ */
function AnimatedRoutesWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />

        {/* Ecosystem */}
        <Route path="ecosystem">
          <Route index element={<Ecosystem />} />
          <Route path="nexworld" element={<EcoNexWorld />} />
          <Route path="nexnodes" element={<EcoNexNodes />} />
          <Route path="nexengine" element={<EcoNexEngine />} />
          <Route path="nexhousing" element={<EcoNexHousing />} />
          <Route path="nexsearch" element={<EcoNexSearch />} />
        </Route>

        {/* About */}
        <Route path="about">
          <Route index element={<About />} />
          <Route path="vision" element={<AboutVision />} />
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
          <Route path="privacy" element={<SafetyPrivacy />} />
          <Route path="security" element={<SafetySecurity />} />
          <Route path="trust" element={<Trust />} />
          <Route path="transparency" element={<SafetyTransparency />} />
          <Route path="cookies" element={<SafetyCookies />} />
        </Route>

        {/* Vision */}
        <Route path="vision">
          <Route index element={<VisionIndex />} />
          <Route path="nexworld" element={<VisionNexWorld />} />
          <Route path="nexnodes" element={<VisionNexNodes />} />
          <Route path="nexengine" element={<VisionNexEngine />} />
          <Route path="nexhousing" element={<VisionNexHousing />} />
          <Route path="nexsearch" element={<VisionNexSearch />} />
        </Route>

        {/* Approach */}
        <Route path="approach">
          <Route index element={<ApproachIndex />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="scalability" element={<Scalability />} />
          <Route path="rollout" element={<Rollout />} />
        </Route>

        {/* System Docs */}
        <Route path="system-docs">
          <Route index element={<Overview />} />
          <Route path="governance" element={<SysGovernance />} />
          <Route path="security" element={<SysSecurity />} />
          <Route path="privacy" element={<SysPrivacy />} />
          <Route path="cookies" element={<SysCookies />} />
          <Route path="transparency" element={<SysTransparency />} />
          <Route path="terms" element={<SysTerms />} />
        </Route>

        {/* Misc */}
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="feedback" element={<FeedbackForm />} />
        <Route path="dns" element={<DNS />} />

        {/* Sections */}
        <Route path="sections/roadmap" element={<Roadmap />} />
        <Route path="sections/terms" element={<SectionTerms />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ============================================================
    APP ROOT
============================================================ */
export default function App() {
  const [isOpen, setIsOpen] = useState(
    () => localStorage.getItem("sidebar_open") === "true"
  );

  const toggleSidebar = () => {
    setIsOpen(prev => {
      const next = !prev;
      localStorage.setItem("sidebar_open", next);
      return next;
    });
  };

  const closeSidebar = () => {
    setIsOpen(false);
    localStorage.setItem("sidebar_open", "false");
  };

  return (
    <>
      {/* 🧠 Analytics Manager (GLOBAL, HEADLESS) */}
      <AnalyticManage />

      <Loader />
      <ScrollRestoration />

      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />

      <PageLayout isOpen={isOpen} onCloseSidebar={closeSidebar}>
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
