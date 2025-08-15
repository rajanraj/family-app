
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'

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
  if(isAnniversary) bgClass += ' anniversary-bg';

  return (
    <div className={bgClass}></div>
  );
}

export default BackgroundImage