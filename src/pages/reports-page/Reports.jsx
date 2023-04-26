import React from "react";
import ReportsHeader from "./components/reportheader/ReportsHeader";
import ReportBody from "./components/reportbody/ReportBody";
import Banner from "../homepage/components/banner/Banner";
import FeaturesCta from "../../helpers/featuresCTA/FeaturesCTA";
import casio from "../../assets/casio.svg";
import money from "../../assets/money.svg";
import pad from "../../assets/pad.svg";

export default function Reports() {
  return (
    <div>
      <ReportsHeader />
      <ReportBody />
      <FeaturesCta
        img1={casio}
        img2={money}
        img3={pad}
        title1={"Quotations and Invoices"}
        title2={"Cash and Bank"}
        title3={"General Accounting"}
        link1={"/features/invoice-and-quotation"}
        link2={"/features/cash&bank-and-reconcilliation"}
        link3={"/features/general-accounting"}
      />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
