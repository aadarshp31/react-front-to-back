type Props = {
  item: { id: string; rating: number; text: string };
};

const FeedbackItem = (props: Props) => {
  const { item } = props;
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  );
};

export default FeedbackItem;
