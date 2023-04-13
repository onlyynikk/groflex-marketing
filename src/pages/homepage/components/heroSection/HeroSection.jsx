import React from "react";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";
import "./herosection.css";
import hero from "../../../../assets/hero-section.gif";

export default function HeroSection() {
  return (
    <div className="unlimited__container">
      <div className="unlimited__container--section1">
        <h1>Free Unlimited Invoicing & Quotations</h1>
        <p className="unlimited__container--content">
          Easy sign up without payment details. GST compliance, user-friendly
          interface, and cloud-based convenience at your finger tips.
        </p>
        <div className="umlimited__primary-btn">
          <BtnPrimary
            text={"Sign up for free"}
            to={"https://app.groflex.in/"}
          />
        </div>
      </div>
      <div className="unlimited__container--section2">
        <img src={hero} alt="animation" className="unlimited__img" />
      </div>
    </div>
  );
}
