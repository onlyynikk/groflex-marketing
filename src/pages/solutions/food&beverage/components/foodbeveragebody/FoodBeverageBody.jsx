import React from "react";
import "./foodbeveragebody.css";
import group1 from "../../../../../assets/solutions/foodbeverage/group1.webp";
import group2 from "../../../../../assets/solutions/foodbeverage/group2.webp";
import group3 from "../../../../../assets/solutions/foodbeverage/group3.webp";
import phonegrp1 from "../../../../../assets/solutions/foodbeverage/phonegrp1.webp";
import phonegrp2 from "../../../../../assets/solutions/foodbeverage/phonegrp2.webp";
import phonegrp3 from "../../../../../assets/solutions/foodbeverage/phonegrp3.webp";

export default function FoodBeverageBody() {
  return (
    <div className="foodbeveragebody__container">
      <div className="foodbeveragebody__even--box">
        <div className="foodbeveragebody__even--content">
          <h1>Real-time Dashboard Updates</h1>
          <p>
            grofleX's software suite allows businesses to keep track of their
            financial performance and transactions in real-time, providing
            valuable insights to aid in decision-making.
          </p>
        </div>
        <div className="foodbeveragebody__even--img">
          <img src={group1} alt="group1" />
        </div>
        <div className="foodbeveragebody__phone--img">
          <img src={phonegrp1} alt="group1" />
        </div>
      </div>
      <div className="foodbeveragebody__odd--box">
        <div className="foodbeveragebody__odd--content">
          <h1>Creating ledgers never been easier</h1>
          <p>
            grofleX's software allows businesses to maintain customer-specific
            ledgers, providing them with a more organized and efficient way of
            tracking sales, expenses, and inventory management.
          </p>
        </div>
        <div className="foodbeveragebody__even--img">
          <img src={group2} alt="group2" />
        </div>
        <div className="foodbeveragebody__phone--img">
          <img src={phonegrp2} alt="group1" />
        </div>
      </div>
      <div className="foodbeveragebody__even--box">
        <div className="foodbeveragebody__even--content">
          <h1>The profit & loss statement</h1>
          <p>
            This feature can help food and beverage companies track their
            revenue, cost of goods sold, gross profit, and net income. It can
            also help companies make informed decisions about pricing
            strategies, menu offerings, and marketing campaigns.
          </p>
        </div>
        <div className="foodbeveragebody__even--img">
          <img src={group3} alt="group1" />
        </div>
        <div className="foodbeveragebody__phone--img">
          <img src={phonegrp3} alt="group1" />
        </div>
      </div>
    </div>
  );
}
