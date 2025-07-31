import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

const Trending = () => {
  const { products } = useContext(ProductContext);
  const topproducts = products.slice(0, 8);
  return (
    <div className="container py-3">
      <h3 className="text-center text-decoration-underline py-3">
        Trending Now
      </h3>
      <div className="row mx-1">
        {topproducts.map((product) => {
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
      <center>
        <Link to={"/collection"} className="btn border border-2 border-dark">
          More Exclusives
        </Link>
      </center>
    </div>
  );
};

export default Trending;
