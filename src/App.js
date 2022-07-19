import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp"
import './App.css'
import ListProducts from "./pages/ListProducts/ListProducts"
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./components/Details/ProductDetail";
import Contact from "./pages/Contact/Contact";
import ButtonScroll from "./components/Scroll/ButtonScroll";


function App() {
 
  return (
    <>
     
  
      <BrowserRouter>
        <Header />
        <ButtonScroll />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/catalog" element={<ListProducts />} />
          <Route path="/catalog/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;