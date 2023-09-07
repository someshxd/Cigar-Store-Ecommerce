import React from "react";
import "./Category.scss";
import cat1 from "../../../assets/Category/cat1.jpg";
import { useNavigate } from "react-router-dom";
import { VITE_DEV_URL } from "../../../Utils/helpers";

export default function Category({ categories, data }) {
  const navigate = useNavigate();

  return (
    <div className="category-section">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className="cat-name">
              <span className="name"> </span>
            </div>
            <img
              src={VITE_DEV_URL + item.attributes?.img?.data?.attributes?.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
