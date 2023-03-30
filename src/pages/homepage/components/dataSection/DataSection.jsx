import React from "react";
import "./datasection.css";
import encription from "../../../../assets/encription.svg";
import cloudencript from "../../../../assets/cloudencript.svg";
import sheild from "../../../../assets/sheild.svg";

export default function DataSection() {
  return (
    <div className="data__section--container">
      <div className="data__section1">
        <h1 className="data__section--title">YOUR DATA IS IN SAFE HANDS</h1>
        <p className="data__section-subtitle">
          Be rest assured about the safety of all your business data with
          grofleX. We have world-class encryption to keep your data safe and
          always available
        </p>
      </div>
      <div className="data__section--features data-cards">
        <div className="data-card data__section--wrapper">
          <div className="center">
            <img
              src={encription}
              alt="encription"
              className="data--section--icon cloud-icon"
            />

            <p className="data__section-para">
              We optimize encryption for sensitive data in our database and{" "}
              <span className="secondary-highlight">
                ensure maximum security
              </span>{" "}
              and availability through SSL certification and automatic backups.
            </p>
          </div>
        </div>
        <div className="data-card data__section--wrapper">
          <div className="center">
            <img
              src={cloudencript}
              alt="cloudencript"
              className="data--section--icon "
            />
            <p className="data__section-para">
              At grofleX, we use advanced AES256 encryption technology for our
              cloudbased software and{" "}
              <span className="secondary-highlight">
                prioritize safeguarding
              </span>{" "}
              against cyber and hacker attacks.
            </p>
          </div>
        </div>
        <div className="data-card data__section--wrapper">
          <div className="center">
            <img
              src={sheild}
              alt="sheild"
              className="data--section--icon cloud-icon"
            />
            <p className="data__section-para">
              <span className="secondary-highlight">
                We store your grofleX data in secure,
              </span>{" "}
              European locations{" "}
              <span className="secondary-highlight">
                using multi protected VdS servers
              </span>{" "}
              with top-level data security encryption and privacy measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
