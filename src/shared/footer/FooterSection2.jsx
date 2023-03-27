import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function FooterSection1() {
  return (
    <div className="footer__links1">
      <div>
        <div className="footer__ul">
          <h3>Product</h3>
          <Link to="/features/invoice-and-quotation">Features</Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Learn</h3>

          <Link to="https://groflex.io/blog/">Blog</Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Company</h3>
          <Link to="/contact-us">Contact Us</Link>

          <Link to="/terms-&-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
