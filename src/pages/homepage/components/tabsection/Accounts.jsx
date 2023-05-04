import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import accounts from "../../../../assets/homepage/account.png";

export default function Accounts() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Accounts</h1>
          <p className="section__wrapper--content">
            grofleX offers an all-in-one accounting solution that includes
            document management, chart of accounts, and transaction management.
            Customize and filter data with ease. Manage account transactions
            with user-friendly tools
          </p>
          <div className="section__wrapper--seemore-div">
            <Link
              to="/features/general-accounting"
              className="section__wrapper--seemore"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="section__wrapper--img">
          <img
            src={accounts}
            alt="Estimate section"
            className="section__wrapper--gif"
          />
        </div>
      </div>
    </div>
  );
}
