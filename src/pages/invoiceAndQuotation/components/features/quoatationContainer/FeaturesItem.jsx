import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./featuresquotation.css";
import OnClickOutside from "../../../../../shared/onClickOutside/OnClickOutside";

export default function FeaturesItem({ id, show, setShow, question, answer }) {
  function handleShow() {
    if (show === id) {
      setShow(0);
    } else {
      setShow(id);
    }
  }

  return (
    <OnClickOutside onClickOutside={() => setShow(0)}>
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
    </OnClickOutside>
  );
}
