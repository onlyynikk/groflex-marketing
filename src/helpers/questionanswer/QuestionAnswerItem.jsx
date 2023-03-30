import React from "react";

export default function QuestionAnswerItem({ item, img }) {
  return (
    <div>
      <div>
        <h1>{item[0].title}</h1>
        <p>{item[0].subtitle}</p>
      </div>
      <div>
        <img src={img} alt="invoice" />
      </div>
      <div>
        <h3>{item[1].question}</h3>
        <p>{item[1].answer}</p>
      </div>
      <div>
        <h3>{item[2].question}</h3>
        <p>{item[2].answer}</p>
      </div>
      <div>
        <h3>{item[3].question}</h3>
        <p>{item[3].answer}</p>
      </div>
    </div>
  );
}
