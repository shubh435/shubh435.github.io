import React, { createContext, useState, useContext } from "react";
import { darkTheme, lightTheme } from "../Theme/Theme";

const PortfolioContext = createContext({});
// @ts-ignore
export const PortfolioContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default to light mode

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <PortfolioContext.Provider value={{ theme, toggleMode, mode }}>
      {children}
    </PortfolioContext.Provider>
  );
};
export default PortfolioContext;
export const useThemeContext = () => useContext(PortfolioContext);
