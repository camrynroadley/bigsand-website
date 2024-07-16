import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import AdultGrassLeague from './pages/AdultGrassLeague/AdultGrassLeague';
import GirlsGrassLeague from './pages/GirlsGrassLeague/GirlsGrassLeague';
import SummerCamp from './pages/SummerCamp/SummerCamp';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/adult-grass-league" element={<AdultGrassLeague />} />
      <Route path="/girls-grass-league" element={<GirlsGrassLeague />} />
      <Route path="/girls-summer-camp" element={<SummerCamp />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  );
}

export default App;
