//import logo from './logo.svg';
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import './App.css';

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

console.log("Quiz import:", Quiz);

return (
    <div className="center">
      <div className="container">
        {showStartPage ? (
          <div className="start-page">
            <h1 className="title">LET’S GO TO THE MALL!</h1>
            <p className="subtitle">
              Find out which 2000s fashion staple is soooo you!
            </p>
            <button className="start-button" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
};

export default App;