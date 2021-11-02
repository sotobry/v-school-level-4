import { useState } from 'react';
import {
  Link, Switch, Route,
  Redirect
} from 'react-router-dom';
// import About from './pages/About';
// import Header from './Header';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Info from './pages/profile/Info';
// import Settings from './pages/profile/Settings';
// import Footer from './Footer';
// import ServicesList from './pages/services/ServicesList';
// import ServiceDetail from './pages/services/ServiceDetail';

const ReactRouter = () => {
  const [isLoggedIn, setIsLoggedInTo] = useState(false);
  return (
    <div>
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <Route exact path='/' render={() => {
          return (<h1>Home page!</h1>);
        }} />
        <Route path='/about' render={() => {
          return (<h1>About page!</h1>);
        }} /> */}

      {/* <Route exact path='/' component={Home} />
        <Route path='/about' component={About} /> */}

      {/* <Route exact path='/'><Home /></Route> */}
      {/* <Route path='/profile'><Profile /></Route> */}
      {/* <Route path='/profile/info'>
          <Info />
        </Route>
        <Route path='/profile/settings'>
          <Settings />
        </Route> */}
      {/* <Route exact path='/services'> */}
      {/* <ServicesList /> */}
      {/* </Route> */}
      {/* <Route path='/services/:serviceId'> */}
      {/* <ServiceDetail /> */}
      {/* </Route> */}
      {/* </Switch> */}
      {/* <Footer /> */}
      <Link to='/'>Home</Link>
      <Link to='/private'>Private</Link>

      <Switch>
        <Route exact path='/'>
          <h1>Home page, anyone is allowed here.</h1>
        </Route>
        <Route path='/private'>
          {isLoggedIn ?
            <h1>Protected page, must be logged in to be here.</h1> :
            <Redirect to='/login' />
          }
        </Route>
        <Route path='/login'>
          <h1>Log in page.</h1>
          <button onClick={() => setIsLoggedInTo(true)}>Press to log in.</button>
        </Route>
      </Switch>
    </div>
  );
};
export default ReactRouter;