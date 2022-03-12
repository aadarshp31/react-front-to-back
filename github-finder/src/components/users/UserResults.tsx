import { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

type Props = {};

const UserResults = (props: Props) => {
  const { fetchUsers, loading, users } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

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
