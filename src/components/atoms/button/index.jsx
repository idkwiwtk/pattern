const Button = ({ children, ...etc }) => {
  return <button {...etc}>{children}</button>;
};

export default Button;
