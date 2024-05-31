import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Download from "./Components/Download";
import Header from "./Components/Header";
import HeroSec from "./Components/Herosec";
import { motion, useScroll } from "framer-motion";
import Profile from "./Components/Profile";
import { Spinner } from "react-activity";
const Home = lazy(() => import('./Components/Home'));

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='hero-sidebar'>
          <Suspense fallback={<div ><Spinner size={30} color='black' /></div>}>
            <div className='profile-img'>
              <img src='img/myimg.jpg' className='img-fluid img-set' alt='' />
            </div>
          </Suspense>
          <Suspense fallback={<div className='loader'><Spinner size={30} color='black' /></div>}>
            <Home/>
          </Suspense>
        </div>
        <motion.div className="progres" style={{ scaleX: scrollYProgress }} />
        <Routes>
          <Route path="/" element={<HeroSec />}></Route>
            <Route path="/certification" element={<Download />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
};

export default App;
