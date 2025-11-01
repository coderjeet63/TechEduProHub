
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext';
import CartSummary from '../components/CartSummary';
import ProgressBar from '../components/ProgressBar';
import ButtonPrimary from '../components/ButtonPrimary';
import { BsShieldCheck, BsCloudCheck, BsFileEarmarkLock, BsPeople, BsArrowRight, BsTrash } from 'react-icons/bs';

// === ICONS ===
const serviceIcons = {
  'Web Application Security Audits': <BsShieldCheck className="w-8 h-8 text-[#1C9DFF]" />,
  'Cloud Security Assessments': <BsCloudCheck className="w-8 h-8 text-[#1C9DFF]" />,
  'PCI DSS Gap Assessments': <BsFileEarmarkLock className="w-8 h-8 text-[#1C9DFF]" />,
  'Awareness Training': <BsPeople className="w-8 h-8 text-[#1C9DFF]" />,
};

// === LAYOUT ===
const CheckoutLayout = ({ children, step }) => (
  <div className="min-h-screen flex flex-col justify-between p-4 md:p-8">
    <header className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#1C9DFF] mb-8">Checkout</h1>
      <ProgressBar step={step} />
    </header>

    <main className="w-full max-w-7xl mx-auto my-12">
      {children}
    </main>

    <footer className="w-full max-w-7xl mx-auto text-center">
      <p className="text-xs text-[#6B7280]">
        All submitted details are transmitted securely via 256-bit SSL encryption. Our team follows strict data privacy and compliance protocols.
      </p>
    </footer>
  </div>
);

// === ADD TO CART PAGE ===
const AddToCart = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, allServices, saveCartToBackend } = useCheckout();

  const services = Object.values(allServices);
  const isInCart = (serviceId) => cart.some(item => item.id === serviceId);

 
  const handleProceed = async () => {
    try {
      await saveCartToBackend(); 
      navigate('/checkout/details');
    } catch (err) {
      console.error("Error while saving cart:", err);
      alert("Something went wrong while saving your cart. Please try again.");
    }
  };

  return (
    <CheckoutLayout step={1}>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Service Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                <div>
                  {serviceIcons[service.name]}
                  <h3 className="text-xl font-bold text-[#1F2937] mt-4">{service.name}</h3>
                  <p className="text-sm text-[#4B5264] mt-2">
                    {service.name === 'Web Application Security Audits'
                      ? 'Identify and mitigate vulnerabilities in your web applications.'
                      : service.name === 'Cloud Security Assessments'
                      ? 'Ensure your cloud infrastructure is secure and compliant.'
                      : service.name === 'PCI DSS Gap Assessments'
                      ? 'Achieve PCI compliance with our expert guidance.'
                      : 'Train your team to detect phishing, social engineering, and malware.'}
                  </p>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="text-sm font-semibold text-[#1C9DFF]">Save</button>
                  {isInCart(service.id) ? (
                    <button
                      onClick={() => removeFromCart(service.id)}
                      className="flex items-center justify-center text-sm font-semibold text-red-500 border border-red-500 rounded-lg px-4 py-2 hover:bg-red-50"
                    >
                      <BsTrash className="mr-1" /> Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(service.name)}
                      className="text-sm font-semibold text-white bg-gradient-to-b from-[#1C9DFF] to-[#1475BC] rounded-lg px-4 py-2 hover:shadow-md"
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Cart Summary */}
        <div className="w-full lg:w-1/3">
          <CartSummary />
          <div className="mt-6">
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

export default AddToCart;

