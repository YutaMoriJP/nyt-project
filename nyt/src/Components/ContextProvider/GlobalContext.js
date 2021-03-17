import React, { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

export const useGlobalContext = () => useContext(ContextProvider);

const GlobalContext = ({ children }) => {
  const [isDark, setIsThemeDark] = useState(true);
  const toggleTheme = () => setIsThemeDark(prevIsDark => !prevIsDark);
  return (
    <ContextProvider.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default GlobalContext;
