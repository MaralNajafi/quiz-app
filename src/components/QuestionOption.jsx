import React from "react";

export default function QuestionOption({ option, id, onChange, checked }) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <input
        type="radio"
        name={`question-options-${id}`}
        value={option}
        checked={checked}
        onChange={onChange}
      />
      <label>{option}</label>
    </div>
  );
}
