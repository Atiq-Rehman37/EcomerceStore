import React, { createContext, useState } from "react";
export const CartContext = createContext();

//Create provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log(product);
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
