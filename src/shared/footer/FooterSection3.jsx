import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import linkdein from "../../assets/linkdein.svg";
import yt from "../../assets/yt.svg";

export default function FooterSection1() {
  return (
    <div className="footer__box">
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
