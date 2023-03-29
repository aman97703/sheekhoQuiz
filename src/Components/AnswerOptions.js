import React from "react";
// import { pink } from "@mui/material/colors";
// import Radio from "@mui/material/Radio";

const AnswerOptions = ({
  option,
  selectedAnswer,
  handleAnswerOptionClick,
  i,
  isShowAnswer,
  correctAnswer,
}) => {
  //   const controlProps = () => ({
  //     id: option,
  //     inputProps: { "aria-label": option },
  //   });
  console.log(selectedAnswer);
  console.log(correctAnswer);

  const handleCss = () => {
    if (selectedAnswer === correctAnswer && correctAnswer === option) {
      console.log("a");
      return "quizAnswer_optionNoSelected";
    } else {
      if (selectedAnswer === option) {
        return "quizAnswer_optionNoWrongSelected";
      } else if (correctAnswer === option) {
        return "quizAnswer_optionNoSelected";
      }
    }
  };

  return (
    <div
      className="quizAnswer_option"
      onClick={() => {
        !isShowAnswer && handleAnswerOptionClick(option);
      }}
    >
      <div className={`mr-12 quizAnswer_optionNo ${handleCss()}`}>
        <p className="caption">{i + 1}</p>
      </div>
      <p className="caption flex-grow-1">{option}</p>

      <div className={"selectedAnswerOption "+handleCss()}></div>
      {/* <Radio
        {...controlProps("e")}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
        name={!isShowAnswer && "answer"}
        id={option}
        checked={option === (selectedAnswer || correctAnswer)}
        onChange={() => {
          !isShowAnswer && handleAnswerOptionClick(option);
        }}
        disabled={isShowAnswer}
      /> */}
    </div>
  );
};

export default AnswerOptions;
