import React, { useEffect, useState } from "react";
import Editor from "../components/Editor/Editor";

export default function Home() {
  const [listContainer, setListContainer] = useState({});
  const [firstRender, setFirstRender] = useState(true);

  const orgInitialState = {
    name: "",
    phone: "",
    email: "",
    address: "",
    phone: "",
    count: "",
  };

  const getInitialList = () => {
    if (typeof window !== undefined && typeof localStorage !== undefined) {
      const initialList = JSON.parse(localStorage.getItem("listContainer"));
      if (initialList) {
        return initialList;
      }
      return {};
    }
  };

  const setListContainerInLocalStorage = (listContainer) => {
    if (window !== undefined) {
      if (listContainer !== null) {
        localStorage.setItem("listContainer", JSON.stringify(listContainer));
      } else {
        localStorage.setItem("listContainer", JSON.stringify({}));
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
        <Editor
          handleDeleteList={handleDeleteList}
          type={"org"}
          listContainer={listContainer}
          setListContainer={setListContainer}
          handleUpdateList={handleUpdateList}
          initialState={orgInitialState}
        />
      </div>
    </div>
  );
}
