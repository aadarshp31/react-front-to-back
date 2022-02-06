import { createContext, ReactNode, useEffect, useState } from 'react';
import IFeedback from '../../entities/IFeedback';
import IFeedbackContext from '../../entities/IFeedbackContext';

const FeedbackContext = createContext<IFeedbackContext>({
  feedback: [],
  feedbackEditObject: { edit: false, item: null },
  addFeedback: () => console.log('out of context'),
  removeFeedback: () => console.log('out of context'),
  updateFeedback: () => console.log('out of context'),
  editFeedback: () => console.log('out of context'),
});

type Props = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: Props) => {
  const [feedback, setFeedback] = useState<IFeedback[]>([]);
  const [feedbackEditObject, setFeedbackEditObject] = useState<{
    edit: boolean;
    item: IFeedback | null;
  }>({
    edit: false,
    item: null,
  });

  useEffect(() => {
    getFeedback();
  }, []);

  /**
   * @description gets all/one feedback
   * @param id id of a particular feedback
   */
  async function getFeedback(id?: string) {
    try {
      const path = `/feedback${id === undefined ? '' : '/' + id}`;
      const res = await fetch(process.env.REACT_APP_API_ORIGIN + path);
      switch (res.status) {
        case 200:
          const data = await res.json();

          if (data instanceof Array) {
            setFeedback(data);
            break;
          }

          setFeedback([data]);
          break;
        default:
          throw new Error(res.status + ': ' + res.statusText);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  function addFeedback(feedback: IFeedback) {
    setFeedback((prev) => [feedback, ...prev]);
  }

  function removeFeedback(id: string) {
    if (window.confirm('Are you sure you want to delete this rating?')) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  }

  function updateFeedback(feedbackItem: IFeedback) {
    setFeedback((prev) =>
      prev.map((item) => {
        if (item.id === feedbackItem.id) {
          item.rating = feedbackItem.rating;
          item.text = feedbackItem.text;
          setFeedbackEditObject({
            edit: false,
            item: null,
          });
          return item;
        }
        return item;
      })
    );
  }

  function editFeedback(feedbackItem: IFeedback) {
    setFeedbackEditObject({
      edit: true,
      item: feedbackItem,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        removeFeedback,
        updateFeedback,
        editFeedback,
        feedbackEditObject,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
