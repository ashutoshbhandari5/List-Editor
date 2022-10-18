import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";

export default function Home() {
  const [todoItem, setTodoItem] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");
  const [todo, setTodoList] = useState([]);

  const submitNewTodo = () => {};

  useEffect(() => {}, []);

  return (
    <div className="p-6 relative bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen flex justify-center place-items-start">
      <div className="p-10">
        <h1 className="text-6xl text-white font-mono">Next Todo List</h1>
        <div className="mt-20">
          <TodoForm
            todoItem={todoItem}
            setTodoItem={setTodoItem}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </div>
      </div>
    </div>
  );
}
