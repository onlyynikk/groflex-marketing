import React from "react";
import PricingHeader from "./components/pricingheader/PricingHeader";
import PricingBody from "./components/pricingbody/PricingBody";
import Banner from "../homepage/components/banner/Banner";

export default function Pricing() {
  return (
    <div>
      <PricingHeader />
      <PricingBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
