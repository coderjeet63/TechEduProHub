import React from 'react';
import { useCheckout } from '../context/CheckoutContext';

const CartSummary = () => {
  const { cart, total } = useCheckout();

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-sm font-semibold text-gray-500">My Cart</h2>
      <h3 className="text-xl font-bold text-[#1F2937] mt-1">Order Summary</h3>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-xs font-semibold text-gray-400">
          <span>Product</span>
          <span>Price</span>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm font-semibold text-[#1C9DFF]">{item.name}</span>
            <span className="text-sm font-bold text-[#1F2937]">${item.price}</span>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4">
          <span className="text-base font-bold text-gray-500">Total</span>
          <span className="text-2xl font-bold text-[#1F2937]">${total}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
