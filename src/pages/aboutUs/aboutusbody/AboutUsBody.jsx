import React from "react";
import "./aboutusbody.css";
import bag from "../../../assets/aboutUs/bag.svg";
import bulb from "../../../assets/aboutUs/bulb.svg";
import world from "../../../assets/aboutUs/world.svg";

export default function AboutUsBody() {
  return (
    <div className="aboutus__body--container">
      <h3>Core Values</h3>
      <div className="aboutus__body--content">
        <div className="aboutus__body--content-col">
          <div className="aboutus__body--item">
            <h4>Innovation</h4>
            <p>
              GrofleX has assembled a team of diverse expert professionals from
              all around the world to make grofleX the industry leader for
              online software innovation
            </p>
          </div>
          <div className="aboutus__body--item">
            <h4>Collaboration</h4>
            <p>
              By listening to customer feedback, we can tailor products and
              services to meet your needs and make our software, even more, user
              friendly and innovative
            </p>
          </div>
        </div>
        <div className="aboutus__body--content-col">
          <div className="aboutus__body--item">
            <h4>Customer-centricity</h4>
            <p>
              At groflex we are focused on our customer’s needs and expectations
              and we are always available to help at every stage of your
              business journey and also our Invoicing and quotation features
              will ALWAYS BE FREE.
            </p>
          </div>
          <div className="aboutus__body--item">
            <h4>Efficiency</h4>
            <p>
              With our fully in-house development team, we are in an ideal
              position to offer our services using minimal resources, which
              leads to cost savings. This translates to lower prices for you,
              faster delivery times, better quality products and services, and
              improved customer service.
            </p>
          </div>
        </div>
        <div className="aboutus__body--content-col">
          <div className="aboutus__body--item">
            <h4>Integrity</h4>
            <p>
              We pride ourselves on acting ethically, being honest and
              transparent in all our business dealings, and holding ourselves
              and others accountable for upholding moral standards.
            </p>
          </div>

          <div className="aboutus__body--item">
            <h4>Security</h4>
            <p>
              As a SAAS company grofleX know that your data is extremely
              important to you so we employ various measures to protect your
              data, such as data encryption, two-factor authentication, access
              controls, and monitoring for suspicious activity. We also conduct
              regular security audits and comply with data protection
              regulations, such as GDPR and CCPA.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus__body--wrapper">
        <div className="aboutus__body--items">
          <div className="aboutus__body--item1">
            <img src={bulb} alt="bulb" />
            <h4>Who we are</h4>
          </div>
          <div className="aboutus__body--item2">
            <p>
              grofleX are a team of diverse expert experienced professionals
              from all around the world dedicated to making grofleX the one stop
              shop for all your invoicing and accounting needs. We want to be
              part of your success for now and for the future.
            </p>
          </div>
        </div>

        <div className="aboutus__body--items">
          <div className="aboutus__body--item1">
            <img src={bag} alt="bag" />
            <h4>What we do</h4>
          </div>
          <div className="aboutus__body--item2">
            <p>
              grofleX are a cloud-based invoicing platform that enables
              businesses to automate and streamline their billing processes. It
              allows users to create and send professional-looking invoices, set
              up recurring billing, track payment status, and generate reports.
            </p>
          </div>
        </div>

        <div className="aboutus__body--items">
          <div className="aboutus__body--item1">
            <img src={world} alt="world" />
            <h4>Why we do it</h4>
          </div>
          <div className="aboutus__body--item2">
            <p>
              It's simple, we want businesses to focus on what they do best -
              delivering their products or services while leaving invoicing and
              payment processing to a reliable innovative and secure and
              efficient tool. Flexible solutions for growing businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
