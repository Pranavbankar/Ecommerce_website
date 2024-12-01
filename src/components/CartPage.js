import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter((item) => item !== null); // Filter out items with quantity 0

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px", border: "1px solid #ddd", padding: "10px" }}>
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div>
                  <button onClick={() => updateQuantity(item.id, "increase")} style={{ marginRight: "5px" }}>
                    +
                  </button>
                  <button onClick={() => updateQuantity(item.id, "decrease")} style={{ marginRight: "5px" }}>
                    -
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
