import React, { useContext, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className="navbar bg-white border-bottom px-3 py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* ✅ Left: Hamburger on mobile, links on desktop */}
          <div className="d-flex align-items-center">
            {/* Hamburger only on mobile */}
            <button
              className="btn p-0 border-0 d-lg-none"
              type="button"
              onClick={() => setShowSidebar(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-none d-lg-flex">
              <ul className="navbar-nav flex-row text-dark">
                <li className="nav-item me-3">
                  <Link className="nav-link text-dark" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link text-dark" to={"/collection"}>
                    Collection
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link text-dark" to={"/ExchangePolicy"}>
                    Exchange Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"/about"}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ Center: Larger Logo */}
          <Link
            className="navbar-brand mx-auto position-absolute start-50 translate-middle-x"
            to={"/"}
          >
            <img
              src="/Logo.jpg"
              alt="Logo"
              className="rounded-circle"
              height="60"
              width="60"
            />
          </Link>

          {/* ✅ Right: Icons */}
          <div className="d-flex align-items-center fs-5 gap-3">
            <Link className="text-dark">
              <HiOutlineSearch />
            </Link>
            <Link className="text-dark">
              <FaRegUser />
            </Link>
            <Link to={"/cart"} className="text-dark position-relative">
              <HiOutlineShoppingBag />
              {cartItems.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "0.6rem",
                    padding: "2px 5px",
                    lineHeight: 1,
                    minWidth: "16px",
                    height: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Sidebar (unchanged) */}
      {showSidebar && (
        <div
          className="mobile-sidebar position-fixed top-0 start-0 w-75 h-100 bg-white shadow p-4"
          style={{ zIndex: 1050 }}
        >
          <button
            className="btn-close mb-4"
            onClick={() => setShowSidebar(false)}
          ></button>

          <ul className="navbar-nav mb-4">
            <li className="nav-item mb-2">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to={"/collection"}>
                Collection
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to={"/ExchangePolicy"}>
                Exchange Policy
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to={"/about"}>
                About Us
              </Link>
            </li>
          </ul>

          <h6 className="fw-bold mb-3">My Account</h6>
          <button className="btn btn-dark w-100 mb-2">Log in</button>
          <button className="btn btn-outline-dark w-100">Register</button>
        </div>
      )}

      {/* ✅ Backdrop */}
      {showSidebar && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1040 }}
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
