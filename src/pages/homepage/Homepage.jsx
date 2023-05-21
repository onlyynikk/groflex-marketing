import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Features from "./components/feature/Features";
import TabSection from "./components/tabsection/TabSection";
import DataSection from "./components/dataSection/DataSection";
import Banner from "./components/banner/Banner";
import SlideShow from "./components/carousel/SlideShow";
import "./components/feature/features.css";
import GifContainer from "./components/gif-container/GifContainer";
import MainFeatures from "./components/businessfeatures/MainFeatures";
import UpcomingFeaturesBanner from "./upcomingfeaturesbanner/UpcomingFeaturesBanner";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <TabSection />
      <SlideShow />
      <GifContainer />
      <MainFeatures />
      <DataSection />
      <UpcomingFeaturesBanner />
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
