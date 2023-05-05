import React from "react";
import { Link } from "react-router-dom";
import "./tabsection.css";
import quotations from "../../../../assets/homepage/streamline.webp";

export default function Streamline() {
  return (
    <div className="section__main">
      <div className="section__container-tabs">
        <div className="section__wrapper">
          <h1 className="section__wrapper--title">Streamline</h1>
          <p className="section__wrapper--content">
            Discover grofleX, an automated platform that simplifies your
            business transactions. Get advanced features such as automated
            recurring invoices, smart payment reminders and real time dashboard
            updates.
          </p>
          <div className="section__wrapper--seemore-div">
            <Link
              to="/features/all-features"
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
