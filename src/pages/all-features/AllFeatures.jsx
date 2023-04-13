import React from "react";
import AllFeaturesHeader from "./components/allfeauresHeader/AllFeaturesHeader";
import AllfeaturesBody from "./components/allfeaturebody/AllfeaturesBody";
import Banner from "../homepage/components/banner/Banner";

export default function AllFeatures() {
  return (
    <>
      <AllFeaturesHeader />
      <AllfeaturesBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </>
  );
}
