import React from "react";
import OnClickOutside from "../../shared/onClickOutside/OnClickOutside";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./questionanswer.css";

export default function QuestionAnswer({
  id,
  show,
  setShow,
  question,
  answer,
}) {
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
        <div className="question-wrapper" onClick={() => handleShow(id)}>
          {show === id ? (
            <SlArrowUp style={{ marginRight: "1rem" }} />
          ) : (
            <SlArrowDown style={{ marginRight: "1rem" }} />
          )}
          <h3 className="question-text">{question}</h3>
        </div>
        <div className={show === id ? "active--question" : "question--content"}>
          <p className="answer_text">{answer}</p>
        </div>
        <hr />
      </div>
    </OnClickOutside>
  );
}
