import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.js";
import Pricing from "./routes/Pricing.js";
import Training from "./routes/Training.js";
import Contact from "./routes/Contact.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
