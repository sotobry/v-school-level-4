import React from 'react';
import UsernameContext from './usernameContext';

export default class Header extends React.Component {
  static contextType = UsernameContext;

  render = () => {
    const username = this.context;
    return (
      <header>
        <p>Welcome, {username}!</p>
      </header>
    );
  };
};