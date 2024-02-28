import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.js";
import Pricing from "./routes/Pricing.js";
import Training from "./routes/Training.js";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/training" element={<Training/>}/>
      </Routes>
    </>
  );
}

export default App;
