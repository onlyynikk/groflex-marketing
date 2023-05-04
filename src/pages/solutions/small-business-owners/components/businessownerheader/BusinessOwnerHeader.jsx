import React from "react";
import "./businessownerheader.css";
import avatar from "../../../../../assets/solutions/businessowner/hero avatar.png";
import fire from "../../../../../assets/fire.svg";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";

export default function BusinessOwnerHeader() {
  return (
    <div className="businessownerheader__container">
      <div className="businessownerheader__section1">
        <div className="businessownerheader__content">
          <h1>Empowering your finances with grofleX</h1>
          <p>
            You can benefit from a range of features our software offers to help
            your small business grow. Facilitate payment acceptance through
            multiple methods and multi-currency transactions. Ensure
            GST-compliant invoicing and local tax law compliance, improving
            payment collection and reputation.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="businessownerheader__img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="businessownerheader__section2">
        <h1>Secure, efficient and easy solutions</h1>
        <div className="businessownerheader__items">
          <div className="businessownerheader__item">
            <img src={fire} alt="fire" />
            <p>Good reputation among customers.</p>
          </div>
          <div className="businessownerheader__item">
            <img src={fire} alt="fire" />
            <p>Up-to-date financial records.</p>
          </div>
          <div className="businessownerheader__item">
            <img src={fire} alt="fire" />
            <p>Improve payment collection. </p>
          </div>
          <div className="businessownerheader__item">
            <img src={fire} alt="fire" />
            <p>Better financial analysis. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
