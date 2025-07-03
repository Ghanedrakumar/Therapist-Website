import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Service from "./Components/Service";
import Consultation from "./Components/Consultation";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route path="/" element={<Dashboard />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultation" element={<Consultation />} />
      </Routes>
       <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
