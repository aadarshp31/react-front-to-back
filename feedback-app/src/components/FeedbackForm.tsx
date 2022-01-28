import { useState } from 'react';
import Card from './shared/Card';

type Props = {};

const FeedbackForm = (props: Props) => {
  const [text, setText] = useState('');

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value.trim());
  }

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        {/* TODO: rating select component */}
        <div className='input-group'>
          <input
            type='text'
            name='feedback-text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <button type='submit'>Submit Review</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
