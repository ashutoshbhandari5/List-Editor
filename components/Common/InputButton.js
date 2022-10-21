import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { classnames } from "../../utils/classnames";

const InputButton = ({ elements, handleChange }) => {
  const [input, setInput] = useState(1);

  const handleClick = () => {
    setInput((prevState) => prevState + 1);
  };

  return (
    <div className=" p-2 flex flex-col border border-slate-500">
      {elements.map((el) => {
        return el.type === "text" ? (
          Array(input)
            .fill()
            .map((_, i) => (
              <Input
                key={i}
                handleChange={handleChange}
                id={`${el.id}_${i}`}
                type={el.type}
                placeholder={el.placeholder}
                className={`${classnames.formInput} mb-3`}
              />
            ))
        ) : (
          <Button
            handleClick={handleClick}
            className={classnames.submit}
            name={el.label}
          />
        );
      })}
    </div>
  );
};

export default InputButton;
