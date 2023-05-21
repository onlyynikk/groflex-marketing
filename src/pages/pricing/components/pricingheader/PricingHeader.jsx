import React from "react";
import "./pricingheader.css";
import avatar from "../../../../assets/pricing/avatar.png";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";

export default function PricingHeader() {
  return (
    <div className="pricingheader__container">
      <div className="pricingheader__content">
        <h1>Find the right plan for your business</h1>
        <p>
          Experience our unlimited accounting features with easy integration,
          and a user-friendly interface. You probably wondering how you manage
          your finances without it. So, what are you waiting for? Upgrade your
          plan today and start enjoying the peace of mind with efficient
          financial management.
        </p>
        <BtnPrimary text={"Sign up for free"} />
      </div>
      <div className="pricingheader__img">
        <img src={avatar} alt="illustrations" />
      </div>
    </div>
  );
}
