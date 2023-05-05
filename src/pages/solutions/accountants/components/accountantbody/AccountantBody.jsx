import React from "react";
import "./accountantbody.css";
import group1 from "../../../../../assets/solutions/accountants/group1.webp";
import group2 from "../../../../../assets/solutions/accountants/group2.webp";
import group3 from "../../../../../assets/solutions/accountants/group3.webp";
import phonegrp1 from "../../../../../assets/solutions/accountants/phonegrp1.webp";
import phonegrp2 from "../../../../../assets/solutions/accountants/phonegrp2.webp";
import phonegrp3 from "../../../../../assets/solutions/accountants/phonegrp3.webp";

export default function AccountantBody() {
  return (
    <div className="accountantbody__container">
      <div className="accountantbody__even--box">
        <div className="accountantbody__content">
          <h3>Time to go paperless</h3>
          <p>
            grofleX's chart of accounts allows one to easily monitor expenses by
            categorizing and sub-categorizing financial accounts. The document
            management feature helps reduce paper usage, thereby promoting
            sustainability and also simplifies financial activity documentation.
          </p>
        </div>
        <div className="accountantbody__img--desktop">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="accountantbody__img--phone">
          <img src={phonegrp1} alt="screenshot" />
        </div>
      </div>
      <div className="accountantbody__odd--box">
        <div className="accountantbody__content">
          <h3>Efficient financial optimization</h3>
          <p>
            Monitor your company's financial position, track assets and
            liabilities, identify areas for optimization, and manage cash flow
            effectively. These features can help businesses make informed
            decisions about investments, expansion plans, and debt management.
          </p>
        </div>
        <div className="accountantbody__img--desktop">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="accountantbody__img--phone">
          <img src={phonegrp2} alt="screenshot" />
        </div>
      </div>
      <div className="accountantbody__even--box">
        <div className="accountantbody__content">
          <h3>Streamline your accounting with grofleX</h3>
          <p>
            As an accountant, you can streamline your work process by using the
            credit and debit notes feature and transaction management tool to
            manage refunds, returns, and cancellations for bookings, reconcile
            transactions, and track expenses. This can lead to accurate
            financial records and informed financial decision-making.
          </p>
        </div>
        <div className="accountantbody__img--desktop">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="accountantbody__img--phone">
          <img src={phonegrp3} alt="screenshot" />
        </div>
      </div>
    </div>
  );
}
