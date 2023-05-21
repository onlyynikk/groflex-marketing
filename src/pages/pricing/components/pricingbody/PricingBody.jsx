import React from "react";
import "./pricingbody.css";

import FreePlan from "../FreePlan";
import PaidAccounting from "../PaidAccounting";

export default function PricingBody() {
  return (
    <>
      <FreePlan />
      <PaidAccounting />
    </>
  );
}
