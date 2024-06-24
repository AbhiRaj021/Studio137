import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
