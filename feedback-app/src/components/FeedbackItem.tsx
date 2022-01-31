import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import IFeedback from '../entities/IFeedback';
import FeedbackContext from '../stateManagement/context/FeedbackContext';
import Card from './shared/Card';

type Props = {
  item: IFeedback;
};

const FeedbackItem = ({ item }: Props) => {
  const { removeFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => removeFeedback(item.id)}>
        <FaTimes size='1.3em' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
