import React, { Component } from "react";
import Section from "./components/Section/Section ";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const Percentage = Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return Percentage;
  };

  onLeaveFeedback = e => {
    const keyState = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [keyState]: prevState[keyState] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </>
    );
  }
}

export default App;
