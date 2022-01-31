import { useState } from 'react';
import IFeedback from '../../entities/IFeedback';
import FeedbackContext from '../context/FeedbackContext';

type Props = {
  children: React.ReactNode;
};

const FeedbackProvider = ({ children }: Props) => {
  let initialState: IFeedback[] = [
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

  const [feedback, setFeedback] = useState(initialState);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
