import React from "react";
import HealthHeader from "./components/healthheader/HealthHeader";
import HealthBody from "./components/healthbody/HealthBody";
import Banner from "../../homepage/components/banner/Banner";

export default function HealthWellness() {
  return (
    <div>
      <HealthHeader />
      <HealthBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
