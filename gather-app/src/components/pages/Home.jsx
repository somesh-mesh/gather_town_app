// src/pages/Home.js
import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div className="">
            {/* Navbar at the top */}
          
            {/* Main content container with top padding to avoid overlap with Navbar */}
            <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-10 md:px-20 lg:px-40 gap-10 pt-32 pb-16 md:pb-24 lg:pb-32">
                {/* 
                    pt-32: Adds top padding to create space below the fixed Navbar
                */}
                
                {/* Text and Button Section */}
                <div className="text-center lg:text-left lg:max-w-md flex flex-col items-center lg:items-start lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Virtual HQ</h1>
                    <p className="text-base md:text-lg mb-6">
                        Gather brings the best of in-person collaboration to distributed teams.
                    </p>
                    
                    {/* Button Container */}
                    <div className="flex justify-center lg:justify-start space-x-4">
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
                </div>
            </div>
        </div>
    );
};

export default Home;
