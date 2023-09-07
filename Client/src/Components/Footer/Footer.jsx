import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payment.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            When you think of Cigars in India, every Cigar expert will tell you
            one thing Cigar Conexion is the only genuine Cigar Online Store in
            India. We have been in tobacco industry for more than 100 years and
            we are trusted by the cigar fraternity in India and are reliable to
            offer the highest quality cigars as we truly understand Cigars. We
            take utmost care in storing our cigars in the finest humidors and
            ensuring they deliver a great smoking experience for all our
            customers.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              School Bazar, Tarna road, Near UCO Bank, Mandi 175001
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">+91 8219444345</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">someshverma.dev@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">item 1</span>
          <span className="text">item 1</span>
          <span className="text">item 1</span>
          <span className="text">item 1</span>
          <span className="text">item 1</span>
          <span className="text">item 1</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text"> Page 1</span>
          <span className="text"> Page 1</span>
          <span className="text"> Page 1</span>
          <span className="text"> Page 1</span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-content">
          <div className="text">CIGAR STORE 2023 CREATED BY SOMESH.</div>
          <img src={Payment} alt="" className="pay-img" />
        </div>
      </div>
    </footer>
  );
}
