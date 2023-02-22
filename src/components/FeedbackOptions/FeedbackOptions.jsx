import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
