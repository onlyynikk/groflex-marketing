import React from "react";
import ManufactureHeader from "./components/manufactureHeader/ManufactureHeader";
import ManufactureBody from "./components/manufactureBody/ManufactureBody";
import Banner from "../../homepage/components/banner/Banner";

export default function Manufacture() {
  return (
    <div>
      <ManufactureHeader />
      <ManufactureBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
