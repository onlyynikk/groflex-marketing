import React from "react";
import "./healthbody.css";
import group1 from "../../../../../assets/solutions/healthwellness/group1.webp";
import group2 from "../../../../../assets/solutions/healthwellness/group2.webp";
import group3 from "../../../../../assets/solutions/healthwellness/group3.webp";

export default function HealthBody() {
  return (
    <div className="healthbody__container">
      <div className="healthbody__box">
        <div className="healthbody__img">
          <img src={group1} alt="group" />
        </div>
        <div className="healthbody__content">
          <h1>Track your expenses</h1>
          <p>
            grofleX's chart of accounts can help companies in the health and
            wellness industry track their expenses by creating different
            categories and subcategories for financial accounts. This can help
            them monitor their expenses more closely and make informed financial
            decisions.
          </p>
        </div>
      </div>
      <div className="healthbody__box">
        <div className="healthbody__img">
          <img src={group2} alt="group" />
        </div>
        <div className="healthbody__content">
          <h1>More sustainability by going paperless</h1>
          <p>
            grofleX's document management feature can help companies in the
            health and wellness industry, reduce their paper usage and become
            more environmentally friendly. Easily access and manage documents
            related to transactions, payments, and other financial activities.
          </p>
        </div>
      </div>
      <div className="healthbody__box">
        <div className="healthbody__img">
          <img src={group3} alt="group" />
        </div>
        <div className="healthbody__content">
          <h1>Asset and liability management</h1>
          <p>
            For companies in the health and wellness industry, there are
            significant investments in assets such as property, equipment, and
            inventory. This feature can help companies keep track of these
            assets, liabilities and get insights into their financial position.
          </p>
        </div>
      </div>
    </div>
  );
}
