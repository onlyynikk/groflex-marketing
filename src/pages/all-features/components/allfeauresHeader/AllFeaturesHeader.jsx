import React from "react";
import "./allfeaturesheader.css";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";

export default function AllFeaturesHeader() {
  return (
    <div className="allfeatures__header--container">
      <h1>All grofleX functions in brief</h1>
      <p>One Software with Many functions</p>
      <BtnPrimary text={"Sign up for free"} />
    </div>
  );
}
