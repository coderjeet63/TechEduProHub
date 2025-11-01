import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import IndustriesWeServe from '../components/IndustriesWeServe';
import SecureFooter from '../components/SecureFooter';
import { AuthContext } from "../context/AuthContext"; // ✅ imported at top

// === Assets ===
import service1 from '../assets/service.1.jpg';
import service2 from '../assets/service.2.jpg';
import service3 from '../assets/service.3.jpg';
import service4 from '../assets/service.4.jpg';

// === Icons ===
import {
  BsShieldCheck, BsCheckCircle, BsCheckSquare, BsListTask, BsInfoCircle
} from 'react-icons/bs';
import { FiCode } from 'react-icons/fi';
import { FaWrench, FaLock, FaEye, FaBookOpen } from 'react-icons/fa';
import { HiOutlineDocumentSearch, HiOutlineMail } from 'react-icons/hi';

// === Service Data ===
const serviceData = {
  'Web Application Security Audits': {
    title: 'Web Application Security Audits',
    subtitle: 'Secure Your Web Apps from Hackers',
    description: 'We check your websites and apps for hidden security flaws – before attackers find them.',
    buttonText: 'Request an Audit',
    price: 'starts at $499',
    imageSrc: service1,
    features: [
      { icon: <BsShieldCheck size={60} className="mx-auto text-[#1E90FF]" />, text: 'Vulnerability scanning (based on OWASP Top 10)' },
      { icon: <FiCode size={60} className="mx-auto text-[#1E90FF]" />, text: 'Manual & automated testing' },
      { icon: <FaWrench size={60} className="mx-auto text-[#1E90FF]" />, text: 'Fix recommendations' },
    ],
  },
  'Cloud Security Assessments': {
    title: 'Cloud Security Assessments',
    subtitle: 'Is Your Cloud Set Up Safely?',
    description: 'We review your cloud setup (AWS, Azure, or GCP) to spot risks and misconfigurations.',
    buttonText: 'Book a Cloud Review',
    price: 'starts at $499',
    imageSrc: service2,
    features: [
      { icon: <FaLock size={60} className="mx-auto text-[#1E90FF]" />, text: 'Access control checks' },
      { icon: <FaEye size={60} className="mx-auto text-[#1E90FF]" />, text: 'Data exposure review' },
      { icon: <BsCheckCircle size={60} className="mx-auto text-[#1E90FF]" />, text: 'Compliance tips' },
    ],
  },
  'PCI DSS Gap Assessments': {
    title: 'PCI DSS Gap Assessments',
    subtitle: 'Get PCI DSS-Ready, Fast',
    description: "We help you find what's missing in your current setup to meet PCI DSS compliance.",
    buttonText: 'Start Gap Assessment',
    price: 'starts at $499',
    imageSrc: service3,
    features: [
      { icon: <HiOutlineDocumentSearch size={60} className="mx-auto text-[#1E90FF]" />, text: 'Gap analysis report' },
      { icon: <BsCheckSquare size={60} className="mx-auto text-[#1E90FF]" />, text: 'Compliance checklist' },
      { icon: <BsListTask size={60} className="mx-auto text-[#1E90FF]" />, text: 'Step-by-step fix plan' },
    ],
  },
  'Security Awareness Training': {
    title: 'Security Awareness Training',
    subtitle: 'Train Your Team to Spot Threats',
    description: 'We teach your employees how to avoid phishing, scams, and cyber mistakes.',
    buttonText: 'Schedule Training',
    price: 'starts at $499',
    imageSrc: service4,
    features: [
      { icon: <HiOutlineMail size={60} className="mx-auto text-[#1E90FF]" />, text: 'Phishing simulations' },
      { icon: <BsInfoCircle size={60} className="mx-auto text-[#1E90FF]" />, text: "Basic do's & don'ts" },
      { icon: <FaBookOpen size={60} className="mx-auto text-[#1E90FF]" />, text: 'Interactive lessons' },
    ],
  },
};

// === Reusable Layout Component ===
const ServicePageLayout = ({ data }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext); // ✅ useContext used correctly here

  const handleButtonClick = () => {
    if (token) {
      navigate("/add-to-cart"); // ✅ user already logged in
    } else {
      navigate("/login"); // ✅ ask to login
    }
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <div className="page-container bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src={data.imageSrc} alt={data.title} className="w-full h-auto" />
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-3xl font-bold text-[#1E90FF] sm:text-4xl">{data.title}</h1>
            <h2 className="mt-2 text-4xl font-bold text-[#1B1F2B] sm:text-5xl">{data.subtitle}</h2>
            <p className="mt-6 text-lg text-[#1B1F2B]">{data.description}</p>

            <div className="flex items-center flex-wrap gap-4 mt-8">
              <button
                onClick={handleButtonClick}
                className="bg-[#1E90FF] text-[#FFF5FF] font-medium px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
              >
                {data.buttonText}
              </button>
              <span className="text-base text-[#1B1F2B] font-medium">{data.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- What's Included Section --- */}
      <div className="page-container bg-[#F5F7FA] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B1F2B] text-center">What's Included:</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-center">
            {data.features.map((feature, index) => (
              <div key={index}>
                {feature.icon}
                <p className="mt-4 text-lg font-semibold text-[#1B1F2B]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// === Main Component ===
const ServicesPage = () => {
  const { serviceName } = useParams();
  const decodedName = decodeURIComponent(serviceName);
  const [activeService, setActiveService] = useState(decodedName || "Web Application Security Audits");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveService(decodedName);
  }, [decodedName]);

  return (
    <div>
      <ServicePageLayout data={serviceData[activeService]} />
      <IndustriesWeServe />
      <SecureFooter />
    </div>
  );
};

export default ServicesPage;
