import React from "react";
import Elements from "../Common/Elements";
import FormJson from "../../Json/Form.json";

const Form = ({ inputGroup, handleChange }) => {
  return (
    <form className="gap-5 grid grid-cols-2">
      {FormJson.fields.map((el, i) => (
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

export default Form;
