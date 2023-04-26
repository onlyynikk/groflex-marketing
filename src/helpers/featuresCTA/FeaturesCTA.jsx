import React from "react";
import { Link } from "react-router-dom";
import "./featurescta.css";

export default function FeaturesCta({
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="features__CTA--container">
      <div className="features__CTA--item">
        <img src={img1} />
        <h4>{title1}</h4>
        <Link to={link1}>see more</Link>
      </div>
      <div className="features__CTA--item">
        <img src={img2} />
        <h4> {title2} </h4>
        <Link to={link2}>see more</Link>
      </div>
      <div className="features__CTA--item">
        <img src={img3} />
        <h4> {title3} </h4>
        <Link to={link3}>see more</Link>
      </div>
    </div>
  );
}
