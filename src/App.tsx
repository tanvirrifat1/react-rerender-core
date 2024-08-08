import { useState } from "react";
import UseStateExam from "./pages/UseStateExam";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex justify-center my-48 items-center text-2xl">
      <UseStateExam counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;
