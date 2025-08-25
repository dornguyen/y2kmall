import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
//import "../styles/submit-btn.css"

console.log("Question import:", Question);

const questions = [
  {
    question: "You’re at the mall! First stop?",
    options: [
      { text: "Look for your favorite artist’s new CD", fashion_trend: "" },
      { text: "Grab a smoothie", fashion_trend: "" },
      { text: "Browse the window displays", fashion_trend: "" }
    ]
  },
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
    const [scores, setScores] = useState({});
    const [result, setResult] = useState(null);

    function handleAnswer(fashion_trend) {
        setScores((prevScores) => {
            const newScores = { ...prevScores };    // Copy of scores
        
            // Decrease the score for the previously selected trend
            if (selectedAnswer) {
                newScores[selectedAnswer] -= 1;
            }
        
            // Increase the score for the newly selected trend
            newScores[fashion_trend] = (newScores[fashion_trend] || 0) + 1;
        
            return newScores;   // Return updated copy
        });
  
        setSelectedAnswer(fashion_trend);   // Mark the new answer as selected
    }

    function handleNextQuestion() {
        if (currentQuestion + 1 < questions.length) {   // If not at last question
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);    // Reset selected answer for the next question
        } else {
            calculateResult();
        }
    }

    function calculateResult() {  // Return trend with highest score 
        let maxTrend = null;
        let maxScore = 0;

        for (const [trend, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxTrend = trend;
                maxScore = score;
            }}

        setResult(maxTrend);
    }

    function restartQuiz() {
        setCurrentQuestion(0);
        setScores({});
        setResult(null);
    }

    return (
        <div className="quiz-container-with-submit">
            <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
            />

            <button className="submit-btn"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}  // Disable the button until an answer is selected
            > Submit Answer </button>
        </div>
    );
}

export default Quiz;