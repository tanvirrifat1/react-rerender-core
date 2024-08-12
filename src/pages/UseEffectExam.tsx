import React, { useEffect, useState } from "react";

const UseEffectExam = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-outline my-5"
      >
        {hidden ? "show" : "hide"}
      </button>
      {!hidden && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1 className="border border-yellow-800 p-8">{count}</h1>;
};

export default UseEffectExam;
