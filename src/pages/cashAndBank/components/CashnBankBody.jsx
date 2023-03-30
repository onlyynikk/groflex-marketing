import React from "react";
import QuestionAnswer from "../../../helpers/questionanswer/QuestionAnswer";
import { item1, item2, item3 } from "./CashBankData";

export default function CashnBankBody() {
  return (
    <div>
      <QuestionAnswer item1={item1} item2={item2} item3={item3} />
    </div>
  );
}
