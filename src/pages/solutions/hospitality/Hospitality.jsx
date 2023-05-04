import React from "react";
import Banner from "../../homepage/components/banner/Banner";
import HospitalityHeader from "./components/hospitalityheader/HospitalityHeader";
import HospitalityBody from "./components/hospitalitybody/HospitalityBody";

export default function Hospitality() {
  return (
    <div>
      <HospitalityHeader />
      <HospitalityBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
