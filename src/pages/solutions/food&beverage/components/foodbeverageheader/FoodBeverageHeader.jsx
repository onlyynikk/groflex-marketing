import React from "react";
import "./foodbeverageheader.css";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import avatar from "../../../../../assets/solutions/foodbeverage/hero avatar.png";
import fire from "../../../../../assets/fire.svg";

export default function FoodBeverageHeader() {
  return (
    <div className="foodbeverageheader__container">
      <div className="foodbeverageheader__section1">
        <div className="foodbeverageheader__content">
          <h1>Transform your business with grofleX</h1>
          <p>
            Benefit from real-time dashboard updates for monitoring transactions
            and financial performance. Track sales and expenses, use our Profit
            and Loss Statement feature that can help food and beverage companies
            identify opportunities to improve profitability, reduce costs, and
            increase revenue.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="foodbeverageheader__img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="foodbeverageheader__section2">
        <h1>Take your business to the next level</h1>
        <div className="foodbeverageheader__items">
          <div className="foodbeverageheader__item">
            <img src={fire} alt="fire" />
            <p>Identify opportunities with ease</p>
          </div>
          <div className="foodbeverageheader__item">
            <img src={fire} alt="fire" />
            <p>Make data-driven decisions</p>
          </div>
          <div className="foodbeverageheader__item">
            <img src={fire} alt="fire" />
            <p>Improve your profitability</p>
          </div>
          <div className="foodbeverageheader__item">
            <img src={fire} alt="fire" />
            <p>Monitor financial performance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
