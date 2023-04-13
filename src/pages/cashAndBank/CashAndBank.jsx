import React from "react";
import CashnBankBody from "./components/CashnBankBody";
import CashnBankHeader from "./header/CashnBankHeader";
import Banner from "../homepage/components/banner/Banner";

export default function CashAndBank() {
  return (
    <div className="cashnbank__main--container">
      <CashnBankHeader />
      <CashnBankBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
