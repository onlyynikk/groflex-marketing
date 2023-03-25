import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Navlinks() {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [solutionArrow, setsolutionArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);

  return (
    <div className="navbar__links--wrapper">
      <Link className="navbar__link space-right" to="/">
        Home
      </Link>
      {/* <Link className="navbar__link" to="/">
        Pricing
      </Link> */}

      <Link
        className="navbar__link dropdown"
        to="/invoice-and-quotation"
        onClick={() => setfeaturesArrow(!featuresArrow)}
        // onMouseEnter={() => {
        //   setfeaturesArrow(true);
        // }}
        // onMouseLeave={() => setfeaturesArrow(false)}
      >
        Features
        {!featuresArrow ? (
          <IoIosArrowDown className="navbar__icon" />
        ) : (
          <IoIosArrowUp className="navbar__icon" />
        )}
      </Link>

      {/* <Link
        className="navbar__link dropdown"
        to="/"
        onMouseEnter={() => {
          setsolutionArrow(true);
        }}
        onMouseLeave={() => setsolutionArrow(false)}
      >
        Solutions
        {!solutionArrow ? (
          <IoIosArrowDown className="navbar__icon" />
        ) : (
          <IoIosArrowUp className="navbar__icon" />
        )}
      </Link> */}
      <Link
        className="navbar__link dropdown"
        to="/"
        onMouseEnter={() => {
          setresourcesArrow(true);
        }}
        onMouseLeave={() => setresourcesArrow(false)}
      >
        Resources
        {!resourcesArrow ? (
          <IoIosArrowDown className="navbar__icon" />
        ) : (
          <IoIosArrowUp className="navbar__icon" />
        )}
      </Link>
    </div>
  );
}
