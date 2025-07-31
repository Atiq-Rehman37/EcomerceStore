import React from "react";
import CollectionCard from "./CollectionCard";

const HotSelling = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div className="py-4">
          <h2 className="text-center">Hot Selling</h2>
        </div>
        <div className="container-fluid bg-color">
          <div className="row justify-content-center gx-3 gap-lg-5">
            <CollectionCard
              src="/BlackAura1.webp"
              title="Arabic Aura"
              link="/product/1"
            />
            <CollectionCard
              src="/Tissot1.webp"
              title="Tissot"
              link="/product/2"
            />
            <CollectionCard
              src="/Patek.webp"
              title="Patek Philippe"
              link="/product/5"
            />
            <CollectionCard
              src="/Tissot1.webp"
              title="Tissot"
              link="/product/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotSelling;
