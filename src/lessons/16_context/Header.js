import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <header className={`${isDarkMode ?
      'dark' : 'light'}-theme`}>
      <h2>{isDarkMode ? 'Dark' : 'Light'} theme</h2>
    </header>
  );
};


export default Header;