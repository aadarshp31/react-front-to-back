type Props = {
  text: string;
};

const Header = (props: Props) => {
  return (
    <header>
      <div className='container'>
        <h2>{props.text}</h2>
      </div>
    </header>
  );
};

export default Header;
