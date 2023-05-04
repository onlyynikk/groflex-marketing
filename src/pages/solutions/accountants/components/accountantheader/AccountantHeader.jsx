import React from "react";
import "./accountantheader.css";
import avatar from "../.././../../../assets/solutions/accountants/hero avatar.png";
import fire from "../../../../../assets/fire.svg";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";

export default function AccountantHeader() {
  return (
    <div className="accountantheader__container">
      <div className="accountantheader__section1">
        <div className="accountantheader__content">
          <h1>Elevate your business with grofleX</h1>
          <p>
            Accountants can benefit from GrofleX's sustainable features such as
            chart of accounts and document management, which promote
            sustainability and simplify financial activity documentation. The
            financial optimization tools track assets, liabilities, cash flow,
            and help identify areas for optimization, leading to informed
            decision-making.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="accountantheader__img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="accountantheader__section2">
        <h1>Innovative technology, exceptional results</h1>
        <div className="accountantheader__items">
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Sustainability as a solution.</p>
          </div>
          <div className="accountantheader__item">
            <img src={fire} alt="fire" />
            <p>Streamline your work processes.</p>
          </div>
          <div className="accountantheader__item">
            <img src={fire} alt="fire" />
            <p>Accuracy of financial records. </p>
          </div>
          <div className="accountantheader__item">
            <img src={fire} alt="fire" />
            <p>Spot improvement opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
