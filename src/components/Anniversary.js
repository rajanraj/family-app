import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaCalendarAlt, FaGift } from 'react-icons/fa';

const Anniversary = () => {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [hearts, setHearts] = useState([]);

  // Your anniversary memories
  const memories = [
    {
      year: "1st Anniversary",
      date: "2024",
      description: "Our first year together as husband and wife",
      image: "anniversary1.jpg"
    },
    {
      year: "2nd Anniversary",
      date: "2025",
      description: "The year we welcomed our little one",
      image: "anniversary2.jpg"
    },
    {
      year: "3rd Anniversary",
      date: "2026",
      description: "Building a good career for you and me and become debt free",
      image: "anniversary3.jpg"
    },
    // Add more years as needed
  ];

  const addHeart = (e) => {
    setHearts([...hearts, {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    }]);
  };

  return (
    <motion.div 
      className="anniversary-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={addHeart}
    >
      {/* Floating hearts animation */}
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          initial={{ 
            x: heart.x - 15, 
            y: heart.y - 15,
            scale: 1,
            opacity: 1
          }}
          animate={{
            y: heart.y - 150,
            opacity: 0
          }}
          transition={{ duration: 1.5 }}
        >
          <FaHeart color="#ff6b6b" />
        </motion.div>
      ))}

      <div className="anniversary-header">
        <h1>Our Anniversary Journey</h1>
        <div className="years-together">
          <FaCalendarAlt /> 
          <span>{new Date().getFullYear() - new Date('2023-08-20').getFullYear()} Years Together</span>
        </div>
      </div>

      <div className="memory-navigation">
        {memories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMemory(index)}
            className={currentMemory === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <motion.div 
        className="memory-container"
        key={currentMemory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <div className="memory-image">
          <img 
            src={`/images/${memories[currentMemory].image}`} 
            alt={memories[currentMemory].year} 
          />
        </div> */}
        <div className="memory-details">
          <h2>{memories[currentMemory].year}</h2>
          <div className="memory-date">
            <FaCalendarAlt /> {memories[currentMemory].date}
          </div>
          <p>{memories[currentMemory].description}</p>
          
          <div className="memory-gift">
            <FaGift /> 
            <span>Gift: {['Bracelet', 'OurApp', 'Surprise',][currentMemory]}</span>
          </div>
        </div>
      </motion.div>

      <div className="love-meter">
        <h3>My Love For You</h3>
        <div className="hearts">
          {[...Array(5)].map((_, i) => (
            <FaHeart 
              key={i} 
              color={i < 5 ? '#ff6b6b' : '#ccc'} 
              size={24} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Anniversary;