import { useEffect, useState } from 'react';
import GithubUser from '../../models/GithubUser';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

type Props = {};

const UserResults = (props: Props) => {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PAT}`,
      },
    });

    const data = await response.json();
    setLoading(false);
    console.log('users', data);
    setUsers(data);
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user, index) => <UserItem key={index} user={user} />)
      )}
    </div>
  );
};

export default UserResults;
