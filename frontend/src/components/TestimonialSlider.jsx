import React, { useState, useRef } from 'react';
 import '../App.css'

// === PLACEHOLDER ICONS ===
import { BsArrowRight, BsFillSquareFill } from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri'; // Quote icon ke liye

// 3 Testimonials ka Data
const testimonials = [
  {
    logo: 'Webflow', // Logo ka naam
    quote: "Security Council transformed our cybersecurity posture, providing invaluable insights and support that exceeded our expectations.",
    avatar: "", // Yahan image path daalein
    name: "John Doe",
    title: "CISO, TechCorp"
  },
  {
    logo: 'SaaSCo',
    quote: "The team's expertise in cloud security is unmatched. They identified vulnerabilities we didn't even know we had. Highly recommended.",
    avatar: "", // Yahan image path daalein
    name: "Jane Smith",
    title: "CTO, SaaSCo"
  },
  {
    logo: 'Fintech Inc.',
    quote: "Their PCI DSS gap assessment was thorough and actionable. We passed our audit on the first try thanks to their guidance.",
    avatar: "", // Yahan image path daalein
    name: "Mike Johnson",
    title: "Head of Compliance, Fintech Inc."
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Helper function: Kisi specific index par scroll karne ke liye
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Agle slide par jaane ke liye
  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  // Jab user swipe kare, tab dots ko sync karne ke liye
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="w-full bg-[#F9FAFB]  px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative">
        
        {/* === Slider Container === */}
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          // Yeh 'scrollbar-hide' class tabhi kaam karegi jab aap CSS add karenge
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 snap-center text-center px-8"
            >
              {/* 1. Logo */}
              <div className="flex justify-center items-center space-x-2 text-gray-500">
                {/* // Add your specific logo component here */}
                <BsFillSquareFill size={20} /> 
                <span className="font-semibold text-xl">{item.logo}</span>
              </div>
              
              {/* 2. Quote */}
              <p className="mt-8 text-2xl sm:text-3xl font-semibold text-[#1E293B] max-w-3xl mx-auto">
                <RiDoubleQuotesL className="inline text-gray-300 -mt-4 mr-2" size={30} />
                {item.quote}
              </p>
              
              {/* 3. Avatar */}
              <div className="mt-8">
                {/* === AAPKA IMAGE TAG === */}
                {/* Add your avatar image path to the src="" below */}
                <img
                  src={item.avatar}
                  
                  className="w-20 h-20 mx-auto rounded-full bg-gray-300 object-cover"
                />
                {/* ======================= */}
              </div>
              
              {/* 4. Name & Title */}
              <div className="mt-4">
                <p className="text-lg font-semibold text-[#1E293B]">{item.name}</p>
                <p className="text-base text-[#5A677B]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === Next Button === */}
        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition duration-300"
          aria-label="Next testimonial"
        >
          {/* // Add your 'arrow' icon component here */}
          <BsArrowRight size={24} className="text-gray-700" />
        </button>

        {/* === Pagination Dots === */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#1E293B]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialSlider;