import IFeedback from '../entities/IFeedback';
import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  feedback: IFeedback[];
  handleDelete: Function;
};

const FeedbackList = ({ feedback, handleDelete }: Props) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
