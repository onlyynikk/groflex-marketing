import "./accountheader.css";
import React from "react";
import hero from "../../../../assets/browser-frame.png";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";

export default function AccountingHeader() {
  return (
    <div className="account__header--container">
      <h1>Accounting made easy for all</h1>
      <div className="account__header--wrapper">
        <div className="account__header--text">
          <p>
            GrofleX offers an easy all-in-on accounting solution with ledger
            creation, bulk payments, document management, credit and debit
            notes, chart of accounts, and transaction management. Users can
            customize and filter data.
          </p>
          <BtnPrimary text={"sign up for free"} />
        </div>
        <div className="account__header--img">
          <img src={hero} alt="frame" />
        </div>
      </div>
    </div>
  );
}
