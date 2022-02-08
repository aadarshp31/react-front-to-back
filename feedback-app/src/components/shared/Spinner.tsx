import spinner from '../../assets/spinner.gif';

type Props = {};

const Spinner = (props: Props) => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '3em', margin: '0 auto', display: 'block' }}
    />
  );
};

export default Spinner;
