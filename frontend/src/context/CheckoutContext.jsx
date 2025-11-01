

import React, { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import axiosInstance from "../utils/axiosInstance";


const allServices = {
  'Web Application Security Audits': { id: 1, name: 'Web Application Security Audits', price: 499 },
  'Cloud Security Assessments': { id: 2, name: 'Cloud Security Assessments', price: 499 },
  'PCI DSS Gap Assessments': { id: 3, name: 'PCI DSS Gap Assessments', price: 499 },
  'Awareness Training': { id: 4, name: 'Awareness Training', price: 499 },
};

const CheckoutContext = createContext();
export const useCheckout = () => useContext(CheckoutContext);

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const CheckoutProvider = ({ children }) => {
  const { token, user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({
    companyName: "",
    yourName: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Add & Remove
  const addToCart = (serviceName) => {
    const service = allServices[serviceName];
    if (service && !cart.find((item) => item.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  
  const saveCartToBackend = async () => {
  try {
    const res = await axiosInstance.post(
      "/api/cart/save",
      { cart, total, userDetails },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("✅ Cart saved:", res.data);
  } catch (err) {
    console.error("❌ Error saving cart:", err);
  }
};

  const value = {
    cart,
    addToCart,
    removeFromCart,
    total,
    userDetails,
    setUserDetails,
    paymentMethod,
    setPaymentMethod,
    allServices,
    saveCartToBackend,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
