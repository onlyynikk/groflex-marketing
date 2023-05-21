import React from "react";
import "./upcomingfeaturesbanner.css";
import avatar from "../../../assets/homepage/new/upcomingavatar.webp";
import { Link } from "react-router-dom";
import calender from "../../../assets/icons/calender.svg";
import medal from "../../../assets/icons/medal.svg";
import bookmark from "../../../assets/icons/bookmark.svg";
import calender1 from "../../../assets/icons/calender-1.svg";
import percent from "../../../assets/icons/percent.svg";
import building from "../../../assets/icons/building.svg";
import timer from "../../../assets/icons/timer.svg";

import branch from "../../../assets/icons/branch.svg";
export default function UpcomingFeaturesBanner() {
  return (
    <div className="upcomingfeatures__container">
      <div className="upcomingfeatures__wrapper">
        <div className="upcomingfeatures__content">
          <h1>Upcoming Features</h1>
          <p>
            grofleX always provides the best possible user experience for our
            customers to help their businesses. That is why we are excited to
            announce amazing new features that are coming your way including
            real-time inventory management, supply chain management, and more
            exciting features. Stay tuned for more updates as we continue to
            evolve and improve our platform.
          </p>
          <div className="upcomingfeatures__img-mobile">
            <img src={avatar} alt="illustration" />
          </div>
          <div className="upcomingfeatures__box">
            <div className="upcomingfeatures__box--content">
              <img src={calender} alt="calender" />
              <p>Inventory for Manufactures</p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={medal} alt="calender" />
              <p>Human Resources </p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={calender1} alt="calender" />
              <p>Electronic Commerce</p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={percent} alt="calender" />
              <p>Point of Sales Billing System</p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={building} alt="calender" />
              <p>Payroll and Attendance</p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={timer} alt="calender" />
              <p>Inventory for Manufactures</p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={bookmark} alt="calender" />
              <p>Customer Relationship Management </p>
            </div>
            <div className="upcomingfeatures__box--content">
              <img src={branch} alt="calender" />
              <p>Supply Chain Management</p>
            </div>
          </div>
          <div className="findmore">
            <Link to="/features/upcoming-features">Find More</Link>
          </div>
        </div>
        <div className="upcomingfeatures__img-desktop">
          <img src={avatar} alt="illustration" />
        </div>
      </div>
    </div>
  );
}
