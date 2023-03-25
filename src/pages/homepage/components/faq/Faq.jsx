import React, { useState, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./faqsection.css";

export default function Faq({ id, active, setActive, question, answer }) {
  function handleActive() {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  }
  function logit() {
    setActive(0);
  }

  React.useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div className="accordian">
      <div className="accordian__heading">
        <div className="container" onClick={handleActive}>
          <h3>{question}</h3>
          {active === id ? <SlArrowUp size={25} /> : <SlArrowDown size={25} />}
        </div>
      </div>
      <div className={active === id ? "show" : "accordian__content"}>
        <div className="container">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
