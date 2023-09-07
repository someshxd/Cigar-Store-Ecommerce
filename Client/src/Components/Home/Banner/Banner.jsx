import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <div className="text-content">
          <h1>Handcrafted Cigars</h1>
          <p>
            {" "}
            Buy genuine cigars online in India. 100% authentic, duty-paid
            cigars.{" "}
          </p>
          <div className="ctas">
            <div className="cta-1">Know More</div>
            <div className="cta-2">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="" className="img-content" />
      </div>
    </div>
  );
}
