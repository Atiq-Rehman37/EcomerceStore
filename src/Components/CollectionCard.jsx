import React from "react";

const CollectionCard = (props) => {
  return (
    <div className="col-lg-2 col-sm-4 col-6 mb-4">
      <div className="card py-2 h-100 bg-color border-0 text-center">
        <img
          src={props.src}
          className="card-img-top rounded-circle mx-auto"
          alt="watch"
          style={{ height: "170px", width: "170px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="card-text fw-bold">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
