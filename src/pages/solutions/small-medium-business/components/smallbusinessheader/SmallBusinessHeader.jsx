import React from "react";
import "./smallbusinessheader.css";
import avatar from "../../../../../assets/solutions/smallbusiness/hero avatar.png";
import fire from "../../../../../assets/fire.svg";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";

export default function SmallBusinessHeader() {
  return (
    <div className="smallbusinessheader__container">
      <div className="smallbusinessheader__section1">
        <div className="smallbusinessheader__img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="smallbusinessheader__content">
          <h1>Join the Fintech revolution</h1>
          <p>
            grofleX with its features can help small and medium-sized businesses
            improve their financial management, reduce errors, and make informed
            decisions. By using these features, businesses can enhance their
            reputation, expand their customer base, and achieve sustainable
            growth.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
      </div>
      <div className="smallbusinessheader__section2">
        <h2>Experience the future of finance</h2>
        <div className="smallbusinessheader__items">
          <div className="smallbusinessheader__item">
            <img src={fire} alt="fire" />
            <p>Reduce errors, manage efficiently.</p>
          </div>
          <div className="smallbusinessheader__item">
            <img src={fire} alt="fire" />
            <p>Improve invoicing processes.</p>
          </div>
          <div className="smallbusinessheader__item">
            <img src={fire} alt="fire" />
            <p>Real-time dashboard insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
