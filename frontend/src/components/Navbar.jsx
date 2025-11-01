import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/Company Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/contact");
  };

  const serviceLinks = [
    "Web Application Security Audits",
    "Cloud Security Assessments",
    "PCI DSS Gap Assessments",
    "Security Awareness Training",
  ];

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {/* Home - simple like blog */}
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-gray-900 transition duration-300"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center text-gray-700 font-medium hover:text-gray-900 focus:outline-none">
                Services <BsChevronDown size={14} className="ml-1" />
              </button>

              <div
                className={`absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl w-72 py-3 transform transition-all duration-200 ${
                  showDropdown
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    to={`/services/${encodeURIComponent(service)}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F5F7FA] hover:text-[#009EFF] rounded-md transition-colors duration-150"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className="text-gray-700 font-medium hover:text-gray-900 transition duration-300"
            >
              Blogs
            </Link>

            {/* ✅ Login - simple like blog */}
            <Link
              to="/login"
              className="text-gray-700 font-medium hover:text-gray-900 transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={handleContactClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#3B9EFF] to-[#2B73C2] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition duration-300"
            >
              <BsSearch size={16} />
              <span>Contact us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            to="/"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>

          <details className="border-t border-gray-200">
            <summary className="px-4 py-3 cursor-pointer text-gray-700 font-medium flex justify-between items-center">
              Services <BsChevronDown size={14} />
            </summary>
            <div className="bg-gray-50">
              {serviceLinks.map((service) => (
                <Link
                  key={service}
                  to={`/services/${encodeURIComponent(service)}`}
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {service}
                </Link>
              ))}
            </div>
          </details>

          <Link
            to="/blog"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Blogs
          </Link>

          {/* ✅ Simple Mobile Login */}
          <Link
            to="/login"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Login
          </Link>

          <button
            type="button"
            onClick={handleContactClick}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B9EFF] to-[#2B73C2] text-white px-5 py-3 font-medium hover:opacity-90 transition duration-300"
          >
            <BsSearch size={16} />
            <span>Contact us</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
