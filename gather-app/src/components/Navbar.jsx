// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="">
      {/* Wrapper div with max width and padding for responsive layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo section */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">Logo</a>
          </div>

          {/* Navbar links - hidden on small screens, visible from medium (md) screens and above */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-white hover:text-gray-300">Products</a>
            <a href="#solutions" className="text-white hover:text-gray-300">Solutions</a>
            <a href="#pricing" className="text-white hover:text-gray-300">Pricing</a>
            <a href="#resources" className="text-white hover:text-gray-300">Resources</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact Sales</a>
          </div>

          {/* Buttons - hidden on small screens, visible from medium (md) screens and above */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#get-started"
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition"
            >
              Get Started
            </a>
            <a
              href="#sign-in"
              className="bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button (hamburger icon) - visible only on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu} // Toggle menu on click
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open menu"
            >
              {/* Simple hamburger icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown - only visible when isOpen is true */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" className="block text-white hover:text-gray-300">Products</a>
              <a href="#solutions" className="block text-white hover:text-gray-300">Solutions</a>
              <a href="#pricing" className="block text-white hover:text-gray-300">Pricing</a>
              <a href="#resources" className="block text-white hover:text-gray-300">Resources</a>
              <a href="#contact" className="block text-white hover:text-gray-300">Contact Sales</a>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#get-started"
                className="block bg-green-500 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-green-600 transition"
              >
                Get Started
              </a>
              <a
                href="#sign-in"
                className="block bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-md font-medium text-center hover:bg-gray-100 transition mt-2"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
