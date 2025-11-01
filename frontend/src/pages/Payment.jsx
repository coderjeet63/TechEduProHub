import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext';
import CartSummary from '../components/CartSummary';
import ProgressBar from '../components/ProgressBar';
import ButtonPrimary from '../components/ButtonPrimary';
import { BsArrowLeft, BsCreditCard, BsBank, BsPaypal } from 'react-icons/bs';

import { MdPayment } from "react-icons/md"; 

// Reusing the layout
const CheckoutLayout = ({ children, step }) => (
  <div className="min-h-screen flex flex-col justify-between p-4 md:p-8">
    <header className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#1C9DFF] mb-8">Checkout</h1>
      <ProgressBar step={step} />
    </header>
    <main className="w-full max-w-7xl mx-auto my-12">{children}</main>
    <footer className="w-full max-w-7xl mx-auto text-center">
      <p className="text-xs text-[#6B7280]">
        All submitted details are transmitted securely via 256-bit SSL encryption. Our team follows strict data privacy and compliance protocols.
      </p>
    </footer>
  </div>
);

// Input Field Component
const InputField = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-[#4B5264] mb-1">{label}</label>
    <input 
      id={id}
      {...props}
      className="w-full px-4 py-3 bg-white border border-[#D1D5DB] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1C9DFF]" 
    />
  </div>
);

// Payment Tab Button
const PaymentTab = ({ icon, text, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`
      flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 
      transition-all duration-300
      ${isActive ? 'border-[#1C9DFF] bg-[#F0F5FF]' : 'border-[#D1D5DB] bg-white'}
    `}
  >
    {icon}
    <span className={`font-semibold ${isActive ? 'text-[#1C9DFF]' : 'text-[#4B5264]'}`}>{text}</span>
  </button>
);

const Payment = () => {
  const navigate = useNavigate();
  const { total } = useCheckout();
  const [paymentTab, setPaymentTab] = useState('card'); // 'card', 'upi', 'netbanking'
  const [agreed, setAgreed] = useState(false);

  const handlePay = () => {
    // Yahan real payment logic integrate hogi
    navigate('/checkout/success');
  };

  return (
    <CheckoutLayout step={3}>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Payment Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-[#1F2937]">Payment</h2>
          
          {/* Payment Method Tabs */}
          <div className="mt-6 flex space-x-4">
            <PaymentTab 
              icon={<BsCreditCard />} 
              text="Card" 
              isActive={paymentTab === 'card'} 
              onClick={() => setPaymentTab('card')} 
            />
            <PaymentTab 
              icon={<MdPayment  />} 
              text="UPI" 
              isActive={paymentTab === 'upi'} 
              onClick={() => setPaymentTab('upi')} 
            />
            <PaymentTab 
              icon={<BsBank />} 
              text="Net banking" 
              isActive={paymentTab === 'netbanking'} 
              onClick={() => setPaymentTab('netbanking')} 
            />
          </div>

          {/* Conditional Form Content */}
          <div className="mt-8">
            {/* Card Form */}
            {paymentTab === 'card' && (
              <form className="space-y-6">
                <InputField label="Card number" id="card-number" placeholder="XXXX XXXX XXXX XXXX" />
                <InputField label="Cardholder name" id="card-name" placeholder="John Doe" />
                <div className="grid grid-cols-2 gap-6">
                  <InputField label="Expiry date" id="expiry" placeholder="MM / YY" />
                  <InputField label="CVV" id="cvv" placeholder="***" />
                </div>
              </form>
            )}
            {/* UPI Form */}
            {paymentTab === 'upi' && (
              <form className="space-y-6">
                <InputField label="Enter your UPI ID" id="upi-id" placeholder="yourname@upi" />
                <p className="text-xs text-center text-gray-400">with icons for GPay, PhonePe etc.</p>
              </form>
            )}
            {/* Net Banking Form */}
            {paymentTab === 'netbanking' && (
              <form className="space-y-6">
                 <div>
                  <label htmlFor="bank" className="block text-sm font-medium text-[#4B5264] mb-1">Select your Bank</label>
                  <select id="bank" className="w-full px-4 py-3 bg-white border border-[#D1D5DB] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1C9DFF]">
                    <option>Select your Bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                  </select>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Right Side: Cart Summary */}
        <div className="w-full lg:w-1/3">
          <CartSummary />
          <div className="mt-6">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={() => setAgreed(!agreed)} 
                className="h-4 w-4 text-[#1C9DFF] border-[#D1D5DB] rounded focus:ring-[#1C9DFF]" 
              />
              <span className="ml-2 text-xs text-[#4B5264]">
                I confirm that the information provided is correct and I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => navigate('/checkout/details')}
              className="flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#4B5264] font-semibold hover:bg-gray-50"
            >
              <BsArrowLeft className="w-5 h-5" />
              <span>Go back</span>
            </button>
            <ButtonPrimary 
              text={`Pay $${total}`}
              icon={<BsPaypal className="w-5 h-5" />}
              onClick={handlePay} 
              disabled={!agreed}
            />
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Payment;
