import Card from './shared/Card';

type Props = {
  item: { id: string; rating: number; text: string };
};

const FeedbackItem = ({ item }: Props) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
