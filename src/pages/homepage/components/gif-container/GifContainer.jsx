import React from "react";
import "./gifcontainer.css";
import page1 from "../../../../assets/page1.svg";
import page2 from "../../../../assets/page2.svg";
import accgif from "../../../../assets/homepage/new/acc-gif.gif";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/leftarrow.svg";

export default function GifContainer() {
  return (
    <div className="gif__container">
      <h1>Streamline your Finances with our Powerful Accounting Software</h1>
      <div className="gif_img">
        <img src={page1} alt="random" />

        <img src={page2} alt="paper" />
      </div>
      <div className="main__gif">
        <img src={accgif} alt="accounting gif" />
      </div>
      <div className="giff__btn-container">
        <Link to="https://app.groflex.in/">
          Get Started
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
}
