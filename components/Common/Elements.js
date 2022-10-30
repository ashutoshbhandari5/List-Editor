import React from "react";
import Select from "./Select";
import Input from "./Input";
import { classnames } from "../../utils/classnames";
import InputButton from "./InputButton";

const Elements = ({ field, value, handleChange }) => {
  const { type, placeholder, id, options } = field;
  const renderElement = () => {
    switch (type) {
      case "select":
        return <Select id handleChange={handleChange} options={options} />;
      case "multiple":
        return (
          <InputButton elements={field.schema} handleChange={handleChange} />
        );
      default:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            handleChange={handleChange}
            id={id}
            className={classnames.formInput}
            value={value}
          />
        );
    }
  };

  return <>{renderElement()}</>;
};

export default Elements;
