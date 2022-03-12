import { createContext, useState } from 'react';
import GithubUser from '../../models/GithubUser';

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
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
      },
    });

    const data = await response.json();
    console.log('users', data);
    setLoading(false);
    setUsers(data);
  }

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
