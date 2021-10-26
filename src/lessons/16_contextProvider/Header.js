import React from 'react';
import ThemeContext from './themeContext';

export default class Header extends React.Component {
  static contextType = ThemeContext;
  render = () => {
    const isDarkMode = this.context;
    return (
      <header className={`${isDarkMode ?
        'dark' : 'light'}-theme`}>
        <h2>{isDarkMode ? 'Dark' : 'Light'} theme</h2>
      </header>
    );
  };
};
