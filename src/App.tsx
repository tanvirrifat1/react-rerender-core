import { useContext } from "react";
import { ThemeContext, TThemContext } from "./context/ThemeProvider";
import Select from "./component/Select";

const App = () => {
  const { dark, setDark } = useContext(ThemeContext) as TThemContext;

  return (
    <div
      className={`h-screen w-full flex justify-center items-center  ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <button onClick={() => setDark(!dark)} className="btn btn-primary">
        toggle
      </button> */}
      <Select>
        <Select.SelectOption value={"option1"}>Option1</Select.SelectOption>
        <Select.SelectOption value={"option2"}>Option2</Select.SelectOption>
        <Select.SelectOption value={"option3"}>Option3</Select.SelectOption>
        <Select.SelectOption value={"option4"}>Option4</Select.SelectOption>
      </Select>
    </div>
  );
};

export default App;
