import { FaTimes } from 'react-icons/fa';
import IFeedback from '../entities/IFeedback';
import Card from './shared/Card';

type Props = {
  item: IFeedback;
  handleDelete: Function;
};

const FeedbackItem = ({ item, handleDelete }: Props) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes size='1.3em' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
