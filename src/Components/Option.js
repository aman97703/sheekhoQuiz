import React from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Option = ({
  option,
  selectedAnswer,
  handleAnswerOptionClick,
  i,
  isShowAnswer,
  choosedAnswer,
  correctAnswer
}) => {
  const controlProps = () => ({
    id: option,
    inputProps: { "aria-label": option },
  });
  return (
    <div
      className="quizAnswer_option"
      onClick={() => {
        !isShowAnswer && handleAnswerOptionClick(option);
      }}
    >
      <div
        className={`mr-12 quizAnswer_optionNo ${
          selectedAnswer === option && "quizAnswer_optionNoSelected"
        }`}
      >
        <p className="caption">{i + 1}</p>
      </div>
      <p className="caption flex-grow-1">{option}</p>
      {/* <input
        type="radio"
        name="answer"
        id={option}
        checked={selectedAnswer === option}
        onChange={() => handleAnswerOptionClick(option)}
      /> */}
      <Radio
        {...controlProps("e")}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
        name={!isShowAnswer && "answer"}
        id={option}
        checked={option === (selectedAnswer || choosedAnswer || correctAnswer)}
        onChange={() => {
          !isShowAnswer && handleAnswerOptionClick(option);
        }}
        disabled={isShowAnswer}
      />
    </div>
  );
};

export default Option;
