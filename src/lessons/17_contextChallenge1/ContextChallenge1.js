import UsernameContext from './usernameContext';
import Header from './Header';

const ContextChallenge1 = () =>
  <div>
    <Header />
    <main>
      <UsernameContext.Consumer>{
        username =>
          <p>No new notifications, {username}! 🎉</p>
      }</UsernameContext.Consumer>
    </main>
  </div>;

export default ContextChallenge1;