import React from "react";
import AccountingHeader from "./components/accountheader/AccountingHeader";
import AccountingBody from "./components/accountingBody/AccountingBody";
import Banner from "../homepage/components/banner/Banner";
import FeaturesCta from "../../helpers/featuresCTA/FeaturesCTA";
import casio from "../../assets/casio.svg";
import money from "../../assets/money.svg";
import paper from "../../assets/paper.svg";

export default function GeneralAccounting() {
  return (
    <div>
      <AccountingHeader />
      <AccountingBody />
      <FeaturesCta
        img1={casio}
        img2={money}
        img3={paper}
        title1={"Quotations and Invoices"}
        title2={"Cash and Bank"}
        title3={"Financial Reports"}
        link1={"/features/invoice-and-quotation"}
        link2={"/features/cash&bank-and-reconcilliation"}
        link3={"/features/reports-page"}
      />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
