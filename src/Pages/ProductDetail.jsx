import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  // Find product by id (convert id to number!)
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container py-5">
      <div className="row gap-2">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid  rounded"
            style={{
              height: "410px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold">{product.name}</h3>
          <div className="d-flex gap-4 py-2">
            <p className="text-danger fw-bold">Rs.{product.discountPrice} </p>
            <p className="text-muted text-decoration-line-through">
              Rs.
              {product.price}
            </p>
            <p className="bg-danger badge">SAVE {product.discount}</p>
          </div>
          <h5 className="fw-bold">Why you should buy from Luxons?</h5>
          <p>✔ 7 days Warranty.</p>
          <p>✔ Delivery Time: 2 to 3 Days. </p>
          <p>✔ 25,000+ Satisfied Customers.</p>
          <p>✔ 100% Certified Statement Timepieces.</p>
          <div class="d-grid gap-1">
            <button
              className="btn btn-large border px-5 btn-dark"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart <HiOutlineShoppingBag size={20} />
            </button>
            <button className="btn btn-large border border border-dark">
              Buy It Now
            </button>
            <button className="btn btn-success btn-large">
              Order On Wattsapp <FaWhatsapp size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <h4 className="fw-bold text-decoration-underline">
          Product description
        </h4>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Bold yet sophisticated, the Blue Tissot Classic adds a touch of
          vibrant color to your wrist. The striking blue dial is encased in
          polished stainless steel, offering the perfect balance of sporty
          appeal and refined design. Ideal for everyday wear, from business
          casual to weekend adventures, this watch is built for those who
          appreciate craftsmanship and effortless style. Let this piece be your
          go-to accessory when you want to make an impression without saying a
          word.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
