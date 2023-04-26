import React from "react";
import avatar from "../../../assets/aboutUs/avatar.png";
import "./aboutusheader.css";

export default function AboutUsHeader() {
  return (
    <div className="aboutus__header--container">
      <div className="aboutus__header--section1">
        <div className="aboutus__title">
          <h1>Flexible solutions for growing businesses</h1>
        </div>
        <div className="aboutus__subtitle">
          <p>
            Our mission is to make your life easier with our secure innovative
            simple to use online software that you can create, send and manage
            estimates and invoices online without the need for software
            downloads
          </p>
        </div>
      </div>
      <div className="aboutus__header--section2">
        <div className="aboutus__header--img">
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <p>
            grofleX is a cloud-based software founded in 2022 that enables
            businesses to create and manage their invoices quickly and easily.
            It simplifies the invoicing process and helps businesses get paid
            faster. The platform offers automatic payment reminders, and
            real-time tracking of invoice status. It also enables businesses to
            accept online payments through various payment gateways. With
            features like recurring invoicing and automatic billing, the
            platform helps businesses streamline their invoicing operations and
            reduce administrative tasks. The platform is designed to be
            user-friendly and accessible from anywhere with an internet
            connection, making it a convenient solution for businesses of all
            sizes.
          </p>
        </div>
      </div>
    </div>
  );
}
