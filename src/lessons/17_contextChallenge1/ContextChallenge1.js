import React from 'react';
import UsernameContext from './usernameContext';
import Header from './Header';

export default class ContextChallenge1 extends React.Component {
  static contextType = UsernameContext;
  render = () => {
    const username = this.context;
    return (
      <div>
        <Header />
        <main>
          <p>No new notifications, {username}! 🎉</p>
        </main>
      </div>
    );
  };
};