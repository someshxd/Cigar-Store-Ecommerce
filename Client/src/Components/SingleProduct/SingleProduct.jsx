import React from "react";
import "./SingleProduct.scss";
import prod from "../../assets/Products/prod1.jpg";
import RelatedProducts from "./RealatedProducts/RelatedProducts";
import { useState, useContext } from "react";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../Utils/Context";
import { VITE_DEV_URL } from "../../Utils/helpers";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const countDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const countInc = () => {
    setQuantity(quantity + 1);
  };

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="singleprod-content">
      <div className="layout">
        <div className="singleprod-page">
          <div className="left">
            <img
              src={VITE_DEV_URL + product.img.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377; {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity">
                <span onClick={countDec}>-</span>
                <span>{quantity}</span>
                <span onClick={countInc}>+</span>
              </div>
              <button
                className="cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">Category:</span>
              <span>{product.categories.data[0].attributes.title}</span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
}
