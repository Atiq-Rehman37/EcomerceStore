import ProductCard from "../Components/ProductCard";
import { ProductContext } from "../Context/ProductContext";
import React, { useContext } from "react";
const Collection = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container py-5">
      <h2 className="fw-bold container">All Collection</h2>
      <p className="pb-3 container">
        Here is your chance to upgrade your wardrobe with a variation of styles
        and fits that are both feminine and relaxed.
      </p>

      <div className="row mx-1">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              discountPrice={product.discountPrice}
              discount={product.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
