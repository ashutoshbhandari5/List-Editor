import React from "react";

const TodoForm = ({
  todoItem,
  setTodoItem,
  currentFilter,
  setCurrentFilter,
  submitNewTodo,
}) => {
  return (
    <div className="flex">
      <h1 className="text-black items-center py-1 px-2 bg-white rounded">
        Select the type of list group that you want to add
      </h1>
      <select
        value={currentFilter}
        //onChange={(e) => setCurrentFilter(e.target.value)}
        className="mx-6 px-8 cursor-pointer rounded py-2 outline-none"
      >
        <option selected disabled={true}>
          Type
        </option>
        <option value="organization">Organization</option>
        <option value="school">School</option>
        <option value="health">Health</option>
      </select>
    </div>
  );
};

export default TodoForm;

//  <input
//         className="w-96 h-10 rounded-md focus:outline-none p-2"
//         onChange={(e) => setTodoItem(e.target.value)}
//         value={todoItem}
//         type="text"
//       />
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           submitNewTodo();
//         }}
//         className="mx-6 border-[1px] text-white px-8 cursor-pointer py-2 bg-gradient-to-r from-indigo-500 rounded hover:opacity-80 transition-all"
//       >
//         Add
//       </button>
//       <select
//         value={currentFilter}
//         onChange={(e) => setCurrentFilter(e.target.value)}
//         className="mx-6 px-8 cursor-pointer rounded py-2 outline-none"
//       >
//         <option disabled={true}>Filter</option>
//         <option value="all">All</option>
//         <option value="completed">Done</option>
//         <option value="incomplete">Todo</option>
//       </select>
