import React from "react";
import SmallBusinessHeader from "./components/smallbusinessheader/SmallBusinessHeader";
import SmallBusinessBody from "./components/smallbusinessbody/SmallBusinessBody";
import Banner from "../../homepage/components/banner/Banner";

export default function SmallMediumBusiness() {
  return (
    <div>
      <SmallBusinessHeader />
      <SmallBusinessBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
