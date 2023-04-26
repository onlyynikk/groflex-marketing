import React from "react";
import InvoiceHeader from "./components/invoiceheader/InvoiceHeader";
import QuotaionFeatures from "./components/features/quoatationContainer/QuotaionFeatures";
import Banner from "../homepage/components/banner/Banner";

export default function InvoiceAndQuotation() {
  return (
    <div>
      <InvoiceHeader />
      <QuotaionFeatures />

      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
