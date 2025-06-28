import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        setDisplayedProducts(response.data);
        setCategories([
          ...new Set(response.data.map((product) => product.category.name)),
        ]);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error in fetching data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category.name === selectedCategory
      );
    }

    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(filtered);
  }, [selectedCategory, sortOrder, products]);

  if (loading)
    return (
      <h3 style={{ textAlign: "center", color: "#4444" }}>
        Loading products...
      </h3>
    );

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="heading">
        <span style={{ color: "purple" }}>Woo </span>Commerce Sto
        <span style={{ color: "purple" }}>re</span>
      </h1>

    
      <div className="filter-sort-container">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>


      <div className="product-list">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="heading-product">{product.title}</h3>
            <Link to={`/${product.id}`}>
              <img
                className="commerce-img"
                src={product.images[0]}
                alt={product.title}
              />
            </Link>
            <Link to={`/${product.id}`}>
              <button className="cta-bttn">Details</button>
            </Link>
            <p style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
            <p style={{ fontSize: "14px", color: "#777" }}>
              Category: {product.category.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
