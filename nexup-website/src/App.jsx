// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RefreshPage from "./hooks/refresh/RefreshPage";
import Loader from "./components/TopLoader/Loader";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./layout/PageLayout";

/* Home */
import Home from "./pages/Home";

/* Ecosystem */
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import NexWorld from "./pages/Ecosystem/NexWorld";
import NexNodes from "./pages/Ecosystem/NexNodes";
import NexEngine from "./pages/Ecosystem/NexEngine";
import NexHousing from "./pages/Ecosystem/NexHousing";

/* ✅ UPDATED IMPORT — matches new file name */
import NexSearch from "./pages/Ecosystem/NexSearch";

/* About */
import About from "./pages/About/About";
import Vision from "./pages/About/Vision";
import Team from "./pages/About/Team";
import Stories from "./pages/About/Stories";
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

/* Other */
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SearchPage from "./pages/Search/Search";

/* Account */
import DNS from "./pages/Account/DNS";


/* ====================================================
   Animated Route Wrapper
==================================================== */
function AnimatedRoutesWrapper() {
  const location = useLocation();

  /* ----------------------------------------
     HOLO PARALLAX + FADE DURING SCROLL
  ---------------------------------------- */
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      document.body.classList.add("scrolling");

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 500);
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--px", `${x}%`);
      document.documentElement.style.setProperty("--py", `${y}%`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* ----------------------------------------
     🔥 ROUTE LOADING EVENTS → Neon Loader
  ---------------------------------------- */
  useEffect(() => {
    window.dispatchEvent(new Event("route-loading-start"));

    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event("route-loading-end"));
    }, 800);

    return () => {
      clearTimeout(timeout);
      window.dispatchEvent(new Event("route-loading-end"));
    };
  }, [location.pathname]);

  /* ----------------------------------------
     Magnetic Hover
  ---------------------------------------- */
  useEffect(() => {
    const magneticStrength = 38;

    const elements = document.querySelectorAll(
      "button, a, .login-btn, .search-btn, .sidebar-icon-btn, .home-btn, .explore-btn, .mix-btn"
    );

    elements.forEach((el) => {
      el.style.transition = "transform 0.18s ease";

      const mouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        el.style.transform = `translate(${x / magneticStrength}px, ${y / magneticStrength}px) scale(1.05)`;
      };

      const mouseLeave = () => {
        el.style.transform = "translate(0px,0px) scale(1)";
      };

      el.addEventListener("mousemove", mouseMove);
      el.addEventListener("mouseleave", mouseLeave);

      el._mm = mouseMove;
      el._ml = mouseLeave;
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mousemove", el._mm);
        el.removeEventListener("mouseleave", el._ml);
      });
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        {/* Ecosystem */}
        <Route path="ecosystem">
          <Route index element={<Ecosystem />} />
          <Route path="nexworld" element={<NexWorld />} />
          <Route path="nexnodes" element={<NexNodes />} />
          <Route path="nexengine" element={<NexEngine />} />
          <Route path="nexhousing" element={<NexHousing />} />

          {/* ✅ UPDATED ROUTE — now matches import */}
          <Route path="nexsearch" element={<NexSearch />} />
        </Route>

        {/* About */}
        <Route path="about">
          <Route index element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="team" element={<Team />} />
          <Route path="stories" element={<Stories />} />
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
        </Route>

        <Route path="/dns" element={<DNS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </AnimatePresence>
  );
}


/* ====================================================
   App Root + Bounce Effect
==================================================== */
export default function App() {
  const [isOpen, setIsOpen] = useState(() =>
    localStorage.getItem("sidebar_open") === "true"
  );

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const newVal = !prev;
      localStorage.setItem("sidebar_open", newVal);
      return newVal;
    });
  };

  const closeSidebar = () => {
    setIsOpen(false);
    localStorage.setItem("sidebar_open", "false");
  };

  /* Bounce Scroll */
  useEffect(() => {
    const container = document.querySelector(".bounce-scroll");
    let bounceOffset = 0;
    let bouncing = false;
    let raf;

    const animateBounce = () => {
      bounceOffset *= 0.75;
      container.style.transform = `translateY(${bounceOffset}px)`;

      if (Math.abs(bounceOffset) > 0.5) {
        raf = requestAnimationFrame(animateBounce);
      } else {
        container.style.transform = "translateY(0px)";
        bouncing = false;
      }
    };

    const onScroll = () => {
      const atTop = container.scrollTop === 0;
      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight;

      if ((atTop || atBottom) && !bouncing) {
        bouncing = true;
        bounceOffset = atTop ? 35 : -35;
        cancelAnimationFrame(raf);
        animateBounce();
      }
    };

    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <BrowserRouter>
      <Loader />
      <ScrollToTop />

      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="bounce-scroll">
        <PageLayout isOpen={isOpen}>
          <RefreshPage
            onOpenSidebar={toggleSidebar}
            onCloseSidebar={closeSidebar}
            isSidebarOpen={isOpen}
          />

          <AnimatedRoutesWrapper />
        </PageLayout>
      </div>
    </BrowserRouter>
  );
}
