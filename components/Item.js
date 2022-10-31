import React from "react";
import { classnames } from "../utils/classnames";
import Button from "./Common/Button";

const Item = ({ item, handleDeleteList, handleUpdate }) => {
  console.log(item);
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
          } else if (el !== "employees") {
            return (
              <h1 key={i}>
                {el} - {item[el]}
              </h1>
            );
          } else {
            // return (
            //   <div key={i}>
            //     <h3>Employees</h3>
            //     {el.map((employees, i) => (
            //       <h1 key={i}>{employees}</h1>
            //     ))}
            //   </div>
            // );
            console.log(el);
          }
        })}
      </div>
    </div>
  );
};
export default Item;
