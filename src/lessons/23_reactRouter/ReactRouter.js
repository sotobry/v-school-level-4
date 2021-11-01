import { Switch, Route } from 'react-router-dom';
// import About from './pages/About';
import Header from './Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Info from './pages/profile/Info';
// import Settings from './pages/profile/Settings';
import Footer from './Footer';
// import ServicesList from './pages/services/ServicesList';
// import ServiceDetail from './pages/services/ServiceDetail';

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
        <Route path='/profile'><Profile /></Route>
        {/* <Route path='/profile/info'>
          <Info />
        </Route>
        <Route path='/profile/settings'>
          <Settings />
        </Route> */}
        {/* <Route exact path='/services'>
          <ServicesList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServiceDetail />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
};
export default ReactRouter;