
import React, { createContext, useState } from 'react';

const ThemeContextProvider = ({ children }) => {

  const ThemeContext = createContext();
  const { Provider } = ThemeContext;
  const [isDarkMode, setIsDarkModeTo] = useState(false);

  const toggleDarkMode = () => setIsDarkModeTo(isDarkMode => !isDarkMode);

  return (
    <Provider
      value={{ isDarkMode, toggleDarkMode }}
    >{children}</Provider>
  );
};

export { ThemeContext, ThemeContextProvider };