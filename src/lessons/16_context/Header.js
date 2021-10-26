import React from 'react';
import { ThemeContextConsumer } from './themeContext';

const Header = () =>
  <ThemeContextConsumer>{
    ({ isDarkMode }) =>
      <header className={`${isDarkMode ?
        'dark' : 'light'}-theme`}>
        <h2>{isDarkMode ? 'Dark' : 'Light'} theme</h2>
      </header>
  }</ThemeContextConsumer>;

export default Header;