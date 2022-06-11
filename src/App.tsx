import { useRef, useState } from "react";
import "./global.scss";
import { useIntersection } from "./hooks/useIntersection";
import { useLocalStorage, useSessionStorage } from "./hooks/useStorage";
import { findAttribute } from "./utils/findAttribute";

function App() {
  //useIntersection
  const elRef = useRef<HTMLHeadingElement>(null);
  const inViewPort = useIntersection(elRef, "0px");

  //useStorage
  const [data, setData, removeData] = useLocalStorage("data", {
    name: "Edson",
    age: 32,
  });

  const options = [
    { name: "Um", value: 1 },
    { name: "Dois", value: 2 },
    { name: "Três", value: 3 },
  ];

  return (
    <div className="App">
      <section>
        <div className="form_wrapper">
          <p>
            {data?.name} - {data?.age}
          </p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) =>
              setData((current: any) => ({
                ...current,
                name: e.target.value,
              }))
            }
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            onChange={(e) =>
              setData((current: any) => ({
                ...current,
                age: e.target.value,
              }))
            }
          />
          <button onClick={removeData}>Clear Data</button>
        </div>
        <div style={{ marginLeft: "1rem" }} className="form_wrapper">
          <h2>findAttribute</h2>
          <p>{findAttribute(options, "value", 1, "name")}</p>
          <p>{findAttribute(options, "value", 2, "name")}</p>
          <p> {findAttribute(options, "value", 3, "name")}</p>
        </div>
      </section>
      <section>
        <div
          className={`container ${inViewPort ? "animate" : "fade-out"}`}
          ref={elRef}
        >
          Hello World !!
        </div>
      </section>
    </div>
  );
}

export default App;
