import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuizCard from "../Components/QuizCard";
import { getQuestions, resetScore } from "../features/scoreSlice";

const Answers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);

  return (
    <div className="answers_root">
      <p className="title mb-24">Answers</p>
      <div className="d-flex align-items-center">
        <div
          className={"selectedAnswerOption quizAnswer_optionNoSelected"}
        ></div>
         <p className="body2 ml-24">- Correct Answer</p>
      </div>
      <div className="d-flex align-items-center">
        <div
          className={"selectedAnswerOption quizAnswer_optionNoWrongSelected"}
        ></div>
         <p className="body2 ml-24">- Wrong Answer</p>
      </div>
      {questions.map((ques, i) => (
        <QuizCard
          currentQuestion={i}
          selectedAnswer={ques.selectedAnser}
          isShowAnswer={true}
          correctAnswer={ques.correctAnswer}
        />
      ))}
      <div className="d-flex align-items-center justify-content-center mt-24">
        <button
          className="btn_primary"
          onClick={() => {
            dispatch(resetScore());
            navigate(`/`);
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Answers;
