import { createContext, useState } from 'react';

const ThemeContext = createContext();
const { Provider } = ThemeContext;

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkModeTo] = useState(false);

  const toggleDarkMode = () => setIsDarkModeTo(isDarkMode => !isDarkMode);

  return (
    <Provider
      value={{ isDarkMode, toggleDarkMode }}
    >{children}</Provider>
  );
};

export { ThemeContext, ThemeContextProvider };