import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuizCard from "../Components/QuizCard";
import { resetScore } from "../features/scoreSlice";
import QuizQues from "../Utils/Questions.json";

const Answers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div className="answers_root">
      <p className="title mb-24">Answers</p>
      {QuizQues.questions.map((ques, i) => (
        <QuizCard
          currentQuestion={i}
          selectedAnswer={ques.correctAnswer}
          isShowAnswer={true}
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
