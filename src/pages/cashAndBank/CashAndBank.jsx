import React from "react";
import CashnBankBody from "./components/CashnBankBody";
import CashnBankHeader from "./components/CashnBankHeader";

export default function CashAndBank() {
  return (
    <div className="cashnbank__main--container">
      <CashnBankHeader />
      <CashnBankBody />
    </div>
  );
}
