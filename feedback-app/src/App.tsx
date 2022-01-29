import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import IFeedback from './entities/IFeedback';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function addFeedback(feedback: IFeedback) {
    setFeedback((prev) => [feedback, ...prev]);
  }

  function removeFeedback(id: string) {
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={removeFeedback} />
      </div>
    </>
  );
}

export default App;
