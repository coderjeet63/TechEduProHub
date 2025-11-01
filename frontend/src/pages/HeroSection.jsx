import React from 'react';
import { useNavigate } from "react-router-dom";
import heroIllustration from '../assets/4e0ef735c1819c69597a39cf3335ffcec5997cb2.jpg';
import logoScroller from '../assets/LOGO SCROLL.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF5FF] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1F2B] leading-tight">
              Securing Businesses.
              <br />
              Empowering Teams.
            </h1>
            <p className="mt-6 text-lg text-[#1B1F2B]">
              At Security Council, we specialize in safeguarding your digital assets.
              Schedule a free consultation today to discover how our tailored services
              can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleClick}
                className="bg-[#1E90FF] text-[#FFF5FF] font-medium px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
              >
                Book a Free Consultation
              </button>
              <button className="bg-[#FFF5FF] text-[#1E90FF] font-medium px-6 py-3 rounded-lg border border-[#D1D5DB] hover:bg-gray-50 transition duration-300">
                Learn more
              </button>
            </div>
          </div>

          <div className="flex-1 md:w-1/2 mt-12 md:mt-0">
            <img
              src={heroIllustration}
              alt="Security illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* === "Used by" Logo Section === */}
        <div className="relative z-20 mt-10 md:-mt-24"> 
          {/* ✅ Added margin-top for small screens and kept negative margin for larger ones */}
          <p className="text-sm font-medium text-[#1B1F2B] mb-1 relative -top-2">
            Used by the world's leading companies
          </p>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={logoScroller}
              alt="Companies logos"
              className="w-full h-[70px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
