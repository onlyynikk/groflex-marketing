import React from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
import "./btnlight.css";

export default function BtnLight({ text }) {
  return (
    <div>
      <Link className="btn__light btn__margin" to="https://app.groflex.io/">
        {text}
      </Link>
    </div>
  );
}
