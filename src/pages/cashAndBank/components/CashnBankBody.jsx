import React, { useState } from "react";
import "./cashnbankbody.css";
import { item1, item2, item3 } from "./CashBankData";
import phonegrp1 from "../../../assets/phonegrp1.png";
import QuestionAnswer from "../../../helpers/questionanswer/QuestionAnswer";

export default function CashnBankBody() {
  const [show, setShow] = useState(0);
  return (
    <div className="cashnbank__body--section">
      <div className="cashnbank__section1">
        <div className="cashnbank__title">
          <h1> {item1[0].title} </h1>
          <p>{item1[0].subtitle}</p>
        </div>

        <img src={phonegrp1} alt="invoice" />
        <div className="question__list">
          <QuestionAnswer
            id={item1[1].id}
            show={show}
            setShow={setShow}
            question={item1[1].question}
            answer={item1[1].answer}
          />
          <QuestionAnswer
            id={item1[2].id}
            show={show}
            setShow={setShow}
            question={item1[2].question}
            answer={item1[2].answer}
          />
          <QuestionAnswer
            id={item1[3].id}
            show={show}
            setShow={setShow}
            question={item1[3].question}
            answer={item1[3].answer}
          />
        </div>
      </div>
      <div className="cashnbank__section">
        <div className="cashnbank__section2">
          <div className="cashnbank__title">
            <h1> {item2[0].title} </h1>
            <p>{item2[0].subtitle}</p>
          </div>

          <img src={phonegrp1} alt="invoice" />
          <div className="question__list">
            <QuestionAnswer
              id={item2[1].id}
              show={show}
              setShow={setShow}
              question={item2[1].question}
              answer={item2[1].answer}
            />
            <QuestionAnswer
              id={item2[2].id}
              show={show}
              setShow={setShow}
              question={item2[2].question}
              answer={item2[2].answer}
            />
            <QuestionAnswer
              id={item2[3].id}
              show={show}
              setShow={setShow}
              question={item2[3].question}
              answer={item2[3].answer}
            />
          </div>
        </div>
      </div>
      <div className="cashnbank__section">
        <div className="cashnbank__section3">
          <div className="cashnbank__title">
            <h1> {item3[0].title} </h1>
            <p>{item3[0].subtitle}</p>
          </div>

          <img src={phonegrp1} alt="invoice" />
          <div className="question__list">
            <QuestionAnswer
              id={item3[1].id}
              show={show}
              setShow={setShow}
              question={item3[1].question}
              answer={item3[1].answer}
            />
            <QuestionAnswer
              id={item3[2].id}
              show={show}
              setShow={setShow}
              question={item3[2].question}
              answer={item3[2].answer}
            />
            <QuestionAnswer
              id={item3[3].id}
              show={show}
              setShow={setShow}
              question={item3[3].question}
              answer={item3[3].answer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
