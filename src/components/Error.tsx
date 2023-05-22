type Props = {
  error: string;
};

const Error: React.FC<Props> = ({ error }) => {
  return <p className="error__message">{error}</p>;
};

export default Error;