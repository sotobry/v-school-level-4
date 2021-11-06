import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Main = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => toggleDarkMode();

  return (
    <main className={`${isDarkMode && 'darkMode'}`}>
      <h1>Click the button to toggle to {isDarkMode ? 'light' : 'dark'} mode!</h1>
      <button onClick={handleClick}>Toggle DarkMode</button>
    </main>
  );
};

export default Main;