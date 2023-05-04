import React from "react";
import "./ecommerceheader.css";
import BtnPrimary from "../../../../../shared/btnGreen/BtnPrimary";
import avatar from "../../../../../assets/solutions/ecommerce/hero avatar.png";
import fire from "../../../../../assets/fire.svg";

export default function EcommerceHeader() {
  return (
    <div className="ecommerceheader__container">
      <div className="ecommerceheader__section1">
        <div className="ecommerceheader__content">
          <h1>Unlock Your Business's Full Potential</h1>
          <p>
            Our software streamlines e-commerce invoicing and transactions with
            advanced features. Your invoices generate efficiently and accurately
            while multi-currency features supporting your global expansion and
            reduces delays.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="ecommerceheader__img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="ecommerceheader__section2">
        <h1>Make Your Business Into Worldwide</h1>
        <div className="ecommerceheader__items">
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Save time and increase efficiency</p>
          </div>
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Minimize errors and reduce delays</p>
          </div>
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Improve customer satisfaction </p>
          </div>
          <div className="healtheader__item">
            <img src={fire} alt="fire" />
            <p>Reduce administrative costs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
