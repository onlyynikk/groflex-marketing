import React from "react";
import "./ecommercebody.css";
import group1 from "../../../../../assets/solutions/ecommerce/group1.png";
import group2 from "../../../../../assets/solutions/ecommerce/group2.png";
import group3 from "../../../../../assets/solutions/ecommerce/group3.png";
import phonegrp1 from "../../../../../assets/solutions/ecommerce/phonegrp1.png";
import phonegrp2 from "../../../../../assets/solutions/ecommerce/phonegrp2.png";
import phonegrp3 from "../../../../../assets/solutions/ecommerce/phonegrp3.png";

export default function EcommerceBody() {
  return (
    <div className="ecommercebody__container">
      <div className="ecommercebody__even--box">
        <div className="ecommercebody__content">
          <h3>Efficient invoicing</h3>
          <p>
            With grofleX's software, e-commerce businesses can streamline
            invoice generation with increased efficiency and accuracy,
            minimizing the risk of errors and saving time.
          </p>
        </div>
        <div className="ecommercebody__img--desktop">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="ecommercebody__img--phone">
          <img src={phonegrp1} alt="screenshot" />
        </div>
      </div>
      <div className="ecommercebody__odd--box">
        <div className="ecommercebody__content">
          <h3>Streamlining business transactions</h3>
          <p>
            GrofleX's software streamlines transactions, optimizing the entire
            process from quotes to invoices for increased efficiency, reducing
            the likelihood of errors or delays and improving customer
            satisfaction.
          </p>
        </div>
        <div className="ecommercebody__img--desktop">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="ecommercebody__img--phone">
          <img src={phonegrp2} alt="screenshot" />
        </div>
      </div>
      <div className="ecommercebody__even--box">
        <div className="ecommercebody__content">
          <h3>Multi-currency support</h3>
          <p>
            With the multi-currency features offered by grofleX's software,
            e-commerce companies can facilitate transactions with customers from
            around the world, increasing their global reach and potentially
            boosting sales.
          </p>
        </div>
        <div className="ecommercebody__img--desktop">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="ecommercebody__img--phone">
          <img src={phonegrp3} alt="screenshot" />
        </div>
      </div>
    </div>
  );
}
