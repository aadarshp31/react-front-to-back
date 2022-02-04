import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import IFeedback from '../entities/IFeedback';
import FeedbackContext from '../stateManagement/context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEditObject, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    resetStates();
    if (feedbackEditObject.item !== null) {
      setText(feedbackEditObject.item.text);
      setRating(feedbackEditObject.item.rating);
      validateTextField(feedbackEditObject.item.text);
    }
  }, [feedbackEditObject]);

  function resetStates() {
    setText('');
    setBtnDisabled(true);
    setMessage('');
  }

  function validateTextField(text: string) {
    if (text === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Review must have more than 10 characters');
    } else {
      setMessage('');
      setBtnDisabled(false);
    }
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    validateTextField(event.target.value);
    setText(event.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    validateTextField(text);

    if (feedbackEditObject.edit && feedbackEditObject.item !== null) {
      const updatedFeedback: IFeedback = {
        id: feedbackEditObject.item.id,
        text,
        rating,
      };
      updateFeedback(updatedFeedback);
    } else {
      const newFeedback: IFeedback = {
        id: Date.now().toString(),
        text,
        rating,
      };
      addFeedback(newFeedback);
    }

    resetStates();
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            name='feedback-text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />

          <Button type='submit' isDisabled={btnDisabled}>
            {feedbackEditObject.edit ? 'Update' : 'Send'}
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
