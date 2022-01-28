import { useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function removeFeedback(id: string) {
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={removeFeedback} />
      </div>
    </>
  );
}

export default App;
