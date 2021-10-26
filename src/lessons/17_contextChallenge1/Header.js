import UsernameContext from './usernameContext';

const Header = () =>
  <UsernameContext.Consumer>{
    username =>
      <header>
        <p>Welcome, {username}!</p>
      </header>
  }</UsernameContext.Consumer>;

export default Header