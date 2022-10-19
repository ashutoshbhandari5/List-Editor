import React from "react";

const Input = ({ type, value, handleInputChange, className }) => {
  return (
    <input
      type={type}
      value={value}
      className={className}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};

export default Input;
