import React from "react";

const Select = ({ options }) => {
  return (
    <Select>
      {options.map((el, i) => (
        <option key={i}></option>
      ))}
    </Select>
  );
};

export default Select;
