import React, { useState } from "react";
import "./accountingbody.css";
import group1 from "../../../../assets/generalAcc/generalAcc-group1.webp";
import group2 from "../../../../assets/generalAcc/generalAcc-group2.webp";
import group3 from "../../../../assets/generalAcc/generalAcc-group3.webp";
import group4 from "../../../../assets/generalAcc/generalAcc-group4.webp";
import phonegrp1 from "../../../../assets/generalAcc/generalAcc-phonegrp1.webp";
import phonegrp2 from "../../../../assets/generalAcc/generalAcc-phonegrp2.webp";
import phonegrp3 from "../../../../assets/generalAcc/generalAcc-phonegrp3.webp";
import phonegrp4 from "../../../../assets/generalAcc/generalAcc-phonegrp4.webp";
import QuestionAnswer from "../../../../helpers/questionanswer/QuestionAnswer";
import { item1, item2, item3, item4 } from "../Data";

export default function AccountingBody() {
  const [show, setShow] = useState(0);
  return (
    <div className="accounting__body--container">
      <div className="accounting__desktop">
        <div className="accounting__box--even">
          <div className="accounting__even--img">
            <img src={group1} alt="alt" />
          </div>
          <div className="accounting__even--wrapper">
            <div className="accounting__even--header">
              <h1>{item1[0].title}</h1>
              <p> {item1[0].subtitle} </p>
            </div>
            <div className="accounting__even--list">
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
        </div>
        <div className="accounting__box--odd gradient--color">
          <div className="accounting__odd--wrapper">
            <div className="accounting__odd--header">
              <h1>{item2[0].title}</h1>
              <p> {item2[0].subtitle} </p>
            </div>
            <div className="accounting__odd--list">
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
          <div className="accounting__odd--img">
            <img src={group2} alt="alt" />
          </div>
        </div>
        <div className="accounting__box--even">
          <div className="accounting__even--img">
            <img src={group3} alt="alt" />
          </div>
          <div className="accounting__even--wrapper">
            <div className="accounting__even--header">
              <h1>{item3[0].title}</h1>
              <p> {item3[0].subtitle} </p>
            </div>
            <div className="accounting__even--list">
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
        <div className="accounting__box--odd">
          <div className="accounting__odd--wrapper">
            <div className="accounting__odd--header">
              <h1>{item4[0].title}</h1>
              <p> {item4[0].subtitle} </p>
            </div>
            <div className="accounting__odd--list">
              <QuestionAnswer
                id={item4[1].id}
                show={show}
                setShow={setShow}
                question={item4[1].question}
                answer={item4[1].answer}
              />
              <QuestionAnswer
                id={item4[2].id}
                show={show}
                setShow={setShow}
                question={item4[2].question}
                answer={item4[2].answer}
              />
              <QuestionAnswer
                id={item4[3].id}
                show={show}
                setShow={setShow}
                question={item4[3].question}
                answer={item4[3].answer}
              />
            </div>
          </div>
          <div className="accounting__odd--img">
            <img src={group4} alt="alt" />
          </div>
        </div>
      </div>
      <div className="accounting__mobile">
        <div className="mobile__wrapper">
          <div className="accounting__mobile--header">
            <h1> {item1[0].title} </h1>
            <p>{item1[0].subtitle}</p>
          </div>
          <div className="accounting__mobile--img">
            <img src={phonegrp1} alt="sg" />
          </div>
          <div className="accounting__mobile--list">
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
        <div className="mobile__wrapper gradient--color ">
          <div className="accounting__mobile--header">
            <h1> {item2[0].title} </h1>
            <p>{item2[0].subtitle}</p>
          </div>
          <div className="accounting__mobile--img">
            <img src={phonegrp2} alt="sg" />
          </div>
          <div className="accounting__mobile--list">
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
        <div className="mobile__wrapper">
          <div className="accounting__mobile--header">
            <h1> {item3[0].title} </h1>
            <p>{item3[0].subtitle}</p>
          </div>
          <div className="accounting__mobile--img">
            <img src={phonegrp3} alt="sg" />
          </div>
          <div className="accounting__mobile--list">
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
        <div className="mobile__wrapper">
          <div className="accounting__mobile--header">
            <h1> {item4[0].title} </h1>
            <p>{item4[0].subtitle}</p>
          </div>
          <div className="accounting__mobile--img">
            <img src={phonegrp4} alt="sg" />
          </div>
          <div className="accounting__mobile--list">
            <QuestionAnswer
              id={item4[1].id}
              show={show}
              setShow={setShow}
              question={item4[1].question}
              answer={item4[1].answer}
            />
            <QuestionAnswer
              id={item4[2].id}
              show={show}
              setShow={setShow}
              question={item4[2].question}
              answer={item4[2].answer}
            />
            <QuestionAnswer
              id={item4[3].id}
              show={show}
              setShow={setShow}
              question={item4[3].question}
              answer={item4[3].answer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
