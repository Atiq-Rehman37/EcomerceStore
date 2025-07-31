import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-3">HELGRAY</h5>
            <p>
              High-quality watches for every style. Shop the latest collections
              with exclusive deals.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Men
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Women
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="mb-3">Help</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Returns
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="mb-3">Subscribe</h6>
            <p>Join our newsletter for exclusive offers.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-danger" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} HELGRAY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
