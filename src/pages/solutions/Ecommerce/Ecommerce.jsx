import React from "react";
import EcommerceHeader from "./components/ecommerceheader/EcommerceHeader";
import EcommerceBody from "./components/ecommercebody/EcommerceBody";
import Banner from "../../homepage/components/banner/Banner";

export default function Ecommerce() {
  return (
    <div>
      <EcommerceHeader />
      <EcommerceBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
