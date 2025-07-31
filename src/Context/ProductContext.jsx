import React, { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Black Aura",
      image: "/Card1Aura.webp",
      price: 3499,
      discountPrice: 1999,
      discount: "-42%",
    },
    {
      id: 2,
      name: "Blue Tissot",
      image: "/Card2BlueTissot.webp",
      price: 4999,
      discountPrice: 2999,
      discount: "-40%",
    },
    {
      id: 3,
      name: "Tifani Tissot",
      image: "/Card3TifaniTissot.webp",
      price: 3999,
      discountPrice: 2499,
      discount: "-38%",
    },
    {
      id: 4,
      name: "Black Tissot",
      image: "/Card4BlackTissot.webp",
      price: 2799,
      discountPrice: 1599,
      discount: "-43%",
    },
    {
      id: 5,
      name: "Black Patek",
      image: "/Card5.webp",
      price: 5999,
      discountPrice: 3499,
      discount: "-42%",
    },
    {
      id: 6,
      name: "Rolex Submari",
      image: "/Card6.webp",
      price: 3199,
      discountPrice: 1999,
      discount: "-38%",
    },
    {
      id: 7,
      name: "Golden Tissot",
      image: "/Card7.webp",
      price: 5499,
      discountPrice: 3299,
      discount: "-40%",
    },
    {
      id: 8,
      name: "Rolex Submari",
      image: "/Card8.webp",
      price: 2599,
      discountPrice: 1499,
      discount: "-42%",
    },
    {
      id: 9,
      name: "Black Tissot",
      image: "/Card4BlackTissot.webp",
      price: 2799,
      discountPrice: 1599,
      discount: "-43%",
    },
    {
      id: 10,
      name: "Black Patek",
      image: "/Card5.webp",
      price: 5999,
      discountPrice: 3499,
      discount: "-42%",
    },
    {
      id: 11,
      name: "Rolex Submari",
      image: "/Card6.webp",
      price: 3199,
      discountPrice: 1999,
      discount: "-38%",
    },
    {
      id: 12,
      name: "Golden Tissot",
      image: "/Card7.webp",
      price: 5499,
      discountPrice: 3299,
      discount: "-40%",
    },
    {
      id: 13,
      name: "Rolex Submari",
      image: "/Card8.webp",
      price: 2599,
      discountPrice: 1499,
      discount: "-42%",
    },
    {
      id: 14,
      name: "Rolex Submari",
      image: "/Card8.webp",
      price: 2599,
      discountPrice: 1499,
      discount: "-42%",
    },
    {
      id: 15,
      name: "Rolex Submari",
      image: "/Card8.webp",
      price: 2599,
      discountPrice: 1499,
      discount: "-42%",
    },
    {
      id: 16,
      name: "Rolex Submari",
      image: "/Card8.webp",
      price: 2599,
      discountPrice: 1499,
      discount: "-42%",
    },
  ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
