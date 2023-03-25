import React, { useState } from "react";
import "./featuresquotation.css";
import FeaturesItem from "./FeaturesItem";
import "./featuresquotation.css";

export default function QuotationFeature({ data, phonegrp }) {
  const [show, setShow] = useState(0);
  return (
    <div className="invoice__feature--wrapper">
      <div className="invoice__feature--title">
        <h1>{data[0].title}</h1>
      </div>
      <div className="invoice__feature--subtitle">
        <p>{data[0].subtitle}</p>
      </div>
      <div className="features__page--mobile-img">
        <img src={phonegrp} alt="inovice" />
      </div>
      <div>
        <FeaturesItem
          id={data[1].id}
          show={show}
          setShow={setShow}
          question={data[1].question}
          answer={data[1].answer}
        />
        <FeaturesItem
          id={data[2].id}
          show={show}
          setShow={setShow}
          question={data[2].question}
          answer={data[2].answer}
        />
        <FeaturesItem
          id={data[3].id}
          show={show}
          setShow={setShow}
          question={data[3].question}
          answer={data[3].answer}
        />
      </div>
    </div>
  );
}
