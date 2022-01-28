import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

type Props = {
  item: { id: string; rating: number; text: string };
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
