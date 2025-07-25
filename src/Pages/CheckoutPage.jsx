import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
      }}
    >
      <Confetti />

      <FaCheckCircle size={80} color="#28a745" className="mb-4" />

      <h1 className="mb-3 text-success">Thank You!</h1>

      <p className="fs-5 mb-4">
        Your order has been placed successfully.
        <br />
        We appreciate your trust in our store.
      </p>

      <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>

      <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
        You will be redirected to the homepage in a few seconds.
      </p>
    </div>
  );
};

export default CheckoutPage;
