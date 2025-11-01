import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext';
import CartSummary from '../components/CartSummary';
import ProgressBar from '../components/ProgressBar';
import ButtonPrimary from '../components/ButtonPrimary';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

// Reusing the layout from AddToCart (aap ise alag file mein bhi daal sakte hain)
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

const EnterDetails = () => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useCheckout();
  const [formData, setFormData] = useState(userDetails);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleProceed = () => {
    setUserDetails(formData); // Save to context
    navigate('/checkout/payment');
  };

  return (
    <CheckoutLayout step={2}>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-[#1F2937]">Enter Details</h2>
          <form className="mt-6 space-y-6">
            <InputField label="Company Name" id="companyName" value={formData.companyName} onChange={handleChange} />
            <InputField label="Your Name" id="yourName" value={formData.yourName} onChange={handleChange} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />
              <InputField label="Phone number" id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
          </form>
        </div>
        
        {/* Right Side: Cart Summary */}
        <div className="w-full lg:w-1/3">
          <CartSummary />
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => navigate('/add-to-cart')}
              className="flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#4B5264] font-semibold hover:bg-gray-50"
            >
              <BsArrowLeft className="w-5 h-5" />
              <span>Go back</span>
            </button>
            <ButtonPrimary 
              text="Proceed" 
              icon={<BsArrowRight className="w-5 h-5" />}
              onClick={handleProceed} 
            />
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default EnterDetails;
