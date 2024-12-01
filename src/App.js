import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage"; // Import Cart Page

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} /> {/* Add Cart Route */}
    </Routes>
  </Router>
);

export default App;
