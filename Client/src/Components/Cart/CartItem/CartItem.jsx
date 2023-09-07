import React, { useContext } from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/Products/prod1.jpg";
import { Context } from "../../../Utils/Context";
import { VITE_DEV_URL } from "../../../Utils/helpers";

export default function CartItem() {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={VITE_DEV_URL + item.attributes.img.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-btn">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span>&#8377;{item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
