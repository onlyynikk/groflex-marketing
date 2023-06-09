import React from "react";
import QuotationFeature from "./QuotationFeature";
import "./featuresquotation.css";
import { data1, data2, data3, data4, data5, data6 } from "../Data";
import group1 from "../../../../../assets/i&q/group1.webp";
import group2 from "../../../../../assets/i&q/group2.webp";
import group3 from "../../../../../assets/i&q/group3.webp";
import group4 from "../../../../../assets/i&q/group4.webp";
import group5 from "../../../../../assets/i&q/group5.webp";
import group6 from "../../../../../assets/i&q/group6.webp";
import phonegrp1 from "../../../../../assets/i&q/phonegrp1.webp";
import phonegrp2 from "../../../../../assets/i&q/phonegrp2.webp";
import phonegrp3 from "../../../../../assets/i&q/phonegrp3.webp";
import phonegrp4 from "../../../../../assets/i&q/phonegrp4.webp";
import phonegrp5 from "../../../../../assets/i&q/phonegrp5.webp";
import phonegrp6 from "../../../../../assets/i&q/phonegrp6.webp";
import FeaturesCta from "../../../../../helpers/featuresCTA/FeaturesCTA";
import money from "../../../../../assets/money.svg";
import pad from "../../../../../assets/pad.svg";
import paper from "../../../../../assets/paper.svg";

import Banner from "../../../../homepage/components/banner/Banner";

export default function QuotaionFeatures() {
  return (
    <div className="quotation__body--container">
      <div className="features__page--desktop">
        <div className="features__section--item-box1">
          <div className="features__section--gif-odd">
            <img src={group1} alt="invoice" />
          </div>
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp1} data={data1} />
          </div>
        </div>
        <div className="features__section--item-box2 gradient__blur">
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp2} data={data2} />
          </div>
          <div className="features__section--gif-even">
            <img src={group2} alt="invoice" />
          </div>
        </div>
        <div className="features__section--item-box1">
          <div className="features__section--gif-odd">
            <img src={group3} alt="invoice" />
          </div>
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp3} data={data3} />
          </div>
        </div>

        <Banner
          title={
            "Ready to simplify your invoicing and quoting process? Try grofleX today!"
          }
          subtitle={
            "Say hello to an efficient business management with our powerful app."
          }
        />
        <div className="features__section--item-box2">
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp4} data={data4} />
          </div>
          <div className="features__section--gif-even">
            <img src={group4} alt="invoice" />
          </div>
        </div>
        <div className="features__section--item-box1 gradient__blur">
          <div className="features__section--gif-odd">
            <img src={group5} alt="invoice" />
          </div>
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp5} data={data5} />
          </div>
        </div>
        <div className="features__section--item-box2">
          <div className="features__section-data">
            <QuotationFeature phonegrp={phonegrp6} data={data6} />
          </div>
          <div className="features__section--gif-even">
            <img src={group6} alt="invoice" />
          </div>
        </div>
      </div>

      <FeaturesCta
        img1={money}
        img2={pad}
        img3={paper}
        title1={"Cash And Bank"}
        title2={"General Accounting"}
        title3={"Financial Reports"}
        link1={"/features/cash&bank-and-reconcilliation"}
        link2={"/features/general-accounting"}
        link3={"/features/reports-page"}
      />
    </div>
  );
}
