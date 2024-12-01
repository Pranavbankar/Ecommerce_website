import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
    <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <Link to={`/product/${product.id}`}>
      <button style={{ padding: "5px 10px" }}>View Details</button>
    </Link>
  </div>
);

export default ProductCard;
