import React from 'react';

// Figma Design: Blue Gradient Button
const ButtonPrimary = ({ text, onClick, icon, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center space-x-2 w-full md:w-auto px-8 py-3 
        rounded-lg text-white font-semibold 
        bg-gradient-to-b from-[#1C9DFF] to-[#1475BC] 
        shadow-md hover:shadow-lg 
        focus:outline-none focus:ring-2 focus:ring-[#1C9DFF] focus:ring-offset-2
        transition-all duration-300
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default ButtonPrimary;
