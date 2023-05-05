import React from "react";
import "./cfobody.css";
import group1 from "../../../../../assets/solutions/CFO/group1.webp";
import group2 from "../../../../../assets/solutions/CFO/group2.webp";
import group3 from "../../../../../assets/solutions/CFO/group3.webp";

export default function CfoBody() {
  return (
    <div className="cfobody__container">
      <div className="cfobody__box">
        <div className="cfobody__img">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="cfobody__content">
          <h2>Efficiently streamline your business</h2>
          <p>
            grofleX software offers efficient invoicing that generates accurate
            invoices quickly, minimizing errors and speeding up the invoicing
            process. It streamlines transactions from quotes to invoices,
            reducing errors and making the process more efficient.
          </p>
        </div>
      </div>
      <div className="cfobody__box">
        <div className="cfobody__img">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="cfobody__content">
          <h2>Across the borders</h2>
          <p>
            The software's multi-currency feature helps transact with customers
            from different countries, while the real-time dashboard feature
            provides businesses with updates on their transactions and financial
            performance in real-time.
          </p>
        </div>
      </div>
      <div className="cfobody__box">
        <div className="cfobody__img">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="cfobody__content">
          <h2>Make data-driven decisions</h2>
          <p>
            Create customer-specific ledgers and track sales, expenses, and
            inventory. The Profit and Loss Statement can track revenue, cost of
            goods sold, gross profit, and net income, enabling informed
            decisions and identifying areas for improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
