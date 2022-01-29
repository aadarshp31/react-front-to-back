import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
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
    <Router>
      <Header />
      <div className='container'>
        <Route exact path='/'>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={removeFeedback} />
        </Route>
      </div>
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;
