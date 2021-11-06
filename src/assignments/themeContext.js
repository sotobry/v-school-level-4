import { createContext, useState } from 'react';

const ThemeContext = createContext();
const { Provider } = ThemeContext;

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkModeTo] = useState(false);
  const toggleDarkMode = () => setDarkModeTo(isDarkMode => !isDarkMode);
  return (
    <Provider value={{ isDarkMode, toggleDarkMode }}>{children}</Provider>
  );
};

export { ThemeContext, ThemeContextProvider };