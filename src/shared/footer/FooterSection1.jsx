import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import linkdein from "../../assets/linkdein.svg";
import yt from "../../assets/yt.svg";
import BtnPrimary from "../btnGreen/BtnPrimary";

export default function FooterSection1() {
  return (
    <div className="footer__section1--container">
      <div className="footer__text--container">
        <p className="footer__text">
          Groflex Technology Pvt. Ltd. <br />
          42, P5, Kudlu Main Rd,
          <br /> Muneshwara Layout,
          <br /> Haralukunte, Muneshwara <br /> Nagar, Bengaluru, Karnataka
          <br />
          560068, India
        </p>
        <div className="footer__box-2">
          <div className="footer__box--wrapper">
            <p>Join Us</p>
            <input
              type="text"
              placeholder="Your email"
              className="footer__input"
            />
            <BtnPrimary className="footer__btn" text={"+ Subscribe"} />
          </div>
        </div>
      </div>
      <div className="social__media--icons">
        <div className="social__media--icon">
          <Link to="https://twitter.com/grofleX_tech ">
            <img src={twitter} alt="twitter" />
          </Link>
        </div>
        <div className="social__media--icon">
          <Link to="https://www.facebook.com/groflex">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
        <div className="social__media--icon">
          <Link to="https://www.linkedin.com/company/groflex1/">
            <img src={linkdein} alt="linkdein" />
          </Link>
        </div>
        <div className="social__media--icon">
          <Link to="https://www.youtube.com/channel/UCs95xdDSodwZ4XY0vM0q0aw">
            <img src={yt} alt="youtube" />
          </Link>
        </div>
      </div>
    </div>
  );
}
