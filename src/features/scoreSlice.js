import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  timeTake: null,
  startTime: null,
  questions: [
    {
      id: 1,
      question:
        "Which of the following is used in React.js to increase performance?",
      options: [
        "Virtual Dom",
        "Original Dom",
        "Both A and B",
        "None of the above",
      ],
      correctAnswer: "Virtual Dom",
      selectedAnser: "",
    },
    {
      id: 2,
      question: "What is ReactJS?",
      options: [
        "Server-side framework",
        "user interface framework",
        "both a and b",
        "None of the above",
      ],
      correctAnswer: "user interface framework",
      selectedAnser: "",
    },
    {
      id: 3,
      question:
        "Identify the one which is used to pass data to components from outside",
      options: ["Render with arguments", "setState", "Proptypes", "Props"],
      correctAnswer: "Props",
      selectedAnser: "",
    },
    {
      id: 4,
      question: "In which language is React.js written?",
      options: ["Python", "JavaScript", "Java", "PHP"],
      correctAnswer: "JavaScript",
      selectedAnser: "",
    },
    {
      id: 5,
      question: "What is Babel?",
      options: [
        "JS compiler",
        "JS Interpreter",
        "JS Transpiler",
        "None of the above",
      ],
      correctAnswer: "JS compiler",
      selectedAnser: "",
    },
  ],
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setAnswer: (state, action) => {
      const {id, selectedAnswer} = action.payload;
      const index = state.questions.findIndex(item => item.id === id);

      if(index !== -1){
        state.questions[index].selectedAnser = selectedAnswer
      }
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetScore: (state) => {
      state.value = 0;
      state.timeTake = null;
      state.startTime = null;
    },
    startQuiz: (state) => {
      state.startTime = Date.now();
    },
    setTimeTake: (state, action) => {
      state.timeTake = action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  resetScore,
  startQuiz,
  setTimeTake,
  setAnswer,
} = scoreSlice.actions;

export const selectScore = (state) => {
  return state.value;
};

export const quizStartTime = (state) => {
  return state.startTime;
};

export const quizTimeTaken = (state) => {
  return state.timeTake;
};

export const getQuestions = (state) => {
    return state.questions
}

export const checkScore = (state) => {
  let score = 0;
  const len = state.questions.length
  for (let i = 0; i < len; i++) {
    const element = state.questions[i];
    if(element.selectedAnser === element.correctAnswer){
      score++;
    }    
  }
  // state.value = score;
    return score
}

export default scoreSlice.reducer;
