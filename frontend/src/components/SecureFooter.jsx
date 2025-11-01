import React from "react";
import { useNavigate } from "react-router-dom";

function SecureFooter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="w-full bg-[#E0F3FF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-[#007AFF] sm:text-4xl">
              Secure Your Digital Future
            </h1>
            <p className="mt-4 text-lg text-[#5A677B]">
              Contact Security Council today to safeguard your business with our expert
              cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleClick}
                className="bg-[#007AFF] text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
              >
                Book a Free Consultation
              </button>
              <button
                onClick={handleClick}
                className="bg-white text-[#007AFF] font-medium px-6 py-3 rounded-lg border border-[#A0B3C7] hover:bg-gray-50 transition duration-300"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecureFooter;
