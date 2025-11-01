import React from 'react'
import { Route , Routes } from 'react-router-dom'
import NavBar from './components/Navbar.jsx'
import Home from './pages/Home'
import Footer from './components/Footer'
import ServicesPage from "./pages/ServicesPage";
import ContactForm from './pages/ContactForm.jsx'
import Blog from './pages/Blog.jsx'
import AddToCart from "./pages/AddToCart";
import EnterDetails from "./pages/EnterDetails";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from './pages/Login.jsx'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/services/:serviceName" element={<ServicesPage />} />
        <Route path='/contact' element ={<ContactForm/>} />
        <Route path = '/blog' element = {<Blog />} />
       {/* <Route path="/" element={<Navigate to="/add-to-cart" />} /> */}
      <Route path="/add-to-cart" element={<AddToCart />} />
      <Route path="/checkout/details" element={<EnterDetails />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/checkout/success" element={<PaymentSuccess />} />
      <Route path = "/login" element = {<Login/>} />
      </Routes>
        <Footer/>
    </div>
  )
}

export default App