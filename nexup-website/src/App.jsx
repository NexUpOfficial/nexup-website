// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollToTop";

/* ============================
   IMPORT ALL PAGES
============================ */

/* Home */
import Home from "./pages/Home";

/* Ecosystem */
import Ecosystem from "./pages/Ecosystem/Ecosystem.jsx";
import NexWorld from "./pages/Ecosystem/NexWorld";
import NexNodes from "./pages/Ecosystem/NexNodes";
import NexEngine from "./pages/Ecosystem/NexEngine";
import NexHousing from "./pages/Ecosystem/NexHousing";
import Search from "./pages/Ecosystem/Search";

/* About */
import About from "./pages/About/About.jsx";
import Vision from "./pages/About/Vision";
import Team from "./pages/About/Team";
import Stories from "./pages/About/Stories";
import Company from "./pages/About/Company";
import Career from "./pages/About/Career";
import News from "./pages/About/News";

/* Support */
import Guidelines from "./pages/Support/Guidelines";
import Help from "./pages/Support/Help";

/* Other Pages */
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import SearchPage from "./pages/Search";

/* ============================
   PAGE TRANSITION WRAPPER
============================ */
function AnimatedRoutesWrapper({ isOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>

        {/* HOME */}
        <Route path="/" element={<Home isOpen={isOpen} />} />

        {/* ECOSYSTEM */}
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/ecosystem/nexworld" element={<NexWorld />} />
        <Route path="/ecosystem/nexnodes" element={<NexNodes />} />
        <Route path="/ecosystem/nexengine" element={<NexEngine />} />
        <Route path="/ecosystem/nexhousing" element={<NexHousing />} />
        <Route path="/ecosystem/search" element={<Search />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/stories" element={<Stories />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/career" element={<Career />} />
        <Route path="/about/news" element={<News />} />

        {/* SUPPORT */}
        <Route path="/support/guidelines" element={<Guidelines />} />
        <Route path="/support/help" element={<Help />} />

        {/* OTHER */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/search" element={<SearchPage />} />

      </Routes>
    </AnimatePresence>
  );
}

/* ============================
   MAIN APP COMPONENT
============================ */
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <BrowserRouter>

      <ScrollToTop />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />

      <Main isOpen={isOpen}>
        <AnimatedRoutesWrapper isOpen={isOpen} />
      </Main>

    </BrowserRouter>
  );
}

export default App;
