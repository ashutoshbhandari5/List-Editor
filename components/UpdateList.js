import React from "react";
import { classnames } from "../utils/classnames";
import Button from "./Common/Button";

const UpdateList = ({ item, handleDeleteList, handleUpdate }) => {
  const deleteListItem = () => {
    handleDeleteList(item.id, "org");
  };

  const updateListItem = () => {
    handleUpdate(item);
  };

  return (
    <div className="rounded bg-white text-black p-2">
      <div className="flex w-full justify-between items-center">
        <Button
          handleClick={updateListItem}
          className={classnames.edit}
          name={"Edit"}
        />
        <Button
          handleClick={deleteListItem}
          className={classnames.delete}
          name={"Delete"}
        />
      </div>
      <div className="mt-5">
        <h1>Name - {item.name}</h1>
        <h1>Email - {item.email}</h1>
        <h1>Address - {item.address}</h1>
        <h1>Phone - {item.phone}</h1>
        <h1>Employees Count - {item.count}</h1>
      </div>
    </div>
  );
};

export default UpdateList;
