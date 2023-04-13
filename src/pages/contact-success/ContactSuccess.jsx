import "./contactsuccess.css";
import React from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "../../shared/btnGreen/BtnPrimary";

export default function () {
  return (
    <div className="thankyou__wrapper">
      <div className="thankyou__content">
        <h1>Thank you for reaching out! </h1>
        <p>
          your request was successfully sent, and we will get back to you
          shortly.
        </p>
        <Link style={{ textDecoration: "none" }}>
          <BtnPrimary text={"Let's go back"} to={"/"} />
        </Link>
      </div>
    </div>
  );
}
