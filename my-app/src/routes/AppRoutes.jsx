import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cars from "../pages/Cars";
 // ✅ add this

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} /> 
  <Route path="/Home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} /> {/* ✅ add this */}
  {/* support lowercase /cars/:type routes (new/used) */}
  <Route path="/cars/:type" element={<Cars />} />
  <Route path="/Cars/:type" element={<Cars />} />
  <Route path="/cars/all" element={<Cars />} />
<Route path="/cars/:type" element={<Cars />} />

    </Routes>
  );
};

export default AppRoutes;


