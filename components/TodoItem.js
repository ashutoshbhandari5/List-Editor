import React from "react";

const TodoItem = ({ item, handleIsCompleted, deleteTodo }) => {
  return (
    <div className="flex w-full min-w-[120px] justify-center text-white p-2">
      <h1 className="bg-white min-w-[400px] text-black py-1 px-3 rounded mr-5 ">
        {item.name}
      </h1>
      <button
        onClick={(e) => {
          handleIsCompleted(item.id);
        }}
        className="py-1 px-3 rounded bg-add-green"
      >
        Done
      </button>
      <button
        onClick={() => deleteTodo(item.id)}
        className="bg-delete-red rounded py-1 px-3"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
