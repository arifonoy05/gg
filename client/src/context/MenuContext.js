import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [menu, setMenu] = useState([]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};
