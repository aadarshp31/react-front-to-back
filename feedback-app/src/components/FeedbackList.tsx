import FeedbackItem from './FeedbackItem';

type Props = {
  feedback: { id: string; rating: number; text: string }[];
  handleDelete: Function;
};

const FeedbackList = ({ feedback, handleDelete }: Props) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => {
        return (
          <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default FeedbackList;
