import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ProductDetails from "./pages/productdetails/ProductDetails.jsx";
import CartItems from "./pages/cartitems/CartItems.jsx";
import CheckOut from "./pages/proceedtocheck/CheckOut.jsx";

const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
export { CartContext };
