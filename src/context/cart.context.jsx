import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  toogleIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = { isCartOpen, toogleIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
