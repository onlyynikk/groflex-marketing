import React from "react";
import "./businessownerbody.css";
import group1 from "../../../../../assets/solutions/businessowner/group1.webp";
import group2 from "../../../../../assets/solutions/businessowner/group2.webp";
import group3 from "../../../../../assets/solutions/businessowner/group3.webp";
import phonegrp1 from "../../../../../assets/solutions/businessowner/phonegrp1.webp";
import phonegrp2 from "../../../../../assets/solutions/businessowner/phonegrp2.webp";
import phonegrp3 from "../../../../../assets/solutions/businessowner/phonegrp3.webp";

export default function BusinessOwnerBody() {
  return (
    <div className="businessownerbody__container">
      <div className="businessownerbody__even--box">
        <div className="businessownerbody__content">
          <h3>Payments made easy</h3>
          <p>
            Payment gateway integration feature allows acceptance of payments
            through multiple methods. Multi-currency feature facilitates
            international transactions and deal with customers in different
            countries without a worry.
          </p>
        </div>
        <div className="businessownerbody__img--desktop">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="businessownerbody__img--phone">
          <img src={phonegrp1} alt="screenshot" />
        </div>
      </div>
      <div className="businessownerbody__odd--box">
        <div className="businessownerbody__content">
          <h3>Adhere with legal frameworks</h3>
          <p>
            GST-compliant invoicing feature helps retailers comply with local
            tax laws and regulations. These features can improve the payment
            collection process, expand the customer base, and ensure legal
            compliance.
          </p>
        </div>
        <div className="businessownerbody__img--desktop">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="businessownerbody__img--phone">
          <img src={phonegrp2} alt="screenshot" />
        </div>
      </div>
      <div className="businessownerbody__even--box">
        <div className="businessownerbody__content">
          <h3>Optimal Cash Handling</h3>
          <p>
            The feature of accurate transaction reconciliation, cash flow chart
            and efficient cash management ensures up-to-date, transparent
            financial records with better analysis, decision-making and error
            prevention for business owners.
          </p>
        </div>
        <div className="businessownerbody__img--desktop">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="businessownerbody__img--phone">
          <img src={phonegrp3} alt="screenshot" />
        </div>
      </div>
    </div>
  );
}
