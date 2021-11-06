import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <footer className={`${isDarkMode && 'darkMode'}`}>This is a footer.</footer>
  );
};

export default Footer;