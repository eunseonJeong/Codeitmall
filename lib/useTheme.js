import React, { createContext, useContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext 안에서 사용해야함!");
  }
  return themeContext;
};