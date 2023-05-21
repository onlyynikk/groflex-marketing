import React from "react";
import "./subfeatures.css";
import pos from "../../../../../assets/homepage/new/pos.webp";
import { Link } from "react-router-dom";
import arrowright from "../../../../../assets/icons/rightarrow.svg";
import arrowleft from "../../../../../assets/leftarrow.svg";

export default function Billing({ setNumber, number }) {
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
        <img src={pos} alt="PoS" className="main-img" />
        <img
          src={arrowright}
          alt="right arrow"
          className="arrow"
          onClick={handleRightClick}
        />
      </div>
      <div className="subfeatures__content">
        <h2>Point of sales</h2>
        <p>
          Make your payments easier. Generate your invoice and collect it with
          various method within a few clicks. You may also set up payment
          reminders for clients
        </p>
        <Link to="/features/upcoming-features">See more</Link>
      </div>
    </div>
  );
}
