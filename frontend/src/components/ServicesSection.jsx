import React from 'react';
import { MdSecurity } from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";

import serviceCardsImage from '../assets/Frame 272.jpg';
import largeCloudImage from '../assets/c40c07d9b465596dfe1a76da46b712a8a4fd7b36.jpg';

const ServicesSection = () => {
  return (
    // Page Background
    <div className="w-full bg-[#FFF5FF]  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* === SECTION 1: Top Heading === */}
        <section className="text-center">
          <h2 className="text-base font-semibold text-[#1B1F2B] tracking-wide uppercase">
            Services
          </h2>

          <h1 className="mt-2 text-3xl font-bold text-[#1E90FF] sm:text-4xl">
            Comprehensive Cybersecurity Solutions for Your Business
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#1B1F2B]">
            At Security Council, we provide a suite of cybersecurity services tailored to protect your enterprise. Our expert
            team conducts thorough assessments to identify vulnerabilities and strengthen your defense mechanisms. Trust us to
            safeguard your digital assets with our cutting-edge solutions.
          </p>

          {/* === 4-Card Grid Image === */}
          <div className="mt-12">
            <img
              src={serviceCardsImage}
              alt="Service offerings: Web Audits, Cloud Security, PCI DSS, Awareness Training"
              className="w-full h-auto"
            />
          </div>
        </section>

      {/* === SECTION 2: 2-Column Text & List === */}
<section className="mt-20">
  <div className="flex flex-col lg:flex-row items-start gap-10">
    
    {/* Left Column */}
    <div className="flex-1 lg:w-1/2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E90FF] leading-snug">
        Comprehensive Cybersecurity
        <br /> Solutions Tailored for Your
        <br /> Business Needs
      </h2>
    </div>

    {/* Right Column */}
    <div className="flex-1 lg:w-1/2 space-y-6">
      <p className="text-lg text-[#1B1F2B]">
        Our suite of services is designed to protect your digital assets and ensure compliance. 
        From audits to training, we empower your organization with the knowledge and tools needed to stay secure.
      </p>

      {/* List Item 1 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <MdSecurity size={26} className="text-[#1E90FF]" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#1E90FF]">
            Web Application Security
          </h4>
          <p className="mt-1 text-base text-[#1B1F2B] leading-relaxed">
            Thorough assessments to identify vulnerabilities and enhance your web application security.
          </p>
        </div>
      </div>

      {/* List Item 2 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <BsCloudCheck size={26} className="text-[#1E90FF]" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#1E90FF]">
            Cloud Security
          </h4>
          <p className="mt-1 text-base text-[#1B1F2B] leading-relaxed">
            Protect your cloud infrastructure with our comprehensive security assessment services.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* === SECTION 3: Large Image === */}
        <section className="mt-24">
          <img
            src={largeCloudImage}
            alt="Cybersecurity cloud illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      </div>
    </div>
  );
};

export default ServicesSection;
