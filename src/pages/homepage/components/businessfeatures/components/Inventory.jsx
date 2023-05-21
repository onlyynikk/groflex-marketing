import React from "react";
import "./subfeatures.css";
import inventory from "../../../../../assets/homepage/new/inventory.webp";
import { Link } from "react-router-dom";
import arrowright from "../../../../../assets/icons/rightarrow.svg";
import arrowleft from "../../../../../assets/leftarrow.svg";

export default function Inventory({ setNumber, number }) {
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
        <img src={inventory} alt="inventory" className="main-img" />
        <img
          src={arrowright}
          alt="right arrow"
          className="arrow"
          onClick={handleRightClick}
        />
      </div>
      <div className="subfeatures__content">
        <h2>Inventory</h2>
        <p>
          Get to know your products in stock based on your customers’ needs with
          ease. Our tools helps you to gain valuable information about inventory
          trends, sales, and demand.
        </p>
        <Link to="/features/upcoming-features">See more</Link>
      </div>
    </div>
  );
}
