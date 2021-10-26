import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isDarkMode }) =>
  <button className={`${isDarkMode ?
    'dark' : 'light'}-theme`}>
    Switch Theme
  </button>;

Button.propTypes = {
  isDarkMode: PropTypes.bool
};
Button.defaultProps = {
  isDarkMode: false
};
export default Button;