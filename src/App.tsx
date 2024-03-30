import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import AdultGrassLeague from './pages/GrassLeague/AdultGrassLeague';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/adult-grass-league" element={<AdultGrassLeague />} />
    </Routes>
  </div>
  );
}

export default App;
