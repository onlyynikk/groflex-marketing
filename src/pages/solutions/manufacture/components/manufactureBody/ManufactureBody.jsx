import React from "react";
import "./manufacturebody.css";
import group1 from "../../../../../assets/solutions/manufacture/group1.webp";
import group2 from "../../../../../assets/solutions/manufacture/group2.webp";
import group3 from "../../../../../assets/solutions/manufacture/group3.webp";
import grp1 from "../../../../../assets/solutions/manufacture/grp1.webp";
import grp2 from "../../../../../assets/solutions/manufacture/grp2.webp";
import grp3 from "../../../../../assets/solutions/manufacture/grp3.webp";
export default function ManufactureBody() {
  return (
    <div className="manufacturebody__container">
      <div className="manufacturebody__item--even">
        <div className="manufacturebody__item--content">
          <h1>Accurate transaction reconciliation</h1>
          <p>
            By comparing and matching bank statements with transaction records,
            manufacturers can ensure that their financial records are accurate
            and up-to-date. This can help prevent errors and improve financial
            transparency.
          </p>
        </div>
        <div className="manufacturebody__item--img--phone">
          <img src={group1} alt="frame3" />
        </div>
        <div className="manufacturebody__item--img--desktop">
          <img src={grp1} alt="frame3" />
        </div>
      </div>
      <div className="manufacturebody__items--odd">
        <div className="manufacturebody__item--content">
          <h1>Improved financial analysis</h1>
          <p>
            The comprehensive cash flow chart can provide manufacturers with a
            clear picture of their financial health and help them identify areas
            that require attention. Gain valuable insights and take necessary
            corrective actions. Improve your financial performance and ensure
            long-time success.
          </p>
        </div>
        <div className="manufacturebody__item--img--phone">
          <img src={group2} alt="frame3" />
        </div>
        <div className="manufacturebody__item--img--desktop">
          <img src={grp2} alt="frame3" />
        </div>
      </div>
      <div className="manufacturebody__item--even">
        <div className="manufacturebody__item--content">
          <h1>Efficient cash and bank account management</h1>
          <p>
            The ability to easily add, edit, and access information about cash
            and bank accounts can help manufacturers stay on top of their
            finances and make informed decisions. Use dashboards available on
            grofleX to make data driven decisions.
          </p>
        </div>
        <div className="manufacturebody__item--img--phone">
          <img src={group3} alt="frame3" />
        </div>
        <div className="manufacturebody__item--img--desktop">
          <img src={grp3} alt="frame3" />
        </div>
      </div>
    </div>
  );
}
