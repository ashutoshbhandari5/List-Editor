import React from "react";
import { classnames } from "../utils/classnames";
import Button from "./Common/Button";

const Item = ({ item, handleDeleteList, handleUpdate }) => {
  const deleteListItem = () => {
    handleDeleteList(item.id);
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
        {Object.keys(item).map((el, i) => {
          if (el === "id") {
            return;
          }
          return (
            <h1 key={i}>
              {el} - {item[el]}
            </h1>
          );
        })}
      </div>
    </div>
  );
};
export default Item;
