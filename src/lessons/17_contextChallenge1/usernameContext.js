import React from 'react';

const UsernameContext = React.createContext();

class UsernameContextProvider extends React.Component {
  state = { username: 'potato' };

  setUsernameTo = username => this.setState({ username });

  render = () => {
    const { props, state, setUsernameTo } = this;
    const { children } = props;
    const { username } = state;
    return (
      <UsernameContext.Provider value={{ username, setUsernameTo }}>{children}</UsernameContext.Provider>
    );
  };
};

export { UsernameContext, UsernameContextProvider };