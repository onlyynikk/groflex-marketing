import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import cash from "../../../../assets/homepage/cashnbank.png";

export default function Cash() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Cash</h1>
          <p className="section__wrapper--content">
            GrofleX's software suite provides efficient management of cash and
            bank accounts with a comprehensive cash flow chart and user-friendly
            interface. Review and correct amounts and edit transaction details.
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
            src={cash}
            alt="Estimate section"
            className="section__wrapper--gif"
          />
        </div>
      </div>
    </div>
  );
}
