import React, { useState } from "react";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import UpdateList from "../UpdateList";
import Form from "../Forms/Form";

const Editor = ({
  setListContainer,
  listContainer,
  handleDeleteList,
  handleUpdateList,
}) => {
  const [formState, setFormState] = useState({});
  const [update, setUpdate] = useState(false);
  const handleChange = (value, id) => {
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleUpdate = (item) => {
    setUpdate(true);
    setFormState(item);
  };

  const handleSubmit = () => {
    if (update) {
      handleUpdateList(formState);
      setUpdate(false);
    } else {
      setListContainer((prevState) => {
        console.log(prevState);
        return [
          ...prevState,
          {
            ...formState,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
          },
        ];
      });
    }
  };

  return (
    <div className="flex w-full justify-around">
      <div>
        <Form inputGroup={formState} handleChange={handleChange} />
        <Button
          name={"Submit"}
          className={`${classnames.submit} mt-5 ml-10 items-center`}
          handleClick={handleSubmit}
        />
      </div>
      <div className="grid grid-cols-3 gap-1 ">
        {listContainer.length > 0 &&
          listContainer.map((el, i) => {
            return (
              <UpdateList
                handleDeleteList={handleDeleteList}
                handleUpdate={handleUpdate}
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
