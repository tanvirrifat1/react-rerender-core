import React, { useState } from "react";

const UseStateExam = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
    console.log(user);
  };

  return (
    <div className="flex justify-center text-black">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="border border-black text-black"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
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
