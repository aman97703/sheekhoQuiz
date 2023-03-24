import { ArrowBack, ShareOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import graph from "../Assets/Images/graph.png";
import seekho from "../Assets/Images/seekho.png";
import { quizTimeTaken, resetScore, selectScore } from "../features/scoreSlice";
import QuizQuestion from "../Utils/Questions.json";

const Result = () => {
  const score = useSelector(selectScore);
  const timetaken = useSelector(quizTimeTaken);
  const Avgtimetaken =
    useSelector(quizTimeTaken) / QuizQuestion.questions.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const minutesTaken =
    timetaken !== null ? Math.floor(timetaken / 1000 / 60) : null;
  const secondsTaken =
    timetaken !== null ? Math.floor((timetaken / 1000) % 60) : null;
  const formattedTimeTaken =
    timetaken !== null
      ? `${minutesTaken}:${secondsTaken.toString().padStart(2, "0")}`
      : null;

  const AvgminutesTaken =
    Avgtimetaken !== null ? Math.floor(Avgtimetaken / 1000 / 60) : null;
  const AvgsecondsTaken =
    Avgtimetaken !== null ? Math.floor((Avgtimetaken / 1000) % 60) : null;
  const AvgformattedTimeTaken =
    Avgtimetaken !== null
      ? `${AvgminutesTaken}:${AvgsecondsTaken.toString().padStart(2, "0")}`
      : null;
  return (
    <div className="result_root">
      <div className="result_head">
        <IconButton
          onClick={() => {
            navigate("/");
            dispatch(resetScore());
          }}
        >
          <ArrowBack />
        </IconButton>
      </div>
      <div className="result_main">
        <div>
          <p className="title color_dark_grey">The Daily MS Excel Quiz</p>
          <div className="result_card mt-16">
            <div>
              <p className="caption color_seekho_sec">You Scored</p>
              <div className="result_img mt-12">
                <img src={graph} alt="graph" />
                <p className="title ml-8 color_seekho">
                  {(score / QuizQuestion.questions.length) * 100}%
                </p>
              </div>
            </div>
            {(score / QuizQuestion.questions.length) * 100 !== 100 ? (
              <p className="body2 mt-8">Oh Snap, You can do better!</p>
            ) : (
              <p className="body2 mt-8">Great, You are best!</p>
            )}

            <p className="caption mt-12">
              Success is not finalm failure is not fatel; it is the courage to
              continue that counts.
            </p>
          </div>
          <div className="d-flex justify-content-between mt-24">
            <div className="">
              <p className="body2">Your Score</p>
              <p className="title color_seekho">
                {score} / {QuizQuestion.questions.length}
              </p>
              <p className="caption">
                Avg: {score / QuizQuestion.questions.length} marks
              </p>
            </div>
            <div className="">
              <p className="body2">Time Taken</p>
              <p className="title color_seekho">
                {formattedTimeTaken !== null ? formattedTimeTaken : null}{" "}
                <span className="caption">min</span>
              </p>
              <p className="caption">Avg: {AvgformattedTimeTaken} min</p>
            </div>
          </div>
          <div className="result_logo_main">
            <img src={seekho} alt="logo" />
            <p className="mt-24 caption">
              <span className="mr-12">
                <ShareOutlined fontSize="small" color="#709c8b" />
              </span>
              Share it with your friends!
            </p>
          </div>
        </div>
      </div>
      <div className="result_footer">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="body2">Leaderboard</p>
            <p className="body2 color_seekho_sec">View all</p>
          </div>
          <div className="leaderboard_card mt-24">
            <div className="leaderboard_card_rank mr-12">
              <p className="caption">1</p>
            </div>
            <div className="flex-grow-1 d-flex align-items-center">
              <img
                src="https://fastly.picsum.photos/id/574/32/32.jpg?hmac=DMtrO5zpVlqPkZDFBGaFraRVGvLhdO_OfLVEDcn4pWo"
                alt="logo"
                className="img_48 mr-12"
              />
              <div>
                <p className="body2 color_seekho"> Aman Gupta</p>
                <p className="caption color_seekho_sec">+ FOLLOW</p>
              </div>
            </div>
            <div
              className="quiz_total_points result_total_points"
              style={{ color: "white" }}
            >
              <span className="quiz_total_pointStar result_total_pointStar">
                ★
              </span>
              100
              {/* {(score / QuizQuestion.questions.length) * 100} */}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-40">
            <button className="btn_primary" onClick={()=>navigate(`/answers`)}>Answers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
