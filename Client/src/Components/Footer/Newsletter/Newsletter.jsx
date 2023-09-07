import React from "react";
import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest update and offers.</span>
        <div className="form">
          <input type="text" placeholder="Email Address"></input>
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance our Privacy Policy.
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
