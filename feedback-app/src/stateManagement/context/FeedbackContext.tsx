import { createContext, ReactNode, useState } from 'react';
import IFeedback from '../../entities/IFeedback';

const FeedbackContext = createContext<any>({});

type Props = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: Props) => {
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

  const [feedback, setFeedback] = useState(initialFeedback);
  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
