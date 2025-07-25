import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section position-relative d-flex">
      <video
        className="w-100"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <Link
        to={"/collection"}
        className="position-absolute px-lg-4 py-lg-2 btn shop-butn"
      >
        Shop Now
      </Link>
    </section>
  );
};

export default Hero;
