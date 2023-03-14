import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Schedule } from "./pages/schedule"
import './App.css'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    );
}

export default App;
