import React from "react";

const Slider = ({
  label,
  value,
  onPrevClick,
  onNextClick,
  currentQuestion,
  questions,
  responses,
  options,
  handleOptionChange,
}) => {
  const handleOptionSelection = (index) => {
    handleOptionChange(index);
  };

  return (
    <div className="slider-container">
      <div className="question-number">{label}</div>
      <div className="question">
        <p className="text-center mb-2">{`Question ${currentQuestion + 1}/${
          questions.length
        }`}</p>
        <p className="text-center mt-12 mb-12">{questions[currentQuestion]}</p>
        <div className="options flex flex-row justify-center gap-9">
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={responses[currentQuestion] === index}
                onChange={() => handleOptionSelection(index)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button onClick={onPrevClick} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={onNextClick}
          disabled={currentQuestion === 0 || responses[currentQuestion] === null} 
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
