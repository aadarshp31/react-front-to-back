import IFeedback from '../entities/IFeedback';

type Props = {
  feedback: IFeedback[];
};

const FeedbackStats = ({ feedback = [] }: Props) => {
  function getAverageRating(feedback: IFeedback[]) {
    const numberOfRatings = feedback.length;

    const totalRating = feedback.reduce((prevValue, currFeedback) => {
      return prevValue + currFeedback.rating;
    }, 0);

    const averageRating = totalRating / numberOfRatings;
    if (isNaN(averageRating)) {
      return 0;
    }
    return averageRating.toFixed(1).replace(/[.,]0$/, '');
  }

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating {getAverageRating(feedback)}</h4>
    </div>
  );
};

export default FeedbackStats;
