import React, { useState } from "react";
import Quatations from "./Quatations";
import Invoices from "./Invoices";
import Payments from "./Payments";
import "./tabsection.css";

export default function TabSection() {
  const [showQuotations, setshowQuotations] = useState(true);
  const [showInvoice, setShowInvoices] = useState(false);
  const [showPayments, setShowPayments] = useState(false);

  function handleEstimate() {
    setshowQuotations(true);
    setShowPayments(false);
    setShowInvoices(false);
  }

  function handleInvoices() {
    setShowInvoices(true);
    setshowQuotations(false);
    setShowPayments(false);
  }
  function handlePayments() {
    setShowPayments(true);
    setShowInvoices(false);
    setshowQuotations(false);
  }

  return (
    <div className="tab__container">
      <h1 className="tab__title">
        Create your brand easily and quickly with simplicity
      </h1>
      <div className="tab__buttons">
        <button
          className={
            showQuotations ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handleEstimate}
        >
          Quotations
        </button>
        <button
          className={
            showInvoice ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handleInvoices}
        >
          Invoices
        </button>
        <button
          className={
            showPayments ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handlePayments}
        >
          Payments
        </button>
      </div>
      <hr />
      {showQuotations && <Quatations />}
      {showInvoice && <Invoices />}
      {showPayments && <Payments />}
    </div>
  );
}
