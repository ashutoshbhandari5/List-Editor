import React from "react";

const TodoForm = ({
  todoItem,
  setTodoItem,
  currentFilter,
  setCurrentFilter,
}) => {
  return (
    <div>
      <input
        className="w-96 h-10 rounded-md focus:outline-none p-2"
        onChange={(e) => setTodoItem(e.target.value)}
        value={todoItem}
        type="text"
      />
      <button className="mx-6 border-[1px] text-white px-8 cursor-pointer py-2 bg-gradient-to-r from-indigo-500 rounded hover:opacity-80 transition-all">
        Add
      </button>
      <select
        value={currentFilter}
        onChange={(e) => setCurrentFilter(e.target.value)}
        className="mx-6 px-8 cursor-pointer rounded py-2 outline-none"
      >
        <option disabled={true}>Filter</option>
        <option>All</option>
        <option>Done</option>
        <option>Todo</option>
      </select>
    </div>
  );
};

export default TodoForm;
