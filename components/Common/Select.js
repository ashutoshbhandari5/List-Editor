import React from "react";

const Select = ({ handleChange, id, options }) => {
  return (
    <Select id={id} onChange={(e) => handleChange(e.target.value, id)}>
      {options.map((el, i) => (
        <option disabled={el.disabled} value={el.value} key={i}>
          {el.name}
        </option>
      ))}
    </Select>
  );
};

export default Select;
