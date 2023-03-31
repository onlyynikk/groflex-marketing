import React from "react";
import { Link } from "react-router-dom";
import casio from "../../assets/casio.svg";
import paper from "../../assets/paper.svg";
import pad from "../../assets/pad.svg";
import "./featurescta.css";

import money from "../../assets/money.svg";

export default function FeaturesCta() {
  return (
    <div className="features__cta--container">
      <div className="features__cta--wrapper">
        <img src={casio} alt="calculator" />
        <h3>Quotations and Invoices</h3>
        <Link to="/features/invoice-and-quotation"> see more</Link>
      </div>
      <div className="features__cta--wrapper">
        <img src={money} alt="calculator" />
        <h3>Cash and Bank</h3>
        <Link to="/features/invoice-and-quotation"> see more</Link>
      </div>
      <div className="features__cta--wrapper">
        <img src={pad} alt="calculator" />
        <h3>General Accounting</h3>
        <Link to="/features/invoice-and-quotation"> see more</Link>
      </div>
      <div className="features__cta--wrapper">
        <img src={paper} alt="calculator" />
        <h3>Financial Reports</h3>
        <Link to="/features/invoice-and-quotation"> see more</Link>
      </div>
    </div>
  );
}
