import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const ReactRouter = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

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
        <Route path='/about'><About /></Route>
      </Switch>
    </div>
  );
};
export default ReactRouter;