import React from "react";
import RetailHeader from "./components/retailheader/RetailHeader";
import RetailBody from "./components/retailbody/RetailBody";
import Banner from "../../homepage/components/banner/Banner";

export default function Retail() {
  return (
    <div>
      <RetailHeader />
      <RetailBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
