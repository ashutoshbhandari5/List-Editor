import React, { useState } from "react";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import Item from "../Item";
import Form from "../Forms/Form";

const Editor = ({
  setListContainer,
  formJson,
  listContainer,
  defaultFormPayload,
}) => {
  const [formPayLoad, setFormPayload] = useState(null);
  const [update, setUpdate] = useState(false);
  const handleChange = (value, id) => {
    setFormPayload((prevState) => ({ ...prevState, [id]: value }));
  };

  const toggleShowForm = () => {
    setFormPayload((prevState) => {
      if (prevState) {
        return null;
      }
      return defaultFormPayload();
    });
  };

  const createUpdateState = (item) => {
    setUpdate(true);
    setFormPayload(item);
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
    if (update) {
      handleUpdateList(formPayLoad);
      setUpdate(false);
    } else {
      setListContainer((prevState) => {
        return [
          ...prevState,
          {
            ...formPayLoad,
          },
        ];
      });
    }
    setFormPayload(null);
  };

  return (
    <div className="flex w-full justify-around">
      <div className="absolute text-xl text-white left-36">
        <Button
          name={formPayLoad ? "Close" : "Open Form"}
          handleClick={toggleShowForm}
        />
      </div>
      {formPayLoad && (
        <div>
          <Form
            formJson={formJson}
            inputGroup={formPayLoad}
            handleChange={handleChange}
            toggleShowForm={toggleShowForm}
          />
          <Button
            name={"Submit"}
            className={`${classnames.submit} mt-5 ml-10 items-center`}
            handleClick={SubmitNewItem}
          />
        </div>
      )}{" "}
      <div className="grid grid-cols-3 gap-1 ">
        {listContainer &&
          listContainer.length > 0 &&
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
