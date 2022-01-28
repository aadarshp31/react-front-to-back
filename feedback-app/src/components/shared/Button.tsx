type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean | undefined;
  version?: 'primary' | 'secondary';
};

const Button = ({
  children,
  type = 'button',
  isDisabled = false,
  version = 'primary',
}: Props) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version === 'primary' ? 'primary' : 'secondary'}`}>
      {children}
    </button>
  );
};

export default Button;
