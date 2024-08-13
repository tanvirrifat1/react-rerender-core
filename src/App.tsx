import { useContext } from "react";
import UseRefExam from "./pages/UseRefExam";
import { ThemeContext, TThemContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./context/Manu";

const App = () => {
  const { dark, setDark } = useContext(ThemeContext) as TThemContext;

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

      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  );
};

export default App;
