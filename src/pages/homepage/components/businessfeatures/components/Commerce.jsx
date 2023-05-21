import React from "react";
import "./subfeatures.css";
import commerce from "../../../../../assets/homepage/new/commerce.webp";
import { Link } from "react-router-dom";
import arrowright from "../../../../../assets/icons/rightarrow.svg";
import arrowleft from "../../../../../assets/leftarrow.svg";

export default function Commerce({ setNumber, number }) {
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
        <img src={commerce} alt="E-commerce" className="main-img" />
        <img
          src={arrowright}
          alt="right arrow"
          className="arrow"
          onClick={handleRightClick}
        />
      </div>
      <div className="subfeatures__content">
        <h2>E-commerce</h2>
        <p>
          Grow your business in effective and trendy way with grofleX.
          E-commerce also helps you to track customers’ buying behaviour for
          future preferences.
        </p>
        <Link to="/features/upcoming-features">See more</Link>
      </div>
    </div>
  );
}
