import React, { useEffect, useMemo, useState } from "react";
import OrgEditor from "../components/Editor/OrgEditor";

export default function Home() {
  const [listContainer, setListContainer] = useState({ org: [] });
  const [firstRender, setFirstRender] = useState(true);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [editTodo, setEditTodo] = useState(null);

  console.log(listContainer);

  const getInitialList = () => {
    if (typeof window !== undefined && typeof localStorage !== undefined) {
      const initialList = JSON.parse(localStorage.getItem("listContainer"));
      if (initialList) {
        return initialList;
      }
      const initalState = { org: [] };
      return initalState;
    }
  };

  const setListContainerInLocalStorage = (listContainer) => {
    if (window !== undefined) {
      if (listContainer !== null) {
        localStorage.setItem("listContainer", JSON.stringify(listContainer));
      } else {
        localStorage.setItem("listContainer", JSON.stringify({ org: [] }));
      }
    }
  };

  const handleUpdateList = (type, item) => {
    setListContainer((prevState) => {
      let foundItem = prevState[type].find((el) => el.id === item.id);
      foundItem = { ...foundItem, ...item };
      const newList = prevState[type].map((el) => {
        if (el.id === item.id) {
          return foundItem;
        } else {
          return el;
        }
      });
      return { ...prevState, [type]: newList };
    });
  };

  const handleDeleteList = (id, type) => {
    setListContainer((prevState) => {
      const newArray = prevState[type].filter((el) => el.id !== id);
      return { ...prevState, [type]: newArray };
    });
  };

  useEffect(() => {
    if (firstRender) {
      setListContainer(getInitialList());
      setFirstRender((prevState) => !prevState);
    } else {
      setListContainerInLocalStorage(listContainer);
    }
  }, [listContainer]);

  return (
    <div className="p-6 relative bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-screen flex justify-center place-items-start">
      <h1 className="absolute left-2 top-1 text-2xl text-white font-mono">
        List Editor
      </h1>
      <div className="mt-6 w-full">
        <OrgEditor
          handleDeleteList={handleDeleteList}
          listContainer={listContainer}
          setListContainer={setListContainer}
          handleUpdateList={handleUpdateList}
        />
      </div>
    </div>
  );
}
