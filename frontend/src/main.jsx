import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CheckoutProvider } from './context/CheckoutContext';
import App from './App';
import './index.css';
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
      <CheckoutProvider>
        
            <App />
   
      </CheckoutProvider>
       </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
