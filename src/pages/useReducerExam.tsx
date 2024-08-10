import React, { ChangeEvent, useReducer } from "react";

type IAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };

const reducer = (counterState: typeof initialState, action: IAction) => {
  switch (action.type) {
    case "addName":
      return { ...counterState, name: action.payload };

    case "addEmail":
      return { ...counterState, email: action.payload };

    default:
      return counterState;
  }
};

const UseReducerExam = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="flex justify-center text-black">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2">
          <input
            onChange={(e) =>
              dispatch({ type: "addName", payload: e.target.value })
            }
            type="text"
            name="name"
            id="name"
            className="border border-black text-black"
          />
          <input
            onChange={(e) =>
              dispatch({ type: "addEmail", payload: e.target.value })
            }
            type="email"
            name="email"
            id="email"
            className="border border-black text-black"
          />
        </div>

        <div className="flex justify-center my-6">
          <button type="submit" className="btn bg-error">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UseReducerExam;
