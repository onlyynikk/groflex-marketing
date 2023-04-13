import React from "react";
import AccountingHeader from "./components/accountheader/AccountingHeader";
import AccountingBody from "./components/accountingBody/AccountingBody";
import Banner from "../homepage/components/banner/Banner";

export default function GeneralAccounting() {
  return (
    <div>
      <AccountingHeader />
      <AccountingBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
