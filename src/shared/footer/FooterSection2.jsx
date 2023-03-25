import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function FooterSection1() {
  return (
    <div className="footer__links1">
      <div>
        <div className="footer__ul">
          <h3>Product</h3>
          <Link>Pricing</Link>
          <Link to="/invoice-and-quotation">Features</Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Learn</h3>

          <Link>Resources</Link>
          <Link>Blog</Link>
          <Link>Help Center</Link>
          <Link>Success Stories </Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Company</h3>
          <Link to="/contact-us">Contact Us</Link>
          <Link>Careers</Link>
          <Link to="/terms-&-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
