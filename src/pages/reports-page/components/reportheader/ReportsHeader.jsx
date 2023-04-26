import React from "react";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";
import "./reportsheader.css";
// import frame from "../../../../assets/reports/reports-hero.png";
import avatar from "../../../../assets/reports/reports-avatar.png";
import { FcCheckmark } from "react-icons/fc";

export default function ReportsHeader() {
  return (
    <div className="reports__header--container">
      <div className="reports__header--section1">
        <div className="reports__header--text">
          <h1>Your Financial Reports in one place</h1>
          <p>
            Access your core financial statements to have a better grasp of your
            financial health and easily strategise for an upward trajectory for
            the future.
          </p>
          <BtnPrimary
            text={"Sign up for free"}
            to={"https://app.groflex.in/"}
          />
        </div>
        <div className="reports__header--img">
          <img src={avatar} alt="gif" />
        </div>
      </div>
      <div className="reports__header--list">
        <h1>Simplifying financial reporting for businesses</h1>
        <div className="reports__list--items">
          <div className="report__list--item">
            <span className="reports__checkmark--icon">
              <FcCheckmark />
            </span>

            <p>Improved financial health through informed strategies.</p>
          </div>
          <div className="report__list--item">
            <span className="reports__checkmark--icon">
              <FcCheckmark />
            </span>
            <p>Enhanced cash flow visibility for decisions.</p>
          </div>
          <div className="report__list--item">
            <span className="reports__checkmark--icon">
              <FcCheckmark />
            </span>
            <p>Better tracking, informed decisions, improved performance.</p>
          </div>
          <div className="report__list--item">
            <span className="reports__checkmark--icon">
              <FcCheckmark />
            </span>
            <p>Streamlined financial reporting for optimized management.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
