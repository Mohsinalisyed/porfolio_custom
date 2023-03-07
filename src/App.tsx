import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Download from "./Components/Download";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSec from "./Components/Herosec";
import { motion, useScroll } from "framer-motion";
import Profile from "./Components/Profile";
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <motion.div className="progres" style={{ scaleX: scrollYProgress }} />
        <Routes>
          <Route path="/" element={<HeroSec />}></Route>
          <Route path="/download" element={<Download />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
