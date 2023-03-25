import React, { useState } from "react";
import Quatations from "./Quatations";
import Invoices from "./Invoices";
import Payments from "./Payments";
import "./tabsection.css";

export default function TabSection() {
  const [showEstimate, setShowEstimate] = useState(true);
  const [showInvoice, setShowInvoices] = useState(false);
  const [showPayments, setShowPayments] = useState(false);

  function handleEstimate() {
    setShowEstimate(true);
    setShowPayments(false);
    setShowInvoices(false);
  }

  function handleInvoices() {
    setShowInvoices(true);
    setShowEstimate(false);
    setShowPayments(false);
  }
  function handlePayments() {
    setShowPayments(true);
    setShowInvoices(false);
    setShowEstimate(false);
  }

  return (
    <div className="tab__container">
      <h1 className="tab__title">
        Create your brand easily and quickly with simplicity
      </h1>
      <div className="tab__buttons">
        <button className="tab__button" onClick={handleEstimate}>
          Quotations
        </button>
        <button className="tab__button" onClick={handleInvoices}>
          Invoices
        </button>
        <button className="tab__button" onClick={handlePayments}>
          Payments
        </button>
      </div>
      <hr />
      {showEstimate && <Quatations />}
      {showInvoice && <Invoices />}
      {showPayments && <Payments />}
    </div>
  );
}
