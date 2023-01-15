import React, { createContext, useState } from "react";
import { darkMode } from "../configJS/config.js";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(darkMode);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode: setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
