import React from "react";
import Option from "./Option";
import { useSelector } from "react-redux";
import { getQuestions } from "../features/scoreSlice";

const ShowAnswers = ({
  currentQuestion,
  selectedAnswer,
  handleNextQuestion,
  handleBackQuestion,
  handleAnswerOptionClick,
  showScore,
  handleSubmit,
  isShowAnswer,
  correctAnswer
}) => {
  const questions = useSelector(getQuestions)

  return (
    <div className="quiz_card_root">
      <div className="quiz_card_questions">
        <div className="mt-24">
          <p className="body2_semi_bold_14">
            {isShowAnswer && currentQuestion+1}. {questions[currentQuestion].question}
          </p>
        </div>
      </div>
      <div>
        {questions[currentQuestion].options.map((option, i) => (
          <Option
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            handleAnswerOptionClick={handleAnswerOptionClick}
            i={i}
            isShowAnswer={isShowAnswer}
            choosedAnswer={isShowAnswer ? correctAnswer : questions[currentQuestion].selectedAnser}
            correctAnswer={correctAnswer}
          />
        ))}
        {!isShowAnswer && (
          <div className="d-flex align-items-center justify-content-center mt-40">
            <button className="btn_primary" onClick={handleBackQuestion}>
              Previous
            </button>
            {currentQuestion === questions.length - 1 &&
            showScore ? (
              <button className="btn_primary" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button
                className="btn_primary"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === ""}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowAnswers;
