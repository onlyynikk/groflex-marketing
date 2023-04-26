import React from "react";
import Banner from "../homepage/components/banner/Banner";
import AboutUsHeader from "./aboutusheader/AboutUsHeader";
import AboutUsBody from "./aboutusbody/AboutUsBody";
import AboutUsTestimonials from "./aboutustestimonials/AboutUsTestimonials";
import ChildrensSection from "../../shared/childerns/ChildrensSection";
import "./aboutusheader/aboutusheader.css";

export default function () {
  return (
    <div className="aboutus__main--container">
      <AboutUsHeader />
      <AboutUsBody />
      <AboutUsTestimonials />
      <ChildrensSection />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
