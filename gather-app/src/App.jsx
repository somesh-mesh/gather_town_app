// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#21274A] to-[#373B9F] text-white flex flex-col">
      <div><Navbar/></div>
    <div>
    <h1 className='text-xl justify-center items-center'>Your Virutal Hq</h1>
    </div>
    </div>
  );
}

export default App;
