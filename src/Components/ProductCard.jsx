import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, name, image, price, discountPrice, discount }) => {
  return (
    <div className="col-6 col-lg-3 mb-4">
      <Link to={`/product/${id}`} className="text-decoration-none text-dark">
        <div className="card border-0" style={{ position: "relative" }}>
          <div className="image-container position-relative">
            <img
              src={image}
              className="card-img-top product-image"
              alt={name}
            />

            {/* Hover overlay */}
            <div className="overlay d-flex justify-content-end p-2">
              <HiOutlineShoppingBag className="product-card-icon bg-white text-dark px-2 py-2 rounded" />
            </div>

            {/* Discount badge */}
            <div className="position-absolute top-0 p-2">
              <p className="bg-danger text-white px-2 py-1 rounded">
                {discount}
              </p>
            </div>
          </div>

          <div className="card-body product-card-body">
            <div className="d-flex flex-wrap justify-content-between align-item-center">
              <h6 className="product-card-title mb-2 fw-bold">{name}</h6>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <p className="product-card-price mb-0 text-danger fw-bold">
                Rs. {discountPrice}.00
              </p>
              <p className="card-text text-muted text-decoration-line-through mb-0">
                Rs. {price}.00
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
