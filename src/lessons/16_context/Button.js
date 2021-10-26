import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isDarkMode, toggleDarkMode }) =>
  <button
    className={`${isDarkMode ?
      'dark' : 'light'}-theme`}
    onClick={toggleDarkMode}
  >
    Switch Theme
  </button>;

Button.propTypes = {
  isDarkMode: PropTypes.bool
};
Button.defaultProps = {
  isDarkMode: false
};
export default Button;