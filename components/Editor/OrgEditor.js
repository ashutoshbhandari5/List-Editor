import React, { useState } from "react";
import OrgFormJson from "../../Json/OrgForm.json";
import Button from "../Common/Button";
import { classnames } from "../../utils/classnames";
import UpdateList from "../UpdateList";
import OrgForm from "../Forms/OrgForm";

const OrgEditor = ({
  setListContainer,
  listContainer,
  handleDeleteList,
  handleUpdateList,
}) => {
  const initalState = {
    name: "",
    phone: "",
    email: "",
    address: "",
    phone: "",
    count: "",
  };
  const [formState, setFormState] = useState(initalState);
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
      handleUpdateList("org", formState);
      setFormState(initalState);
      setUpdate(false);
    } else {
      console.log("here");
      setListContainer((prevState) => {
        return {
          ...prevState,
          org: [
            ...prevState.org,
            {
              ...formState,
              id:
                Date.now().toString(36) + Math.random().toString(36).substr(2),
            },
          ],
        };
      });
    }
  };

  return (
    <div className="flex w-full justify-around">
      <div>
        <OrgForm
          formInputJson={OrgFormJson}
          inputGroup={formState}
          handleChange={handleChange}
        />
        <Button
          name={"Submit"}
          className={`${classnames.submit} mt-5 ml-10 items-center`}
          handleClick={handleSubmit}
        />
      </div>
      <div className="grid grid-cols-3 gap-1 ">
        {listContainer.org.map((el, i) => {
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

export default OrgEditor;
