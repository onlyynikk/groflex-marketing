import React from "react";
import "./subfeatures.css";
import crm from "../../../../../assets/homepage/new/crm.webp";
import { Link } from "react-router-dom";
import arrowright from "../../../../../assets/icons/rightarrow.svg";
import arrowleft from "../../../../../assets/leftarrow.svg";

export default function Crm({ setNumber, number }) {
  function handleLeftClick() {
    if (number === 1) return;
    setNumber(number - 1);
  }
  function handleRightClick() {
    if (number === 6) {
      setNumber(1);
    } else {
      setNumber(number + 1);
    }
  }
  return (
    <div className="subfeatures__container">
      <div className="subfeatures__img">
        <img
          src={arrowleft}
          alt="left arrow"
          className="arrow"
          onClick={handleLeftClick}
        />
        <img src={crm} alt="CRM" className="main-img" />
        <img
          src={arrowright}
          alt="right arrow"
          className="arrow"
          onClick={handleRightClick}
        />
      </div>
      <div className="subfeatures__content">
        <h2>Customers Relationship Management</h2>
        <p>
          Keep your business healthy by manage your contact information and
          streamline customers’ relation within one place. Use our features to
          engage relationship with your clients.
        </p>
        <Link to="/features/upcoming-features">See more</Link>
      </div>
    </div>
  );
}
