import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function FooterSection1() {
  return (
    <div className="footer__links1">
      <div>
        <div className="footer__ul">
          <h3>Product</h3>
          <Link to="/pricing">Pricing</Link>
          <Link to="/features/all-features">All Features</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-&-conditions">Terms & Conditions</Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Solutions</h3>

          <Link to="/solutions/manufacture">Manufacturing</Link>
          <Link to="/solutions/retail">Retail</Link>
          <Link to="/solutions/E-commerce">E-commerce</Link>
          <Link to="/solutions/small-and-medium-business">
            Small and medium <br />
            sized businesses
          </Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Company</h3>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
        </div>
      </div>
      <div>
        <div className="footer__ul">
          <h3>Learn</h3>
          <Link to="https://blog.groflex.in/">Blogs</Link>
        </div>
      </div>
    </div>
  );
}
