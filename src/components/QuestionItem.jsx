import QuestionOption from "./QuestionOption";
import { useEffect, useState } from "react";
export default function QuestionItem({
  question,
  option_a,
  option_b,
  option_c,
  option_d,
  correct_answer,
  id,
}) {
  const [radioVal, setRadioVal] = useState("");

  useEffect(() => {
    setRadioVal(localStorage.getItem(`Question-${id}`) || "");
  }, []);

  const setResult = (value) => {
    localStorage.setItem(`Question-${id}`, value.target.value);
    if (value === correct_answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
      console.log(`correct answer: ${correct_answer}`);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <p>{question}</p>
      <span>{radioVal}</span>
      <QuestionOption
        option={option_a}
        id={id}
        checked={radioVal === option_a}
        onChange={(event) => {
          setResult(event);
          setRadioVal(event.target.value);
        }}
      />
      <QuestionOption
        option={option_b}
        id={id}
        checked={radioVal === option_b}
        onChange={(event) => {
          setResult(event);
          setRadioVal(event.target.value);
        }}
      />
      <QuestionOption
        option={option_c}
        id={id}
        checked={radioVal === option_c}
        onChange={(event) => {
          setResult(event);
          setRadioVal(event.target.value);
        }}
      />
      <QuestionOption
        option={option_d}
        id={id}
        checked={radioVal === option_d}
        onChange={(event) => {
          setResult(event);
          setRadioVal(event.target.value);
        }}
      />
    </div>
  );
}
