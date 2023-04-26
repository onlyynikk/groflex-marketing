import React from "react";
import team from "../../../assets/aboutUs/team.png";
import testimonial1 from "../../../assets/aboutUs/testimonial1.png";
import testimonial2 from "../../../assets/aboutUs/testimonial2.png";
import testimonial3 from "../../../assets/aboutUs/testimonial3.png";
import "./aboutustestimonials.css";

export default function AboutUsTestimonials() {
  return (
    <div className="aboutus__testimonials--container">
      <div className="aboutus__team--container">
        <div className="aboutus__team--content">
          <h1>Located across the globe!</h1>
          <p>
            The map in green shows that grofleX has assembled experts from all
            across the globe to work with us, bringing diverse perspectives,
            experiences, and cultural insights, enhancing our creativity and
            innovation. We need to understand and connect with our customers and
            clients from different regions and cultures. It helps grofleX
            navigate the complexities of global markets and regulations.
          </p>
        </div>

        <div className="aboutus__team--img">
          <img src={team} alt="team" />
        </div>
      </div>
      <div className="aboutus__testimonial--items">
        <h3>
          Listen to what some of our satisfied clients have to say about us:
        </h3>
        <div className="aboutus__testimonial--img1">
          <img src={testimonial1} alt="testimonials" />
        </div>
        <div className="aboutus__testimonial--img2">
          <img src={testimonial2} alt="testimonials" />
        </div>
        <div className="aboutus__testimonial--img3">
          <img src={testimonial3} alt="testimonials" />
        </div>
      </div>
    </div>
  );
}
