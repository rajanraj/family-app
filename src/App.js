import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import FirstMeet from './components/FirstMeet';
import Engagement from './components/Engagement';
import Anniversary from './components/Anniversary';
import Wedding from './components/Wedding';
import Home from './components/home/Home';
import FloatingHearts from './components/FloatingHearts';
import BackgroundImage from './components/backGroundImage';
import Login from './components/logIn/LogIn';
import Register from './components/logIn/Register';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';
import './App.css';

function App() {
  const repoName = 'family-app'; // Change this to your actual repo name
  const basename = process.env.NODE_ENV === 'development' ? '/' : `/${repoName}`;

  return (
    <AuthProvider>
      <Router basename={basename}>
        <BackgroundImage />
        <div className="app">
          <FloatingHearts count={20} />
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/first-meet" element={
              <ProtectedRoute>
                <FirstMeet />
              </ProtectedRoute>
            } />
            <Route path="/engagement" element={
              <ProtectedRoute>
                <Engagement />
              </ProtectedRoute>
            } />
            <Route path="/wedding" element={
              <ProtectedRoute>
                <Wedding />
              </ProtectedRoute>
            } />
            <Route path="/anniversary" element={
              <ProtectedRoute>
                <Anniversary />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;