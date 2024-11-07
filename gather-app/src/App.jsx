// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
                                                    
function App() {
  // Access the current location
  const location = useLocation();

  // Define routes where you do NOT want to show the Navbar
  const hideNavbarRoutes = ['/login'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#21274A] to-[#373B9F] text-white">
      {/* Conditionally render Navbar if the current path is not in hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-10 md:px-20 lg:px-40 gap-10 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
