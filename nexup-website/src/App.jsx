import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import PageTransition from "./components/PageTransition";

/* TEMP PAGES */
const Home = () => (
  <PageTransition>
    <h1>Home Page</h1>
  </PageTransition>
);

const Ecosystem = () => (
  <PageTransition>
    <h1>Ecosystem Page</h1>
  </PageTransition>
);

const About = () => (
  <PageTransition>
    <h1>About Page</h1>
  </PageTransition>
);

const Contact = () => (
  <PageTransition>
    <h1>Contact Page</h1>
  </PageTransition>
);

function AnimatedRoutesWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <BrowserRouter>
      {/* Sidebar is always rendered (fixed left) */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Header is full-width and fixed */}
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />

      {/* Main shifts right depending on sidebar state */}
      <Main isOpen={isOpen}>
        <AnimatedRoutesWrapper />
      </Main>
    </BrowserRouter>
    
  );
}

export default App;
