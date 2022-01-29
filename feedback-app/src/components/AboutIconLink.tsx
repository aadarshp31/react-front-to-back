import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type Props = {};

const AboutIconLink = (props: Props) => {
  return (
    <Link to='/about'>
      <div className='about-link'>
        <FaQuestion size={30} />
      </div>
    </Link>
  );
};

export default AboutIconLink;
