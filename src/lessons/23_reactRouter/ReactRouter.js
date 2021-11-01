import { Switch, Route } from 'react-router-dom';
// import About from './pages/About';
import Header from './Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Info from './pages/profile/Info';
import Settings from './pages/profile/Settings';
import Footer from './Footer';

const ReactRouter = () => {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path='/' render={() => {
          return (<h1>Home page!</h1>);
        }} />
        <Route path='/about' render={() => {
          return (<h1>About page!</h1>);
        }} /> */}

        {/* <Route exact path='/' component={Home} />
        <Route path='/about' component={About} /> */}

        <Route exact path='/'><Home /></Route>
        <Route exact path='/profile'><Profile /></Route>
        <Route path='/profile/info'>
          <Info />
        </Route>
        <Route path='/profile/settings'>
          <Settings />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default ReactRouter;