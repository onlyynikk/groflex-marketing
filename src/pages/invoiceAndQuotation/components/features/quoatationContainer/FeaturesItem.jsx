import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./featuresquotation.css";

export default function FeaturesItem({ id, show, setShow, question, answer }) {
  function handleShow() {
    if (show === id) {
      setShow(0);
    } else {
      setShow(id);
    }
  }

  function logit() {
    setShow(0);
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
    <div>
      <div
        className="invoice__feature--question"
        onClick={() => handleShow(id)}
      >
        {show === id ? (
          <SlArrowUp style={{ marginRight: "1rem" }} />
        ) : (
          <SlArrowDown style={{ marginRight: "1rem" }} />
        )}
        <h3 className="invoice__feature--question">{question}</h3>
      </div>
      <div className={show === id ? "invoice__active" : "invoice__content"}>
        <p className="invoice__feature--answer">{answer}</p>
      </div>
      <hr />
    </div>
  );
}
