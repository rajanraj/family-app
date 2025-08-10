import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { name: "First Meet", path: "/first-meet" },
    { name: "Engagement", path: "/engagement" },
    { name: "Wedding", path: "/wedding" },
    { name: "Anniversary", path: "/anniversary" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="main-header"
    >
      <div className="header-content">
        <Link to="/" className="logo">Our Love Story</Link>
        <nav>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;