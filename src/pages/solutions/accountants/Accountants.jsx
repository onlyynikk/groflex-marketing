import React from "react";
import AccountantHeader from "./components/accountantheader/AccountantHeader";
import AccountantBody from "./components/accountantbody/AccountantBody";
import Banner from "../../homepage/components/banner/Banner";

export default function Accountants() {
  return (
    <div>
      <AccountantHeader />
      <AccountantBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
