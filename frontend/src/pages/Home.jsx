import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from '../components/ServicesSection.jsx'
import WhyChooseUs from './WhyChooseUs'
import IndustriesWeServe from '../components/IndustriesWeServe.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import BlogSection from '../components/BlogSection.jsx'
import SecureFooter from '../components/SecureFooter.jsx'
import BlogHeading from '../components/BlogHeading.jsx'

function Home() {
  return (
    <div >
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesWeServe/>
       <TestimonialSlider/>
       <BlogHeading/>
       <BlogSection />
       <SecureFooter/>
      
    </div>
  )
}

export default Home