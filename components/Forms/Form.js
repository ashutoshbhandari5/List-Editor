import React from "react";
import Button from "../Common/Button";
import Elements from "../Common/Elements";

const Form = ({ inputGroup, handleChange, formJson, setListContainer }) => {
  return (
    <form className="p-10 relative gap-5 grid grid-cols-2">
      {formJson.fields.map((el, i) => (
        <Elements
          setListContainer={setListContainer}
          key={i}
          field={el}
          value={inputGroup[el.id] ? inputGroup[el.id] : ""}
          handleChange={handleChange}
        />
      ))}
    </form>
  );
};

export default Form;
