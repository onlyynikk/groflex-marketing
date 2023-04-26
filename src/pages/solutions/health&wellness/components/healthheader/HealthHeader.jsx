import React from "react";
import "./healthheader.css";
import avatar from "../../../../../assets/solutions/healthwellness/avatar.png";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import fire from "../../../../../assets/fire.svg";

export default function HealthHeader() {
  return (
    <div className="healthheader__container">
      <div className="healthheader__section1">
        <div className="healthheader__img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="healthheader__content">
          <h1>For everything from quotations to payment and in between</h1>
          <p>
            grofleX allows you to go paperless with document management, manage
            assets and liabilities. These features facilitate informed financial
            decision-making, which can optimize business performance and
            efficiency. Stay ahead of your competition in the health and
            wellness industry.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
      </div>
      <div className="healthheader__section2">
        <h1>Eliminate your manual work with automation</h1>

        <div className="healthheader__items">
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Better debt management</p>
          </div>
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>More efficient expansion plans</p>
          </div>
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Well informed decision making</p>
          </div>
        </div>
      </div>
    </div>
  );
}
