import React from 'react';
import ThemeContext from './themeContext';

export default class Button extends React.Component {
  static contextType = ThemeContext;
  render = () => {
    const isDarkMode = this.context;
    console.log({ isDarkMode });
    return (
      <button className={`${isDarkMode ?
        'dark' : 'light'}-theme`}>Switch Theme</button >
    );

  };
};