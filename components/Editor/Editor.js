import React, { useState } from "react";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import Item from "../Item";
import Form from "../Forms/Form";
import Select from "../Common/Select";

const Editor = ({ listContainer, setListContainer }) => {
  const [formPayLoad, setFormPayload] = useState({});
  const [update, setUpdate] = useState(false);
  const [formType, setFormType] = useState("org");
  const handleChange = (value, id) => {
    setFormPayload((prevState) => ({ ...prevState, [id]: value }));
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
    setFormPayload(newFormPayLoad);
    if (update) {
      handleUpdateList(formPayLoad);
      setUpdate(false);
    } else {
      setListContainer((prevState) => {
        console.log(prevState);
        return [
          ...prevState,
          {
            ...formPayLoad,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            type: formType,
          },
        ];
      });
    }
  };

  const formTypeOptions = [
    {
      name: "Org",
      value: "org",
    },
    {
      name: "Health",
      value: "health",
    },
  ];

  return (
    <div className="flex w-full justify-around">
      <div>
        <Select
          handleChange={setFormType}
          value={formType}
          id={"formType"}
          options={formTypeOptions}
        />
        <Form
          type={formType}
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
