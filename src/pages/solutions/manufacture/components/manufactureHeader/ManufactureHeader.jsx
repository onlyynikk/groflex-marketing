import React from "react";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import avatar from "../../../../../assets/solutions/manufacture/hero frame.png";
import fire from "../../../../../assets/fire.svg";
import "./manufactureheader.css";

export default function ManufactureHeader() {
  return (
    <div className="manufactureheader__container">
      <div className="manufactureheader__section1">
        <div className="manufactureheader__text-content">
          <h1>Gain edge over other businesses</h1>
          <p>
            Benefit from accurate transaction reconciliation by comparing and
            matching bank statements with transaction records. Ensure that your
            financial records are up-to-date and accurate, prevent errors and
            improve financial transparency.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="manufacture__header--img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="manufactureheader__section2">
        <h1>Stand out from the competition</h1>
        <div className="maufactureheader__items">
          <div className="manufactureheader__item">
            <img src={fire} alt="fire" />
            <p>Enjoy improved financial analysis</p>
          </div>
          <div className="manufactureheader__item">
            <img src={fire} alt="fire" />
            <p>Comprehensive cash flow chart</p>
          </div>
          <div className="manufactureheader__item">
            <img src={fire} alt="fire" />
            <p>Provides clear picture of your financial health</p>
          </div>
          <div className="manufactureheader__item">
            <img src={fire} alt="fire" />
            <p>Identifies areas that require attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
