import React from "react";
import "./footer.css";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";
import groflex1 from "../../assets/groflex-name-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer__wrapper--main">
      <div>
        <Link to="/" className="name-logo">
          <img src={groflex1} alt="name logo" className="name-logo" />
        </Link>
      </div>
      <div className="footer__main--container">
        <FooterSection1 />

        <FooterSection2 />
        <FooterSection3 />
      </div>
      <div className="copyright__section">
        <p>
          Made with lots of 💚 and ☕️ around the 🌍 | Copyright @ Groflex
          Technology Private Limited 2023
        </p>
      </div>
    </div>
  );
}
