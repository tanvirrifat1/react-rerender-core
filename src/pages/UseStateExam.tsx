import { useState } from "react";

const UseStateExam = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-center my-4">{counter}</h1>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="btn w-64 bg-purple-600 text-white rounded-2xl"
        >
          increment
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="btn w-64 bg-purple-600 text-white rounded-2xl"
        >
          decrement
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
