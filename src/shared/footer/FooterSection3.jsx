import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import BtnPrimary from "../btnGreen/BtnPrimary";

export default function FooterSection1() {
  return (
    <div className="footer__box">
      <div className="footer__box--wrapper">
        <p>Join Us</p>
        <input type="text" placeholder="Your email" className="footer__input" />
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <BtnPrimary className="footer__btn" text={"+ Subscribe"} />
        </Link>
      </div>
    </div>
  );
}
