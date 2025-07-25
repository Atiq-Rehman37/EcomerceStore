import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const SubTotal = cartItems.reduce(
    (total, item) => total + item.discountPrice,
    0
  );

  return (
    <div className="container py-5">
      <center>
        <h2 className="mb-3 fw-bold">Shopping Cart</h2>
        <p>
          <Link to={"/"} className="text-dark">
            Home
          </Link>{" "}
          &gt; Your Shopping Cart
        </p>
      </center>

      {cartItems.length === 0 ? (
        <p className="alert alert-primary">Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt="watchimage"
                      style={{ height: "80px", width: "100px" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>1</td>
                  <td>Rs.{item.discountPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row py-3">
            <p>
              <b>SubTotal:</b> Rs.{SubTotal} <br />
              Taxes and Shipping Calculated at Checkout
            </p>
          </div>
          <div className="row d-grid container">
            <Link to={"/checkout"} className="btn col-6 bg-dark text-white">
              CHECK OUT
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
