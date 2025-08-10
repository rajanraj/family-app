import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/header/Header';
import FirstMeet from './components/FirstMeet';
import Engagement from './components/Engagement';
import Anniversary from './components/Anniversary';
import Wedding from './components/Wedding';
import Home from './components/home/Home';
import FloatingHearts from './components/FloatingHearts';
import './App.css';

function BackgroundImage() {
  const location = useLocation();
  const isEngagement = location.pathname === '/engagement';
  const isWedding = location.pathname === '/wedding';
  const isAnniversary = location.pathname === '/anniversary';
  const isFirstMeet = location.pathname === '/first-meet';

  let bgClass = 'background-image';
  if (isEngagement) bgClass += ' engagement-bg';
  if (isWedding) bgClass += ' wedding-bg';
  if(isFirstMeet) bgClass += ' first-meet-bg';

  return (
    <div className={bgClass}></div>
  );
}

function App() {
   // For GitHub Pages (repo name is 'our-family-app')
  const repoName = 'family-app'; // Change this to your actual repo name
  const basename = process.env.NODE_ENV === 'development' ? '/' : `/${repoName}`;

  return (
    <Router basename={basename}>
      <BackgroundImage />
      <div className="app">
        <FloatingHearts count={20} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-meet" element={<FirstMeet />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/anniversary" element={<Anniversary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;