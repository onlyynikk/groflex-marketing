import React from "react";
import CfoHeader from "./components/cfoheader/CfoHeader";
import CfoBody from "./components/cfobody/CfoBody";
import Banner from "../../homepage/components/banner/Banner";

export default function Cfo() {
  return (
    <div>
      <CfoHeader />
      <CfoBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
