import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ src, title, link }) => {
  return (
    <div className="col-lg-2 col-sm-4 col-6 mb-4">
      <Link to={link} className="text-decoration-none">
        <div className="card py-2 h-100 bg-color border-0 text-center">
          <img
            src={src}
            className="card-img-top rounded-circle border  border-3 border-secondary shadow"
            alt={title}
            style={{ height: "160px", width: "160px" }}
          />
          <div className="card-body">
            <p className="card-text fw-bold">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
