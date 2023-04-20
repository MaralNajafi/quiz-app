import React from "react";

export default function QuestionOption({ option, id, onChange }) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <input
        type="radio"
        name={`question-options-${id}`}
        value={option}
        onChange={onChange}
      />
      <label>{option}</label>
    </div>
  );
}
