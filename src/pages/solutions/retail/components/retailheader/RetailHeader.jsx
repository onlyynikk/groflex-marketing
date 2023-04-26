import React from "react";
import "./retailheader.css";
import avatar from "../../../../../assets/solutions/retail/hero frame.png";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import fire from "../../../../../assets/fire.svg";

export default function RetailHeader() {
  return (
    <div className="retailheader__container">
      <div className="retailheader__section1">
        <div className="retailheader__img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="retailheader__text--content">
          <h1>Be the game changer in your industry</h1>
          <p>
            Benefit from the software's payment gateway integration, which
            allows you to accept payments through multiple methods. Using the
            multi-currency features, conduct international transactions and deal
            with customers in different countries.
          </p>
          <BtnPrimary text="Sign up for free" />
        </div>
      </div>
      <div className="retailheader__section2">
        <h1>Break through barriers</h1>
        <div className="retailheader__items">
          <div className="retailheader__item">
            <img src={fire} alt="fire" />
            <p>Make transactions across borders.</p>
          </div>
          <div className="retailheader__item">
            <img src={fire} alt="fire" />
            <p>Making payments never been easier.</p>
          </div>
          <div className="retailheader__item">
            <img src={fire} alt="fire" />
            <p>Ensure compliance with tax laws.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
