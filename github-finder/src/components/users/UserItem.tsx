import { Link } from 'react-router-dom';
import GithubUser from '../../models/GithubUser';

type Props = {
  user: GithubUser;
};

const UserItem = ({ user: { login, avatar_url } }: Props) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className=''>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile Image' />
            </div>
          </div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
