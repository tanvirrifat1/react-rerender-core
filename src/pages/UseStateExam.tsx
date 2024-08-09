import React, { useState } from "react";

const UseStateExam = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex justify-center text-black">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2">
          <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            name="name"
            id="name"
            className="border border-black text-black"
          />
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            name="email"
            id="email"
            className="border border-black text-black"
          />
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            className="border border-black text-black"
          />
        </div>

        <div className="flex justify-center my-12">
          <button type="submit" className="btn bg-teal-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UseStateExam;
