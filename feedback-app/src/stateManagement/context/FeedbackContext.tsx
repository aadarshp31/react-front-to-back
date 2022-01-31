import { createContext, ReactNode, useState } from 'react';
import IFeedback from '../../entities/IFeedback';
import IFeedbackContext from '../../entities/IFeedbackContext';

const initialFeedback: IFeedback[] = [
  {
    id: '1',
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: '2',
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: '3',
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
];

const FeedbackContext = createContext<IFeedbackContext>({
  feedback: initialFeedback,
  addFeedback: () => console.log('out of context'),
  removeFeedback: () => console.log('out of context'),
});

type Props = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: Props) => {
  const [feedback, setFeedback] = useState(initialFeedback);

  function addFeedback(feedback: IFeedback) {
    setFeedback((prev) => [feedback, ...prev]);
  }

  function removeFeedback(id: string) {
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, removeFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
