import React from "react";
import BusinessOwnerHeader from "./components/businessownerheader/BusinessOwnerHeader";
import BusinessOwnerBody from "./components/businessownerbody/BusinessOwnerBody";
import Banner from "../../homepage/components/banner/Banner";

export default function BusinessOwners() {
  return (
    <div>
      <BusinessOwnerHeader />
      <BusinessOwnerBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
