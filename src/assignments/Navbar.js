import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <nav className={`Navbar ${isDarkMode && 'darkMode'}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;