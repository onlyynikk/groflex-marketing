import React from "react";
import "./smallbusinessbody.css";
import group1 from "../../../../../assets/solutions/smallbusiness/group1.png";
import group2 from "../../../../../assets/solutions/smallbusiness/group2.png";
import group3 from "../../../../../assets/solutions/smallbusiness/group3.png";

export default function SmallBusinessBody() {
  return (
    <div className="smallbusinessbody__container">
      <div className="smallbusinessbody__box">
        <div className="smallbusinessbody__img">
          <img src={group1} alt="screenshot" />
        </div>
        <div className="smallbusinessbody__content">
          <h2>Payment gateway integration</h2>
          <p>
            This feature can help small businesses accept payments through
            multiple methods and facilitate international transactions. This can
            help businesses expand their customer base and reach customers from
            different parts of the world.
          </p>
        </div>
      </div>
      <div className="smallbusinessbody__box">
        <div className="smallbusinessbody__img">
          <img src={group2} alt="screenshot" />
        </div>
        <div className="smallbusinessbody__content">
          <h2>Manage transactions efficiently</h2>
          <p>
            Ensure up-to-date, transparent financial records with better
            analysis, decision-making, and error prevention for business owners.
            This can help business owners identify areas for improvement and
            make informed financial decisions.
          </p>
        </div>
      </div>
      <div className="smallbusinessbody__box">
        <div className="smallbusinessbody__img">
          <img src={group3} alt="screenshot" />
        </div>
        <div className="smallbusinessbody__content">
          <h2>Paperless document management</h2>
          <p>
            This feature promotes sustainability by reducing paper usage and
            simplifying financial activity documentation. This can help
            businesses save time and money while also contributing to a greener
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}
