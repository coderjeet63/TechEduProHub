import React from 'react';
import clientImg from '../assets/man (1).jpg';
import certificationImg from '../assets/man (2).jpg'; 
import experienceImg from '../assets/man (3).jpg'; 
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {

  const navigate  = useNavigate()
  const handleClick =  () =>{
     navigate('/contact')
  }
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* === SECTION 1: Top Heading === */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#4B5563] tracking-wide uppercase">
            Trust
          </h2>
          <h1 className="mt-2 text-3xl font-bold text-[#007AFF] sm:text-4xl">
            Why Choose Security Council for Cybersecurity?
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#5A677B]">
            With over a decade of experience, we prioritize your security. Our team is
            certified and dedicated to providing top-notch cybersecurity solutions.
          </p>
        </div>

        {/* === SECTION 2: 3-Column Grid === */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-full">
            <img 
              src={clientImg}
              alt="Proven Track Record of Client Satisfaction"
              className="w-full h-[233px] object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl font-semibold text-[#1E293B]">
              Proven Track Record of Client Satisfaction
            </h3>
            <p className="mt-3 text-base text-[#5A677B]">
              Our clients consistently commend our expertise and reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-full">
            <img 
              src={certificationImg}
              alt="Industry Certifications You Can Rely On"
              className="w-full h-[233px] object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl font-semibold text-[#1E293B]">
              Industry Certifications You Can Rely On
            </h3>
            <p className="mt-3 text-base text-[#5A677B]">
              We hold multiple industry certifications, ensuring compliance and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-full">
            <img 
              src={experienceImg}
              alt="Years of Experience in Cybersecurity Solutions"
              className="w-full h-[233px] object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl font-semibold text-[#1E293B]">
              Years of Experience in Cybersecurity Solutions
            </h3>
            <p className="mt-3 text-base text-[#5A677B]">
              Our extensive experience allows us to tackle complex challenges.
            </p>
          </div>
        </div>

        {/* === SECTION 3: Contact Button === */}
        <div className="mt-16 text-center">
          <button onClick = {handleClick} className="bg-white text-[#007AFF] font-medium px-8 py-3 rounded-lg border border-[#A0B3C7] hover:bg-gray-50 transition duration-300">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
