import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log(total);
  return (
    <div>
      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;
