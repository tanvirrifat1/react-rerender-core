import { useContext } from "react";
import UseRefExam from "./pages/UseRefExam";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen w-full flex justify-center items-center  ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <button onClick={() => setDark(!dark)} className="btn btn-primary">
        toggle
      </button>
      {/* <UseRefExam /> */}
    </div>
  );
};

export default App;
