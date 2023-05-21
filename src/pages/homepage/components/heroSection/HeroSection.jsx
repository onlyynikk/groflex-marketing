import React from "react";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";
import "./herosection.css";
// import hero from "../../../../assets/homepage/mockup frame.webp";
import hero from "../../../../assets/homepage/new/hero-img.webp";

export default function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero__section1">
        <h1>Revolutionize your finances with our all-in-one platform</h1>
        <p>
          Easy sign up without payment details. GST compliance, user-friendly
          interface, and cloud-based convenience at your finger tips.
        </p>
        <BtnPrimary text={"Sign up for free"} />
      </div>
      <div className="hero__img">
        <img src={hero} alt="hero image" />
      </div>
    </div>
  );
}

//  <div className="unlimited__container">
//       <div className="unlimited__container--section1">
//         <h1>Free Unlimited Invoicing & Quotations</h1>
//         <p className="unlimited__container--content">
//           Easy sign up without payment details. GST compliance, user-friendly
//           interface, and cloud-based convenience at your finger tips.
//         </p>
//         <div className="umlimited__primary-btn">
//           <BtnPrimary
//             text={"Sign up for free"}
//             to={"https://app.groflex.in/"}
//           />
//         </div>
//       </div>
//       <div className="unlimited__container--section2">
//         <img src={hero} alt="animation" className="unlimited__img" />
//       </div>
//     </div>
