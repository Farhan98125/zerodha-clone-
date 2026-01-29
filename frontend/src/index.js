import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';

import HomePage from './Landing_page/Home/HomePage';
import SignUp from './Landing_page/sign_up/SignUp';
import AboutPage  from './Landing_page/about/AboutPage';
import ProductPage from './Landing_page/product/ProductPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import NotFound from './Landing_page/NotFound';
import SupportPage from './Landing_page/support/SupportPage';

import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
// we we write the code for router 

 <BrowserRouter>
 <Navbar />
 <Routes>
  {/* now we can open the page at host 3000/ */}
  <Route path="/" element={<HomePage />}> </Route>
  <Route path="/sign_up" element={< SignUp/>}> </Route>
  <Route path="/about" element={<AboutPage />}> </Route>
  <Route path="/product" element={<ProductPage />}> </Route>
  <Route path="/pricing" element={<PricingPage />}> </Route>
  <Route path="/support" element={<SupportPage />}> </Route>
  {/* if the link of router doest not match any link then print error page */}

  <Route path="*" element={<NotFound />}> </Route>
  
 </Routes>
 <Footer/>
 </BrowserRouter>

);

