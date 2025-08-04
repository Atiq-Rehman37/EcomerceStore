import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Collection from "./Pages/Collection";
import ExchangePolicy from "./Pages/ExchangePolicy";
import Aboutus from "./Pages/Aboutus";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Header></Header>
          <Navbar></Navbar>
          <a
            href="https://wa.me/923427621056?text=Hi%2C%20I%20was%20browsing%20HELGRAY%20Watches%20and%20have%20a%20few%20questions.%20Can%20you%20assist%20me%3F"
            target="blank"
            className="position-fixed bottom-0 end-0 m-4 bg-success text-white rounded-circle d-flex justify-content-center align-items-center shadow"
            style={{ height: "50px", width: "50px", zIndex: "1050" }}
          >
            <FaWhatsapp size={28} />
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/ExchangePolicy" element={<ExchangePolicy />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
