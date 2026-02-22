import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductsDetailsPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import LoginPage from "./pages/LoginPage"



function App() {
  return (
    // <div className="App">
    // </div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/product/:id" element={<ProductDetailsPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
