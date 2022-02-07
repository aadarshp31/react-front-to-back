import { useContext, useEffect, useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import IFeedback from '../entities/IFeedback';
import FeedbackContext from '../stateManagement/context/FeedbackContext';
import Card from './shared/Card';

type Props = {
  item: IFeedback;
};

const FeedbackItem = ({ item }: Props) => {
  const { removeFeedback, editFeedback, feedbackEditObject } =
    useContext(FeedbackContext);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(() => {
      return feedbackEditObject.edit;
    });
  }, [feedbackEditObject]);

  return (
    <Card
      reverse={
        feedbackEditObject.item && item.id === feedbackEditObject.item.id
          ? true
          : false
      }>
      <div className='num-display'>{item.rating}</div>
      <button
        className={`edit ${
          isUpdating &&
          feedbackEditObject.item &&
          item.id === feedbackEditObject.item.id
            ? 'reverse'
            : ''
        }`}
        onClick={() => editFeedback(item)}>
        <FaEdit size='1.2em' />
      </button>
      <button
        className={`close ${
          isUpdating &&
          feedbackEditObject.item &&
          item.id === feedbackEditObject.item.id
            ? 'reverse'
            : ''
        }`}
        onClick={() => removeFeedback(item.id)}>
        <FaTimes size='1.3em' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
