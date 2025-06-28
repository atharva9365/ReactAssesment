import React, { useContext } from "react";
import { CartContext } from "../../App";
import Navbar from "../../components/Navbar";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <ToastContainer/>
        <h2
          style={{
            textAlign: "center",
            marginTop: "3rem",
            fontSize: "1.5rem",
            color: "#888",
          }}
        >
          Your cart is empty 🛒
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>
          🛍️ Your Cart
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "1.5rem",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              padding: "1.5rem",
              borderRadius: "12px",
              transition: "0.3s",
            }}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>
                {item.title}
              </h3>
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: "bold",
                  color: "#1e88e5",
                }}
              >
                Price: ${item.price.toFixed(2)}
              </p>
              <p style={{ color: "#555" }}>
                {item.description.substring(0, 100)}...
              </p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              style={{
                backgroundColor: "#e53935",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <div
          style={{
            textAlign: "right",
            marginTop: "2rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#2e7d32",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
          }}
        >
          Total: ${total.toFixed(2)}
        </div>

       
        <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
        <Link to='/checkout'>
          <button
            style={{
              backgroundColor: "#1976d2",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default CartItems;
