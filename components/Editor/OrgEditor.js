import React, { useState } from "react";
import Elements from "../Common/Elements";
import OrgFormJson from "../../Json/OrgForm.json";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import TodoForm from "./TodoForm";

const OrgEditor = ({ setListContainer }) => {
  const [formState, setFormState] = useState({});
  const handleChange = (value, id) => {
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = () => {
    setListContainer((prevState) => {
      return {
        ...prevState,
        org: [...prevState.org, formState],
      };
    });
  };

  return (
    <div className="flex w-full justify-around">
      <div>
        <form className="gap-5 grid grid-cols-2">
          {OrgFormJson.fields.map((el, i) => (
            <Elements
              key={i}
              field={el}
              value={formState[el.id]}
              handleChange={handleChange}
            />
          ))}
        </form>
        <Button
          name={"Submit"}
          className={`${classnames.submit} mt-5 ml-10 items-center`}
          handleClick={handleSubmit}
        />
      </div>
      <div className="grid gap-10 p-2 grid-row-2 rounded-md"></div>
    </div>
  );
};

export default OrgEditor;
