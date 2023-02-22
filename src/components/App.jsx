import { useState } from 'react';

import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './App.style';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGood(state => state + 1);
  };

  const onNeutralClick = () => {
    setNeutral(state => state + 1);
  };

  const onBadClick = () => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let posPercent = Math.round((good * 100) / countTotalFeedback());
    return posPercent;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          good={onGoodClick}
          neutral={onNeutralClick}
          bad={onBadClick}
        />
      </Section>
      <Section title="Statistics">
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
