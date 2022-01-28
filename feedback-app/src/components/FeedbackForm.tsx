import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

type Props = {};

const FeedbackForm = (props: Props) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newText = event.target.value;
    if (newText === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (newText.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Review must have more than 10 characters ');
    } else {
      setMessage('');
      setBtnDisabled(false);
    }

    setText(newText);
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
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
