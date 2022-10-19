import React from "react";

const Button = ({ className, handleClick, name }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={className}
    >
      {name}
    </button>
  );
};

export default Button;
