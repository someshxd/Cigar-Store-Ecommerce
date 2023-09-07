import React from "react";
import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Category() {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="category-content">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
}
