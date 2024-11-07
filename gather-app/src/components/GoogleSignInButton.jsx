// src/components/GoogleSignInButton.js
import React from 'react';
// Make sure this path is correct and that google.svg exists in src/assets/
import googleLogo from '../assets/google.svg';

const GoogleSignInButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full sm:w-auto bg-white text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition"
    >
      {/* Google Logo */}
      <img
        src={googleLogo} // This should point to the actual Google logo file
        alt="Google logo"
        className="w-5 h-5 mr-3"
      />

      {/* Button Text */}
      <span className="text-sm font-semibold">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
