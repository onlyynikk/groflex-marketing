import React from "react";
import { Link } from "react-router-dom";
import "./btnprimary.css";
import rocket from "../../assets/rocket.svg";

export default function BtnPrimary({ text, to }) {
  return (
    <div>
      <Link className="btn__primary btnP__margin" to={to}>
        <img src={rocket} alt="rocket" className="btn__icon" />
        {text}
      </Link>
    </div>
  );
}
