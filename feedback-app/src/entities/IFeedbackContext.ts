import IFeedback from "./IFeedback";

export default interface IFeedbackContext {
  feedback: IFeedback[];
  addFeedback: Function;
  removeFeedback: Function;
}