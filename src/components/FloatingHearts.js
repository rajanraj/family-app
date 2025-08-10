import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FloatingHearts = ({ count = 10 }) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    size: 10 + Math.random() * 20
  }));

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{
            position: 'fixed',
            left: heart.left,
            top: '110%',
            color: `hsl(${Math.random() * 60 + 330}, 100%, 70%)`,
            fontSize: `${heart.size}px`,
            zIndex: -1
          }}
          animate={{
            top: '-10%',
            rotate: Math.random() * 360
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingHearts;