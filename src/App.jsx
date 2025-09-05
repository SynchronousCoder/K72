import React, { useRef, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";


const App = () => {
 const location = useLocation(); // Get current location
  // Determine if logo should be black
  const isLogoBlack = (location.pathname === "/agence" || location.pathname === "/projects") ? "black" : "white";

  return (
    <div className="text-white">

      <Navbar path="/" fillColor={isLogoBlack}/>
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
