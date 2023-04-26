import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import quotations from "../../../../assets/homepage/quotation.png";

export default function Quatations() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Quotations</h1>
          <p className="section__wrapper--content">
            Seal business deals swiftly with professional quotations by adding
            customer, article details and payment terms in a few clicks. Send
            the ready to roll quotations hassle-free, via email or through a
            direct link. See more
          </p>
          <div className="section__wrapper--seemore-div">
            <Link
              to="/features/invoice-and-quotation"
              className="section__wrapper--seemore"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="section__wrapper--img">
          <img
            src={quotations}
            alt="Estimate section"
            className="section__wrapper--gif"
          />
        </div>
      </div>
    </div>
  );
}
