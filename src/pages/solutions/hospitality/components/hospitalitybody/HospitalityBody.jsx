import React from "react";
import "./hospitalitybody.css";
import group1 from "../../../../../assets/solutions/hopsitality/group1.webp";
import group2 from "../../../../../assets/solutions/hopsitality/group2.webp";
import group3 from "../../../../../assets/solutions/hopsitality/group3.webp";

export default function HospitalityBody() {
  return (
    <div className="hospitalitybody__container">
      <div className="hospitalitybody__box">
        <div className=" hospitalitybody__img">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="hospitalitybody__content">
          <h2>Maintain a steady cash flow</h2>
          <p>
            Cash flow is critical for companies in the hospitality industry,
            where revenue streams can be variable and seasonal. With this
            feature monitor your inflows and outflows of cash and identify areas
            where there is room for improvement. Reduce costs and invest in
            growth.
          </p>
        </div>
      </div>
      <div className="hospitalitybody__box">
        <div className=" hospitalitybody__img">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="hospitalitybody__content">
          <h2>Credit and Debit Notes</h2>
          <p>
            The credit and debit notes feature can help a hotel or restaurant
            keep track of refunds, returns, and cancellations. This can be
            helpful for managing reservations and cancellations.
          </p>
        </div>
      </div>
      <div className="hospitalitybody__box">
        <div className=" hospitalitybody__img">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="hospitalitybody__content">
          <h2>Manage your transactions</h2>
          <p>
            The user-friendly tool for managing account transactions can help a
            hotel or restaurant reconcile transactions. This can be useful for
            managing cash flow and keeping track of expenses.
          </p>
        </div>
      </div>
    </div>
  );
}
