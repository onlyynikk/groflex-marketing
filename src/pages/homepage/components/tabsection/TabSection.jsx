import React, { useState } from "react";
import Quatations from "./Quatations";
import Invoices from "./Invoices";
import Payments from "./Payments";
import Cash from "./Cash";
import Accounts from "./Accounts";
import Streamline from "./Streamline";
import "./tabsection.css";

export default function TabSection() {
  const [showQuotations, setshowQuotations] = useState(true);
  const [showInvoice, setShowInvoices] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showCash, setshowCash] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [showStreamline, setshowStreamline] = useState(false);

  function handleEstimate() {
    setshowQuotations(true);
    setShowPayments(false);
    setShowInvoices(false);
    setshowCash(false);
    setshowAccount(false);
    setshowStreamline(false);
  }

  function handleInvoices() {
    setShowInvoices(true);
    setshowQuotations(false);
    setShowPayments(false);
    setshowCash(false);
    setshowAccount(false);
    setshowStreamline(false);
  }
  function handlePayments() {
    setShowPayments(true);
    setShowInvoices(false);
    setshowQuotations(false);
    setshowCash(false);
    setshowAccount(false);
    setshowStreamline(false);
  }

  function handleCash() {
    setshowCash(true);
    setShowPayments(false);
    setShowInvoices(false);
    setshowQuotations(false);

    setshowAccount(false);
    setshowStreamline(false);
  }
  function handleAccounts() {
    setshowCash(false);
    setShowPayments(false);
    setShowInvoices(false);
    setshowQuotations(false);

    setshowAccount(true);
    setshowStreamline(false);
  }
  function handleStreamline() {
    setshowCash(false);
    setShowPayments(false);
    setShowInvoices(false);
    setshowQuotations(false);

    setshowAccount(false);
    setshowStreamline(true);
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

        <button
          className={
            showCash ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handleCash}
        >
          Cash and Bank
        </button>

        <button
          className={
            showAccount ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handleAccounts}
        >
          Accounting
        </button>

        <button
          className={
            showStreamline ? "tab__button tab__button--active" : "tab__button"
          }
          onClick={handleStreamline}
        >
          Streamline
        </button>
      </div>
      <hr />
      {showQuotations && <Quatations />}
      {showInvoice && <Invoices />}
      {showPayments && <Payments />}
      {showCash && <Cash />}
      {showAccount && <Accounts />}
      {showStreamline && <Streamline />}
    </div>
  );
}
