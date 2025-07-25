import React from "react";
import CollectionCard from "./CollectionCard";

const HotSelling = () => {
  return (
    <div>
      <div className="py-5 bg-color">
        <h2 className="text-center">Hot Selling</h2>
      </div>
      <div className="container-fluid bg-color">
        <div className="row justify-content-center gx-3">
          <CollectionCard src="/BlackAura.webp" title="Black Aura Arabic" />
          <CollectionCard src="/Tissot.webp" title="Tissot" />
          <CollectionCard src="/Rolex.webp" title="Rolex" />
          <CollectionCard src="/Patek.webp" title="Patek Philippe" />
          <CollectionCard src="/watch1.jpg" title="Audemars Piguet" />
          <CollectionCard src="/Hublot.webp" title="Hublot" />
        </div>
      </div>
    </div>
  );
};

export default HotSelling;
