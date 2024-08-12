import React, { useRef, useState } from "react";

const UseRefExam = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={() => increment()} className="btn btn-secondary">
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExam;
