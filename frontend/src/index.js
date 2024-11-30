import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage'
import AboutPage from './landing_page/about/AboutPage'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/Product/ProductPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import LoginPage from './landing_page/signup/LoginPage';
import SignUp from './landing_page/signup/signUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
