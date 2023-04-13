import React from "react";
import "./allfeaturesbody.css";

export default function FeatureBox({ data }) {
  return (
    <div>
      <div className="allfeatures__letters--list">
        <h3>{data.title}</h3>
        <p>{data.subtitle}</p>
      </div>
    </div>
  );
}
