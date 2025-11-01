import React from 'react';
import CartSummary from '../components/CartSummary';
import { BsCheckCircleFill, BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-[#F0F5FF] flex flex-col items-center justify-between p-4 md:p-8">
      <header className="w-full max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#1C9DFF]">Payment Successful</h1>
      </header>

      <main className="w-full max-w-7xl mx-auto my-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Side: Order Summary */}
            <div className="w-full md:w-1/3">
              <CartSummary />
            </div>
            
            {/* Middle: What's next */}
            <div className="w-full md:w-1/3 border-r border-l border-gray-200 px-8">
              <h3 className="text-base font-bold text-[#1C9DFF]">
                Our security experts will contact you within 24 hours to initiate your selected services.
              </h3>
              <p className="text-sm font-semibold text-[#1F2937] mt-4">You'll also receive:</p>
              <ul className="list-disc list-inside text-sm text-[#4B5264] mt-2 space-y-1">
                <li>A confirmation email with service details</li>
                <li>An onboarding checklist (if applicable)</li>
                <li>A point of contact for ongoing communication</li>
              </ul>
              
              <h4 className="text-base font-bold text-[#1F2937] mt-6">Need Help?</h4>
              <p className="text-sm text-[#4B5264] mt-1">If you have any questions or didn't receive an email, reach out at:</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <BsFillEnvelopeFill className="text-[#1C9DFF]" />
                  <span className="text-sm font-semibold text-[#1C9DFF]">support@securitycouncil.io</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BsFillTelephoneFill className="text-[#1C9DFF]" />
                  <span className="text-sm font-semibold text-[#4B5264]">+91-98765-43210</span>
                </div>
              </div>
            </div>
            
            {/* Right Side: Success Message */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <BsCheckCircleFill className="w-20 h-20 text-[#2EC4B6] mx-auto md:mx-0" />
              <h2 className="text-xl font-bold text-[#1F2937] mt-4">
                Your request has been received, and your payment was successful.
              </h2>
              <div className="mt-4 text-sm text-[#4B5264] space-y-1">
                <p>Transaction ID: <span className="font-bold text-[#1F2937]">#RZR12345678</span></p>
                <p>Date: <span className="font-bold text-[#1F2937]">July 12, 2025</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto text-center">
        <p className="text-xs text-[#6B7280]">
          All submitted details are transmitted securely via 256-bit SSL encryption. Our team follows strict data privacy and compliance protocols.
        </p>
      </footer>
    </div>
  );
};

export default PaymentSuccess;
