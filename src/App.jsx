import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from 'lucide-react';
import "./App.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Press from "./components/Press";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Loader2 className="animate-spin h-16 w-16 text-primary" />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TopBar key="topbar" />
        <Navbar key="navbar" />
        <Hero key="hero" />
        <About key="about" />
        <Events key="events" />
        <Press key="press" />
        <Gallery key="gallery" />
        <Socials key="socials" />
        <Footer key="footer" />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;