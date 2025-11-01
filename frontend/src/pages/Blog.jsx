import React from 'react';
import BlogSection from '../components/BlogSection'; // Updated BlogSection ko import karein
import BlogHeading from '../components/BlogHeading';

import featuredBlogImage from '../assets/blog.1.jpg'; // Maan lete hain ki yeh aapki badi image hai

const Blog = () => {
  return (
    <>
    <BlogHeading/>
  
    <div className="w-full bg-[#F5F7FA]">

      
      {/* === SECTION 2: Featured Post (Badi Image + Text) === */}
      <div className="w-full bg-[#FFF5FF] pt-0 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Content ko center mein rakhne ke liye max-w-7xl */}
        <div className="max-w-7xl mx-auto">
          {/* 1. Featured Image */}
          <div>
            <img
              src={featuredBlogImage}
              alt="Understanding Ransomware"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ aspectRatio: '16/9' }}
            />
          </div>

         
          <div className="max-w-3xl mx-auto">
            <div className="mt-12">
              {/* h1 (Color: Electric Blue #1E90FF) */}
              <h1 className="text-3xl font-bold text-[#1E90FF] sm:text-4xl">
                Understanding Ransomware: Protect Your Business
              </h1>
            </div>
            {/* p (Color: Charcoal #1B1F2B) */}
            <div className="mt-8 text-lg text-[#1B1F2B] space-y-6">
              <p>
                Ransomware attacks have become one of the most disruptive and costly cyber threats facing organizations
                today. These attacks encrypt critical data and demand payment in exchange for its release, often halting
                operations and damaging reputations. However, with a proactive approach and the right strategies,
                businesses can greatly reduce their risk and build resilience against such threats.
              </p>
              <p>
                One of the most effective defenses against ransomware is strengthening user awareness. Since many
                ransomware infections begin through phishing emails or deceptive links, educating your team is crucial.
                Employees should be trained to recognize suspicious emails, avoid clicking unknown links, and never
                download unexpected attachments. Regular awareness training sessions, including simulated phishing
                exercises, can keep your team sharp and alert. Embedding this knowledge into onboarding and ongoing
                education reinforces a security-first culture across your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* === SECTION 3: Filter Links & Blog Grid === */}
      <div className="w-full bg-[#F5F7FA] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8">
            <a href="#" className="text-[#1E90FF] font-semibold">View all</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Security Tips</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Industry News</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Best Practices</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Case Studies</a>
          </div>

         
         <BlogSection noWrapper={true} />


        </div>
      </div>
    </div>
    </>
   
  );
};

export default Blog;
