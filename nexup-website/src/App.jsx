// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* Core Layout – KEEP */
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PageLayout from "./layout/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import RefreshPage from "./hooks/refresh/RefreshPage";

import "./App.css";

/* Pages – KEEP ONLY THESE */
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FeedbackForm from "./pages/FeedbackForm";

/* ============================================================
   Global Scroll Override — KEEP
============================================================ */
function useGlobalScrollOverride() {
  useEffect(() => {
    const fix = () => {
      document
        .querySelectorAll(
          ".bounce-scroll, .page-scroll, .inner-scroll, .section-scroll, .content-scroll"
        )
        .forEach((el) => {
          el.style.overflow = "visible";
          el.style.height = "auto";
          el.scrollTop = 0;
        });
    };

    fix();
    const t1 = setTimeout(fix, 50);
    const t2 = setTimeout(fix, 250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}

/* ============================================================
   Animated Routes — MINIMAL
============================================================ */
function AnimatedRoutesWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ============================================================
   App Root — CLEAN BASE
============================================================ */
export default function App() {
  const [isOpen, setIsOpen] = useState(
    () => localStorage.getItem("sidebar_open") === "true"
  );

  useGlobalScrollOverride();

  /* Sidebar controls – KEEP */
  const toggleSidebar = () => {
    setIsOpen((prev) => {
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
      <ScrollToTop />

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
