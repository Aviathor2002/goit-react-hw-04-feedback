import {
  Button,
  ListButton,
} from 'components/FeedbackOptions/FeedbackOptions.style';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <div>
      <ListButton>
        <li>
          <Button onClick={good}>Good</Button>
        </li>
        <li>
          <Button onClick={neutral}>Neutral</Button>
        </li>
        <li>
          <Button onClick={bad}>Bad</Button>
        </li>
      </ListButton>
    </div>
  );
};
