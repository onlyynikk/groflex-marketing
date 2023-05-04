import React from "react";
import "./hospitalityheader.css";
import avatar from "../../../../../assets/solutions/hopsitality/hero avatar.png";
import fire from "../../../../../assets/fire.svg";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";

export default function HospitalityHeader() {
  return (
    <div className="hospitalityheader__container">
      <div className="hospitalityheader__section1">
        <div className="hospitalityheader__img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="hospitalityheader__content">
          <h1>Boost your productivity with user friendly tools</h1>
          <p>
            In the hospitality industry cash flow can be very unpredictable.
            Track refunds, returns and cancellations. Easily manage
            transactions, reconcile transactions and keep track of expenses.
            Effectively manage your business's finances, improve cash flow, and
            reduce costs.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
      </div>
      <div className="hospitalityheader__section2">
        <h3>Revolutionize your business with these solutions</h3>
        <div className="hospitality__items">
          <div className="hospitality__item">
            <img src={fire} alt="fire" />
            <p>Optimize your cash flow.</p>
          </div>
          <div className="hospitality__item">
            <img src={fire} alt="fire" />
            <p>Manage your expenses easily.</p>
          </div>
          <div className="hospitality__item">
            <img src={fire} alt="fire" />
            <p>Make informed financial decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
