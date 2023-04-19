import React from "react";
import Question from "@/components/Question";
import Link from "next/link";

export default function index({ question, questions }) {
  return (
    <div className="flex justify-center items-center flex-col gap-5 min-h-screen">
      <Question
        question={question.question}
        option_a={question.option_a}
        option_b={question.option_b}
        option_c={question.option_c}
        option_d={question.option_d}
        correct_answer={question.correct_answer}
        id={question.id}
      />
      <div className="flex">
        {question.id > 1 && (
          <Link href={`http://localhost:3000/question/${question.id - 1}`}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Prev
            </button>
          </Link>
        )}
        {questions.length > question.id && (
          <Link href={`http://localhost:3000/question/${question.id + 1}`}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    `http://localhost:5000/questions/${context.params.id}`
  );
  const question = await response.json();

  const allResponse = await fetch("http://localhost:5000/questions/");
  const questions = await allResponse.json();

  return {
    props: {
      question,
      questions,
    },
  };
}

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:5000/questions");
  const questions = await response.json();

  const ids = questions.map((question) => question.id);

  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
