import React from "react";
import "./cfoheader.css";
import avatar from "../../../../../assets/solutions/CFO/hero avatar.png";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import fire from "../../../../../assets/fire.svg";

export default function CfoHeader() {
  return (
    <div className="cfoheader__container">
      <div className="cfoheader__section1">
        <div className="cfoheader__img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="cfoheader__content">
          <h1>Your partner in financial success</h1>
          <p>
            Take advantage of efficient and streamlined invoicing,
            multi-currency transactions, real-time dashboard updates, and the
            ability to create customer-specific ledgers for informed
            decision-making. Use the Profit and Loss Statement to track revenue,
            cost of goods sold, gross profit, and net income.
          </p>
          <BtnPrimary text="Sign up for free" />
        </div>
      </div>
      <div className="cfoheader__section2">
        <h2>Transform your financial future</h2>
        <div className="cfoheader__items">
          <div className="cfoheader__item">
            <img src={fire} alt="fire" />
            <p>Enable global transactions.</p>
          </div>
          <div className="cfoheader__item">
            <img src={fire} alt="fire" />
            <p>Monitor your financial performance.</p>
          </div>
          <div className="cfoheader__item">
            <img src={fire} alt="fire" />
            <p>Identify areas for improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
