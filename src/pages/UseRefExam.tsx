import React, { useEffect, useRef } from "react";
import CustomInput from "../component/CustomInput";

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
        <CustomInput ref={myRef} className="border border-blue-600" />
        <button className="btn btn-outline my-3">submit</button>
      </form>
    </div>
  );
};

export default UseRefExam;
