import React, { useState } from "react";

const UpdateTodo = ({ editItem, handleTodoItemUpdate }) => {
  const [inputText, setInputText] = useState(editItem.name);
  return (
    <div className="flex w-full mt-10 min-w-[120px] justify-center text-white p-2">
      <input
        className="p-4 rounded h-10 min-w-[385px] focus:outline-none text-black"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => handleTodoItemUpdate(editItem, inputText)}
        className="mx-1 rounded py-1 px-3 bg-sky-400 block hover:bg-white hover:text-black "
      >
        Update
      </button>
    </div>
  );
};

export default UpdateTodo;
