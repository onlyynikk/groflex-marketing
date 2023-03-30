import React from "react";
import "./questionanswer.css";
import QuestionAnswerItem from "./QuestionAnswerItem";
import group1 from "../../assets/cash&bank/cashnbank-group1.png";

export default function QuestionAnswer({ item1, item2, item3 }) {
  return (
    <div className="questionanswer__container">
      <QuestionAnswerItem item={item1} img={group1} />
    </div>
  );
}
