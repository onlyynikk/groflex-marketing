import React from "react";
import ReportsHeader from "./components/reportheader/ReportsHeader";
import ReportBody from "./components/reportbody/ReportBody";
import Banner from "../homepage/components/banner/Banner";

export default function Reports() {
  return (
    <div>
      <ReportsHeader />
      <ReportBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
