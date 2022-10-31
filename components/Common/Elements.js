import React from "react";
import Select from "./Select";
import Input from "./Input";
import { classnames } from "../../utils/classnames";
import Editor from "../Editor/Editor";

const Elements = ({ field, value, handleChange }) => {
  const { type, placeholder, id, options } = field;
  const renderElement = () => {
    switch (type) {
      case "select":
        return <Select id handleChange={handleChange} options={options} />;
      case "multiple":
        return (
          <Editor
            formJson={field}
            listContainer={value}
            setListContainer={(callback) => {
              console.log(callback(value));
              //handleChange(callback(value), id);
            }}
          />
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
