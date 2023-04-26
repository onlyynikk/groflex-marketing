import React from "react";
import CashnBankBody from "./components/CashnBankBody";
import CashnBankHeader from "./header/CashnBankHeader";
import Banner from "../homepage/components/banner/Banner";
import FeaturesCta from "../../helpers/featuresCTA/FeaturesCTA";
import casio from "../../assets/casio.svg";
import pad from "../../assets/pad.svg";
import paper from "../../assets/paper.svg";
export default function CashAndBank() {
  return (
    <div className="cashnbank__main--container">
      <CashnBankHeader />
      <CashnBankBody />
      <FeaturesCta
        img1={casio}
        img2={pad}
        img3={paper}
        title1={"Quotations and Invoices"}
        title2={"General Accounting"}
        title3={"Financial Reports"}
        link1={"/features/invoice-and-quotation"}
        link2={"/features/general-accounting"}
        link3={"/features/reports-page"}
      />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
