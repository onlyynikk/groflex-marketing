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
        title={
          "Ready to simplify your invoicing and quoting process? Try grofleX today!"
        }
        subtitle={
          "Say hello to an efficient business management with our powerful app."
        }
      />
    </div>
  );
}
