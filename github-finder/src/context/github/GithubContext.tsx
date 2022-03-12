import { createContext, useReducer } from 'react';
import GithubUser from '../../models/GithubUser';
import GITHUB_ACTION_TYPES from './GITHUB_ACTION_TYPES';
import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_PAT = process.env.REACT_APP_GITHUB_PAT;

const GithubContext = createContext<{
  users: GithubUser[];
  loading: boolean;
  fetchUsers: Function;
}>({
  users: [],
  loading: false,
  fetchUsers: () => console.warn('out of context'),
});

type Props = {
  children: React.ReactNode;
};

export const GithubProvider = ({ children }: Props) => {
  const initialState: { users: GithubUser[]; loading: boolean } = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const { users, loading } = state;

  async function fetchUsers() {
    dispatch({ type: GITHUB_ACTION_TYPES.SET_LOADING, payload: true });

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
      },
    });

    const data = await response.json();
    console.log('users', data);

    dispatch({ type: GITHUB_ACTION_TYPES.GET_USERS, payload: data });
    dispatch({ type: GITHUB_ACTION_TYPES.SET_LOADING, payload: false });
  }

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
