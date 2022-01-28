import FeedbackItem from './FeedbackItem';

type Props = {
  feedback: { id: string; rating: number; text: string }[];
};

const FeedbackList = (props: Props) => {
  const { feedback } = props;

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => {
        return <FeedbackItem key={index} item={item} />;
      })}
    </div>
  );
};

export default FeedbackList;
