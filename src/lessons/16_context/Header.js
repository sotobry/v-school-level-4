import React from 'react';
import ThemeContext from './themeContext';

const Header = () =>
  <ThemeContext.Consumer>{
    isDarkMode =>
      <header className={`${isDarkMode ?
        'dark' : 'light'}-theme`}>
        <h2>{isDarkMode ? 'Dark' : 'Light'} theme</h2>
      </header>
  }</ThemeContext.Consumer>;

export default Header;