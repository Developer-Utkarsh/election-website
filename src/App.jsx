import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Vision from "./pages/Vision";
import GalleryPage from "./pages/Gallery";
import JoinUs from "./pages/JoinUs";
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
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;