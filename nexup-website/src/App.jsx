// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

/* Core layout components */
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./layout/PageLayout";

/* Pages */
import Home from "./pages/Home";

/* Ecosystem */
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import NexWorld from "./pages/Ecosystem/NexWorld";
import NexNodes from "./pages/Ecosystem/NexNodes";
import NexEngine from "./pages/Ecosystem/NexEngine";
import NexHousing from "./pages/Ecosystem/NexHousing";
import Search from "./pages/Ecosystem/Search";

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

/* Other */
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SearchPage from "./pages/Search";

function AnimatedRoutesWrapper({ isOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Ecosystem */}
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/ecosystem/nexworld" element={<NexWorld />} />
        <Route path="/ecosystem/nexnodes" element={<NexNodes />} />
        <Route path="/ecosystem/nexengine" element={<NexEngine />} />
        <Route path="/ecosystem/nexhousing" element={<NexHousing />} />
        <Route path="/ecosystem/search" element={<Search />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/stories" element={<Stories />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/career" element={<Career />} />
        <Route path="/about/news" element={<News />} />

        {/* Support */}
        <Route path="/support/guidelines" element={<Guidelines />} />
        <Route path="/support/help" element={<Help />} />

        {/* Other */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Header isOpen={isOpen} toggleSidebar={() => setIsOpen(prev => !prev)} />

      {/* Unified Page Layout */}
      <PageLayout isOpen={isOpen}>
        <AnimatedRoutesWrapper isOpen={isOpen} />
      </PageLayout>
    </BrowserRouter>
  );
}
