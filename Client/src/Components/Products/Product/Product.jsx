import React from "react";
import "./Product.scss";

import { useNavigate } from "react-router-dom";
import { VITE_DEV_URL } from "../../../Utils/helpers";

export default function Product({ id, data }) {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={VITE_DEV_URL + data?.img?.data[0]?.attributes?.url} alt="" />
      </div>
      <div className="prod-details">
        <span className="name"> {data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
}
