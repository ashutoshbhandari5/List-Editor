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
  const [formPayLoad, setFormPayload] = useState({});
  const [update, setUpdate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleChange = (value, id) => {
    setFormPayload((prevState) => ({ ...prevState, [id]: value }));
  };

  const toggleShowForm = () => setShowForm((prevState) => !prevState);

  const createUpdateState = (item) => {
    setUpdate(true);
    setShowForm(true);
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
    let newFormPayLoad = defaultFormPayload();
    if (update) {
      handleUpdateList(formPayLoad);
      setUpdate(false);
    } else {
      setListContainer((prevState) => {
        return [
          ...prevState,
          {
            ...formPayLoad,
            ...newFormPayLoad,
          },
        ];
      });
    }
    setFormPayload(newFormPayLoad);
  };

  return (
    <div className="flex w-full justify-around">
      <div className="absolute text-xl text-white left-36">
        <Button
          name={showForm ? "Close" : "Open Form"}
          handleClick={toggleShowForm}
        />
      </div>
      {showForm && (
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
