import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Ratefacts from "./Components/Ratefacts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Ratefacts />} />
      <Route path="/rates-faqs" element={<Ratefacts />} />
      <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
