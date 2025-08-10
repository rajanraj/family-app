import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaCalendarAlt, FaRing, FaPhotoVideo } from 'react-icons/fa';

const Wedding = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [hearts, setHearts] = useState([]);

  // Wedding sections
  const sections = [
    {
      title: "Our Wedding Day",
      date: "June 15, 2019",
      description: "The most beautiful day of our lives when we became husband and wife",
      icon: <FaRing />
    },
    {
      title: "Ceremony",
      date: "4:00 PM",
      description: "We exchanged vows under the floral arch surrounded by our loved ones",
      image: "wedding-ceremony.jpg",
      icon: <FaHeart />
    },
    {
      title: "Reception",
      date: "7:00 PM",
      description: "Celebrated with delicious food, heartfelt speeches, and our first dance",
      image: "wedding-reception.jpg",
      icon: <FaPhotoVideo />
    },
    // Add more sections as needed
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
      className="wedding-container"
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

      <div className="wedding-header">
        <h1>Our Wedding</h1>
        <div className="wedding-date">
          <FaCalendarAlt /> 
          <span>{sections[0].date}</span>
        </div>
      </div>

      <div className="section-navigation">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={currentSection === index ? 'active' : ''}
          >
            {sections[index].icon}
            <span>{sections[index].title}</span>
          </button>
        ))}
      </div>

      <motion.div 
        className="section-container"
        key={currentSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-image">
          {/* <img 
            src={`/images/${sections[currentSection].image}`} 
            alt={sections[currentSection].title} 
          /> */}
        </div>
        <div className="section-details">
          <h2>{sections[currentSection].title}</h2>
          <div className="section-date">
            <FaCalendarAlt /> {sections[currentSection].date}
          </div>
          <p>{sections[currentSection].description}</p>
        </div>
      </motion.div>

      <div className="wedding-quote">
        <blockquote>
          "I have found the one whom my soul loves." 
        </blockquote>
      </div>
    </motion.div>
  );
};

export default Wedding;