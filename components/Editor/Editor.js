import React, { useState } from "react";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import Item from "../Item";
import Form from "../Forms/Form";

const Editor = ({ listContainer, setListContainer, formJson }) => {
  const [formPayLoad, setFormPayload] = useState({});
  const [update, setUpdate] = useState(false);
  const handleChange = (value, id) => {
    if (id.match(/_/g)) {
      setFormPayload((prevState) => {
        const previousEmployees = prevState.employees;
        if (previousEmployees === undefined) {
          return {
            ...prevState,
            employees: [value],
          };
        } else {
          return {
            ...prevState,
            employees: [...previousEmployees, value],
          };
        }
      });
    } else {
      setFormPayload((prevState) => ({ ...prevState, [id]: value }));
    }
  };

  const createUpdateState = (item) => {
    setUpdate(true);
    setFormPayload(item);
    setFormType(item.type);
  };

  const handleUpdateList = (item) => {
    setListContainer((prevState) => {
      let foundItem = prevState.find((el) => el.id === item.id);
      foundItem = { ...foundItem, ...item };
      const newList = prevState.map((el) => {
        if (el.id === item.id) {
          return foundItem;
        } else {
          return el;
        }
      });
      return [...newList];
    });
  };

  const handleDeleteList = (id) => {
    setListContainer((prevState) => {
      const newArray = prevState.filter((el) => el.id !== id);
      return [...newArray];
    });
  };

  const SubmitNewItem = () => {
    let newFormPayLoad;
    Object.keys(formPayLoad).forEach((el) => {
      newFormPayLoad = { ...newFormPayLoad, [el]: "" };
    });
    if (update) {
      handleUpdateList(formPayLoad);
      setUpdate(false);
    } else {
      setListContainer((prevState) => {
        return [
          ...prevState,
          {
            ...formPayLoad,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
          },
        ];
      });
    }
    setFormPayload(newFormPayLoad);
  };

  return (
    <div className="flex w-full justify-around">
      <div>
        <Form
          formJson={formJson}
          inputGroup={formPayLoad}
          handleChange={handleChange}
        />
        <Button
          name={"Submit"}
          className={`${classnames.submit} mt-5 ml-10 items-center`}
          handleClick={SubmitNewItem}
        />
      </div>
      <div className="grid grid-cols-3 gap-1 ">
        {listContainer.length > 0 &&
          listContainer.map((el, i) => {
            return (
              <Item
                handleDeleteList={handleDeleteList}
                handleUpdate={createUpdateState}
                item={el}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Editor;
