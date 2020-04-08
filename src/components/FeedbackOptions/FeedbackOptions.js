import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div onClick={onLeaveFeedback}>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
