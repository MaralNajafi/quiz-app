import QuestionOption from "./QuestionOption";

export default function QuestionItem({
  question,
  option_a,
  option_b,
  option_c,
  option_d,
  correct_answer,
  id,
}) {
  function setResult(event) {
    if (event.target.value === correct_answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
      console.log(`correct answer: ${correct_answer}`);
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <p>{question}</p>
      <QuestionOption
        option={option_a}
        id={id}
        onChange={(event) => {
          setResult(event);
        }}
      />
      <QuestionOption
        option={option_b}
        id={id}
        onChange={(event) => {
          setResult(event);
        }}
      />
      <QuestionOption
        option={option_c}
        id={id}
        onChange={(event) => {
          setResult(event);
        }}
      />
      <QuestionOption
        option={option_d}
        id={id}
        onChange={(event) => {
          setResult(event);
        }}
      />
    </div>
  );
}
