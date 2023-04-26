import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Features from "./components/feature/Features";
import TabSection from "./components/tabsection/TabSection";
import DataSection from "./components/dataSection/DataSection";
import FaqSection from "./components/faq/FaqSection";
import Banner from "./components/banner/Banner";
import SlideShow from "./components/carousel/SlideShow";
import "./components/feature/features.css";

export default function Homepage() {
  return (
    <div className="homepage__container">
      <HeroSection />
      <Features />
      <TabSection />
      <SlideShow />
      <DataSection />
      <FaqSection />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
