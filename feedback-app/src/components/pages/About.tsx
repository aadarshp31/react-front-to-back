import { Link } from 'react-router-dom';
import Card from '../shared/Card';

type Props = {};

const About = (props: Props) => {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/'>Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
