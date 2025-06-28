import React, { useContext } from "react";
import { CartContext } from "../App";
import "../components/styles/Card.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "2px solid #4444",
          width: "90%",
          margin: "auto",
          height: "75px",
          borderRadius: "1rem",
        }}
      >
        <div>
          <img
            style={{ width: "190px", height: "72px", borderRadius: "2.5rem" }}
            src="https://i.pinimg.com/736x/e5/6a/e6/e56ae698bf25e324bd48be06ffbf2a62.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "23px",
            fontWeight: "600",
          }}
        >
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            <p>Shop</p>
          </Link>
          <p></p>
        </div>

        <div
          className="cta-Addtocart"
          style={{
            display: "flex",
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <svg
              className="logo-product"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            <span>({cartItems.length})</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
