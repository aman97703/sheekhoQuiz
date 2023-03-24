import React from "react";
import Option from "./Option";
import QuizQuetions from "../Utils/Questions.json";

const QuizCard = ({
  currentQuestion,
  selectedAnswer,
  handleNextQuestion,
  handleAnswerOptionClick,
  showScore,
  handleSubmit,
  isShowAnswer,
}) => {
  return (
    <div className="quiz_card_root">
      <div className="quiz_card_questions">
        <div className="mt-24">
          <p className="body2_semi_bold_14">
            {isShowAnswer && currentQuestion+1}. {QuizQuetions.questions[currentQuestion].question}
          </p>
        </div>
      </div>
      <div>
        {QuizQuetions.questions[currentQuestion].options.map((option, i) => (
          <Option
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            handleAnswerOptionClick={handleAnswerOptionClick}
            i={i}
            isShowAnswer={isShowAnswer}
          />
        ))}
        {!isShowAnswer && (
          <div className="d-flex align-items-center justify-content-center mt-40">
            {currentQuestion === QuizQuetions.questions.length - 1 &&
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

export default QuizCard;
