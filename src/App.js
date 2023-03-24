import React from "react";
import "./App.css";
import Details from "./pages/Details";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './pages/index.css'
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { Provider } from "react-redux";
import { store } from "./store";
import Answers from "./pages/Answers";

const App = () => {
  return (
    <Router>
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Details />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/answers" element={<Answers />} />
      </Routes>
    </Provider>
    </Router>
  );
};

export default App;
