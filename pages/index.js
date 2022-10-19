import React, { useEffect, useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import UpdateTodo from "../components/UpdateTodo";

export default function Home() {
  const [todoItem, setTodoItem] = useState("");
  const [todo, setTodoList] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [editTodo, setEditTodo] = useState(null);

  const filteredTodos = useMemo(() => filterTodos(), [todo, currentFilter]);

  const setTodosInLocalStorage = (todos) => {
    if (window !== undefined) {
      if (todos !== null) {
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        localStorage.setItem("todos", JSON.stringify([]));
      }
    }
  };

  const getInitialTodos = () => {
    if (typeof window !== undefined && typeof localStorage !== undefined) {
      const initialTodos = JSON.parse(localStorage.getItem("todos"));
      console.log(initialTodos);
      if (initialTodos) {
        return initialTodos;
      }
      return [];
    }
  };

  function filterTodos() {
    switch (currentFilter) {
      case "all":
        return todo;
        break;

      case "completed":
        return todo.filter((el) => el.completed === true);
        break;

      case "incomplete":
        return todo.filter((el) => el.completed === false);
        break;
    }
  }

  const submitNewTodo = () => {
    setTodoItem("");
    setTodoList((prevState) => [
      ...prevState,
      {
        name: todoItem,
        completed: false,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      },
    ]);
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

  const handleTodoItemUpdate = (item, value) => {
    const updatedTodoItem = { ...item, name: value };
    setTodoList((prevState) =>
      prevState.map((el) => {
        if (el.id === updatedTodoItem.id) {
          return updatedTodoItem;
        }
        return el;
      })
    );
    setEditTodo(null);
  };

  useEffect(() => {
    if (firstRender) {
      setTodoList(getInitialTodos());
      setFirstRender((prevState) => !prevState);
    } else {
      setTodosInLocalStorage(todo);
    }
  }, [todo]);

  return (
    <div className="p-6 relative bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen flex justify-center place-items-start">
      <div className="p-10">
        <h1 className="text-6xl text-white font-mono">Next Todo List</h1>
        <div className="mt-20">
          <TodoForm
            todoItem={todoItem}
            setTodoItem={setTodoItem}
            setCurrentFilter={setCurrentFilter}
            submitNewTodo={submitNewTodo}
          />
        </div>
        {editTodo ? (
          <UpdateTodo
            editItem={editTodo}
            handleTodoItemUpdate={handleTodoItemUpdate}
          />
        ) : (
          filteredTodos.length > 0 && (
            <div className=" rounded p-4 bg-white-gradient flex flex-col place-items-start mt-20 justify-center h-full">
              {filteredTodos.map((el, i) => (
                <TodoItem
                  handleIsCompleted={handleIsCompleted}
                  deleteTodo={deleteTodo}
                  setEditTodo={setEditTodo}
                  item={el}
                  key={i}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
