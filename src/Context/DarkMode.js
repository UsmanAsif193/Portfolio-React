import React, { useState, useContext, createContext, useEffect } from "react";

const DarkModeContext = createContext();

const SetDarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const useSetDarkMode = () => {
  return useContext(SetDarkModeContext);
};

const DarkMode = ({ children }) => {
  const [darkMode, setdarkMode] = useState();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  }, []);
  return (
    <DarkModeContext.Provider value={darkMode}>
      <SetDarkModeContext.Provider value={setdarkMode}>
        {children}
      </SetDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};

export default DarkMode;
