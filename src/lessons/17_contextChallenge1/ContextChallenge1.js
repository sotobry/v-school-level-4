import { UsernameContext } from './usernameContext';
import Header from './Header';
import React from 'react';

export default class ContextChallenge1 extends React.Component {
  static contextType = UsernameContext;

  state = {
    username: ''
  };

  handleChange = ({ currentTarget: { value: username } }) => this.setState({ username });

  handleClick = () => {
    this.context.setUsernameTo(this.state.username);
    this.setState({ username: '' });
  };

  render = () => {
    const { state, handleChange } = this;
    const { username } = state;
    return (
      <div>
        <Header />
        <main>
          <UsernameContext.Consumer>{
            ({ username }) =>
              <p>No new notifications, {username}! 🎉</p>
          }</UsernameContext.Consumer>
        </main>
        <input placeholder='New username'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <button onClick={this.handleClick}>Change Username</button>
      </div>
    );
  };
};