import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

export default function Question({ question }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <QuestionItem
        question={question.question}
        option_a={question.option_a}
        option_b={question.option_b}
        option_c={question.option_c}
        option_d={question.option_d}
        checked={question.checked}
        correct_answer={question.correct_answer}
        id={question.id}
      />
    </div>
  );
}
