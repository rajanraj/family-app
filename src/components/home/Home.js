import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {

   const familyMembers = [
    { name: "Rajan", role: "Husband" },
    { name: "Suvetha", role: "Wife" },
    { name: "Jai Adhav", role: "Our Pride" }
  ];

  return (
    <div className="home-content">
      
        <motion.div 
          className="family-members"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {familyMembers.map((member, index) => (
            <motion.div
              key={index}
              className="member-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
        
      <motion.div 
          className="anniversary-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Celebrating Our Love and Family</p>
          <h3>Happy 2nd Wedding Anniversary My Love</h3>
        </motion.div>
    </div>
  );
};

export default Home;