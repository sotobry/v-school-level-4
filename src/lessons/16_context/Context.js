import { useContext } from 'react';
import './styles.css';
import Header from './Header';
import Button from './Button';

import { ThemeContext } from './themeContext';

const Context = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <Header />
      <Button isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* <Button /> */}
    </div>
  );
};

export default Context;