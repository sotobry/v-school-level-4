import React from 'react';

const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

class ThemeContextProvider extends React.Component {
  state = {
    isDarkMode: false
  };

  toggleDarkMode = () => this.setState(state => ({ isDarkMode: !state.isDarkMode }));

  render = () => {
    const { props, state, toggleDarkMode } = this;
    const { children } = props;
    const { isDarkMode } = state;

    return (
      <Provider
        value={{ isDarkMode, toggleDarkMode }}
      >{children}</Provider>)
  };
};

export { ThemeContext, ThemeContextProvider };