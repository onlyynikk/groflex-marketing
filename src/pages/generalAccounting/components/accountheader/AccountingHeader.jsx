import "./accountheader.css";
import React from "react";
// import accountingframe from "../../../../assets/generalAcc/generalAcc-frame.png";
import avatar from "../../../../assets/generalAcc/generalAcc-avatar.png";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";

import { AiOutlineCheck } from "react-icons/ai";

export default function AccountingHeader() {
  return (
    <div className="account__header--container">
      <div className="account__header--wrapper">
        <div className="account__header--text">
          <h1>Accounting made easy for all</h1>
          <p>
            GrofleX offers an easy all-in-on accounting solution with ledger
            creation, bulk payments, document management, credit and debit
            notes, chart of accounts, and transaction management. Users can
            customize and filter data.
          </p>
          <BtnPrimary text={"sign up for free"} />
        </div>
        <div className="account__header--img">
          <img src={avatar} alt="frame" />
        </div>
      </div>

      <div className="accounting__header--list">
        <h1>Enhanced data management and tracking</h1>
        <div className="accounting__header--list-items">
          <p>
            <AiOutlineCheck className="accounting__checkmark" /> Improved
            organization and management of financial data.
          </p>
          <p>
            <AiOutlineCheck className="accounting__checkmark" /> Enhanced
            tracking of customer transactions and credit balances.
          </p>
          <p>
            <AiOutlineCheck className="accounting__checkmark" /> Accurate and
            efficient classification of financial accounts.
          </p>
          <p>
            <AiOutlineCheck className="accounting__checkmark" /> User-friendly
            tools for managing account transactions.
          </p>
        </div>
      </div>
    </div>
  );
}
