import React from "react";
import "./footer.css";
import BtnPrimary from "../btnGreen/BtnPrimary";

export default function FooterSection1() {
  return (
    <div className="footer__box">
      <div className="footer__wrapper">
        <p>Join Us</p>
        <input type="text" placeholder="Your email" className="footer__input" />
        <BtnPrimary className="footer__btn" text={"+ Subscribe"} />
      </div>
    </div>
  );
}
