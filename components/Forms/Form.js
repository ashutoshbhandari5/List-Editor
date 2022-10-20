import React from "react";
import Elements from "../Common/Elements";
import FormJson from "../../Json/Form.json";
import HealthFormJson from "../../Json/HealthForm.json";

const Form = ({ inputGroup, handleChange, type }) => {
  const elementsJson = type === "org" ? FormJson : HealthFormJson;
  return (
    <form className="gap-5 grid grid-cols-2">
      {elementsJson.fields.map((el, i) => (
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
