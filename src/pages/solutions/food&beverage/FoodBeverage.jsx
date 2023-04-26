import React from "react";
import FoodBeverageHeader from "./components/foodbeverageheader/FoodBeverageHeader";
import FoodBeverageBody from "./components/foodbeveragebody/FoodBeverageBody";
import Banner from "../../homepage/components/banner/Banner";

export default function FoodBeverage() {
  return (
    <div>
      <FoodBeverageHeader />
      <FoodBeverageBody />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
