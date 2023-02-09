export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {!good && !neutral && !bad ? (
        <p>No feedback given</p>
      ) : (
        <ul>
          {good ? <li>Good: {good}</li> : ''}
          {neutral ? <li>Neutral: {neutral}</li> : ''}
          {bad ? <li>Bad: {bad}</li> : ''}
          <li style={{ marginTop: 10 }}>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};
