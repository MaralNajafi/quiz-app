import React, { useState } from "react";

export default function Question({
  question,
  option_a,
  option_b,
  option_c,
  option_d,
  correct_answer,
  id,
}) {
  const [radioVal, setRadioVal] = useState("");
  function result(event) {
    console.log(event);
    if (event.target.value === correct_answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
      console.log(`correct answer: ${correct_answer}`);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-1">
        <p>{question}</p>
        <div className="flex flex-row gap-1 items-center">
          <input
            type="radio"
            name={`question-options-${id}`}
            value={option_a}
            onChange={(event) => {
              setRadioVal(event.target.value);
              result(event);
            }}
          />
          <label>{option_a}</label>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <input
            type="radio"
            name={`question-options-${id}`}
            value={option_b}
            onChange={(event) => {
              setRadioVal(event.target.value);
              result(event);
            }}
          />
          <label>{option_b}</label>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <input
            type="radio"
            name={`question-options-${id}`}
            value={option_c}
            onChange={(event) => {
              setRadioVal(event.target.value);
              result(event);
            }}
          />
          <label>{option_c}</label>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <input
            type="radio"
            name={`question-options-${id}`}
            value={option_d}
            onChange={(event) => {
              setRadioVal(event.target.value);
              result(event);
            }}
          />
          <label>{option_d}</label>
        </div>
      </div>
    </div>
  );
}
