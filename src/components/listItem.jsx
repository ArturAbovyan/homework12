import { type } from "@testing-library/user-event/dist/type";
import { useContext, useReducer, useState } from "react";
import clsx from "clsx";
function initReducer(value) {
  try {
    const item = window.localStorage.getItem("todolist");
    return item ? JSON.parse(item) : value;
  } catch (error) {
    console.log(error);
    return value;
  }
}

function inputReducer(state, action) {
  switch (action.type) {
    case "enter":
      return { input: action.payload };
    case "reset":
      return { input: "" };
    default:
      return state;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const add = {
        list: [...state.list, { item: action.payload, active: false }]
      };
      window.localStorage.setItem("todolist", JSON.stringify(add));
      return add;

    case "delete":
      const del = {
        list: state.list.filter((el, index) => index !== action.payload)
      };
      window.localStorage.setItem("todolist", JSON.stringify(del));
      return del;

    case "toggle":
      const tog = {
        list: [
          ...state.list.map((el, index) => {
            if (index === action.payload) {
              return { ...el, active: !el.active };
            } else {
              return { ...el };
            }
          })
        ]
      };
      window.localStorage.setItem("todolist", JSON.stringify(tog));
      return tog;

    default:
      return state;
  }
}


  
  
function ListItem() {
  const [state, dispatch] = useReducer(reducer, { list: [] }, initReducer);
  const [input, setInput] = useReducer(inputReducer, { input: "" });

  return (
    <>
      <div className={"container"}>
        <div className={"formWrapper"}>
          <input
            className={"inputAdd"}
            onChange={(e) => {
              setInput({ type: "enter", payload: e.currentTarget.value });
            }}
            value={input.input}
            type="text"
          />
          <button
            className={"btnAdd"}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "add", payload: input.input });
              setInput({ type: "reset" });
            }}
          >
            add
          </button>
        </div>
        <div className={"listWrapper"}>
          {state.list.map((el, index) => {
            return (
              <>
                <div
                  onClick={() => dispatch({ type: "toggle", payload: index })}
                  className={clsx({
                    itemWrapper: true,
                    listItemActive: el.active
                  })}
                >
                  <button
                    className={"btnRemove"}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "delete", payload: index });
                    }}
                  >
                    remove
                  </button>
                  <div
                    className={clsx({
                      listItem: true
                    })}
                    key={index}
                  >
                    {el.item}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
  
}
export default ListItem