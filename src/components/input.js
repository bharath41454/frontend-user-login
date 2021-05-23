import React from "react";
const Input = ({ name, value, handleClick, handleChange, type }) => {
  return (
    <React.Fragment>
      <div>
        <input
          placeholder={name}
          type={type}
          value={value}
          id={name}
          onChange={(e) => handleChange(e)}
          onClick={handleClick}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
