// ContactForm.jsx
import React, { useState } from "react";
import axios from "axios";
import TestimonialSlider from "../components/TestimonialSlider";
import { HiOutlineMail, HiPhone, HiOutlineLocationMarker } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
// <-- change this path if your asset is elsewhere
import HeroImage from "../assets/hero.jpg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Only send minimal fields to backend (you can expand)
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/contact`, {
        email,
        number,
      });
      console.log("Contact saved:", res.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err.response?.data || err.message);
      // Optionally show an error toast here
    }
  };

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-[#D9F1FF] via-[#EAF6FF] to-[#F5F7FA] py-16 lg:py-28">
      {/* decorative large circle / hero image bottom-left */}
      {/* decorative large circle / hero image bottom-left */}
{/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] flex items-end justify-start">
  <img
    src={HeroImage}
    alt="shield"
    className="w-[380px] h-auto object-contain translate-x-[-60px] translate-y-[40px]"
  />
</div> */}


      {/* subtle top decorative stripe */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: heading + contact info */}
          <div className="pt-6">
            <p className="text-sm font-semibold text-slate-700">Contact us</p>
            <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-[#0b79ff]">
              Let's Secure Your Business
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-xl">
              Have questions about our services or need a custom security solution? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-5 max-w-md">
              <div className="flex items-center gap-4">
                <HiOutlineMail className="w-6 h-6 text-[#0b79ff]" />
                <span className="text-base text-slate-700">email@example.com</span>
              </div>

              <div className="flex items-center gap-4">
                <HiPhone className="w-6 h-6 text-[#0b79ff]" />
                <span className="text-base text-slate-700">+1 (555) 000-8000</span>
              </div>

              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker className="w-6 h-6 text-[#0b79ff]" />
                <span className="text-base text-slate-700">123 Sample St, Sydney NSW 2000 AU</span>
              </div>
            </div>

            {/* small CTA under contact */}
            <div className="mt-8">
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0b79ff] text-white font-medium shadow hover:opacity-95 transition"
              >
                Book a call
              </button>
            </div>
          </div>

          {/* RIGHT: Form card */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First name</label>
                    <input type="text" id="first-name" required className="mt-1 block w-full px-4 py-3 bg-white border border-slate-200 rounded-md shadow-sm focus:ring-2 focus:ring-[#0b79ff] outline-none" />
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last name</label>
                    <input type="text" id="last-name" required className="mt-1 block w-full px-4 py-3 bg-white border border-slate-200 rounded-md shadow-sm focus:ring-2 focus:ring-[#0b79ff] outline-none" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 block w-full px-4 py-3 bg-white border border-slate-200 rounded-md shadow-sm focus:ring-2 focus:ring-[#0b79ff] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                      className="mt-1 block w-full px-4 py-3 bg-white border border-slate-200 rounded-md shadow-sm focus:ring-2 focus:ring-[#0b79ff] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Service Type?</label>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 text-[#0b79ff]" />
                      <span className="text-sm text-slate-700">Web Application Security Audits</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 text-[#0b79ff]" />
                      <span className="text-sm text-slate-700">PCI DSS Gap Assessments</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 text-[#0b79ff]" />
                      <span className="text-sm text-slate-700">Cloud Security Assessments</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 text-[#0b79ff]" />
                      <span className="text-sm text-slate-700">Security Awareness Training</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" rows="4" placeholder="Type your message..." className="mt-1 block w-full px-4 py-3 bg-white border border-slate-200 rounded-md shadow-sm focus:ring-2 focus:ring-[#0b79ff] outline-none" />
                </div>

                <div className="flex items-center gap-3">
                  <input id="terms" type="checkbox" className="h-4 w-4 text-[#0b79ff]" />
                  <label htmlFor="terms" className="text-sm text-slate-700">I accept the Terms</label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0b79ff] text-white font-medium px-6 py-3 rounded-lg shadow hover:opacity-95 transition"
                  >
                    Book your call
                  </button>
                </div>
              </form>
            </div>

            {/* small caption below form like in screenshot */}
            <p className="mt-4 text-sm text-slate-500">We respond within 24 hours. Or email us directly at email@example.com</p>
          </div>
        </div>

        {/* Testimonials - keep original component */}
        <div className="mt-12">
          <TestimonialSlider />
        </div>
      </div>

      {/* Submit modal / popup (matches second image) */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-6">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-white p-4 shadow-lg flex items-center justify-center">
                <BsShieldCheck className="w-12 h-12 text-[#0b79ff]" />
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#0b79ff]">Let's Secure Your Business</h2>
            <p className="mt-3 text-slate-700">Our team will get back to you within 24 hours.</p>

            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-lg bg-[#0b79ff] text-white font-medium shadow hover:opacity-95"
              >
                Continue
              </button>
              <a
                href={`mailto:email@example.com`}
                className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
