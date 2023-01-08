interface ResultProps {
    selection: string;
    correctAnswer: string;
  }

  const Result: React.FC<ResultProps> = ({ selection, correctAnswer }) => {
    if (selection === correctAnswer) {
      return <p className="text-green-500">Correct</p>;
    } else {
      return <p className="text-red-500">Incorrect</p>;
    }
  }

  export default Result;
