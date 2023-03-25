import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import invoice from "../../../../assets/invoice.gif";

export default function Invoices() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Invoices</h1>
          <p className="section__wrapper--content">
            Track your financial transactions and ensure timely payment from
            your clients or customers and improve your cash flow. Easily
            generate invoices online, add company name, logo, digital signature,
            and you are done.
          </p>
          <div className="section__wrapper--seemore-div">
            <Link to="/" className="section__wrapper--seemore">
              See more
            </Link>
          </div>
        </div>
        <div className="section__wrapper--img">
          <img
            src={invoice}
            alt="Estimate section"
            className="section__wrapper--gif"
          />
        </div>
      </div>
    </div>
  );
}
