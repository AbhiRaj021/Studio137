import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Slider from './components/Slider';
import './App.css';

const questions = [
  "I have ambitious aims of making a difference.",
  "My leadership journey has progressed as I anticipated.",
  "I have spent fewer than 4 years in full time service or ministry.",
  "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
  "My plans are likely to succeed.",
  "I’m beginning to believe the journey of service will be much harder than I anticipated.",
];

const options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

const themes = ["Idealistic", "Disillusioned", "Cynical", "Hopeful"];
const themeColors = {
  Idealistic: "lightblue",
  Disillusioned: "lightgreen",
  Cynical: "lightcoral",
  Hopeful: "orange"
};

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const currentTheme = themes[Math.floor(currentQuestion / 5) % 4];

  const handleOptionChange = (index) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = index;
    setResponses(newResponses);
    if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
    }
};


  

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const progress = (responses.filter(response => response !== null).length / questions.length) * 100;

  return (
    <div className="container" style={{ backgroundColor: themeColors[currentTheme] }}>
      <h1 className="text-center">{currentTheme}</h1>
      <ProgressBar progress={progress} />
      <Slider
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        currentQuestion={currentQuestion}
        questions={questions}
        responses={responses}
        options={options}
        handleOptionChange={handleOptionChange}
      />
    </div>
  );
};

export default App;



