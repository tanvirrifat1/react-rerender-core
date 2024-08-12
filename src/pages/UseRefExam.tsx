import React, { useEffect, useRef } from "react";

const UseRefExam = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          className="border border-primary"
          type="text"
          name="name"
          id="name"
        />
      </form>
    </div>
  );
};

export default UseRefExam;
