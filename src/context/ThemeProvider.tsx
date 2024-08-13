import { createContext, ReactNode, useState } from "react";

type TThemProvider = {
  children: ReactNode;
};

type TThemContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<TThemContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemProvider) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
