// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#21274A] to-[#373B9F] text-white">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-10 md:px-20 lg:px-40 gap-10 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        {/* 
          Responsive padding adjustments:
          - px-6 for small screens
          - sm:px-10 for slightly larger screens
          - md:px-20 for medium screens
          - lg:px-40 for large screens
          - pt and pb (padding top/bottom) adjustments to balance spacing on various screen sizes
        */}
        
        {/* Text and Button Section */}
        <div className="text-center lg:text-left lg:max-w-md flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Virtual HQ</h1>
          {/* text-4xl on small screens, md:text-5xl for medium and larger screens */}
          
          <p className="text-base md:text-lg mb-6">
            Gather brings the best of in-person collaboration to distributed teams.
          </p>
          {/* text-base on small screens, md:text-lg on medium and larger screens */}
          
          {/* Button Container */}
          <div className="flex justify-center lg:justify-start space-x-4">
            {/* space-x-4: Adds horizontal space between the buttons */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Get started
            </button>
          </div>
        </div>
        
        {/* Video Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <video
            src="https://cdn.vidzflow.com/v/h3yy6rTnJQ_720p_1691443174.mp4"
            className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-[400px] lg:w-[500px] h-auto"
            autoPlay
            loop
            muted
          />
          {/* Responsive video width:
              - w-full on small screens
              - sm:w-3/4 on slightly larger screens
              - md:w-[400px] for medium screens
              - lg:w-[500px] for large screens */}
        </div>
      </div>
    </div>
  );
}

export default App;
