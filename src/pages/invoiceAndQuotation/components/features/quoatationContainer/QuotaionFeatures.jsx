import React from "react";
import QuotationFeature from "./QuotationFeature";
import "./featuresquotation.css";
import { data1, data2, data3, data4, data5, data6 } from "../Data";
import group1 from "../../../../../assets/group1.png";
import group2 from "../../../../../assets/group2.png";
import group3 from "../../../../../assets/group3.png";
import group4 from "../../../../../assets/group4.png";
import group5 from "../../../../../assets/group5.png";
import group6 from "../../../../../assets/group6.png";
import phonegrp1 from "../../../../../assets/phonegrp1.png";
import phonegrp2 from "../../../../../assets/phonegrp2.png";
import phonegrp3 from "../../../../../assets/phonegrp3.png";
import phonegrp4 from "../../../../../assets/phonegrp4.png";
import phonegrp5 from "../../../../../assets/phonegrp5.png";
import phonegrp6 from "../../../../../assets/phonegrp6.png";

import Banner from "../../../../homepage/components/banner/Banner";

export default function QuotaionFeatures() {
  return (
    <div>
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
    </div>
  );
}
