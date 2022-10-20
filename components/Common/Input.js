import React from "react";

const Input = ({ type, value, handleChange, className, placeholder, id }) => {
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value, id)}
    />
  );
};

export default Input;
