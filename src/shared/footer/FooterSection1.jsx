import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import BtnPrimary from "../btnGreen/BtnPrimary";

export default function FooterSection1() {
  return (
    <div className="footer__section1--container">
      <div className="footer__text--container">
        <p className="footer__text">
          Groflex Technology Pvt. Ltd. <br />
          42, P5, Kudlu Main Rd,
          <br /> Muneshwara Layout,
          <br /> Haralukunte, Muneshwara <br /> Nagar, Bengaluru, Karnataka
          <br />
          560068, India
        </p>
        <div className="footer__box-2">
          <div className="footer__box--wrapper">
            <p>Join Us</p>
            <input
              type="text"
              placeholder="Your email"
              className="footer__input"
            />
            <BtnPrimary className="footer__btn" text={"+ Subscribe"} />
          </div>
        </div>
      </div>
    </div>
  );
}
