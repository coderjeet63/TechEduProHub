import React from 'react';
import { FaUniversity, FaShieldAlt, FaCloud } from 'react-icons/fa'; // ✅ Correct icons imported

const IndustriesWeServe = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* === SECTION 1: Top Heading === */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#007AFF] sm:text-4xl">
            Industries We Serve
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#5A677B]">
            At Security Council, we cater to a diverse range of industries, ensuring tailored cybersecurity
            solutions that meet specific needs. Our expertise spans critical sectors, safeguarding your
            operations and data.
          </p>
        </div>

        {/* === SECTION 2: Industry Cards === */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* === Card 1: Finance Sector === */}
          <div className="text-center flex flex-col items-center">
            <FaUniversity size={50} className="text-[#007AFF]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#1E293B]">
              Finance Sector
            </h3>
            <p className="mt-3 text-base text-[#5A677B] max-w-sm">
              We protect financial institutions with robust security measures.
            </p>
          </div>

          {/* === Card 2: Healthcare Industry === */}
          <div className="text-center flex flex-col items-center">
            <FaShieldAlt size={50} className="text-[#007AFF]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#1E293B]">
              Healthcare Industry
            </h3>
            <p className="mt-3 text-base text-[#5A677B] max-w-sm">
              Our solutions ensure compliance and patient data security.
            </p>
          </div>

          {/* === Card 3: SaaS Providers === */}
          <div className="text-center flex flex-col items-center">
            <FaCloud size={50} className="text-[#007AFF]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#1E293B]">
              SaaS Providers
            </h3>
            <p className="mt-3 text-base text-[#5A677B] max-w-sm">
              We help SaaS companies secure their applications and data.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
