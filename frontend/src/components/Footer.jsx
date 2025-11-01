import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import logo from "../assets/Company Logo.png";

const Footer = () => {
  return (
    <>
      {/* === MAIN FOOTER SECTION === */}
      <footer className="w-full bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* === PART 1: Logo | Links | Socials === */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
            
            {/* ✅ Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* ✅ Navigation Links */}
            <nav className="flex flex-col items-center sm:flex-row sm:space-x-8 gap-4 sm:gap-0">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                About us
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                Blog Insights
              </a>
            </nav>

            {/* ✅ Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#1877F2]">
                <BsFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E1306C]">
                <BsInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <BsTwitterX size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0A66C2]">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF0000]">
                <BsYoutube size={20} />
              </a>
            </div>
          </div>

          {/* === PART 2: Divider === */}
          <hr className="my-8 border-gray-200" />

          {/* === PART 3: Copyright & Legal === */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center text-sm text-gray-500 gap-6">
            <p className="text-center">
              © 2025 Security Council. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Use
              </a>
              <a href="#" className="hover:text-gray-900">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
