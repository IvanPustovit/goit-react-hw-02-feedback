import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";

const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onLeaveFeedback,
}) => {
  return (
    <section>
      <p>{title}</p>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      <p>Statistics</p>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </section>
  );
};

Section.defaultProps = {
  title: "Please leave feedback",
};
Section.prototype = {
  title: PropTypes.string,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Section;
