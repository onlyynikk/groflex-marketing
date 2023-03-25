import React from "react";
import "./banner.css";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";

export default function Banner({ title, subtitle }) {
  return (
    <div className="banner__container">
      <h1 className="banner__title">{title}</h1>
      <p className="banner__text">{subtitle}</p>
      <BtnPrimary text={"Sign up for free"} />
    </div>
  );
}
