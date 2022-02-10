import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {
  title?: string;
};

const Navbar = ({ title = 'Github Finder' }: Props) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
