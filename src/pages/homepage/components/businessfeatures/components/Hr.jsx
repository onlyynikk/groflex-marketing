import React from "react";
import "./subfeatures.css";
import hr from "../../../../../assets/homepage/new/Hr.webp";
import { Link } from "react-router-dom";
import arrowright from "../../../../../assets/icons/rightarrow.svg";
import arrowleft from "../../../../../assets/leftarrow.svg";

export default function Hr({ setNumber, number }) {
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
        <img src={hr} alt="HR" className="main-img" />
        <img
          src={arrowright}
          alt="right arrow"
          className="arrow"
          onClick={handleRightClick}
        />
      </div>
      <div className="subfeatures__content">
        <h2>Human Resources</h2>
        <p>
          Identify your specific employee and vizualise the results by measuring
          employee’s performance to track your cost control such as salary,
          payroll, etc.
        </p>
        <Link to="/features/upcoming-features">See more</Link>
      </div>
    </div>
  );
}
