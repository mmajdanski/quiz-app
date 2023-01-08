import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import quizData from "../quizData";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions] = useState(quizData);
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelection = (selection: string) => {
    setSelection(selection);
    if (selection === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextButtonClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelection(null);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const remainingQuestions = questions.length - (currentQuestionIndex + 1);

  return (
    <div className="quiz">
      <h1>Game Time!</h1>
      {remainingQuestions >= 0 && (
        <p>
          Question {currentQuestionIndex + 1}/{questions.length}
        </p>
      )}
      {currentQuestion ? (
        <>
          <div className={"flex flex-col justify-center"}>
            <Question data={currentQuestion} onSelection={handleSelection} />
            {selection ? (
              <button
                className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleNextButtonClick}
              >
                Next
              </button>
            ) : null}
          </div>
          {/* {selection ? <Result selection={selection} correctAnswer={currentQuestion.correctAnswer} /> : null} */}
        </>
      ) : (
        <div>
          <p>No more questions.</p>
          <p>
            You got {score} out of {questions.length} questions correct!
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
