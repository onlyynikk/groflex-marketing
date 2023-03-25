import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import "./btnprimary.css";
import rocket from "../../assets/rocket.svg";

export default function BtnPrimary({ text }) {
  return (
    <div>
      <Link className="btn__primary btnP__margin" to="https://app.groflex.io/">
        {/* <MdOutlineRocketLaunch  /> */}
        <img src={rocket} alt="rocket" className="btn__icon" />
        {text}
      </Link>
    </div>
  );
}
