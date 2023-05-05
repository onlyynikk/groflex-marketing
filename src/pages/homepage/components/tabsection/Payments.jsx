import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import payments from "../../../../assets/homepage/payment.webp";

export default function Payments() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Payments</h1>
          <p className="section__wrapper--content">
            Accept instant online payments with multiple options including
            credit/debit cards, UPI, and net banking. Record partial or full
            payments against invoices and set reminders for balance payments.
          </p>
          <div className="section__wrapper--seemore-div">
            <Link
              to="/features/invoice-and-quotation"
              className="section__wrapper--seemore"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="section__wrapper--img">
          <img
            src={payments}
            alt="Estimate section"
            className="section__wrapper--gif"
          />
        </div>
      </div>
    </div>
  );
}
