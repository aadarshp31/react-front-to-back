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
  isLoading: false,
});

type Props = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      // FIXME: Please add a updated/created at field to manage state location as per sequence
      const path = `/feedback${id === undefined ? '' : '/' + id}`;
      const sortFilterQuery = `_sort=id&_order=desc`;
      const res = await fetch(
        `${process.env.REACT_APP_API_ORIGIN + path}?${sortFilterQuery}`
      );
      switch (res.status) {
        case 200:
          setIsLoading(false);
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
      setIsLoading(false);
      console.error(error.message);
    }
  }

  /**
   * @description adds feedback item to the server's database
   * @param feedback feedback item you want to add to the server's database
   */
  async function addFeedback(feedback: IFeedback) {
    try {
      setIsLoading(true);
      const path = `/feedback`;
      const res = await fetch(process.env.REACT_APP_API_ORIGIN + path, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

      switch (res.status) {
        case 201:
          setIsLoading(false);
          const item = await res.json();
          setFeedback((prev) => [item, ...prev]);
          break;
        default:
          throw new Error(res.status + ': ' + res.statusText);
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error(error.message);
    }
  }

  /**
   * @description removes a feedback item from the server's database
   * @param id id of the feedback you want to remove from server's database
   */
  async function removeFeedback(id: string) {
    if (window.confirm('Are you sure you want to delete this rating?')) {
      try {
        setIsLoading(true);
        const path = `/feedback/${id}`;
        const res = await fetch(process.env.REACT_APP_API_ORIGIN + path, {
          method: 'DELETE',
        });

        switch (res.status) {
          case 200:
            setIsLoading(false);
            setFeedback((prev) => prev.filter((item) => item.id !== id));
            break;
          default:
            throw new Error(res.status + ': ' + res.statusText);
        }
      } catch (error: any) {
        setIsLoading(false);
        console.error(error.message);
      }
    }
  }

  /**
   * @description update a feedback item in the server's database
   * @param feedbackItem feedback item you want to update in the server's database
   */
  async function updateFeedback(feedbackItem: IFeedback) {
    try {
      setIsLoading(true);
      const path = `/feedback/${feedbackItem.id}`;
      const res = await fetch(process.env.REACT_APP_API_ORIGIN + path, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(feedbackItem),
      });

      switch (res.status) {
        case 200:
          setIsLoading(false);
          const data = await res.json();
          setFeedback((prev) => {
            const newFeedback = prev.map((item) => {
              if (item.id === data.id) {
                item = data;
              }
              return item;
            });
            return newFeedback;
          });
          setFeedbackEditObject({
            edit: false,
            item: null,
          });
          break;
        default:
          throw new Error(res.status + ': ' + res.statusText);
      }
    } catch (error: any) {
      setFeedbackEditObject({
        edit: false,
        item: null,
      });
      setIsLoading(false);
      console.error(error.message);
    }
  }

  /**
   * @description marks selected feedback for edit/update
   * @param feedbackItem feedback item you want to mark for edit/update
   */
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
        isLoading,
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
