import { createContext, ReactNode, useContext } from "react";

type TThemProvider = {
  children: ReactNode;
};

const MenuContext = createContext<{ theme: string } | null>(null);

export const MenuList = ({ children }: TThemProvider) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <ul> {children} </ul>
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("MenuItem must be used within a MenuList");
  }

  const { theme } = menuContext;
  console.log(theme);
  return <div>Menu Item</div>;
};
