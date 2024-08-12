import React, { useEffect, useState } from "react";

const UseEffectExam = () => {
  const [hidden, setHidden] = useState(false);

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("render");
  }, [user]);

  return (
    <div>
      {/* <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-outline my-5"
      >
        {hidden ? "show" : "hide"}
      </button>
      {!hidden && <Todo />} */}
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-primary"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-primary"
      />
      <div className="flex justify-center mt-6">
        <button type="submit" className="btn btn-secondary">
          submit
        </button>
      </div>
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

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((data) => alert(data.title));
    return () => {
      controller.abort();
    };
  }, []);
  return <h1 className="border border-primary p-10"></h1>;
};

export default UseEffectExam;
