import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import QuizCard from "../Components/QuizCard";
import QuizQuestion from "../Utils/Questions.json";
import Done from "../Assets/Images/done.gif";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, quizStartTime, selectScore, setTimeTake } from "../features/scoreSlice";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // const [score, setScore] = useState(0);
  const score = useSelector(selectScore);
  const quizStart = useSelector(quizStartTime);
  const dispatch = useDispatch();
  const [showScore, setShowScore] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [state, setState] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60 * 1);
  const navogate = useNavigate();

  const toggleDrawer = (open) => {
    setState(open);
  };
  const handleNextQuestion = () => {
    if (
      selectedAnswer === QuizQuestion.questions[currentQuestion].correctAnswer
    ) {
      // setScore(score + 1);
      dispatch(increment());
    }

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (
      selectedAnswer === QuizQuestion.questions[currentQuestion].correctAnswer
    ) {
      // setScore(score + 1);
      dispatch(increment());
    }
    const now = Date.now();
    const timeElapsed = now - quizStart;
    dispatch(setTimeTake(timeElapsed))
    setIsSubmited(true);
  };

  useEffect(() => {
    if (currentQuestion === QuizQuestion.questions.length - 1) {
      setShowScore(true);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (isSubmited) {
      toggleDrawer(true);
    }
  }, [isSubmited]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmit();
    }
  }, [timeRemaining]);

  const minutesRemaining = Math.floor(timeRemaining / 60);
  const secondsRemaining = timeRemaining % 60;
  const formattedTimeRemaining = `${minutesRemaining}:${secondsRemaining
    .toString()
    .padStart(2, "0")}`;

  return (
    <div>
      <div className="quiz_screen_root">
        <div className="d-flex align-items-center justify-content-between">
          <div className="quiz_card_remains">
            <p>
              {currentQuestion + 1 > 9
                ? currentQuestion + 1
                : `0${currentQuestion + 1}`}
              /
              {QuizQuestion.questions.length > 9
                ? QuizQuestion.questions.length
                : `0${QuizQuestion.questions.length}`}
            </p>
          </div>
          <div className="quiz_card_qtime">
            <p>{formattedTimeRemaining}</p>
          </div>
        </div>
        <QuizCard
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          handleNextQuestion={handleNextQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
          showScore={showScore}
          handleSubmit={handleSubmit}
          isShowAnswer={false}
        />
      </div>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={() => toggleDrawer(false)}
        className="quiz_drawer_root"
      >
        <div className="quiz_drawer_main">
          <div className="quiz_drawer_points_root">
            <div className="quiz_drawer_points_image">
              <img src={Done} alt="done" />
              <div className="quiz_total_points">
                <span className="quiz_total_pointStar">★</span>
                {(score / QuizQuestion.questions.length) * 100}
              </div>
              <p className="title mt-16">Karma Points Earned</p>
            </div>
            <div>
              <p className="caption">What are Karma Points ?</p>
              <p className="overline mt-16">
                Karma points are awarded for various actions like attempting
                quizzes and watching videos, allowing you to moveup the
                leaderboards and unlock new features.
              </p>
            </div>
          </div>
          <div className="quiz_drawer_footer">
            <button className="btn_primary" onClick={() => navogate(`/result`)}>
              Check Results
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Quiz;
