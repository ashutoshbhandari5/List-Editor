import React from "react";
import Elements from "../Common/Elements";

const OrgForm = ({ formInputJson, inputGroup, handleChange }) => {
  console.log(inputGroup);
  return (
    <form className="gap-5 grid grid-cols-2">
      {formInputJson.fields.map((el, i) => (
        <Elements
          key={i}
          field={el}
          value={inputGroup[el.id]}
          handleChange={handleChange}
        />
      ))}
    </form>
  );
};

export default OrgForm;
