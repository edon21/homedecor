import { createContext } from "react";

export const CartContext = createContext(
    {
         setOpenCartPanel: () => {},
  openAlertBox: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
    }
);