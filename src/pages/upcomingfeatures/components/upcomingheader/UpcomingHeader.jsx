import React from "react";
import "./upcomingheader.css";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";
import avatar from "../../../../assets/upcomingfeatures/newfeaturesavatar.webp";
import fire from "../../../../assets/fire.svg";

export default function UpcomingHeader() {
  return (
    <div className="upcomingheader__container">
      <div className="upcomingheader__section1">
        <div className="upcomingheader__content">
          <h1>Coming Soon: Your All-in-One Business Solutions</h1>
          <p>
            Your all-in-one platform for your business operations is almost
            here. Including managing your stock levels, optimize supply chain
            management, improve billing accuracy, centralize your customers’
            data, and help your business thrive online. Let’s improve your
            business by investing in these amazing features.{" "}
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="upcomingheader__img">
          <img src={avatar} alt="illustration" />
        </div>
      </div>
      <div className="upcomingheader__section2">
        <h2>All Your Business Systems in One Place</h2>
        <div className="upcomingheader__box-wrapper">
          <div className="upcomingheader__box">
            <img src={fire} alt="fire" />
            <p>Inventory Management</p>
          </div>
          <div className="upcomingheader__box">
            <img src={fire} alt="fire" />
            <p>Customers Relationship Management</p>
          </div>
          <div className="upcomingheader__box">
            <img src={fire} alt="fire" />
            <p>Point of Sales - Billing Systems</p>
          </div>
          <div className="upcomingheader__box">
            <img src={fire} alt="fire" />
            <p>Human Resources Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
