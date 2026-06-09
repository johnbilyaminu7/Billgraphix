import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Navbar from "./navbar";
import Footer from "./footer";
import {motion } from "framer-motion"
import Content from "./content";
import NotFound from "./NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return JSON.parse(saved);
    } catch (e) {
      
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (e) {
      
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen w-full transition-all duration-500 ${
      darkMode
        ? "bg-linear-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white"
        : "bg-linear-to-br from-[#fff7ed] via-[#ffffff] to-[#ffe7c2] text-black"
    }`}>
     
      <Navbar darkMode={darkMode}
      setDarkMode={setDarkMode} />
  <main className="pt-16 grow">
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/about" element={<About darkMode={darkMode} />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
