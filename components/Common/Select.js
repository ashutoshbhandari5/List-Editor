import React from "react";

const Select = ({ id, options, handleChange, value }) => {
  return (
    <select
      className="mb-4 focus:outline-none rounded py-1 px-3"
      id={id}
      value={value}
      onChange={(e) => handleChange(e.target.value, id)}
    >
      {options.map((option, i) => (
        <option disabled={option.disabled} value={option.value} key={i}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
