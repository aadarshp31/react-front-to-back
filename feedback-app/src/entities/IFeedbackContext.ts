import IFeedback from "./IFeedback";

export default interface IFeedbackContext {
  feedback: IFeedback[];
  feedbackEditObject: { edit: boolean, item: IFeedback | null };
  addFeedback: Function;
  removeFeedback: Function;
  updateFeedback: Function;
  editFeedback: Function;
  isLoading: boolean;
}