import React, { useState } from "react";
import "./contact.css";
import rocket from "../../assets/rocket.svg";
import Banner from "../homepage/components/banner/Banner";
import pin from "../../assets/pin.svg";
import text from "../../assets/text-icon.svg";
import mail from "../../assets/mail-icon.svg";

export default function ContactUs() {
  const user = {
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  };

  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  if (user != null) {
    // if (
    //   config.releaseStage == "production" ||
    //   config.releaseStage == "development"
    // )
    {
      const requestOptions = {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          grant_type: "client_credentials",

          client_id: "41d4566ba22a7f9bdcbbe05700f4e954",

          client_secret: "b0d1769d2c908263e8ae0423058ff67f",
        }),
      };

      fetch("https://api.sendpulse.com/oauth/access_token", requestOptions)
        .then((response) => response.json())

        .then((data) => {
          console.log(data);

          const requestOptions1 = {
            method: "POST",

            headers: {
              "Content-Type": "application/json",

              Authorization: `Bearer ${data.access_token}`,
            },

            body: JSON.stringify({
              emails: [
                {
                  email: user.email, // Email

                  variables: {
                    Name: user.name, // Name
                    Phone: user.phone, // Contact
                    Company_Name: user.company, // Company Name

                    UTM_Campaign: user.utm_campaign,

                    UTM_Source: user.utm_source,

                    UTM_Medium: user.utm_medium,

                    UTM_Term: user.utm_term,

                    UTM_Content: user.utm_content,
                    Message: user.message, // Message
                  },
                },
              ],
            }),
          };

          fetch(
            "https://api.sendpulse.com/addressbooks/121999/emails",
            requestOptions1
          )
            .then((response) => response.json())

            .then((data) => {
              console.log(data);
            });
        });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    user.name = userName;
    user.email = email;
    user.companyName = companyName;
    user.number = contact;
    user.message = message;
  }
  function handleClick() {}

  return (
    <div>
      <div className="contact__container">
        <div className="contact__section1">
          <h1>Let's get in touch!</h1>
          <p>Let us know how we could help you</p>
        </div>
        <div className="contact__section2">
          <p className="contact__subtitle">
            Send Your details. Our sales team will get back to you shortly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input__items">
              <div>
                <input
                  className="input__item"
                  placeholder="Name"
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                {/* <span className="error-msge">error</span> */}
              </div>
              <div>
                <input
                  className="input__item"
                  placeholder="Contact Number"
                  type="number"
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                {/* <span className="error-msge">error</span> */}
              </div>
            </div>
            <div className="input__items--section2">
              <input
                type="email"
                placeholder="Email ID"
                className="input__long"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error-msge">error</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="input__long"
                required
                name="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              {/* <span className="error-msge">error</span> */}
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={message}
                className="input__textarea"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="submit__btn--container">
              <button onClick={handleClick}>
                <img src={rocket} alt="rocket" className="btn__icon" />
                Submit
              </button>
            </div>
            {/* {user.name && <h1>Success</h1>} */}
          </form>
        </div>
      </div>
      <div className="contact__section3">
        <div className="contact__location">
          <img src={pin} alt="pin" />
          <p>
            GROFLEX LOCATION <br />
            42, P5, Kudlu Main Rd, Muneshwara Layout, Haralukunte, Muneshwara
            Nagar, Bengaluru, Karnataka 560068, India
          </p>
        </div>
        <div className="contact__box--items">
          <div className="contact__box--item">
            <img src={text} alt="text-icon" />
            <p>
              PRESS
              <br /> marketing@groflex.io
            </p>
          </div>
          <div className="contact__box--item">
            <img src={mail} alt="mail-icon" />
            <p>
              GENERAL QUESTION <br />
              info@groflex.io
            </p>
          </div>
        </div>
      </div>
      <div className="contact__section4">
        <Banner />
      </div>
    </div>
  );
}

// <-----backend------>
