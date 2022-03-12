import GITHUB_ACTION_TYPES from "./GITHUB_ACTION_TYPES";


function githubReducer(state: any, action: { type: string, payload: any }) {

  switch (action.type) {
    case GITHUB_ACTION_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case GITHUB_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }


    default:
      return state;
  }

}

export default githubReducer;