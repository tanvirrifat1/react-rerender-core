import { useState, Dispatch } from "react";

type ICounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const UseStateExam = ({ counter, setCounter }: ICounter) => {
  return (
    <div>
      <h1 className="text-center my-4">{counter}</h1>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn w-64 bg-purple-600 text-white rounded-2xl"
        >
          increment
        </button>

        <button
          onClick={() => setCounter(0)}
          className="btn w-64 bg-red-700 text-white rounded-2xl"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default UseStateExam;
