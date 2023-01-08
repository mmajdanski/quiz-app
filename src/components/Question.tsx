import React, { useState, useEffect } from "react";
import { QuestionData } from "../quizData";

interface Props {
  data: QuestionData;
  onSelection: (selection: string) => void;
}

const Question: React.FC<Props> = ({ data, onSelection }) => {
  const [selectedOption, setSelectedOption] = useState<string | "">("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (option: string) => {
    setIsSubmitted(true);
    setSelectedOption(option);
    onSelection(option);
  };

  useEffect(() => {
    setIsSubmitted(false);
  }, [data]); // This will cause the useEffect function to be called when the value of `data` changes

  return (
    <form>
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{data.question}</h2>
      {data.options.map((option: string, index: number) => (
        <button
          key={option}
          type="button"
          className={`rounded-xl half py-2 px-4 mb-4 bg-blue-500 hover:bg-blue-800 text-white ${
            selectedOption === option && !isSubmitted ? "selected" : ""
          }  ${option === data.correctAnswer && isSubmitted ? "bg-green-500 hover:bg-green-800" : ""}
          ${option !== data.correctAnswer && isSubmitted ? "bg-red-500 hover:bg-red-800" : ""}`}
          onClick={() => !isSubmitted && handleOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </form>
  );
};

export default Question;
