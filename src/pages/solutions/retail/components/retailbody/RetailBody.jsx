import React from "react";
import "./retailbody.css";
import group1 from "../../../../../assets/solutions/retail/group1.png";
import group2 from "../../../../../assets/solutions/retail/group2.png";
import group3 from "../../../../../assets/solutions/retail/group3.png";

export default function RetailBody() {
  return (
    <div className="retailbody__container">
      <div className="retailbody__box">
        <div className="retailbody__box--img">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="retailbody__box--text">
          <h3>Integration with Payment Gateways</h3>
          <p>
            grofleX’s integration with payment gateways enables retailers to
            accept payments through various payment methods, including credit
            cards, debit cards, and online payment systems. improve your payment
            collection process and enhance the overall customer experience.
          </p>
        </div>
      </div>
      <div className="retailbody__box">
        <div className="retailbody__box--img">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="retailbody__box--text">
          <h3>Multi-Currency Features</h3>
          <p>
            Our software's multi-currency feature enables retailers to conduct
            international transactions with ease, making it easier to deal with
            customers in different countries. Avoid currency conversion issues
            and streamline your international business operations.
          </p>
        </div>
      </div>
      <div className="retailbody__box">
        <div className="retailbody__box--img">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="retailbody__box--text">
          <h3>GST-Compliant Invoices</h3>
          <p>
            The ability to generate GST-compliant invoices is a key feature of
            grofleX. This helps retailers ensure that their invoices meet the
            requirements of local tax laws and regulations. Stay up-to-date with
            the latest tax laws and avoid penalties for non-compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
