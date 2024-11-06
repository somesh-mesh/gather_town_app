// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="min-h-screen bg-gradient-to-b from-[#21274A] to-[#373B9F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">Logo</a>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-white hover:text-gray-900">Products</a>
            <a href="#solutions" className="text-white hover:text-gray-900">Solutions</a>
            <a href="#pricing" className="text-white hover:text-gray-900">Pricing</a>
            <a href="#resources" className="text-white hover:text-gray-900">Resources</a>
            <a href="#contact" className="text-white hover:text-gray-900">Contact Sales</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#get-started"
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600"
            >
              Get Started
            </a>
            <a
              href="#sign-in"
              className="bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-100"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
