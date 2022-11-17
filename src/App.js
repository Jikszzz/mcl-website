import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import OurWorks from "./pages/OurWorks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/our-works" element={<OurWorks />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
