const Button = ({ name, handleClick }) => {
  return (
    <button className='singin' onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
