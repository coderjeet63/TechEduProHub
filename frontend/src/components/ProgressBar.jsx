import React from 'react';

// Figma Design: Progress Bar
const ProgressBar = ({ step = 1 }) => {
  const steps = ['Add to Cart', 'Enter Details', 'Payment'];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((name, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= step;
          return (
            <React.Fragment key={name}>
              {/* Line (first step se pehle line nahi) */}
              {stepNumber > 1 && (
                <div className={`flex-1 h-1.5 ${isActive ? 'bg-[#1C9DFF]' : 'bg-[#DDEBFF]'}`}></div>
              )}
              
              {/* Step Name */}
              <div className="flex flex-col items-center">
                <span className={`text-sm font-semibold ${isActive ? 'text-[#1C9DFF]' : 'text-gray-400'}`}>
                  {name}
                </span>
                <div className={`mt-1 w-3 h-3 rounded-full ${isActive ? 'bg-[#1C9DFF]' : 'bg-[#DDEBFF]'}`}></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
