type Props = {
  text?: string;
  bgColor?: string;
  textColor?: string;
};

const Header = (props: Props) => {
  const {
    text = 'Feedback UI',
    bgColor = 'rgba(0, 0, 0, 0.4)',
    textColor = '#ff6a95',
  } = props;

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
