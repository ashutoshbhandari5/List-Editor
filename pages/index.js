import React, { useCallback, useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todoItem, setTodoItem] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");
  const [todo, setTodoList] = useState([]);

  const setTodosInLocalStorage = (todos) => {
    if (window !== undefined) {
      if (todos !== null) {
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        localStorage.setItem("todos", JSON.stringify([]));
      }
    }
  };

  const getTodosFromLocalStorage = () => {
    if (typeof window !== undefined) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos) {
        return todos;
      }
      return [];
    }
  };

  const filterTodos = (todos) => {
    switch (currentFilter) {
      case "all":
        return todos;
        break;

      case "completed":
        return todos.filter((el) => el.completed);
        break;

      case "incomplete":
        return todos.filter((el) => !el.completed);
        break;
    }
  };

  const submitNewTodo = () => {
    setTodoList((prevState) => {
      const newTodoList = [
        ...prevState,
        {
          name: todoItem,
          completed: false,
          date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
          id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        },
      ];
      setTodosInLocalStorage(newTodoList);
      return newTodoList;
    });
  };

  const handleIsCompleted = (id) => {
    setTodoList((prevState) =>
      prevState.map((el) => {
        if (el.id === id) {
          return { ...el, completed: true };
        } else {
          return el;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prevState) => prevState.filter((el) => el.id !== id));
  };

  useEffect(() => {
    setTodoList(() => getTodosFromLocalStorage());
  }, []);

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
            submitNewTodo={submitNewTodo}
          />
        </div>
        {todo.length > 0 && (
          <div className=" rounded p-4 bg-white-gradient flex flex-col place-items-start mt-20 justify-center h-full">
            {todo.map((el, i) => (
              <TodoItem
                handleIsCompleted={handleIsCompleted}
                deleteTodo={deleteTodo}
                item={el}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
