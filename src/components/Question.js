import React from "react";
//import "../styles/question.css"

function Question({ question, options, onAnswer, selectedAnswer }) {
    return (
        <div className="question-page">
            <h1>{question}</h1>
            {options.map((option, index) => (
                <button key={index} 
                        onClick={() => onAnswer(option.trend)}
                        className={selectedAnswer === option.trend ? "selected" : ""}>
                {option.text} </button>
            ))}
        </div>
    );
}

export default Question;