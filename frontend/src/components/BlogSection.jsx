

import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

// === Images ===
import blog1 from '../assets/blog.1.jpg'
import blog2 from '../assets/blog.2.jpg'
import blog3 from '../assets/blog.3.jpg'
import blog4 from '../assets/blog.4.jpg'
import blog5 from '../assets/blog.5.jpg'
import blog6 from '../assets/blog.6.jpg'

// === Blog data ===
const blogData = [
  {
    tag: 'Insights',
    tagColor: 'text-pink-600',
    readTime: '5 min read',
    title: 'Understanding Ransomware: Protect Your Business',
    description: 'Explore effective strategies to safeguard your organization from ransomware attacks.',
    imageSrc: blog1,
  },
  {
    tag: 'Ransomware',
    tagColor: 'text-red-600',
    readTime: '5 min read',
    title: 'Top 5 Cybersecurity Trends for 2023',
    description: 'Stay ahead of the curve with these emerging cybersecurity trends.',
    imageSrc: blog2,
  },
  {
    tag: 'Trends',
    tagColor: 'text-green-600',
    readTime: '5 min read',
    title: 'How To Train Your Employees on Security',
    description: 'Effective training methods to enhance your team\'s cybersecurity awareness.',
    imageSrc: blog3,
  },
  {
    tag: 'Training',
    tagColor: 'text-amber-600',
    readTime: '5 min read',
    title: 'The Importance of Cloud Security Assessments',
    description: 'Learn why cloud security assessments are crucial for your business.',
    imageSrc: blog4,
  },
  {
    tag: 'Cloud',
    tagColor: 'text-blue-600',
    readTime: '5 min read',
    title: 'Navigating PCI DSS Compliance Challenges',
    description: 'Strategies for overcoming PCI DSS compliance hurdles in your organization.',
    imageSrc: blog5,
  },
  {
    tag: 'Compliance',
    tagColor: 'text-gray-600',
    readTime: '5 min read',
    title: 'Essential Cybersecurity Tools for 2023',
    description: 'Discover the must-have tools to enhance your cybersecurity posture.',
    imageSrc: blog6,
  },
]

// === BlogSection Component ===
const BlogSection = ({ noWrapper = false }) => {
  return (
    <div className={noWrapper ? '' : 'px-8 sm:px-6 lg:px-8'}>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post, index) => (
          <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#FFF5FF]">
            
            <img 
              src={post.imageSrc} 
              alt={post.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center text-sm">
                <span className={`${post.tagColor} font-semibold`}>
                  {post.tag}
                </span>
                <span className="ml-4 text-gray-500">{post.readTime}</span>
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-[#1B1F2B]">
                {post.title}
              </h3>

              <p className="mt-3 text-base text-[#1B1F2B] flex-1">
                {post.description}
              </p>

              <a href="#" className="mt-4 text-[#1E90FF] font-semibold flex items-center">
                Read more
                <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection



