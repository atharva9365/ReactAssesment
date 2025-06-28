import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import Navbar from "../../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.zip
    ) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Order placed successfully!");
    setCartItems([]);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#1976d2" }}>Checkout</h2>

        <form onSubmit={handlePlaceOrder} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
          <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleInputChange} style={inputStyle} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} style={inputStyle} />
          <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleInputChange} style={inputStyle} />

          <div style={{ marginTop: "1rem", fontWeight: "bold", fontSize: "1.2rem", color: "#2e7d32" }}>
            Total: ${total.toFixed(2)}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#1976d2",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default CheckOut;
