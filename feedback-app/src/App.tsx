import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import IFeedback from './entities/IFeedback';
import FeedbackProvider from './stateManagement/provider/FeedbackProvider';

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={removeFeedback}
                  />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
