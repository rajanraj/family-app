import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../AuthContext";

import './../../App.css'; // Ensure you have a CSS file for styling

const Header = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    navigate("/login");
  };

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
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <button
            className="profile-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "1.5rem"
            }}
            aria-label="Profile"
          >
            <span role="img" aria-label="profile">👤</span>
          </button>
          {dropdownOpen && (
            <div className="profile-dropdown" style={{
              position: "absolute",
              right: 0,
              top: "2.5rem",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: "150px",
              zIndex: 200,
              padding: "0.5rem"
            }}>
              {user ? (
                <>
                  <div style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #eee" }}>
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      border: "none",
                      background: "#ff6b6b",
                      color: "white",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "0.5rem"
                    }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogin}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "none",
                    background: "#6b8cff",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;