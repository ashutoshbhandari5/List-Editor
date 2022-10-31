import React, { useEffect, useState } from "react";
import Select from "../components/Common/Select";
import OrgForm from "../Json/OrgForm.json";
import HealthForm from "../Json/HealthForm.json";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor/Editor"), {
  ssr: false,
});

export default function Home() {
  const [listContainer, setListContainer] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [formType, setFormType] = useState("org");
  const formJson = formType === "org" ? OrgForm : HealthForm;
  const defaultFormPayload = {
    employees: [],
  };

  const getInitialList = () => {
    if (typeof window !== undefined && typeof localStorage !== undefined) {
      const initialList = JSON.parse(localStorage.getItem("listContainer"));
      if (initialList) {
        return initialList;
      }
      return [];
    }
  };

  const setListContainerInLocalStorage = (listContainer) => {
    if (window !== undefined) {
      if (listContainer !== null) {
        localStorage.setItem("listContainer", JSON.stringify(listContainer));
      } else {
        localStorage.setItem("listContainer", JSON.stringify([]));
      }
    }
  };

  useEffect(() => {
    if (firstRender) {
      // setListContainer(getInitialList());
      setFirstRender((prevState) => !prevState);
    } else {
      setListContainerInLocalStorage(listContainer);
    }
  }, [listContainer]);

  const formTypeOptions = [
    {
      name: "Org",
      value: "org",
    },
    {
      name: "Health",
      value: "health",
    },
  ];

  return (
    <div className="p-6 relative bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-screen flex justify-center place-items-start">
      <h1 className="absolute left-2 top-1 text-2xl text-white font-mono">
        List Editor
      </h1>
      <div className="mt-5">
        <Select
          handleChange={setFormType}
          value={formType}
          id={"formType"}
          options={formTypeOptions}
        />
      </div>
      <div className="mt-6 w-full">
        <Editor
          defaultFormPayload={() => {
            return {
              id:
                Date.now().toString(36) + Math.random().toString(36).substr(2),
              employees: [],
            };
          }}
          formJson={formJson}
          listContainer={listContainer}
          setListContainer={setListContainer}
        />
      </div>
    </div>
  );
}
