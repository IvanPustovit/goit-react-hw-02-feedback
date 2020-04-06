import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
    </div>
  );
};

export default FeedbackOptions;
