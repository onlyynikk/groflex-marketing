import React from "react";
import "./childrensection.css";
import childrenDesktop from "../../assets/children-desktop.gif";

import tabletchildren from "../../assets/tablet-children.gif";
import phonechildren from "../../assets/phone-children.gif";

export default function ChildrensSection() {
  return (
    <div className="children__section--container">
      <div className="children__banner">
        <h1 className="children__banner--title">
          Changing Lives One Click at a Time:
        </h1>
        <h3 className="children__banner--text">
          grofleX is dedicated to giving 5% of its total revenue to causes that
          benefit children.
        </h3>
      </div>
      <img
        src={childrenDesktop}
        alt="childrens gif"
        className="children-gif "
      />
      <img
        src={tabletchildren}
        alt="childrens gif"
        className="children-gif-tablet"
      />
      <img
        src={phonechildren}
        alt="childrens gif"
        className="children-gif-phone"
      />
    </div>
  );
}
