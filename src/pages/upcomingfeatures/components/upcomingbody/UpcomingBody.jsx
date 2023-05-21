import React from "react";
import "./upcomingbody.css";
import group1 from "../../../../assets/upcomingfeatures/img-desk1.webp";
import group2 from "../../../../assets/upcomingfeatures/img-desk2.webp";
import group3 from "../../../../assets/upcomingfeatures/img-desk3.webp";
import group4 from "../../../../assets/upcomingfeatures/img-desk4.webp";
import group5 from "../../../../assets/upcomingfeatures/img-desk5.webp";
import group6 from "../../../../assets/upcomingfeatures/img-desk6.webp";
import phngrp1 from "../../../../assets/upcomingfeatures/img-phn1.webp";
import phngrp2 from "../../../../assets/upcomingfeatures/img-phn2.webp";
import phngrp3 from "../../../../assets/upcomingfeatures/img-phn3.webp";
import phngrp4 from "../../../../assets/upcomingfeatures/img-phn4.webp";
import phngrp5 from "../../../../assets/upcomingfeatures/img-phn5.webp";
import phngrp6 from "../../../../assets/upcomingfeatures/img-phn6.webp";
import Banner from "../../../homepage/components/banner/Banner";

export default function UpcomingBody() {
  return (
    <div className="upcomingbody__container">
      <div className="upcomingbody__even--box">
        <div className="upcomingbody__content">
          <h2>Inventory Management</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp1} alt="screenshot" />
          </div>
          <p>
            No more running out of stock or being overstocked with grofleX.
            Manage your inventory effectively and make your adjustments as
            needed. You also can set up automatic reorder points and get
            notified when your inventory is running low. Our inventory’s feature
            are designed to save you time, money, and hassle.
          </p>
        </div>
        <div className="upcomingbody__desk-img">
          <img src={group1} alt="screenshot" />
        </div>
      </div>
      <div className="upcomingbody__odd--box box-gradient ">
        <div className="upcomingbody__desk-img">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="upcomingbody__content">
          <h2>Customers Relationship Management (CRM)</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp2} alt="screenshot" />
          </div>
          <p>
            Manage your sales processes from beginning to end without switching
            tabs. grofleX provides you CRM analytics, contact management, and
            reporting that can be customized based on your necessities. Manage
            your relationship with your clients and professionally with our CRM
            features.
          </p>
        </div>
      </div>
      <div className="upcomingbody__even--box">
        <div className="upcomingbody__content">
          <h2>Point of Sales (PoS) - Billing Systems</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp3} alt="screenshot" />
          </div>
          <p>
            Reduce the pilling up of articles and complete your retail sales
            transactions straight from your pocket. Organize your all processes
            better by managing article databases on mobile and desktop P.O.S
            system. You can ensure that you're getting paid on time and in full.
            Improve your cash flow and customers relationships.
          </p>
        </div>
        <div className="upcomingbody__desk-img">
          <img src={group3} alt="screenshot" />
        </div>
      </div>
      <Banner
        title={
          "Ready to simplify your invoicing and quoting process? Try grofleX today!"
        }
        subtitle={
          "Say hello to an efficient business management with our powerful app."
        }
      />
      <div className="upcomingbody__odd--box ">
        <div className="upcomingbody__desk-img">
          <img src={group4} alt="screenshot" />
        </div>
        <div className="upcomingbody__content">
          <h2>Human Resource Management (HRM)</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp4} alt="screenshot" />
          </div>
          <p>
            Centralize your employee’s data such as time and attendance
            tracking, payroll processing, performance management, employee
            engagement and more in one platform. Use our HRM tool to improve
            your employee engagement for better performance and decision-making.
          </p>
        </div>
      </div>
      <div className="upcomingbody__even--box box-gradient">
        <div className="upcomingbody__content">
          <h2>E-Commerce</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp5} alt="screenshot" />
          </div>
          <p>
            Expand your market at global scale. Our E-commerce platform provides
            your businesses with faster payment processes, store management,
            integrate data consolidation, and analytic reports of customer
            behaviour and preferences. Optimise your business via E-commerce to
            unlock new revenue streams.
          </p>
        </div>
        <div className="upcomingbody__desk-img">
          <img src={group5} alt="screenshot" />
        </div>
      </div>
      <div className="upcomingbody__odd--box ">
        <div className="upcomingbody__desk-img">
          <img src={group6} alt="screenshot" />
        </div>
        <div className="upcomingbody__content">
          <h2>Supply Chain Management (SCM)</h2>
          <div className="upcomingbody__phn-img">
            <img src={phngrp6} alt="screenshot" />
          </div>
          <p>
            Track your inventory levels to avoid running out of stock and
            overstock. To optimise the flow of goods and services, our Supply
            Chain Management software provides you a quick way to respond your
            customer demands with real-time visibility into their inventory
            levels and order statuses.
          </p>
        </div>
      </div>
      <Banner
        title={"FREE Forever Unlimited Quotations & Invoices"}
        subtitle={"NO CARD/PAYMENT IS NEEDED TO SIGN UP"}
      />
    </div>
  );
}
